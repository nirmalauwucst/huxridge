export const site = {
  name: "Huxridge Accountants & Tax Consultants",
  shortName: "Huxridge",
  description:
    "Modern, paperless accountancy and tax advisory for UK businesses, landlords, contractors and healthcare professionals.",
  url: "https://huxridge.co.uk",
  founded: 2022,
  contact: {
    phone: "+44 (0)20 0000 0000",
    email: "hello@huxridge.co.uk",
    address: "Nationwide, UK · Remote-first",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/huxridge",
  },
} as const;

export const services = [
  { slug: "bookkeeping", title: "Bookkeeping" },
  { slug: "management-accounts", title: "Management Accounts" },
  { slug: "personal-tax", title: "Personal Tax" },
  { slug: "annual-accounts", title: "Annual Accounts" },
  { slug: "corporation-tax", title: "Corporation Tax" },
  { slug: "internal-audit", title: "Internal Audit" },
  { slug: "making-tax-digital", title: "Making Tax Digital" },
  { slug: "vat-services", title: "VAT Services" },
  { slug: "company-formation", title: "Company Formation" },
  { slug: "company-secretarial", title: "Company Secretarial" },
] as const;

import { mockIndustries } from "./mock-data";

export const industries = mockIndustries.map(({ slug, title }) => ({
  slug,
  title,
}));

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  services: services.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  })),
  industries: industries.map((i) => ({
    label: i.title,
    href: `/who-we-help/${i.slug}`,
  })),
  resources: [
    { label: "Resources & Guides", href: "/resources" },
    { label: "Tax Calculators", href: "/calculators" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;
