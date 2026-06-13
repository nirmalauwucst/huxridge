import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { BookingConfirmationEmail } from "@/emails/booking-confirmation";
import { site } from "@/lib/site";

type CalcomPayload = {
  triggerEvent: string;
  payload: {
    uid: string;
    title?: string;
    attendees?: Array<{ name: string; email: string }>;
    startTime?: string;
    endTime?: string;
    videoCallData?: { url?: string };
  };
};

export async function POST(request: NextRequest) {
  // Verify secret
  const secret = process.env.CALCOM_WEBHOOK_SECRET;
  if (secret) {
    const signature = request.headers.get("x-cal-signature-256");
    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 401 });
    }
    // Signature verification via HMAC
    const body = await request.text();
    const { createHmac } = await import("node:crypto");
    const expected = createHmac("sha256", secret).update(body).digest("hex");
    if (signature !== expected) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const data = JSON.parse(body) as CalcomPayload;
    return handleEvent(data, request);
  }

  const data = (await request.json()) as CalcomPayload;
  return handleEvent(data, request);
}

async function handleEvent(data: CalcomPayload, _request: NextRequest) {
  if (data.triggerEvent !== "BOOKING_CREATED" && data.triggerEvent !== "BOOKING_CONFIRMED") {
    return NextResponse.json({ received: true });
  }

  const attendee = data.payload.attendees?.[0];
  if (!attendee) return NextResponse.json({ received: true });

  // Store in DB
  try {
    await db.bookingEvent.upsert({
      where: { calEventId: data.payload.uid },
      update: { status: "confirmed" },
      create: {
        calEventId: data.payload.uid,
        name: attendee.name,
        email: attendee.email,
        startTime: data.payload.startTime ? new Date(data.payload.startTime) : undefined,
        endTime: data.payload.endTime ? new Date(data.payload.endTime) : undefined,
        metadata: data.payload as unknown as Parameters<typeof db.bookingEvent.create>[0]["data"]["metadata"],
      },
    });
  } catch (err) {
    console.error("[Calcom webhook] DB error:", err);
  }

  // Send confirmation emails
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey && data.payload.startTime) {
    const resend = new Resend(resendKey);
    const startTime = new Date(data.payload.startTime).toLocaleString("en-GB", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Europe/London",
    });
    const meetingLink = data.payload.videoCallData?.url;

    const confirmationHtml = await render(
      BookingConfirmationEmail({
        name: attendee.name,
        startTime,
        serviceName: data.payload.title,
        meetingLink,
      }),
    );

    const notificationHtml = `<p>New booking confirmed:</p>
<ul>
<li><strong>Name:</strong> ${attendee.name}</li>
<li><strong>Email:</strong> ${attendee.email}</li>
<li><strong>Time:</strong> ${startTime}</li>
</ul>`;

    await Promise.allSettled([
      resend.emails.send({
        from: `Huxridge Accountants <noreply@${site.emailDomain}>`,
        to: [attendee.email],
        subject: "Your consultation with Huxridge is confirmed",
        html: confirmationHtml,
      }),
      resend.emails.send({
        from: `Huxridge Website <noreply@${site.emailDomain}>`,
        to: [site.contact.email],
        subject: `New booking: ${attendee.name} — ${startTime}`,
        html: notificationHtml,
      }),
    ]);
  }

  return NextResponse.json({ received: true });
}
