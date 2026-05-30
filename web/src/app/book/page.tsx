import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { CalendarDays, CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Huxridge Accountants & Tax Consultants",
  description:
    "Book your free, no-obligation initial consultation with the Huxridge team. 30 minutes — no pressure, just expert advice.",
};

const whatToExpect = [
  "A 30-minute video or telephone call with a qualified accountant",
  "Discussion of your current financial and tax situation",
  "An outline of the services most relevant to your needs",
  "A clear explanation of our fees and what is included",
  "No sales pressure — we want to make sure we are the right fit for you",
];

const prepareNotes = [
  "Your most recent set of accounts or tax return (if available)",
  "A rough idea of your annual turnover or income",
  "Any specific questions or concerns you would like to raise",
  "Details of any upcoming deadlines you are worried about",
];

export default function BookPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            Free Consultation
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Book Your Free Initial Consultation
          </h1>
          <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
            A 30-minute, no-obligation consultation with a Huxridge accountant. We will listen, assess your needs, and give you an honest view of how we can help — with no pressure to sign up.
          </p>
        </Container>
      </Section>

      {/* ── Booking + Support ── */}
      <Section background="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Cal.com placeholder */}
            <div className="lg:col-span-3">
              <div className="bg-background rounded-2xl border-2 border-dashed border-gray-300 p-10 text-center shadow-sm">
                <CalendarDays className="text-primary-300 mx-auto mb-4 h-14 w-14" aria-hidden="true" />
                <p className="text-primary-900 text-xl font-semibold">Booking Calendar</p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Booking calendar loads here — powered by Cal.com
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Select a date and time that suits you to speak with a member of our team.
                </p>
                <div className="mt-6 rounded-lg bg-gray-50 p-4 text-left text-xs text-gray-500">
                  <p className="font-medium text-gray-600">Integration note:</p>
                  <p className="mt-1">
                    Embed Cal.com booking widget using the{" "}
                    <code className="rounded bg-gray-100 px-1">@calcom/embed-react</code> package,
                    configured with your Cal.com team link.
                  </p>
                </div>
              </div>
            </div>

            {/* Supporting copy */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="text-primary-900 mb-4 text-xl font-semibold">What to Expect</h2>
                <ul className="space-y-3">
                  {whatToExpect.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-accent-600 mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                      <span className="text-primary-800 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <Clock className="text-primary-700 h-5 w-5" aria-hidden="true" />
                  <h3 className="text-primary-900 font-semibold">Duration</h3>
                </div>
                <p className="text-muted-foreground mt-1 text-sm">30 minutes via video call or telephone</p>
              </div>

              <div>
                <h2 className="text-primary-900 mb-4 text-xl font-semibold">Come Prepared</h2>
                <p className="text-muted-foreground mb-3 text-sm">
                  You do not need to prepare anything formal, but having these to hand will make the conversation more productive:
                </p>
                <ul className="space-y-2">
                  {prepareNotes.map((note) => (
                    <li key={note} className="text-primary-800 flex items-start gap-2 text-sm">
                      <span className="text-accent-500 mt-1 font-bold">·</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-50 border-primary-100 rounded-xl border p-5">
                <h3 className="text-primary-900 font-semibold">Prefer to Call or Email?</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  If you would rather speak directly, contact us through any of the details below.
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href={`tel:${site.contact.phone}`}
                    className="flex items-center gap-2 text-sm text-primary-700 hover:underline"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {site.contact.phone}
                  </a>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-2 text-sm text-primary-700 hover:underline"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {site.contact.email}
                  </a>
                </div>
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <Link href="/contact">Contact Form</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
