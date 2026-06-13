import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type Props = {
  name: string;
  email: string;
  phone?: string;
  serviceSlug?: string;
  message: string;
  source?: string;
  sourcePage?: string;
};

export function EnquiryNotificationEmail({
  name,
  email,
  phone,
  serviceSlug,
  message,
  source,
  sourcePage,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New enquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Website Enquiry</Heading>
          <Text style={label}>You have received a new enquiry via the Huxridge website.</Text>
          <Hr style={hr} />
          <Section>
            <Row label="Name" value={name} />
            <Row label="Email" value={email} />
            {phone && <Row label="Phone" value={phone} />}
            {serviceSlug && <Row label="Service Interest" value={serviceSlug} />}
            {source && <Row label="How they heard" value={source} />}
            {sourcePage && <Row label="Source Page" value={sourcePage} />}
          </Section>
          <Hr style={hr} />
          <Text style={label}>Message</Text>
          <Text style={messageStyle}>{message}</Text>
          <Hr style={hr} />
          <Text style={footer}>Huxridge Accountants &amp; Tax Consultants</Text>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <Section style={row}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </Section>
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
const heading: React.CSSProperties = { color: "#0f2546", fontSize: "22px", marginBottom: "8px" };
const label: React.CSSProperties = { color: "#6b7280", fontSize: "14px", marginBottom: "16px" };
const hr: React.CSSProperties = { borderColor: "#e5e7eb", margin: "20px 0" };
const row: React.CSSProperties = { marginBottom: "8px" };
const rowLabel: React.CSSProperties = {
  color: "#6b7280",
  fontSize: "12px",
  margin: "0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};
const rowValue: React.CSSProperties = { color: "#111827", fontSize: "15px", margin: "2px 0 0" };
const messageStyle: React.CSSProperties = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
};
const footer: React.CSSProperties = { color: "#9ca3af", fontSize: "12px", textAlign: "center" as const };

export default EnquiryNotificationEmail;
