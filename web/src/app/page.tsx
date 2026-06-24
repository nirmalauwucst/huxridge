import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import { Badge } from "@/components/ui/badge";
import { mockServices, mockIndustries, mockTestimonials, mockBlogPosts } from "@/lib/mock-data";
import { CheckCircle2, Star } from "lucide-react";

const stats = [
  { value: "AAT Regulated", label: "Governance" },
  { value: "200+", label: "Clients" },
  { value: "Since 2022", label: "Founded" },
  { value: "Same Day", label: "Response Time" },
];

const whyHuxridge = [
  {
    title: "Cloud-First Accounting",
    description:
      "All our work is done digitally. You get real-time access to your accounts via Xero, QuickBooks, or FreeAgent — no paper, no delays.",
  },
  {
    title: "Fixed Monthly Fees",
    description:
      "No hourly rates or surprise bills. You know exactly what you pay and what you get, making budgeting simple.",
  },
  {
    title: "Proactive Tax Planning",
    description:
      "We contact you with tax-saving opportunities throughout the year — not just at year-end. Minimum liability, maximum compliance.",
  },
  {
    title: "Specialist Sector Knowledge",
    description:
      "From dental accountants to landlord tax, our team has deep expertise in the sectors we serve — not just generic accountancy.",
  },
];

export default function HomePage() {
  const featuredTestimonials = mockTestimonials.slice(0, 3);
  const featuredPosts = mockBlogPosts.slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <Section padding="lg" className="relative overflow-hidden">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <Badge variant="accent" className="mb-4">
                ACCOUNTANTS · TAX ADVISORS · BUSINESS ADVISORS
              </Badge>
              <h1 className="text-primary-900 mt-4 font-serif text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
                Specialist advice for the people who keep the UK running. OR Clear numbers, confident decisions
              </h1>
              <p className="text-muted-foreground mt-6 text-xl leading-relaxed">
                Complex tax rules. Changing regulations. Competing priorities. We cut through it all so you can focus on what you do best &mdash; whether you&apos;re a landlord, nursery owner, or healthcare professional.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="primary" size="lg">
                  <Link href="/book">Book a Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
              <ul className="text-muted-foreground mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {["No obligation", "Fixed monthly fees", "UK-qualified accountants"].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="text-accent-600 h-4 w-4" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Decorative element */}
            <div className="hidden lg:flex lg:justify-end">
              <div className="bg-primary-50 border-primary-100 relative h-[420px] w-[420px] rounded-2xl border p-8">
                <div className="bg-accent-400/20 absolute inset-0 rounded-2xl" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="bg-background rounded-xl p-5 shadow-sm">
                    <p className="text-primary-500 text-xs font-medium uppercase tracking-wide">Average Tax Savings</p>
                    <p className="text-primary-900 mt-1 font-serif text-3xl font-semibold">£12,450</p>
                    <p className="text-muted-foreground mt-1 text-xs">Per client, per year</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-background rounded-xl p-4 shadow-sm">
                      <p className="text-primary-500 text-xs font-medium uppercase tracking-wide">Clients Served</p>
                      <p className="text-primary-900 mt-1 text-2xl font-semibold">200+</p>
                    </div>
                    <div className="bg-background rounded-xl p-4 shadow-sm">
                      <p className="text-primary-500 text-xs font-medium uppercase tracking-wide">On-Time Filing</p>
                      <p className="text-primary-900 mt-1 text-2xl font-semibold">100%</p>
                    </div>
                  </div>
                  <div className="bg-primary-900 rounded-xl p-4 text-white">
                    <p className="text-sm font-medium">Next tax deadline</p>
                    <p className="text-accent-300 text-sm">31 January 2027 — Self Assessment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Stats ── */}
      <Section background="primary" padding="sm">
        <Container>
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-primary-300 text-sm font-medium">{stat.label}</dt>
                <dd className="text-accent-300 mt-1 font-serif text-3xl font-semibold">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* ── Industries Overview ── */}
      <Section background="muted">
        <Container>
          <SectionHeading
            eyebrow="WHO WE HELP"
            title="Built for your profession, not just your accounts"
            subtitle="Generic accountancy misses the details that matter. Our sector specialists understand the specific tax rules and challenges in your industry."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {mockIndustries.map((industry) => (
                <Card key={industry.slug} variant="default" className="group transition-all hover:shadow-elevated">
                  <CardHeader>
                    <div className="bg-primary-50 mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg">
                      <Icon name={industry.slug as IconName} size={22} className="text-primary-700" />
                    </div>
                    <CardTitle className="text-lg">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardDescription>{industry.tagline}</CardDescription>
                  <CardFooter className="mt-4">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="text-primary-700 text-sm font-medium hover:underline"
                    >
                      Learn more →
                    </Link>
                  </CardFooter>
                </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/industries">View All Industries</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Why Huxridge ── */}
      <Section background="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Why Huxridge"
                title="Accountancy That Works the Way You Do"
                subtitle="We are not your traditional high-street accountants. We are a modern, remote-first practice built around cloud technology, fixed fees, and proactive advice."
              />
              <Button asChild variant="primary" size="md" className="mt-8">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyHuxridge.map((item) => (
                <div key={item.title} className="bg-muted rounded-xl p-5">
                  <h3 className="text-primary-900 font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Services Overview ── */}
      <Section background="muted">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="A Full Range of Accountancy &amp; Tax Services"
            subtitle="From day-to-day bookkeeping to complex tax planning, our team has the expertise to support your business at every stage."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mockServices.map((service) => (
                <Card key={service.slug} variant="outline" className="group transition-all hover:border-primary-300 hover:shadow-card">
                  <CardHeader>
                    <div className="bg-accent-50 mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                      <Icon name={service.slug as IconName} size={24} className="text-accent-700" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardDescription>{service.tagline}</CardDescription>
                  <CardFooter className="mt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-primary-700 text-sm font-medium hover:underline"
                    >
                      Learn more →
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </Container>
      </Section>

      {/* ── Testimonials ── */}
      <Section background="default">
        <Container>
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted by Businesses Across the UK"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <Card key={t.id} variant="elevated" className="flex flex-col">
                <div className="flex gap-0.5 text-accent-500" aria-label={`${t.rating} stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-primary-800 mt-4 flex-1 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-5 border-t pt-4">
                  <p className="text-primary-900 text-sm font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.company}</p>
                </footer>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/testimonials">Read All Reviews</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Latest Blog ── */}
      <Section background="muted">
        <Container>
          <SectionHeading
            eyebrow="Latest Insights"
            title="Tax Tips &amp; Business Advice"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <Card key={post.slug} variant="default" className="flex flex-col transition-shadow hover:shadow-elevated">
                <div className="bg-primary-50 mb-4 h-40 rounded-lg" aria-hidden="true" />
                <Badge variant="accent" className="mb-3 self-start">
                  {post.category}
                </Badge>
                <CardTitle className="text-lg">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-primary-700">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="mt-2 flex-1">{post.excerpt}</CardDescription>
                <CardFooter className="mt-4 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readingTime}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── CTA Banner ── */}
      <CTABanner
        title="Not sure where to start?"
        subtitle="Book a free 30-minute discovery call, We'll tell you exactly where you can stand and what we can do to help you get there."
        primary={{ label: "Book a Free Call", href: "/book" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
