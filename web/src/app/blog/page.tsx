import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { CTABanner } from "@/components/ui/cta-banner";
import { Card, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockBlogPosts } from "@/lib/mock-data";
import { CalendarDays, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Huxridge Accountants & Tax Consultants",
  description:
    "Tax tips, accounting insights, and regulatory updates from the Huxridge team — keeping UK businesses informed and compliant.",
};

const categories = [
  "All",
  "Making Tax Digital",
  "Property Tax",
  "Corporation Tax",
  "Contractors",
  "Healthcare",
  "Start-Ups",
];

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            Blog
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Latest Insights
          </h1>
          <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
            Tax tips, regulatory updates, and practical business finance advice from the Huxridge team. Written in plain English — no jargon.
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

      {/* ── Posts Grid ── */}
      <Section background="default">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mockBlogPosts.map((post) => (
              <Card key={post.slug} variant="default" className="flex flex-col transition-shadow hover:shadow-elevated">
                <div className="bg-primary-50 mb-5 h-44 rounded-lg" aria-hidden="true" />
                <Badge variant="accent" className="mb-3 self-start">
                  {post.category}
                </Badge>
                <CardTitle className="text-xl">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-primary-700">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="mt-2 flex-1 text-base">{post.excerpt}</CardDescription>
                <CardFooter className="mt-5 gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.readingTime}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination (visual) */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <Button variant="outline" size="sm" disabled>
              ← Previous
            </Button>
            <span className="text-muted-foreground text-sm">Page 1 of 1</span>
            <Button variant="outline" size="sm" disabled>
              Next →
            </Button>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Need Personalised Tax Advice?"
        subtitle="Our articles are a starting point. For advice tailored to your situation, book a free consultation."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
      />
    </>
  );
}
