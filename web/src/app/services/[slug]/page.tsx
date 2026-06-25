import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Icon, type IconName } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/site";
import { mockServices, mockTestimonials } from "@/lib/mock-data";
import { JsonLd } from "@/components/ui/json-ld";
import {
  buildServiceJsonLd,
  buildFaqPageJsonLd,
  buildBreadcrumbList,
} from "@/lib/jsonld";
import { CheckCircle2, Star, Users } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = mockServices.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  const siteService = services.find((s) => s.slug === slug);
  const title = `${siteService?.title ?? service.title} | Huxridge Accountants`;
  return {
    title,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description: service.description,
      url: `/services/${slug}`,
    },
    twitter: {
      title,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = mockServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const siteService = services.find((s) => s.slug === slug);
  const title = siteService?.title ?? service.title;

  const relatedServices = service.relatedSlugs
    .map((rs) => mockServices.find((s) => s.slug === rs))
    .filter(Boolean) as (typeof mockServices)[number][];

  const testimonials = mockTestimonials.slice(0, 2);

  return (
    <>
      <JsonLd
        data={buildServiceJsonLd({
          title,
          description: service.description,
          slug,
        })}
      />
      <JsonLd data={buildFaqPageJsonLd(service.faqs)} />
      <JsonLd
        data={buildBreadcrumbList([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: title },
        ])}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-muted border-border border-b py-3">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: title },
            ]}
          />
        </Container>
      </div>

      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <Badge variant="default" className="mb-4">
                Service
              </Badge>
              <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
                {title}
              </h1>
              <p className="text-accent-600 mt-3 text-xl font-medium italic">
                {service.tagline}
              </p>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="primary" size="lg">
                  <Link href="/book">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Ask a Question</Link>
                </Button>
              </div>
            </div>
            <div
              className="bg-primary-50 hidden h-72 rounded-2xl lg:block"
              aria-hidden="true"
            />
          </div>
        </Container>
      </Section>

      {/* ── What's Included ── */}
      <Section background="muted">
        <Container>
          <SectionHeading eyebrow="What's Included" title="Service Features" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="bg-background shadow-card flex items-start gap-3 rounded-lg p-4"
              >
                <CheckCircle2
                  className="text-accent-600 mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-primary-800 text-sm font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Who It's For ── */}
      <Section background="default">
        <Container size="narrow">
          <div className="bg-primary-50 border-primary-100 rounded-2xl border p-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary-900 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                <Users className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-primary-900 text-xl font-semibold">
                  Who This Service Is For
                </h2>
                <p className="text-primary-700 mt-2 leading-relaxed">
                  {service.targetClients}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Benefits ── */}
      <Section background="muted">
        <Container>
          <SectionHeading
            eyebrow="Key Benefits"
            title="What You Gain"
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-background shadow-card rounded-xl p-6 text-center"
              >
                <div className="bg-accent-100 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <Icon
                    name={slug as IconName}
                    size={22}
                    className="text-accent-700"
                  />
                </div>
                <h3 className="text-primary-900 font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Testimonials ── */}
      <Section background="default">
        <Container>
          <SectionHeading
            eyebrow="Client Feedback"
            title="What Our Clients Say"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <Card key={t.id} variant="elevated">
                <div
                  className="text-accent-500 flex gap-0.5"
                  aria-label={`${t.rating} stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-primary-800 mt-3 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 border-t pt-3">
                  <p className="text-primary-900 text-sm font-semibold">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{t.company}</p>
                </footer>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Related Services ── */}
      {relatedServices.length > 0 && (
        <Section background="muted">
          <Container>
            <SectionHeading eyebrow="Related" title="You May Also Need" />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {relatedServices.map((rs) => {
                const rsSite = services.find((s) => s.slug === rs.slug);
                return (
                  <Card
                    key={rs.slug}
                    variant="outline"
                    className="hover:border-primary-300 hover:shadow-card transition-all"
                  >
                    <CardHeader>
                      <div className="bg-primary-50 mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                        <Icon
                          name={rs.slug as IconName}
                          size={20}
                          className="text-primary-700"
                        />
                      </div>
                      <CardTitle className="text-lg">
                        {rsSite?.title ?? rs.title}
                      </CardTitle>
                    </CardHeader>
                    <CardDescription>{rs.tagline}</CardDescription>
                    <div className="mt-4">
                      <Link
                        href={`/services/${rs.slug}`}
                        className="text-primary-700 text-sm font-medium hover:underline"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* ── FAQ ── */}
      <Section background="default">
        <Container size="narrow">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-8">
            <Accordion items={[...service.faqs]} type="single" />
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <CTABanner
        title={`Ready to Get Started with ${title}?`}
        subtitle="Book a free consultation and we will explain exactly how we can help you."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
        secondary={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
