import { site } from "./site";

type BreadcrumbItem = { label: string; href?: string };

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };
}

export function buildOrganisation() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organisation`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    foundingDate: String(site.founded),
    description: site.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phone,
      email: site.contact.email,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
    sameAs: [site.social.linkedin],
  };
}

export function buildLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    foundingDate: String(site.founded),
    description: site.description,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    priceRange: "££",
    sameAs: [site.social.linkedin],
  };
}

export function buildServiceJsonLd(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${site.url}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${site.url}/#organisation`,
      name: site.name,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  };
}

export function buildFaqPageJsonLd(
  faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBlogPostingJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: { name: string; role: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${site.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organisation`,
      name: site.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
  };
}
