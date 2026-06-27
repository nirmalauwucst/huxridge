import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { CTABanner } from "@/components/ui/cta-banner";
import { JsonLd } from "@/components/ui/json-ld";
import { buildBreadcrumbList } from "@/lib/jsonld";
import { SectorGroups, type SectorGroup } from "./sector-accordion";
import type { Metadata } from "next";

const title = "Who We Help | Huxridge Accountants & Tax Consultants";
const description =
  "We work with healthcare professionals, property owners, and business owners who need an accountant that genuinely understands their sector — not just their spreadsheets.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/who-we-help" },
  openGraph: { title, description, url: "/who-we-help" },
  twitter: { title, description },
};

const sectorGroups: SectorGroup[] = [
  {
    label: "Healthcare & childcare",
    colorScheme: "teal",
    sectors: [
      {
        slug: "dentists",
        icon: "dentists",
        title: "Dentists",
        intro:
          "From newly qualified associates filing their first self-assessment to established practice owners planning their next acquisition — we already speak your language.",
        services: [
          "Associate tax & self-assessment",
          "NHS pension & annual allowance advice",
          "Practice purchase & incorporation",
          "Squat practice set-up & financial planning",
          "Partnership agreements & profit sharing",
          "CQC compliance & practice valuations",
        ],
        getInTouchText: "Get in touch about your practice →",
        getInTouchHref: "/contact?sector=dentists",
      },
      {
        slug: "care-homes",
        icon: "care-homes",
        title: "Care Homes",
        intro:
          "Tight margins, a large workforce, and ever-changing regulatory demands. We help care operators stay compliant, control costs, and plan ahead with confidence.",
        services: [
          "Payroll & auto-enrolment for care staff",
          "CQC compliance costs & financial planning",
          "Property & business rates advice",
          "Care fee income structuring",
          "Corporation tax & annual accounts",
          "VAT planning for mixed-use care properties",
        ],
        getInTouchText: "Get in touch about your care home →",
        getInTouchHref: "/contact?sector=care-homes",
      },
      {
        slug: "nurses-clinicians",
        icon: "nurses-clinicians",
        title: "Nurses & Clinicians",
        intro:
          "NHS employee, locum, or limited company — your tax position is more complex than most. We make sure you're not paying a penny more than you need to.",
        services: [
          "Locum & agency tax returns",
          "IR35 awareness & status advice",
          "NHS pension planning & annual allowance",
          "Allowable expenses claims",
          "Self-assessment for bank & agency shifts",
          "Limited company set-up & ongoing accounts",
        ],
        getInTouchText: "Get in touch about your situation →",
        getInTouchHref: "/contact?sector=nurses",
      },
      {
        slug: "nurseries",
        icon: "nurseries",
        title: "Nurseries",
        intro:
          "High staffing costs, complex government funding streams, and razor-thin margins. We help nursery owners get a clear picture of their finances and build a sustainable business.",
        services: [
          "Payroll & auto-enrolment for nursery staff",
          "Government funding reconciliation",
          "Business rates relief advice",
          "Annual accounts & corporation tax",
          "Childcare scheme accounting",
          "Cash flow planning & management accounts",
        ],
        getInTouchText: "Get in touch about your nursery →",
        getInTouchHref: "/contact?sector=nurseries",
      },
    ],
  },
  {
    label: "Business & property",
    colorScheme: "blue",
    sectors: [
      {
        slug: "landlords",
        icon: "landlords",
        title: "Landlords",
        intro:
          "From a single buy-to-let to a growing portfolio — tax rules around property have never been more complex. We help landlords hold on to more of what their properties earn.",
        services: [
          "Buy-to-let tax returns & allowable expenses",
          "Capital gains tax planning on disposals",
          "Limited company incorporation advice",
          "HMO & holiday let tax treatment",
          "Mortgage interest & Section 24 advice",
          "Stamp duty land tax planning",
        ],
        getInTouchText: "Get in touch about your portfolio →",
        getInTouchHref: "/contact?sector=landlords",
      },
      {
        slug: "contractors",
        icon: "contractors",
        title: "Contractors",
        intro:
          "IR35, dividend strategy, VAT, limited company efficiency — contracting comes with complexity. We help contractors keep more of what they earn and stay on the right side of HMRC.",
        services: [
          "IR35 assessment & ongoing advice",
          "Limited company vs umbrella comparison",
          "Dividend & salary strategy",
          "VAT flat rate scheme",
          "Allowable business expenses",
          "Self-assessment & annual accounts",
        ],
        getInTouchText: "Get in touch about your contract →",
        getInTouchHref: "/contact?sector=contractors",
      },
    ],
  },
];

export default function WhoWeHelpPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { label: "Home", href: "/" },
          { label: "Who We Help" },
        ])}
      />

      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            Who We Help
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Built for your profession, not just your accounts
          </h1>
          <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
            We work with healthcare professionals, property owners, and business
            owners who need an accountant that genuinely understands their
            sector — not just their spreadsheets.
          </p>
        </Container>
      </Section>

      {/* ── Sector Groups ── */}
      <Section background="muted">
        <Container size="narrow">
          <SectorGroups groups={sectorGroups} />
        </Container>
      </Section>

      <CTABanner
        title="Not sure if we're the right fit?"
        subtitle="Book a free 30-minute discovery call. No commitment, no jargon — just honest advice."
        primary={{ label: "Book a free call →", href: "/contact" }}
      />
    </>
  );
}
