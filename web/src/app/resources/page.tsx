import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import { Card, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockResources } from "@/lib/mock-data";
import { Download, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Guides | Huxridge Accountants & Tax Consultants",
  description:
    "Free guides, checklists, and articles on UK tax, Making Tax Digital, property investment, contracting, and more — from Huxridge Accountants.",
};

const categories = [
  "All",
  "Making Tax Digital",
  "Property Tax",
  "Corporation Tax",
  "Business Structure",
  "Cloud Accounting",
  "Contractors",
];

export default function ResourcesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            Resources
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Free Guides &amp; Resources
          </h1>
          <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
            Practical guides, checklists, and reference articles to help UK business owners, landlords, and contractors navigate tax and accountancy with confidence.
          </p>
        </Container>
      </Section>

      {/* ── Category Filter (visual) ── */}
      <Section background="muted" padding="sm">
        <Container>
          <div className="flex flex-wrap gap-2" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                className={
                  cat === "All"
                    ? "rounded-full bg-primary-900 px-4 py-1.5 text-sm font-medium text-white"
                    : "border-border text-primary-700 hover:border-primary-900 hover:bg-primary-50 rounded-full border px-4 py-1.5 text-sm font-medium"
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Resources Grid ── */}
      <Section background="default">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockResources.map((resource) => (
              <Card key={resource.title} variant="default" className="flex flex-col transition-all hover:shadow-elevated">
                <div className="bg-primary-50 mb-4 flex h-36 items-center justify-center rounded-lg">
                  {resource.cta === "Download Guide" ? (
                    <Download className="text-primary-300 h-12 w-12" aria-hidden="true" />
                  ) : (
                    <FileText className="text-primary-300 h-12 w-12" aria-hidden="true" />
                  )}
                </div>
                <Badge variant="muted" className="mb-3 self-start">
                  {resource.category}
                </Badge>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription className="mt-2 flex-1">{resource.description}</CardDescription>
                <CardFooter className="mt-5">
                  <Button variant="outline" size="sm">
                    {resource.cta === "Download Guide" ? (
                      <>
                        <Download className="mr-1.5 h-4 w-4" aria-hidden="true" />
                        Download Guide
                      </>
                    ) : (
                      <>
                        <FileText className="mr-1.5 h-4 w-4" aria-hidden="true" />
                        Read Article
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <SectionHeading
            eyebrow="More Coming Soon"
            title="We are regularly adding new guides"
            subtitle="Sign up for our newsletter to be notified when new resources are published."
            align="center"
            className="mt-16 max-w-xl"
          />
        </Container>
      </Section>

      <CTABanner
        title="Need Personalised Advice?"
        subtitle="Our resources cover the basics. For advice specific to your situation, book a free consultation."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
      />
    </>
  );
}
