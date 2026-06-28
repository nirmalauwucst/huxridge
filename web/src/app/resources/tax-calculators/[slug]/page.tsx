import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import { Accordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { CalculatorCard } from "@/components/calculators/calculator-card";
import { CalculatorCta } from "@/components/calculators/calculator-cta";
import { buildBreadcrumbList, buildFaqPageJsonLd } from "@/lib/jsonld";
import {
  taxCalculators,
  getCalculatorBySlug,
  getRelatedCalculators,
} from "@/lib/tax-calculators";
import { mockServices } from "@/lib/mock-data";

// Calculator form components (client)
import { PersonalTaxForm } from "@/components/calculators/personal-tax-form";
import { CorporationTaxForm } from "@/components/calculators/corporation-tax-form";
import { VatForm } from "@/components/calculators/vat-form";
import { DividendTaxForm } from "@/components/calculators/dividend-tax-form";
import { SalaryVsDividendForm } from "@/components/calculators/salary-vs-dividend-form";
import { LandlordTaxForm } from "@/components/calculators/landlord-tax-form";
import { TakeHomePayForm } from "@/components/calculators/take-home-pay-form";
import { Ir35Form } from "@/components/calculators/ir35-form";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return taxCalculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const calc = getCalculatorBySlug(slug);
  if (!calc) return { title: "Calculator Not Found" };
  return {
    title: calc.seoTitle,
    description: calc.seoDescription,
    alternates: { canonical: `/resources/tax-calculators/${slug}` },
    openGraph: {
      title: calc.seoTitle,
      description: calc.seoDescription,
      url: `/resources/tax-calculators/${slug}`,
    },
    twitter: {
      title: calc.seoTitle,
      description: calc.seoDescription,
    },
  };
}

function getFormComponent(slug: string) {
  switch (slug) {
    case "personal-tax-calculator":
      return <PersonalTaxForm />;
    case "corporation-tax-calculator":
      return <CorporationTaxForm />;
    case "vat-calculator":
      return <VatForm />;
    case "dividend-tax-calculator":
      return <DividendTaxForm />;
    case "salary-vs-dividend-calculator":
      return <SalaryVsDividendForm />;
    case "landlord-tax-calculator":
      return <LandlordTaxForm />;
    case "take-home-pay-calculator":
      return <TakeHomePayForm />;
    case "ir35-calculator":
      return <Ir35Form />;
    default:
      return null;
  }
}

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params;
  const calc = getCalculatorBySlug(slug);
  if (!calc) notFound();

  const formComponent = getFormComponent(slug);
  const relatedCalculators = getRelatedCalculators(slug);
  const relatedServices = calc.relatedServices
    .map((s) => mockServices.find((ms) => ms.slug === s))
    .filter(Boolean) as (typeof mockServices)[number][];

  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Tax Calculators", href: "/resources" },
          { label: calc.title },
        ])}
      />
      {calc.faqs.length > 0 && <JsonLd data={buildFaqPageJsonLd(calc.faqs)} />}

      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Tax Calculators", href: "/resources" },
              { label: calc.title },
            ]}
            className="mb-6"
          />
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            {calc.title}
          </h1>
          <p className="text-muted-foreground mt-4 text-xl leading-relaxed">
            {calc.description}
          </p>
          <div className="mt-6">
            <Link
              href="/book"
              className="text-accent-700 hover:text-accent-800 text-sm font-medium underline-offset-4 hover:underline"
            >
              Prefer to speak to an accountant? Book a free consultation →
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── Calculator Form ── */}
      <Section background="muted" padding="sm">
        <Container>
          {formComponent ? (
            formComponent
          ) : (
            <p className="text-muted-foreground">Calculator coming soon.</p>
          )}
        </Container>
      </Section>

      {/* ── Post-calculator CTA ── */}
      <Section background="default" padding="sm">
        <Container size="narrow">
          <CalculatorCta variant="page" />
        </Container>
      </Section>

      {/* ── Related Services ── */}
      {relatedServices.length > 0 && (
        <Section background="muted" padding="sm">
          <Container>
            <SectionHeading
              eyebrow="Related Services"
              title="How we can help"
              subtitle="Our accountants provide the detailed, personalised advice that goes beyond any calculator."
              className="mb-8"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <div
                  key={service.slug}
                  className="bg-background border-border rounded-xl border p-5"
                >
                  <h3 className="text-primary-900 font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {service.tagline}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary-700 mt-3 inline-block text-sm font-medium hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── FAQs ── */}
      {calc.faqs.length > 0 && (
        <Section background="default" padding="sm">
          <Container size="narrow">
            <SectionHeading
              eyebrow="FAQs"
              title="Frequently asked questions"
              className="mb-8"
            />
            <Accordion items={calc.faqs} />
          </Container>
        </Section>
      )}

      {/* ── Related Calculators ── */}
      {relatedCalculators.length > 0 && (
        <Section background="muted" padding="sm">
          <Container>
            <SectionHeading
              eyebrow="More Tools"
              title="Related calculators"
              className="mb-8"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCalculators.map((c) => (
                <CalculatorCard key={c.slug} calculator={c} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTABanner
        title="Ready for personalised tax advice?"
        subtitle="Our calculators estimate. Our accountants advise. Book a free consultation to discuss your situation."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
