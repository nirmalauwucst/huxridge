"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { db } from "@/lib/db";
import { newsletterSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";
import { NewsletterWelcomeEmail } from "@/emails/newsletter-welcome";
import { site } from "@/lib/site";

type ActionResult =
  | { success: true; alreadySubscribed?: boolean }
  | { success: false; error: string };

export async function subscribeToNewsletter(formData: FormData): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
  });

  if (!parsed.success) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const { email, name } = parsed.data;

  // Rate limiting
  const headerStore = await headers();
  const ip =
    headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerStore.get("x-real-ip") ??
    "unknown";
  const { allowed } = await checkRateLimit(`newsletter:${ip}`);
  if (!allowed) {
    return { success: false, error: "Too many requests. Please try again later." };
  }

  // Check for existing subscriber
  try {
    const existing = await db.newsletterSubscriber.findUnique({ where: { email } });
    if (existing) {
      if (existing.status === "confirmed") {
        return { success: true, alreadySubscribed: true };
      }
      // Pending — resend confirmation
    } else {
      await db.newsletterSubscriber.create({
        data: { email, name, source: "footer" },
      });
    }
  } catch (err) {
    console.error("[Newsletter] DB error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  // Send double opt-in confirmation email
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const token = Buffer.from(`${email}:${Date.now()}`).toString("base64url");
    const confirmUrl = `${site.url}/api/newsletter/confirm?token=${token}`;

    const html = await render(NewsletterWelcomeEmail({ name, confirmUrl }));

    const resend = new Resend(resendKey);
    await resend.emails
      .send({
        from: `Huxridge Insights <noreply@${site.emailDomain}>`,
        to: [email],
        subject: "Please confirm your Huxridge newsletter subscription",
        html,
      })
      .catch((err: unknown) => console.error("[Newsletter] Email send failed:", err));
  }

  return { success: true };
}
