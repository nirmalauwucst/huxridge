import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Icon, type IconName } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { industries, services } from "@/lib/site";
import { mockIndustries, mockServices, mockTestimonials } from "@/lib/mock-data";
import { AlertCircle, CheckCircle2, Star } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = mockIndustries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.title} | Huxridge Accountants`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = mockIndustries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const siteIndustry = industries.find((i) => i.slug === slug);
  const title = industry.title;

  const relatedServices = industry.relatedServiceSlugs
    .map((rs) => mockServices.find((s) => s.slug === rs))
    .filter(Boolean) as (typeof mockServices)[number][];

  const industryTestimonials = mockTestimonials.slice(0, 2);

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-muted border-border border-b py-3">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: siteIndustry?.title ?? title },
            ]}
          />
        </Container>
      </div>

      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <Badge variant="accent" className="mb-4">
                {siteIndustry?.title ?? title}
              </Badge>
              <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
                {title}
              </h1>
              <p className="text-accent-600 mt-3 text-xl font-medium italic">
                {industry.tagline}
              </p>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                {industry.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="primary" size="lg">
                  <Link href="/book">Book a Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Ask a Question</Link>
                </Button>
              </div>
            </div>
            <div className="bg-accent-50 hidden h-72 rounded-2xl lg:block" aria-hidden="true" />
          </div>
        </Container>
      </Section>

      {/* ── Challenges ── */}
      <Section background="muted">
        <Container>
          <SectionHeading
            eyebrow="Your Challenges"
            title="The Financial Pressures You Face"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {industry.challenges.map((challenge) => (
              <li key={challenge} className="bg-background flex items-start gap-3 rounded-xl p-5 shadow-card">
                <AlertCircle className="text-accent-600 mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="text-primary-800 text-sm leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── How We Help ── */}
      <Section background="default">
        <Container>
          <SectionHeading
            eyebrow="Our Solution"
            title="How Huxridge Helps"
          />
          <ul className="mt-8 space-y-4">
            {industry.howWeHelp.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent-600 mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="text-primary-800 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Related Services ── */}
      <Section background="muted">
        <Container>
          <SectionHeading eyebrow="Services" title="Relevant Services for You" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((rs) => {
              const rsSite = services.find((s) => s.slug === rs.slug);
              return (
                <Card key={rs.slug} variant="outline" className="transition-all hover:border-primary-300 hover:shadow-card">
                  <CardHeader>
                    <div className="bg-primary-50 mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                      <Icon name={rs.slug as IconName} size={20} className="text-primary-700" />
                    </div>
                    <CardTitle className="text-base">{rsSite?.title ?? rs.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="text-sm">{rs.tagline}</CardDescription>
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

      {/* ── Testimonials ── */}
      <Section background="default">
        <Container>
          <SectionHeading eyebrow="Client Feedback" title="What Our Clients Say" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {industryTestimonials.map((t) => (
              <Card key={t.id} variant="elevated">
                <div className="flex gap-0.5 text-accent-500" aria-label={`${t.rating} stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-primary-800 mt-3 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 border-t pt-3">
                  <p className="text-primary-900 text-sm font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.company}</p>
                </footer>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── FAQ ── */}
      <Section background="muted">
        <Container size="narrow">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-8">
            <Accordion items={[...industry.faqs]} type="single" />
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <CTABanner
        title={`Specialist Accountants for ${siteIndustry?.title ?? title}`}
        subtitle="Book a free consultation with our sector specialist and see what better accountancy looks like."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
        secondary={{ label: "View All Industries", href: "/industries" }}
      />
    </>
  );
}
