import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { footerNav, site } from "@/lib/site";
import { NewsletterSignup } from "@/components/ui/newsletter-signup";
import { ManagePreferencesButton } from "@/components/cookie-consent/manage-preferences-button";

function LinkedInIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100 mt-auto">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-serif text-xl font-semibold text-white"
            >
              <span
                aria-hidden="true"
                className="text-primary-900 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-base font-bold"
              >
                H
              </span>
              {site.shortName}
            </Link>
            <p className="text-primary-200 mt-4 max-w-sm text-sm leading-relaxed">
              {site.description}
            </p>
            <ul className="text-primary-200 mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <a
                  href={`tel:${site.contact.phone}`}
                  className="hover:text-white"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-white"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>{site.contact.address}</span>
              </li>
            </ul>
          </div>

          <FooterColumn title="Services" links={footerNav.services} />
          <FooterColumn title="Who We Help" links={footerNav.industries} />
          <FooterColumn title="Company" links={footerNav.company} />
        </div>

        <div className="border-t border-white/10 py-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <NewsletterSignup className="lg:col-span-1" />
          </div>
        </div>

        <div className="text-primary-300 flex flex-col gap-4 border-t border-white/10 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {footerNav.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
            <ManagePreferencesButton className="hover:text-white" />
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-primary-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
