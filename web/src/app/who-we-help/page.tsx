import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { CTABanner } from "@/components/ui/cta-banner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icon";
import { JsonLd } from "@/components/ui/json-ld";
import { buildBreadcrumbList } from "@/lib/jsonld";
import { industries } from "@/lib/site";
import { mockIndustries } from "@/lib/mock-data";
import type { Metadata } from "next";

const title = "Industries We Serve | Huxridge Accountants & Tax Consultants";
const description =
  "Specialist accountancy for healthcare professionals, landlords & property investors, contractors & freelancers, and start-ups & new businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/who-we-help" },
  openGraph: { title, description, url: "/who-we-help" },
  twitter: { title, description },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { label: "Home", href: "/" },
          { label: "Who We Help" },
        ])}
      />

      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            Who We Help
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Built for your profession, not just your accounts
          </h1>
          <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
            Every industry has its own tax rules, regulatory requirements, and
            financial challenges. Generic accountancy often misses the details
            that matter most. We have built dedicated expertise in four key
            sectors so that our clients always receive advice that is genuinely
            relevant to them.
          </p>
        </Container>
      </Section>

      {/* ── Industries Grid ── */}
      <Section background="muted">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            {mockIndustries.map((industry) => {
              const ind = industries.find((i) => i.slug === industry.slug);
              return (
                <Card
                  key={industry.slug}
                  variant="default"
                  className="hover:shadow-elevated flex flex-col transition-all"
                >
                  <CardHeader>
                    <div className="bg-accent-50 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl">
                      <Icon
                        name={industry.slug as IconName}
                        size={28}
                        className="text-accent-700"
                      />
                    </div>
                    <CardTitle className="text-xl">
                      {ind?.title ?? industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="flex-1 text-base">
                    {industry.tagline}
                  </CardDescription>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                  <CardFooter className="mt-6">
                    <Link
                      href={`/who-we-help/${industry.slug}`}
                      className="text-primary-700 text-sm font-medium hover:underline"
                    >
                      Learn more about our {ind?.title ?? industry.title}{" "}
                      service →
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Speak to a Sector Specialist"
        subtitle="Book a free consultation with the team member who knows your industry best."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
