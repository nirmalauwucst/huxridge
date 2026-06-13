import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

type Props = { name: string; phone: string; email: string };

export function EnquiryConfirmationEmail({ name, phone, email }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for getting in touch, {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Thank You for Your Enquiry</Heading>
          <Text style={body}>
            Hi {name}, thank you for reaching out to Huxridge Accountants &amp; Tax Consultants. We have received your message and will be in touch within one business day.
          </Text>
          <Text style={body}>
            In the meantime, feel free to call or email us directly:
          </Text>
          <Text style={contact}>
            Phone: {phone}<br />
            Email: {email}
          </Text>
          <Hr style={hr} />
          <Button href="https://huxridge.co.uk/book" style={button}>
            Book a Free Consultation
          </Button>
          <Hr style={hr} />
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
const contact: React.CSSProperties = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.8",
  backgroundColor: "#f3f4f6",
  padding: "12px 16px",
  borderRadius: "6px",
};
const hr: React.CSSProperties = { borderColor: "#e5e7eb", margin: "20px 0" };
const button: React.CSSProperties = {
  backgroundColor: "#c9973a",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  fontWeight: "600",
  display: "inline-block",
};
const footer: React.CSSProperties = { color: "#9ca3af", fontSize: "12px", textAlign: "center" as const };

export default EnquiryConfirmationEmail;
