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
      "We operate without a single sheet of paper. Every document is stored, signed, and shared digitally — faster, greener, and always accessible.",
  },
  {
    title: "Cloud Accounting Tools",
    description:
      "We use the best cloud platforms — Xero, QuickBooks, FreeAgent, Dext — integrated to give you real-time financial visibility.",
  },
  {
    title: "Proactive Advisory",
    description:
      "We do not wait for you to call us. We monitor your position and reach out with advice, alerts, and opportunities before problems arise.",
  },
];

const values = [
  {
    title: "Transparency",
    description:
      "Fixed fees, plain-English advice, and no hidden charges. You always know what you are getting and what it costs.",
  },
  {
    title: "Expertise",
    description:
      "Our team holds professional qualifications and commits to ongoing learning in the fast-changing landscape of UK tax law.",
  },
  {
    title: "Accessibility",
    description:
      "We are responsive and straightforward to deal with. You will always have a named contact who knows your affairs inside out.",
  },
  {
    title: "Integrity",
    description:
      "We give honest advice even when it is not what you want to hear. Our job is to protect your interests and keep you fully compliant.",
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
            Built on a Better Idea of What an Accountant Should Be
          </h1>
          <p className="text-muted-foreground mt-6 text-xl leading-relaxed">
            Huxridge was founded in 2022 with a simple but ambitious aim: to provide UK businesses, landlords, and self-employed professionals with genuinely expert, technology-driven accountancy — without the formality, delays, and frustration that so often come with the traditional model.
          </p>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            We are a fully remote, paperless practice. That means lower overheads, which we pass on to our clients through competitive fixed fees. It also means we can work with businesses anywhere in the UK, not just those within driving distance of a physical office.
          </p>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Everything we do is underpinned by cloud technology. We use the best tools available — Xero, QuickBooks, FreeAgent, Dext, and others — to automate the routine tasks and free our team to focus on the work that genuinely adds value: tax planning, financial advice, and helping our clients make better decisions.
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
            eyebrow="Our Approach"
            title="How We Work Differently"
            align="center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {approach.map((item) => (
              <div key={item.title} className="text-center">
                <div className="bg-primary-900 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-primary-900 text-lg font-semibold">{item.title}</h3>
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
              <Card key={member.name} variant="elevated" className="text-center">
                <div className="bg-primary-900 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
                  <span className="font-serif text-xl font-semibold text-white">
                    {member.initials}
                  </span>
                </div>
                <CardTitle>{member.name}</CardTitle>
                <p className="text-accent-600 mt-1 text-sm font-medium">{member.role}</p>
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
            eyebrow="Our Values"
            title="What We Stand For"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="bg-background rounded-xl p-6 shadow-card">
                <h3 className="text-primary-900 font-semibold">{value.title}</h3>
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
        title="Let&apos;s Work Together"
        subtitle="Book a free, no-obligation consultation with our team and discover how Huxridge can support your business."
        primary={{ label: "Book a Free Consultation", href: "/book" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
