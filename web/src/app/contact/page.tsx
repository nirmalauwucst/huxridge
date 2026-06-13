import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Us | Huxridge Accountants & Tax Consultants",
  description:
    "Get in touch with the Huxridge team — by form, email, or phone. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section padding="lg" background="default">
        <Container size="narrow">
          <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
            Contact
          </p>
          <h1 className="text-primary-900 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-muted-foreground mt-5 text-xl leading-relaxed">
            Whether you have a specific question or just want to explore how we can help, we would love to hear from you. We aim to respond to all enquiries within one business day.
          </p>
        </Container>
      </Section>

      {/* ── Form + Details ── */}
      <Section background="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* ── Form ── */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* ── Contact details ── */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="text-primary-900 mb-4 text-xl font-semibold">Contact Details</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-50 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                      <Phone className="text-primary-700 h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-primary-800 text-sm font-medium">Telephone</p>
                      <a href={`tel:${site.contact.phone}`} className="text-primary-700 text-sm hover:underline">
                        {site.contact.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-50 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                      <Mail className="text-primary-700 h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-primary-800 text-sm font-medium">Email</p>
                      <a href={`mailto:${site.contact.email}`} className="text-primary-700 text-sm hover:underline">
                        {site.contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-50 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                      <MapPin className="text-primary-700 h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-primary-800 text-sm font-medium">Address</p>
                      <span className="text-primary-700 text-sm">{site.contact.address}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-primary-900 mb-2 font-semibold">Office Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday – Friday: 9:00am – 5:30pm<br />
                  Saturday – Sunday: Closed
                </p>
              </div>

              <div className="bg-primary-50 border-primary-100 flex h-48 items-center justify-center rounded-xl border">
                <div className="text-center">
                  <MapPin className="text-primary-400 mx-auto mb-2 h-8 w-8" aria-hidden="true" />
                  <p className="text-primary-600 text-sm font-medium">UK-Wide, Remote-First Service</p>
                  <p className="text-muted-foreground mt-1 text-xs">We work with clients anywhere in the UK</p>
                </div>
              </div>

              <div className="bg-accent-50 border-accent-200 rounded-xl border p-5">
                <h3 className="text-primary-900 font-semibold">Prefer to Book Directly?</h3>
                <p className="text-primary-700 mt-1 text-sm">
                  Use our online calendar to schedule a free 30-minute consultation at a time that suits you.
                </p>
                <Button asChild variant="primary" size="sm" className="mt-4">
                  <Link href="/book">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
