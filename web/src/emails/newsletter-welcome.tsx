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

type Props = { name?: string; confirmUrl: string };

export function NewsletterWelcomeEmail({ name, confirmUrl }: Props) {
  const greeting = name ? `Hi ${name},` : "Hi there,";

  return (
    <Html>
      <Head />
      <Preview>Please confirm your subscription to Huxridge Insights</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Confirm Your Subscription</Heading>
          <Text style={body}>
            {greeting} thank you for signing up to Huxridge Insights — tax tips, deadline reminders, and regulatory updates from our team.
          </Text>
          <Text style={body}>
            Please confirm your email address by clicking the button below. This link expires in 24 hours.
          </Text>
          <Button href={confirmUrl} style={button}>
            Confirm My Subscription
          </Button>
          <Hr style={hr} />
          <Text style={small}>
            If you did not sign up for this newsletter, you can safely ignore this email.
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
const hr: React.CSSProperties = { borderColor: "#e5e7eb", margin: "20px 0" };
const button: React.CSSProperties = {
  backgroundColor: "#c9973a",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  fontWeight: "600",
  display: "inline-block",
};
const small: React.CSSProperties = { color: "#9ca3af", fontSize: "12px" };
const footer: React.CSSProperties = { color: "#9ca3af", fontSize: "12px", textAlign: "center" as const };

export default NewsletterWelcomeEmail;
