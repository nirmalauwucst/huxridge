import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { CTABanner } from "@/components/ui/cta-banner";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";
import { mockServices } from "@/lib/mock-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Huxridge Accountants & Tax Consultants",
  description:
    "Explore Huxridge's full range of accountancy and tax services — bookkeeping, management accounts, corporation tax, Making Tax Digital, VAT, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            Services
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Every Accountancy Service Your Business Needs
          </h1>
          <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
            From day-to-day bookkeeping and VAT returns to complex tax planning and Making Tax Digital compliance — our team has the expertise to handle it all, at a transparent fixed monthly fee.
          </p>
        </Container>
      </Section>

      {/* ── Services Grid ── */}
      <Section background="muted">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockServices.map((service) => {
              const s = services.find((sv) => sv.slug === service.slug);
              return (
                <Card key={service.slug} variant="default" className="flex flex-col transition-all hover:shadow-elevated">
                  <CardHeader>
                    <div className="bg-primary-50 mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                      <Icon name={service.slug as IconName} size={24} className="text-primary-700" />
                    </div>
                    <CardTitle>{s?.title ?? service.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="flex-1">{service.description}</CardDescription>
                  <CardFooter className="mt-4">
                    <Button asChild variant="ghost" size="sm" className="p-0">
                      <Link href={`/services/${service.slug}`}>
                        Learn more →
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Not Sure Which Service You Need?"
        subtitle="Book a free initial consultation and we will assess your situation and recommend the most appropriate combination of services for your business."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
      />
    </>
  );
}
