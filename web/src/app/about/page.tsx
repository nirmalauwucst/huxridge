import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Huxridge Accountants & Tax Consultants",
  description:
    "Learn about Huxridge — a modern, paperless UK accountancy practice founded in 2022, built around cloud technology and proactive client service.",
};

const approach = [
  {
    title: "100% Paperless",
    description:
      "We run a fully paperless practice. Everything — from onboarding to year-end accounts — is handled digitally. No printing, no posting, no chasing paper. It's faster, more secure, and means your documents are always where you need them, when you need them.",
  },
  {
    title: "Cloud Accounting Tools",
    description:
      "We work exclusively on cloud-based software — Xero, FreeAgent, and TaxCalc. That means your books are live and up to date at all times, you can log in and see your numbers from anywhere, and we can both work on the same data in real time. No more waiting for someone to send you a spreadsheet.",
  },
  {
    title: "Proactive Advisory",
    description:
      "Most accountants only talk to you at year-end. We don't work that way. We monitor your numbers throughout the year, flag anything that needs your attention, and bring opportunities to you before you have to ask. Think of us less as a compliance firm and more as a financial partner that happens to do your accounts too.",
  },
  {
    title: "Dedicated Client Accountant",
    description:
      "When you join Huxridge, you're assigned one accountant who looks after you personally. They learn your business, understand your goals, and are your single point of contact for everything. You'll never be passed around or have to explain your situation to someone new.",
  },
  {
    title: "Same-Day Response",
    description:
      "We know how frustrating it is to send an important question and hear nothing back for days. We commit to responding to every client query on the same working day — no exceptions. If we don't have the full answer yet, we'll acknowledge your message and tell you when you can expect it.",
  },
  {
    title: "WhatsApp for Day-to-Day",
    description:
      "Quick questions shouldn't require a formal email. Once you're a client, you can message your accountant directly on WhatsApp for day-to-day queries — whether that's a quick tax question, a document request, or just a sense check on a decision you're about to make. We're as accessible as a colleague, not as distant as a firm.",
  },
];

const values = [
  {
    title: "Expertise That Fits",
    description:
      "We only work with sectors we genuinely understand. No generalists, no guesswork. When you come to us, you're getting an accountant who already knows your industry inside out.",
  },
  {
    title: "Transparency Always",
    description:
      "Fixed fees, plain English, and no surprises. You always know what you're getting and what you're paying. No hidden charges, no confusing jargon, no small print.",
  },
  {
    title: "Your Success Is Our Success",
    description:
      "We measure ourselves by the outcomes we deliver for clients, not just the compliance we complete. If you're growing, saving tax, and making confident decisions — we're doing our job.",
  },
  {
    title: "Technology With a Human Touch",
    description:
      "We use the best tools available, but there's always a real person behind every response. Technology makes us faster and more accurate — it doesn't replace the relationship.",
  },
];

const team = [
  {
    initials: "RH",
    name: "Richard Huxridge",
    role: "Founder & Principal Accountant",
    bio: "Chartered accountant with over 15 years of experience across practice and industry. Richard founded Huxridge in 2022 with a mission to bring enterprise-quality financial advice to small and medium-sized businesses.",
  },
  {
    initials: "SP",
    name: "Sophie Patel",
    role: "Head of Tax",
    bio: "A specialist in personal and corporate tax, Sophie leads our Self Assessment, corporation tax, and MTD services. She has particular expertise in property tax and working with healthcare professionals.",
  },
  {
    initials: "MT",
    name: "Marcus Thompson",
    role: "Client Accounts Manager",
    bio: "Marcus oversees bookkeeping, management accounts, and VAT for our growing client base. He is an expert in Xero and QuickBooks and leads all client onboarding and software migrations.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            About Us
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            We built the firm we’d want to work with
          </h1>
          <p className="text-muted-foreground mt-6 text-xl leading-relaxed">
            We started Huxridge because we kept seeing the same problem &mdash;
            hardworking professionals and business owners being let down by
            accountants who didn&apos;t understand their world. Generic advice.
            Slow responses. Reactive rather than proactive. We built something
            different. A firm that combines deep sector expertise with modern
            tools, straight-talking advice, and a genuine commitment to the
            people we work with.
          </p>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            We are a fully remote, paperless practice. That means lower
            overheads, which we pass on to our clients through competitive fixed
            fees. It also means we can work with businesses anywhere in the UK,
            not just those within driving distance of a physical office.
          </p>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Everything we do is underpinned by cloud technology. We use the best
            tools available — Xero, QuickBooks, FreeAgent, Dext, and others — to
            automate the routine tasks and free our team to focus on the work
            that genuinely adds value: tax planning, financial advice, and
            helping our clients make better decisions.
          </p>
          <div className="mt-8">
            <Button asChild variant="primary" size="lg">
              <Link href="/book">Book a Free Consultation</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Our Approach ── */}
      <Section background="muted">
        <Container>
          <SectionHeading
            eyebrow="How We Work Differently"
            title="Not Your Average Accountant"
            subtitle="We've rethought how an accountancy firm should work — from the tools we use to the way we communicate. Here's what that looks like in practice."
            align="center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {approach.map((item) => (
              <div key={item.title} className="text-center">
                <div className="bg-primary-900 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <CheckCircle2
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-primary-900 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Team ── */}
      <Section background="default">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind Huxridge"
            subtitle="A small team of qualified accountants and tax specialists, all focused on delivering exceptional service."
            align="center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card
                key={member.name}
                variant="elevated"
                className="text-center"
              >
                <div className="bg-primary-900 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
                  <span className="font-serif text-xl font-semibold text-white">
                    {member.initials}
                  </span>
                </div>
                <CardTitle>{member.name}</CardTitle>
                <p className="text-accent-600 mt-1 text-sm font-medium">
                  {member.role}
                </p>
                <CardDescription className="mt-3">{member.bio}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Values ── */}
      <Section background="muted">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="Four Things We Never Compromise On"
            subtitle="These aren't values we put on a wall. They're the principles that shape every decision we make and every interaction we have with clients."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background shadow-card rounded-xl p-6"
              >
                <h3 className="text-primary-900 font-semibold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <CTABanner
        title="Ready to work with an accountant who actually gets it?"
        subtitle="Book a free 30-minute discovery call. No commitment, no jargon, just honest advice."
        primary={{ label: "Book a Free Call", href: "/book" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
