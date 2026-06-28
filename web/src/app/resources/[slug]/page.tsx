import { notFound } from "next/navigation";
import { readFileSync, existsSync } from "fs";
import path from "path";
import { marked } from "marked";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTABanner } from "@/components/ui/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { buildBreadcrumbList } from "@/lib/jsonld";
import { mockResources } from "@/lib/mock-data";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const guidesDir = path.join(process.cwd(), "content", "guides");

function getGuideResource(slug: string) {
  return mockResources.find(
    (r) => "slug" in r && r.slug === slug && r.cta === "View Guide",
  );
}

function readGuideHtml(slug: string): string | null {
  const filePath = path.join(guidesDir, `${slug}.md`);
  if (!existsSync(filePath)) return null;
  const markdown = readFileSync(filePath, "utf-8");
  // Strip the H1 title — we render it from mock-data
  const withoutTitle = markdown.replace(/^#\s+.+\n/, "");
  return marked(withoutTitle) as string;
}

export async function generateStaticParams() {
  return mockResources
    .filter((r) => "slug" in r && r.cta === "View Guide")
    .map((r) => ({ slug: (r as { slug: string }).slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getGuideResource(slug);
  if (!resource) return { title: "Guide Not Found" };
  const title = `${resource.title} | Huxridge Resources`;
  return {
    title,
    description: resource.description,
    alternates: { canonical: `/resources/${slug}` },
    openGraph: { title, description: resource.description, url: `/resources/${slug}` },
    twitter: { title, description: resource.description },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const resource = getGuideResource(slug);
  if (!resource) notFound();

  const contentHtml = readGuideHtml(slug);
  if (!contentHtml) notFound();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: resource.title },
        ])}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-muted border-border border-b py-3">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: resource.title },
            ]}
          />
        </Container>
      </div>

      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <Badge variant="muted" className="mb-4">
            {resource.category}
          </Badge>
          <h1 className="text-primary-900 font-serif text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
            {resource.title}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            {resource.description}
          </p>
        </Container>
      </Section>

      {/* ── Guide Content ── */}
      <Section background="default" padding="sm">
        <Container size="narrow">
          <div
            className="
              guide-prose
              [&_h2]:text-primary-900 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-primary-800 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
              [&_h4]:text-primary-800 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2
              [&_p]:text-primary-800 [&_p]:leading-relaxed [&_p]:mb-5
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul>li]:text-primary-800 [&_ul>li]:mb-2 [&_ul>li]:leading-relaxed
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol>li]:text-primary-800 [&_ol>li]:mb-2 [&_ol>li]:leading-relaxed
              [&_strong]:text-primary-900 [&_strong]:font-semibold
              [&_em]:italic
              [&_a]:text-primary-700 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary-900
              [&_blockquote]:border-l-4 [&_blockquote]:border-accent-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-primary-700 [&_blockquote]:my-6
              [&_hr]:border-border [&_hr]:my-8
              [&_table]:w-full [&_table]:border-collapse [&_table]:mb-6
              [&_th]:text-left [&_th]:text-primary-900 [&_th]:font-semibold [&_th]:border-b [&_th]:border-border [&_th]:pb-2 [&_th]:text-sm
              [&_td]:text-primary-800 [&_td]:border-b [&_td]:border-border [&_td]:py-2 [&_td]:text-sm
            "
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <div className="border-border mt-12 border-t pt-8">
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              This guide is for general information only and does not constitute
              professional advice. Your circumstances may differ — always consult
              a qualified accountant or tax adviser before taking action.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/resources">
                <ArrowLeft className="mr-1.5 h-4 w-4" aria-hidden="true" />
                Back to Resources
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Need Advice on This Topic?"
        subtitle="Our guides cover the essentials. For advice tailored to your situation, book a free consultation."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
        secondary={{ label: "View All Resources", href: "/resources" }}
      />
    </>
  );
}
