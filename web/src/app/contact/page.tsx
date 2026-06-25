import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { buildBreadcrumbList } from "@/lib/jsonld";
import { services, site } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

const title = "Contact Us | Huxridge Accountants & Tax Consultants";
const description =
  "Get in touch with the Huxridge team — by form, email, or phone. We respond within one business day.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { label: "Home", href: "/" },
          { label: "Contact" },
        ])}
      />

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
            Whether you have a specific question or just want to explore how we
            can help, we would love to hear from you. We aim to respond to all
            enquiries within one business day.
          </p>
        </Container>
      </Section>

      {/* ── Form + Details ── */}
      <Section background="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* ── Form ── */}
            <div className="bg-background shadow-card rounded-2xl p-8 lg:col-span-3">
              <h2 className="text-primary-900 mb-6 text-xl font-semibold">
                Send Us a Message
              </h2>
              <form className="space-y-5" action="#" method="post">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-primary-800 mb-1.5 block text-sm font-medium"
                    >
                      Full Name{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="border-border focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-primary-800 mb-1.5 block text-sm font-medium"
                    >
                      Email Address{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="border-border focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none"
                      placeholder="jane@example.co.uk"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-primary-800 mb-1.5 block text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className="border-border focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none"
                    placeholder="+44 (0)7700 000000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-primary-800 mb-1.5 block text-sm font-medium"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="border-border focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-primary-800 mb-1.5 block text-sm font-medium"
                  >
                    Message{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="border-border focus:border-primary-500 focus:ring-primary-500 w-full resize-y rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none"
                    placeholder="Tell us a little about your business and what you need help with…"
                  />
                </div>

                <div>
                  <label
                    htmlFor="source"
                    className="text-primary-800 mb-1.5 block text-sm font-medium"
                  >
                    How did you hear about us?
                  </label>
                  <select
                    id="source"
                    name="source"
                    className="border-border focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none"
                  >
                    <option value="">Select…</option>
                    <option value="google">Google search</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="referral">
                      Referral from a friend or colleague
                    </option>
                    <option value="accountant-directory">
                      Accountant directory
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
                <p className="text-muted-foreground text-xs">
                  By submitting this form you agree to our{" "}
                  <Link href="/privacy-policy" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>

            {/* ── Contact details ── */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="text-primary-900 mb-4 text-xl font-semibold">
                  Contact Details
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-50 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                      <Phone
                        className="text-primary-700 h-4 w-4"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-primary-800 text-sm font-medium">
                        Telephone
                      </p>
                      <a
                        href={`tel:${site.contact.phone}`}
                        className="text-primary-700 text-sm hover:underline"
                      >
                        {site.contact.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-50 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                      <Mail
                        className="text-primary-700 h-4 w-4"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-primary-800 text-sm font-medium">
                        Email
                      </p>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="text-primary-700 text-sm hover:underline"
                      >
                        {site.contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-50 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                      <MapPin
                        className="text-primary-700 h-4 w-4"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-primary-800 text-sm font-medium">
                        Address
                      </p>
                      <span className="text-primary-700 text-sm">
                        {site.contact.address}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-primary-900 mb-2 font-semibold">
                  Office Hours
                </h3>
                <p className="text-muted-foreground text-sm">
                  Monday – Friday: 9:00am – 5:30pm
                  <br />
                  Saturday – Sunday: Closed
                </p>
              </div>

              {/* Map placeholder */}
              <div className="bg-primary-50 border-primary-100 flex h-48 items-center justify-center rounded-xl border">
                <div className="text-center">
                  <MapPin
                    className="text-primary-400 mx-auto mb-2 h-8 w-8"
                    aria-hidden="true"
                  />
                  <p className="text-primary-600 text-sm font-medium">
                    UK-Wide, Remote-First Service
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    We work with clients anywhere in the UK
                  </p>
                </div>
              </div>

              <div className="bg-accent-50 border-accent-200 rounded-xl border p-5">
                <h3 className="text-primary-900 font-semibold">
                  Prefer to Book Directly?
                </h3>
                <p className="text-primary-700 mt-1 text-sm">
                  Use our online calendar to schedule a free 30-minute
                  consultation at a time that suits you.
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
