import { type MetadataRoute } from "next";
import { site, services, industries } from "@/lib/site";
import { mockBlogPosts } from "@/lib/mock-data";
import { taxCalculators } from "@/lib/tax-calculators";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  type SitemapEntry = MetadataRoute.Sitemap[number];
  const staticRoutes: SitemapEntry[] = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    {
      url: `${base}/services`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${base}/who-we-help`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${base}/about`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${base}/contact`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { url: `${base}/book`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    {
      url: `${base}/resources`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${base}/testimonials`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    { url: `${base}/faq`, priority: 0.6, changeFrequency: "monthly" as const },
    {
      url: `${base}/privacy-policy`,
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((r) => ({ ...r, lastModified: now }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${base}/who-we-help/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = mockBlogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const calculatorRoutes: MetadataRoute.Sitemap = taxCalculators.map((c) => ({
    url: `${base}/resources/tax-calculators/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes, ...calculatorRoutes];
}
