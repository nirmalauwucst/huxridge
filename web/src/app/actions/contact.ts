"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { db } from "@/lib/db";
import { contactSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { syncLeadToHubSpot } from "@/lib/hubspot";
import { EnquiryNotificationEmail } from "@/emails/enquiry-notification";
import { EnquiryConfirmationEmail } from "@/emails/enquiry-confirmation";
import { site } from "@/lib/site";

type ActionResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  const rawInput = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    serviceSlug: formData.get("service"),
    message: formData.get("message"),
    source: formData.get("source"),
    turnstileToken: formData.get("cf-turnstile-response"),
  };

  // Validate
  const parsed = contactSchema.safeParse(rawInput);
  if (!parsed.success) {
    return {
      success: false,
      error: "Please check the form and correct the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, serviceSlug, message, source, turnstileToken } = parsed.data;

  // Turnstile verification
  if (turnstileToken) {
    const valid = await verifyTurnstile(turnstileToken);
    if (!valid) {
      return { success: false, error: "Security check failed. Please try again." };
    }
  }

  // Rate limiting
  const headerStore = await headers();
  const ip =
    headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerStore.get("x-real-ip") ??
    "unknown";

  const { allowed } = await checkRateLimit(`contact:${ip}`);
  if (!allowed) {
    return {
      success: false,
      error: "Too many submissions. Please wait a while before trying again.",
    };
  }

  // Derive UTM params from referrer if present
  const referer = headerStore.get("referer") ?? "";
  let utmSource: string | undefined;
  let utmMedium: string | undefined;
  let utmCampaign: string | undefined;
  try {
    const url = new URL(referer);
    utmSource = url.searchParams.get("utm_source") ?? undefined;
    utmMedium = url.searchParams.get("utm_medium") ?? undefined;
    utmCampaign = url.searchParams.get("utm_campaign") ?? undefined;
  } catch {
    // non-URL referer — ignore
  }

  // Persist to DB
  let submissionId: string | undefined;
  try {
    const record = await db.contactSubmission.create({
      data: {
        name,
        email,
        phone,
        serviceSlug,
        message,
        sourcePage: "/contact",
        referrer: referer || undefined,
        utmSource,
        utmMedium,
        utmCampaign,
      },
    });
    submissionId = record.id;
  } catch (err) {
    console.error("[Contact] DB write failed:", err);
    // Don't block submission — still send emails
  }

  // Send emails via Resend
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const resend = new Resend(resendKey);

    const notificationHtml = await render(
      EnquiryNotificationEmail({
        name,
        email,
        phone,
        serviceSlug,
        message,
        source,
        sourcePage: "/contact",
      }),
    );

    const confirmationHtml = await render(
      EnquiryConfirmationEmail({ name, phone: site.contact.phone, email: site.contact.email }),
    );

    await Promise.allSettled([
      resend.emails.send({
        from: `Huxridge Website <noreply@${site.emailDomain}>`,
        to: [site.contact.email],
        subject: `New enquiry from ${name}`,
        html: notificationHtml,
        replyTo: email,
      }),
      resend.emails.send({
        from: `Huxridge Accountants <noreply@${site.emailDomain}>`,
        to: [email],
        subject: "We have received your enquiry — Huxridge Accountants",
        html: confirmationHtml,
      }),
    ]);
  }

  // Sync to HubSpot (best-effort)
  const hubspotId = await syncLeadToHubSpot({
    email,
    firstname: name,
    phone,
    service_interest: serviceSlug,
    hs_lead_status: "NEW",
    lead_source: "Website Enquiry",
    source_page: "/contact",
  });

  if (hubspotId && submissionId) {
    await db.contactSubmission
      .update({
        where: { id: submissionId },
        data: { syncedToCrm: true, hubspotId },
      })
      .catch(() => {});
  }

  return { success: true };
}
