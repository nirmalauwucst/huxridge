import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockTestimonials } from "@/lib/mock-data";
import { Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Huxridge Accountants & Tax Consultants",
  description:
    "Read what our clients say about working with Huxridge — from healthcare professionals and landlords to contractors and start-ups.",
};

const variantMap: Record<
  string,
  "default" | "accent" | "muted" | "outline" | "success"
> = {
  Healthcare: "success",
  Landlords: "default",
  Contractors: "accent",
  "Start-Up": "muted",
  SME: "outline",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Trusted by Businesses Across the UK
          </h1>
          <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
            Do not just take our word for it. Here is what our clients — from
            dental practices and landlords to IT contractors and new businesses
            — have to say about working with Huxridge.
          </p>
        </Container>
      </Section>

      {/* ── Rating Summary ── */}
      <Section background="primary" padding="sm">
        <Container>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-accent-300 flex gap-1" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-7 w-7 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-2xl font-semibold text-white">5.0 out of 5</p>
            <p className="text-primary-200 text-sm">Based on client reviews</p>
          </div>
        </Container>
      </Section>

      {/* ── All Testimonials ── */}
      <Section background="muted">
        <Container>
          <SectionHeading
            eyebrow="All Reviews"
            title="What Our Clients Say"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockTestimonials.map((t) => (
              <Card key={t.id} variant="elevated" className="flex flex-col">
                <div className="flex items-center justify-between">
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
                  <Badge variant={variantMap[t.industry] ?? "muted"}>
                    {t.industry}
                  </Badge>
                </div>
                <blockquote className="text-primary-800 mt-4 flex-1 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-5 border-t pt-4">
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

      <CTABanner
        title="Join Our Growing Client Base"
        subtitle="Book a free consultation and experience the Huxridge difference for yourself."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
        secondary={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}
