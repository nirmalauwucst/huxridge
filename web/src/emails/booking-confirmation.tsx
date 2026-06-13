import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

type Props = {
  name: string;
  startTime: string;
  serviceName?: string;
  meetingLink?: string;
};

export function BookingConfirmationEmail({ name, startTime, serviceName, meetingLink }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Your consultation with Huxridge is confirmed</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Consultation Confirmed</Heading>
          <Text style={body}>
            Hi {name}, your free initial consultation with Huxridge Accountants &amp; Tax Consultants has been confirmed.
          </Text>
          <div style={details}>
            <Text style={detailRow}>
              <strong>Date &amp; Time:</strong> {startTime}
            </Text>
            {serviceName && (
              <Text style={detailRow}>
                <strong>Topic:</strong> {serviceName}
              </Text>
            )}
            {meetingLink && (
              <Text style={detailRow}>
                <strong>Join:</strong>{" "}
                <a href={meetingLink} style={link}>
                  {meetingLink}
                </a>
              </Text>
            )}
          </div>
          <Hr style={hr} />
          <Text style={body}>
            If you need to reschedule or have any questions before the call, please reply to this email or call us directly.
          </Text>
          <Text style={footer}>
            Huxridge Accountants &amp; Tax Consultants · UK-Wide Service
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main: React.CSSProperties = { backgroundColor: "#f9fafb", fontFamily: "sans-serif" };
const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  margin: "32px auto",
  padding: "32px",
  borderRadius: "8px",
  maxWidth: "560px",
};
const heading: React.CSSProperties = { color: "#0f2546", fontSize: "22px" };
const body: React.CSSProperties = { color: "#374151", fontSize: "15px", lineHeight: "1.6" };
const details: React.CSSProperties = {
  backgroundColor: "#f3f4f6",
  padding: "16px",
  borderRadius: "6px",
  margin: "16px 0",
};
const detailRow: React.CSSProperties = { color: "#374151", fontSize: "14px", margin: "4px 0" };
const link: React.CSSProperties = { color: "#1d4ed8" };
const hr: React.CSSProperties = { borderColor: "#e5e7eb", margin: "20px 0" };
const footer: React.CSSProperties = { color: "#9ca3af", fontSize: "12px", textAlign: "center" as const };

export default BookingConfirmationEmail;
