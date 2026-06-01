import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTABanner } from "@/components/ui/cta-banner";
import { Card, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockBlogPosts, mockSamplePostBody } from "@/lib/mock-data";
import { CalendarDays, Clock, User } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return mockBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Huxridge Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = mockBlogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-muted border-border border-b py-3">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
        </Container>
      </div>

      {/* ── Article ── */}
      <Section padding="lg" background="default">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <Badge variant="accent" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-primary-900 font-serif text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden="true" />
                {post.author.name}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>

            {/* Featured image placeholder */}
            <div
              className="bg-primary-50 border-primary-100 mt-8 h-64 rounded-xl border sm:h-80"
              aria-hidden="true"
            />

            {/* Body */}
            <div className="prose prose-slate mt-10 max-w-none">
              {mockSamplePostBody.map((paragraph, i) => (
                <p key={i} className="text-primary-800 mb-5 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author bio */}
            <div className="bg-muted mt-12 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-900 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <span className="text-sm font-semibold text-white">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-primary-900 font-semibold">{post.author.name}</p>
                  <p className="text-accent-600 text-sm">{post.author.role}</p>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    The Huxridge team writes practical, plain-English guides to help UK businesses and individuals navigate tax and accountancy. Our articles are for general information only — always seek professional advice for your specific situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Related Posts ── */}
      <Section background="muted">
        <Container>
          <h2 className="text-primary-900 mb-8 text-2xl font-semibold">Related Articles</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedPosts.map((rp) => (
              <Card key={rp.slug} variant="default" className="flex flex-col transition-shadow hover:shadow-elevated">
                <div className="bg-primary-50 mb-4 h-36 rounded-lg" aria-hidden="true" />
                <Badge variant="accent" className="mb-3 self-start">
                  {rp.category}
                </Badge>
                <CardTitle className="text-lg">
                  <Link href={`/blog/${rp.slug}`} className="transition-colors hover:text-primary-700">
                    {rp.title}
                  </Link>
                </CardTitle>
                <CardDescription className="mt-2 flex-1">{rp.excerpt}</CardDescription>
                <CardFooter className="mt-4 text-xs text-muted-foreground">
                  <span>{rp.date}</span>
                  <span className="mx-2">·</span>
                  <span>{rp.readingTime}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Need Expert Advice on This Topic?"
        subtitle="Book a free consultation with our team and get personalised guidance for your situation."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
        secondary={{ label: "View All Articles", href: "/blog" }}
      />
    </>
  );
}
