import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { CTABanner } from "@/components/ui/cta-banner";
import { FaqTabs } from "@/components/faq-tabs";
import { JsonLd } from "@/components/ui/json-ld";
import { buildFaqPageJsonLd, buildBreadcrumbList } from "@/lib/jsonld";
import { mockFaqs } from "@/lib/mock-data";
import type { Metadata } from "next";

const title = "FAQ | Huxridge Accountants & Tax Consultants";
const description =
  "Answers to the most common questions about our services, pricing, Making Tax Digital, and how to get started with Huxridge.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: "/faq" },
  twitter: { title, description },
};

const allFaqs = Object.values(mockFaqs).flat();

export default function FaqPage() {
  return (
    <>
      <JsonLd data={buildFaqPageJsonLd(allFaqs)} />
      <JsonLd
        data={buildBreadcrumbList([
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ])}
      />

      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            FAQ
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
            Answers to the questions we hear most often. If you cannot find what
            you are looking for, please get in touch — we are happy to help.
          </p>
        </Container>
      </Section>

      {/* ── FAQ Tabs ── */}
      <Section background="muted">
        <Container size="narrow">
          <FaqTabs />
        </Container>
      </Section>

      <CTABanner
        title="Still Have Questions?"
        subtitle="Our team is happy to answer any questions not covered here. Get in touch — no obligation."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Book a Free Consultation", href: "/book" }}
      />
    </>
  );
}
