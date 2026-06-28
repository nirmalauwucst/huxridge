import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { CTABanner } from "@/components/ui/cta-banner";
import { JsonLd } from "@/components/ui/json-ld";
import { buildBreadcrumbList } from "@/lib/jsonld";
import { ResourcesFilter } from "./resources-filter";
import type { Metadata } from "next";

const title =
  "Free Guides & Tax Calculators | Huxridge Accountants & Tax Consultants";
const description =
  "Free guides, tax calculators, and reference articles on UK tax, Making Tax Digital, property investment, contracting, and more — from Huxridge Accountants.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/resources" },
  openGraph: { title, description, url: "/resources" },
  twitter: { title, description },
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { label: "Home", href: "/" },
          { label: "Resources" },
        ])}
      />

      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            Resources
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Free Guides &amp; Tax Calculators
          </h1>
          <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
            Practical guides, tax calculators, and reference articles to help UK
            business owners, landlords, and contractors navigate tax and
            accountancy with confidence.
          </p>
        </Container>
      </Section>

      <ResourcesFilter />

      <CTABanner
        title="Need Personalised Advice?"
        subtitle="Our resources cover the basics. For advice specific to your situation, book a free consultation."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
      />
    </>
  );
}
