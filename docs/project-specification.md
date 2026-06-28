# Huxridge Accountants & Tax Consultants — Website Project Specification

**Version:** 1.0
**Date:** 24 May 2026
**Status:** Draft
**Classification:** Confidential

---

## Table of Contents

- [Part A: Website Requirements](#part-a-website-requirements)
  - [1. Executive Summary](#1-executive-summary)
  - [2. Business Overview](#2-business-overview)
  - [3. Project Objectives](#3-project-objectives)
  - [4. Target Audience](#4-target-audience)
  - [5. Branding & Design Requirements](#5-branding--design-requirements)
  - [6. Existing Website Review](#6-existing-website-review)
  - [7. Sitemap & Page Structure](#7-sitemap--page-structure)
  - [8. Functional Requirements](#8-functional-requirements)
  - [9. SEO & Digital Marketing Requirements](#9-seo--digital-marketing-requirements)
  - [10. Integrations](#10-integrations)
  - [11. Content Management](#11-content-management)
  - [12. Performance & Security](#12-performance--security)
  - [13. Maintenance & Support](#13-maintenance--support)
  - [14. Timeline & Budget](#14-timeline--budget)
  - [15. Strategic Success Criteria](#15-strategic-success-criteria)
- [Part B: Technical Requirements](#part-b-technical-requirements)
  - [16. Technology Stack](#16-technology-stack)
  - [17. Third-Party Integrations](#17-third-party-integrations)
  - [18. Development Tooling](#18-development-tooling)
  - [19. Page Technical Specifications](#19-page-technical-specifications)
  - [20. SEO Technical Implementation](#20-seo-technical-implementation)
  - [21. Performance Requirements](#21-performance-requirements)
  - [22. Security Requirements](#22-security-requirements)
  - [23. Accessibility Requirements](#23-accessibility-requirements)
  - [24. Testing Strategy](#24-testing-strategy)
  - [25. Deployment & Infrastructure](#25-deployment--infrastructure)
  - [26. Monitoring & Observability](#26-monitoring--observability)
- [Part C: System Architecture](#part-c-system-architecture)
  - [27. High-Level Architecture](#27-high-level-architecture)
  - [28. Application Layers](#28-application-layers)
  - [29. Content Model (Sanity CMS)](#29-content-model-sanity-cms)
  - [30. Database Schema (Supabase)](#30-database-schema-supabase)
  - [31. Phased Delivery Plan](#31-phased-delivery-plan)
  - [32. Non-Functional Requirements Summary](#32-non-functional-requirements-summary)
- [Part D: Appendices](#part-d-appendices)
  - [33. Items Requiring Further Discussion](#33-items-requiring-further-discussion)
  - [34. Risks, Dependencies & Constraints](#34-risks-dependencies--constraints)
  - [35. Technology Decision Log](#35-technology-decision-log)
  - [36. Glossary](#36-glossary)
  - [37. Discovery Session Notes](#37-discovery-session-notes)
  - [38. Approval & Sign-Off](#38-approval--sign-off)

---

# Part A: Website Requirements

## 1. Executive Summary

This document defines the complete requirements for the design, development, and deployment of a new professional website for Huxridge Accountants & Tax Consultants. It has been compiled from a structured discovery session covering business objectives, target audience, design expectations, functional needs, technical infrastructure, and future scalability.

Huxridge Accountants & Tax Consultants was established in 2022 as a modern accountancy and tax advisory practice serving individuals, sole traders, and small to medium-sized businesses across the United Kingdom. The firm distinguishes itself through a paperless policy, proactive service delivery, and use of modern cloud accounting tools.

The new website will serve as the primary digital presence for the firm, with a focus on lead generation, brand credibility, search engine visibility, and user experience. It will replace the current site, which suffers from limited SEO optimisation and weak professional branding.

---

## 2. Business Overview

### 2.1 Company Profile

| Item | Details |
|---|---|
| Company Name | Huxridge Accountants & Tax Consultants |
| Established | 2022 |
| Location | United Kingdom (nationwide service) |
| Core Focus | Accountancy, tax advisory, and financial services for individuals and SMEs |
| Key Differentiator | Fully paperless practice using digital systems for documentation, communication, and record-keeping. This ensures greater efficiency, improved accuracy, enhanced security, and a more environmentally friendly way of working |
| Technology Approach | Cloud accounting tools, proactive service, and streamlined digital workflows |
| Current Clients | Serving any clients at the moment, with a focus on growing specific sectors |

### 2.2 Services Offered

The firm provides the following core services. The client indicated 8 services to showcase, but 10 distinct service areas were identified during discovery. Each requires a dedicated landing page on the website:

1. Bookkeeping
2. Management Accounts
3. Personal Tax
4. Production of Annual Accounts
5. Corporation Tax
6. Internal Audit
7. Making Tax Digital (MTD)
8. VAT Services
9. New Company Formation & Start-Up Advisory
10. Company Secretarial Services

### 2.3 Target Client Sectors

While the firm serves a broad range of clients, the following sectors have been identified as priority targets:

- **Healthcare sector:** dentists, veterinary practices, care homes
- **Property sector:** landlords and property investors
- **Sole traders and contractors**
- **Start-ups and new businesses** (client indicated "VERY MUCH" for this segment)
- **Small to medium-sized enterprises**
- **Individuals** requiring personal tax services
- **Corporates:** not targeted at this stage

### 2.4 Business Goals (2–5 Year Horizon)

- Grow the client base significantly across the UK
- Increase revenue through improved lead generation and digital visibility ("More clients, more money")
- Establish the firm as a trusted, modern accountancy brand
- Expand service offerings and digital capabilities over time

---

## 3. Project Objectives

### 3.1 Primary Objectives

The website redesign aims to address the following strategic goals identified by the client:

| Objective | Client Response | Details |
|---|---|---|
| More enquiries/leads | YES | Increase enquiries and qualified client leads through optimised contact forms, clear calls to action, and consultation booking |
| Better brand image | YES | Present a premium, modern, and trustworthy brand aligned with UK professional standards |
| More trust/credibility | YES | Establish authority through testimonials, professional design, informative content, and clear service proposition |
| Online booking | YES | Enable potential clients to book an initial consultation or appointment directly through the website |
| Better SEO | YES | Improve search engine rankings and organic traffic through proper technical SEO, content strategy, and keyword targeting |
| Client onboarding | TO DISCUSS | Workflow and requirements to be defined |
| Recruitment | Not specified | Not a current priority |

### 3.2 Reasons for Redesign

The client identified the following drivers for the website rebuild:

- Improve clarity and enhance user experience
- Make it easier for potential clients to understand the services offered and get in touch
- Support better lead generation
- Strengthen branding
- Improve visibility on search engines

### 3.3 Current Website Problems

- Minimal SEO optimisation, affecting online visibility
- Limited professional branding and online presence
- Missing messaging/live chat functionality
- Not currently generating leads through the website

### 3.4 Success Metrics

Post-launch success will be measured against the following key performance indicators:

- Increase in website enquiries and client leads
- Improved search engine rankings and organic traffic
- Growth in overall website traffic and engagement
- More phone calls and email enquiries generated via the site
- Appointment bookings completed through the website

### 3.5 Desired Visitor Actions

The website should guide visitors toward the following actions:

1. Submit an enquiry via the contact form
2. Call or email the firm directly
3. Explore accounting, tax, payroll, and advisory services
4. Request a free initial consultation
5. Subscribe to updates or newsletters (if available)

---

## 4. Target Audience

### 4.1 Audience Segments

| Segment | Priority | Client Response | Notes |
|---|---|---|---|
| Start-ups | Very High | "VERY MUCH" | New businesses seeking formation, tax setup, and ongoing accounting support |
| Healthcare Professionals | High | Ideal clients | Dentists, vets, and care homes requiring specialist accounting |
| Landlords | High | "LAND LORDS" | Property investors needing tax advisory, MTD compliance, and rental accounting |
| Contractors | High | YES | IR35 considerations, personal tax, and limited company accounting |
| Small Businesses | High | YES | Bookkeeping, annual accounts, VAT, and corporation tax |
| Individuals | Medium | YES | Personal tax returns and financial planning |
| Corporates | Not targeted | N/A | Excluded from current scope |

### 4.2 Geographic Reach

The firm operates nationwide across the United Kingdom, with services available both locally and remotely. The client indicated "BOTH" for local and nationwide targeting. The website should communicate this clearly and support both local and national SEO strategies.

### 4.3 Common Client Concerns

The website content and messaging should proactively address the following concerns that prospective clients typically have:

- Pricing transparency and service packages
- Clarity on what services are included
- Whether the firm supports their specific business type (sole trader, limited company, partnership, etc.)
- Data security and confidentiality of financial information

---

## 5. Branding & Design Requirements

### 5.1 Brand Assets

| Item | Status | Notes |
|---|---|---|
| Existing Brand Guidelines | Available | Provided by client |
| Logo Files | Available | Provided by client |
| Brand Colours/Fonts | Defined | Existing colour palette to be retained |
| Professional Photos | Limited | "FEW" — additional photography may be required |
| Retain Existing Branding | No | New design direction required |
| Element to Retain | Current colour scheme | Client specifically likes the existing colour |

### 5.2 Design Direction

| Item | Details |
|---|---|
| Preferred Style | Premium (client confirmed YES to Premium) |
| Visual Tone | Clean, elegant, professional |
| Design Standards | Aligned with UK professional services expectations |
| Inspiration Site 1 | Pearl Accountants — pearlaccountants.com |
| Inspiration Site 2 | Cooper & Co — cctax.co.uk |

### 5.3 Additional Creative Services Required

| Service | Client Response | Notes |
|---|---|---|
| Copywriting | "Lets discuss" | Scope and responsibility to be determined |
| Branding improvements | YES | Refinement of visual identity for digital presence |
| Content restructuring | YES | Reorganisation of service descriptions and page content for clarity and SEO |

---

## 6. Existing Website Review

| Item | Client Response |
|---|---|
| What do you like about the current website? | Colour |
| What do you dislike about it? | "Lets discuss" |
| Which pages are important to keep? | All pages |
| Which pages should be removed or improved? | N/A |
| Features currently missing | Messaging |
| Currently getting leads through the website? | N/A |
| Analytics data available? | N/A |
| SEO rankings/content to preserve? | N/A |
| Current platform | "I think WordPress" |

---

## 7. Sitemap & Page Structure

### 7.1 Required Pages

| Page | Required | Description |
|---|---|---|
| Home | YES | Primary landing page with key services, calls to action, and brand messaging |
| About Us | YES | Company history, values, paperless approach, and team introduction |
| Services (Hub) | YES | Overview of all services with links to individual service pages |
| Service Landing Pages (x10) | YES | Dedicated pages for each of the 10 services listed in Section 2.2 |
| Industries | YES | Sector-specific pages targeting healthcare, landlords, contractors, start-ups |
| Team | Not confirmed | No explicit "yes" provided — to be discussed |
| Testimonials | YES | Client reviews and success stories to build trust and credibility |
| Blog / Insights | YES | Regularly published articles on accounting, tax, and business topics |
| FAQ | YES | Answers to common client questions about services, pricing, and processes |
| Careers | Not confirmed | No explicit response provided |
| Contact | YES | Contact form, phone, email, and consultation booking integration |
| Resources / Guides | YES | Educational content, downloadable guides ("Lets discuss" on downloadable format) |
| Privacy Policy / GDPR | YES | GDPR-compliant privacy policy |
| Terms & Conditions | YES | Legal terms of service and website use |

### 7.2 Content Strategy

- 10 dedicated service landing pages optimised for SEO
- Client confirmed regular blog/article publishing post-launch
- Downloadable resources and guides: scope to be determined ("Lets discuss")
- All content to be structured for readability, accessibility, and search engine indexing
- The client indicated 8 services to showcase, but 10 distinct service areas were identified — the final number should be confirmed

---

## 8. Functional Requirements

### 8.1 Lead Generation & Communication

| Feature | Client Response | Notes |
|---|---|---|
| Enquiry / contact forms | YES | Single recipient email address (not multiple) |
| Consultation booking functionality | YES | Calendly integration "Lets discuss" — alternative options to be evaluated |
| Live chat or chatbot | YES | AI assistant or live chat widget |
| Microsoft 365 integration | YES | Email and calendar synchronisation |
| Google Workspace integration | Not specified | No response given |
| CRM integration | YES | System to be selected |

### 8.2 Client Portal Features (Future Phase)

| Feature | Client Response | Notes |
|---|---|---|
| Secure client login | "Lets discuss" | To be scoped for future phase |
| Document upload/download | "Lets discuss" | To be scoped for future phase |
| Invoice access | NO | Explicitly not required |
| Tax document sharing | "Lets discuss" | To be scoped for future phase |
| Progress tracking | Not specified | No response given |

### 8.3 Marketing Features

| Feature | Client Response |
|---|---|
| Newsletter signup | YES |
| Email marketing integration | YES |
| Lead tracking | YES |
| Marketing automation | YES |
| Social media integration | YES |

---

## 9. SEO & Digital Marketing Requirements

### 9.1 Current SEO Status

| Item | Client Response |
|---|---|
| Currently doing SEO? | NO |
| Existing rankings to preserve? | N/A |
| Analytics data available? | N/A |
| Current marketing activities | Social media campaigns only |
| Google Ads? | NO |

### 9.2 Target Keywords

The following keyword areas have been identified by the client as priorities:

- Dental accountants / accountants for dentists
- Accountants near me
- Accountants for landlords
- Making Tax Digital for landlords
- Making Tax Digital for dentists / MTD for contractors

### 9.3 SEO Strategy Requirements

| Item | Client Response | Notes |
|---|---|---|
| Geographic Targeting | Nationwide | UK-wide coverage |
| Local SEO | "Lets discuss" | Strategy to be defined |
| Google Business Optimisation | "Lets discuss" | Setup and optimisation to be scoped |
| Blog SEO Strategy | "Lets discuss" | Content calendar and keyword strategy to be planned |
| Service/Location Landing Pages | "Lets discuss" | Whether to create location-specific pages |
| On-Page SEO | Required | Meta titles, descriptions, heading structure, schema markup on all pages |
| Technical SEO | Required | Site speed, mobile optimisation, XML sitemaps, structured data |
| Content SEO | Required | High-quality, keyword-optimised content for all service and industry pages |

---

## 10. Integrations

### 10.1 Required Integrations

| Integration | Client Response | Notes |
|---|---|---|
| Email (enquiry notifications) | Required | Automated responses and notifications to firm |
| Social media links | Required | LinkedIn and other relevant platforms |
| Online booking / scheduling | Required | Calendly or equivalent to be selected |
| Contact forms | Required | With spam protection and automated responses |
| Microsoft 365 | YES | Email and calendar synchronisation |
| CRM systems | "maybe" / YES | Mentioned in both functional and integration sections |
| Email marketing tools | Not specified | Platform to be determined |

### 10.2 Integrations Not Required

| Integration | Client Response |
|---|---|
| Xero | NO |
| QuickBooks | NO |
| Sage | NO |
| Stripe | NO |
| PayPal | NO |

### 10.3 Integrations to Discuss

| Integration | Client Response |
|---|---|
| API integrations | "discuss" |
| Existing client management systems | NO — none currently in use |

---

## 11. Content Management

| Item | Client Response |
|---|---|
| Who will manage content after launch? | "Both" — shared between firm and development partner |
| Admin training required? | YES |
| Easy editing of blogs? | YES |
| Easy editing of service pages? | Not explicitly confirmed |
| Easy editing of team profiles? | Not explicitly confirmed |
| Easy editing of testimonials? | YES |
| Role-based access for staff? | "Not at the moment" |

---

## 12. Performance & Security

### 12.1 Performance Priorities

| Item | Client Response |
|---|---|
| Fast loading speed | Important |
| SEO performance | Very important |
| Mobile optimisation | Important |

### 12.2 Security Requirements

| Item | Client Response |
|---|---|
| SSL / security hardening | "Dont know" — to be recommended |
| DDoS protection | "discuss" |
| Spam protection | "discuss" |
| Audit logs | Not specified |
| Compliance/security policies | "discuss" |
| GDPR/privacy requirements | "discuss" |
| Backup/disaster recovery | YES |

### 12.3 Hosting & Domain

| Item | Client Response |
|---|---|
| Existing hosting | "Dont know" |
| Domain management | "Its me I think" |
| Hosting account access | NO |
| Domain registrar access | YES |
| DNS settings access | "Think yes" |
| Current platform | "I think WordPress" |
| Multilingual support | NO |

---

## 13. Maintenance & Support

| Item | Client Response |
|---|---|
| Ongoing maintenance required? | Not explicitly confirmed |
| Monthly support | Not explicitly confirmed |
| SEO management | YES |
| Content updates | Not explicitly confirmed |
| Hosting management | YES |
| Security monitoring | YES |
| Future feature expansions expected? | YES |

---

## 14. Timeline & Budget

| Item | Client Response |
|---|---|
| Preferred launch date | "discuss" |
| Important deadlines/events | YES — specific dates to be confirmed |
| Phase 1 MVP approach | "discuss" |
| Full long-term solution | "discuss" |
| Budget range | "discuss" |

It is recommended that the project be scoped as a phased delivery, with an initial phase covering the core website, service pages, SEO foundations, and lead generation features, followed by subsequent phases for the client portal, advanced integrations, and marketing automation.

---

## 15. Strategic Success Criteria

### 15.1 What Would Make This Project a Major Success

The client identified the following success factors:

- Consistently generate qualified client enquiries
- Clearly communicate services and build strong trust with visitors
- Improve online visibility and search rankings
- Strengthen overall brand image as a modern, reliable accountancy firm

### 15.2 Frustrations with Previous Websites/Agencies

The client expressed the following frustrations that should be actively addressed in the delivery approach:

- Lack of clear communication and updates throughout the project
- No clear direction or understanding of requirements
- Limited collaboration and responsiveness

### 15.3 Meeting Notes — Key Business Goals

From the discovery session's additional notes section:

- Improve brand trust, credibility, and visibility in the UK market
- Increase organic traffic through SEO and content optimisation

### 15.4 Meeting Notes — Branding Preferences

- Modern, clean, and professional design style
- Clear messaging that reflects expertise in accounting and tax

### 15.5 Meeting Notes — Integrations Discussed

- Email integration for enquiries and notifications
- Social media links (LinkedIn, etc.)
- Online booking or appointment scheduling system
- Contact and enquiry forms with automated responses

### 15.6 Meeting Notes — SEO Considerations

- Keyword optimisation for accounting, tax, payroll, and advisory services
- High-quality, informative content for service pages

### 15.7 Meeting Notes — Future Phases

- Addition of a secure client portal
- Advanced SEO and digital marketing campaigns
- Online document upload and secure file-sharing features
- Live chat or AI assistant integration

### 15.8 Meeting Notes — Open Items

- Budget expectations: not discussed
- Timeline expectations: not discussed
- Risks/concerns: not discussed

---

# Part B: Technical Requirements

## 16. Technology Stack

### 16.1 Stack Overview

| Layer | Technology | Justification |
|---|---|---|
| Frontend Framework | Next.js 15 (App Router) | Server-side rendering for SEO, React Server Components for performance, built-in image optimisation, and incremental static regeneration for content pages |
| Language | TypeScript | Type safety across the full stack, improved developer experience, better maintainability, and reduced runtime errors |
| Styling | Tailwind CSS 4 | Utility-first CSS framework enabling rapid development of the premium design direction with a consistent design system |
| UI Components | shadcn/ui + Radix | Accessible, unstyled component primitives that can be fully customised to match the brand identity without framework lock-in |
| Animation | Framer Motion | Production-grade animation library for subtle micro-interactions and page transitions that elevate the premium feel |
| Headless CMS | Sanity v3 | Real-time collaborative editing, customisable studio, structured content modelling, generous free tier, and excellent Next.js integration |
| Database | Supabase (PostgreSQL) | Managed Postgres with built-in authentication, row-level security, file storage, and real-time capabilities for the future client portal |
| ORM | Prisma | Type-safe database client with auto-generated types, migrations, and a visual studio for data management |
| Authentication | Auth.js (NextAuth v5) | Flexible authentication supporting credentials, OAuth (Microsoft 365), and magic links for the future client portal |
| Email | Resend + React Email | Developer-friendly transactional email with React-based templates for consistent, branded communications |
| Hosting | Vercel (Primary) / AWS (Alternative) | Zero-config Next.js deployments, global edge network, preview environments, and built-in analytics. AWS via Amplify or SST as alternative |
| Analytics | PostHog | Privacy-friendly product analytics with session replay, funnels, and feature flags. GDPR-compliant |
| Monitoring | Sentry | Error tracking, performance monitoring, and session replay for production reliability |

---

## 17. Third-Party Integrations

| Service | Provider | Phase | Integration Method |
|---|---|---|---|
| Booking / Scheduling | Cal.com | Phase 1 | Embedded widget + API |
| CRM | HubSpot (Free) | Phase 1 | REST API via Server Actions |
| Email Marketing | Resend Broadcasts / Loops | Phase 1 | API integration |
| Live Chat | Tidio / Custom AI | Phase 1 | Widget embed / Anthropic API |
| Cookie Consent | Cookiebot / Custom | Phase 1 | Script embed |
| Forms Spam Protection | Cloudflare Turnstile | Phase 1 | Server-side validation |
| Microsoft 365 | Microsoft Graph API | Phase 2 | OAuth + REST API |
| Document Storage | Supabase Storage | Phase 2 | SDK integration |
| Payment (if needed) | Stripe | Phase 3 | Stripe SDK + webhooks |

---

## 18. Development Tooling

| Tool | Details |
|---|---|
| Package Manager | pnpm — faster installs, efficient disk usage, strict dependency resolution |
| Code Quality | ESLint + Prettier with strict TypeScript rules |
| Testing | Vitest (unit/integration) + Playwright (E2E) |
| Git Workflow | GitHub with branch protection, PR reviews, and conventional commits |
| CI/CD | GitHub Actions for linting, testing, and type checking. Vercel handles deployment |
| Environment Management | dotenv with .env.local, .env.preview, and .env.production |

---

## 19. Page Technical Specifications

### 19.1 Rendering Strategy

| Page | Strategy | Revalidation | Rationale |
|---|---|---|---|
| Home | ISR | 60 seconds | Dynamic content (testimonials, blog) with fast updates |
| About Us | SSG | On-demand | Rarely updated, revalidated on CMS publish |
| Service Pages (x10) | ISR | On-demand | Revalidated via Sanity webhook on content change |
| Industry Pages | ISR | On-demand | Revalidated via Sanity webhook |
| Blog Listing | ISR | 60 seconds | Frequently updated with new posts |
| Blog Post | ISR | On-demand | Individual posts revalidated on publish |
| Testimonials | ISR | On-demand | Updated when new testimonials are added |
| FAQ | ISR | On-demand | Revalidated via Sanity webhook |
| Contact | SSR | None | Dynamic form with server-side spam validation |
| Resources / Guides | ISR | On-demand | Revalidated when new resources are added |
| Privacy / Terms | SSG | On-demand | Rarely updated legal pages |

### 19.2 Route Structure

| Route | Page |
|---|---|
| `/` | Home page |
| `/about` | About Us |
| `/services` | Services hub page |
| `/services/[slug]` | Individual service landing page (dynamic) |
| `/industries` | Industries hub page |
| `/industries/[slug]` | Individual industry page (dynamic) |
| `/blog` | Blog listing with pagination |
| `/blog/[slug]` | Individual blog post (dynamic) |
| `/testimonials` | Client testimonials |
| `/faq` | Frequently asked questions |
| `/contact` | Contact and enquiry form |
| `/resources` | Guides and downloadable resources |
| `/book` | Consultation booking (Cal.com embed) |
| `/privacy-policy` | Privacy policy |
| `/terms` | Terms and conditions |
| `/studio/*` | Sanity Studio (admin only) |
| `/sitemap.xml` | Auto-generated XML sitemap |
| `/robots.txt` | Search engine directives |

---

## 20. SEO Technical Implementation

### 20.1 On-Page SEO

- Next.js Metadata API for dynamic meta titles, descriptions, and Open Graph tags on every page
- Structured data (JSON-LD) for: Organisation, LocalBusiness, Service, FAQ, BlogPosting, and BreadcrumbList schemas
- Canonical URLs on all pages to prevent duplicate content
- Dynamic XML sitemap generated at build time with all static and CMS-driven pages
- robots.txt configured to allow full crawling with sitemap reference
- Semantic HTML5 structure: proper heading hierarchy (h1–h6), landmark elements, and ARIA labels
- Breadcrumb navigation on all pages below the home page

### 20.2 Technical SEO

- Server-side rendering ensures all content is available to crawlers without JavaScript execution
- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Image optimisation: automatic WebP/AVIF conversion, lazy loading, responsive srcset, explicit width/height
- Font optimisation: next/font for self-hosted fonts with font-display: swap
- Code splitting: automatic per-route with dynamic imports for heavy components
- Preconnect and DNS prefetch for third-party origins (Sanity CDN, analytics, chat widget)
- Clean URL structure with trailing slash consistency

### 20.3 Content SEO Infrastructure

- SEO metadata fields on every CMS content type (title, description, OG image, no-index flag)
- Auto-generated OG images using @vercel/og for social sharing with branded templates
- Internal linking components that surface related services, industries, and blog posts
- Blog category and tag taxonomy for content organisation and discovery
- Reading time estimation displayed on blog posts

---

## 21. Performance Requirements

### 21.1 Performance Targets

| Metric | Target | Measurement |
|---|---|---|
| Largest Contentful Paint (LCP) | < 2.5 seconds | Google PageSpeed Insights |
| First Input Delay (FID) | < 100ms | Chrome UX Report |
| Cumulative Layout Shift (CLS) | < 0.1 | Google PageSpeed Insights |
| Time to First Byte (TTFB) | < 200ms | WebPageTest |
| PageSpeed Insights Score | > 90 (mobile & desktop) | Google PageSpeed Insights |
| Total Page Weight | < 500KB initial load | Chrome DevTools |
| JavaScript Bundle Size | < 100KB first load JS | Next.js build output |

### 21.2 Performance Strategies

- React Server Components to minimise client-side JavaScript
- Static generation with ISR for content pages — served from edge cache
- Lazy loading of below-fold images, chat widget, booking modal, and analytics scripts
- Critical CSS inlined, non-critical CSS deferred
- Third-party script loading via next/script with strategy='lazyOnload' for non-essential scripts
- Edge caching via Vercel's global CDN with intelligent cache headers
- Database connection pooling via Supabase's built-in pgBouncer

---

## 22. Security Requirements

### 22.1 Infrastructure Security

| Item | Details |
|---|---|
| SSL/TLS | Automatic via Vercel with Let's Encrypt. HSTS headers enforced |
| DDoS Protection | Vercel's built-in DDoS mitigation at the edge. Cloudflare as optional additional layer |
| WAF | Vercel Firewall rules for IP blocking and rate limiting on sensitive endpoints |
| Security Headers | Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| Dependency Scanning | GitHub Dependabot for automated vulnerability alerts and PRs |

### 22.2 Application Security

- Server-side form validation with Zod schemas — never trust client input
- Cloudflare Turnstile on all public forms for bot protection without user friction
- Rate limiting on API routes via Upstash Redis (e.g. 10 submissions per IP per hour)
- CSRF protection via SameSite cookies and origin checking on Server Actions
- Input sanitisation to prevent XSS — React's default escaping plus DOMPurify for rich content
- Environment variables for all secrets — never committed to the repository
- Principle of least privilege for all API keys and service accounts

### 22.3 GDPR & Privacy Compliance

- Cookie consent banner with granular category controls (necessary, analytics, marketing)
- Analytics and marketing scripts loaded only after explicit user consent
- Privacy-by-design: minimal data collection, clear retention policies, data processing records
- Right to erasure: documented process and technical capability to delete user data on request
- Data Processing Agreement (DPA) in place with all third-party processors (Sanity, Supabase, HubSpot, Resend)
- Privacy policy page with clear, plain-English explanation of data practices

---

## 23. Accessibility Requirements

The website will conform to WCAG 2.1 Level AA standards, meeting both legal requirements under the UK Equality Act 2010 and providing an inclusive experience for all users.

- Semantic HTML5 markup with proper heading hierarchy and landmark regions
- Keyboard navigation support on all interactive elements with visible focus indicators
- ARIA labels and roles for custom components (modals, dropdowns, chat widget)
- Colour contrast ratios meeting WCAG AA standards (4.5:1 for body text, 3:1 for large text)
- Alt text on all images (managed via Sanity's image metadata)
- Form labels, error messages, and validation feedback announced to screen readers
- Skip navigation link for keyboard users
- Responsive design that functions correctly at up to 200% zoom
- No content that flashes more than three times per second
- Automated accessibility testing integrated into the CI pipeline via axe-core

---

## 24. Testing Strategy

| Type | Tool | Coverage |
|---|---|---|
| Unit Tests | Vitest | Utility functions, data transformations, validation schemas, SEO metadata generation |
| Component Tests | Vitest + Testing Library | Interactive components (forms, navigation, chat), rendering with mock CMS data |
| Integration Tests | Vitest | Server Actions, API routes, CRM sync, email dispatch, webhook handlers |
| E2E Tests | Playwright | Full user journeys: browse services, submit enquiry, book consultation, subscribe to newsletter |
| Visual Regression | Playwright screenshots | Key pages compared against baselines to catch unintended layout changes |
| Accessibility | axe-core + Playwright | Automated WCAG AA checks on all page templates |
| Performance | Lighthouse CI | Core Web Vitals assertions on every deployment |
| SEO Validation | Custom checks | Meta tags, structured data, sitemap, robots.txt verified in CI |

### 24.1 Quality Gates

The following checks must pass before any code is merged to the main branch:

1. TypeScript compilation with zero errors (strict mode)
2. ESLint and Prettier checks pass with no warnings
3. All unit and integration tests pass
4. E2E test suite passes against preview deployment
5. Lighthouse performance score above 90 on mobile
6. No new accessibility violations detected by axe-core
7. Bundle size within defined budgets

---

## 25. Deployment & Infrastructure

### 25.1 Environment Strategy

| Environment | Branch | URL Pattern | Purpose |
|---|---|---|---|
| Production | main | huxridge.co.uk | Live public website |
| Preview | feature/* | *.vercel.app | Automatic per-PR deployments for review |
| Development | develop | dev.huxridge.co.uk | Integration testing and client review |

### 25.2 CI/CD Pipeline

1. Developer pushes code to a feature branch
2. GitHub Actions runs: type checking, linting, unit tests, integration tests
3. Vercel automatically deploys a preview environment
4. Playwright E2E tests run against the preview URL
5. Lighthouse CI checks performance budgets
6. Pull request reviewed and approved
7. Merge to main triggers production deployment on Vercel
8. Post-deployment smoke tests verify critical paths

### 25.3 Backup & Disaster Recovery

| Component | Strategy |
|---|---|
| Sanity CMS | Automatic daily backups with point-in-time recovery. Content history on every document |
| Supabase Database | Daily automated backups with 7-day retention. Point-in-time recovery available on Pro plan |
| Source Code | Git repository on GitHub with branch protection. Full history preserved |
| Vercel Deployments | Instant rollback to any previous deployment. All builds are immutable and retained |
| Recovery Time Objective | < 1 hour for full site restoration |
| Recovery Point Objective | < 24 hours (daily backups) for database, real-time for CMS content |

---

## 26. Monitoring & Observability

| Concern | Tool | Details |
|---|---|---|
| Error Tracking | Sentry | Real-time error alerts with stack traces, breadcrumbs, and session replay. Integrated into Next.js via @sentry/nextjs |
| Performance Monitoring | Vercel Analytics | Core Web Vitals tracking, real-user metrics, and speed insights by page and device |
| Product Analytics | PostHog | Page views, form submission funnels, service page engagement, and A/B testing |
| Uptime Monitoring | Better Uptime / UptimeRobot | HTTP checks every 60 seconds with SMS and email alerts on downtime |
| Log Management | Vercel Logs + Sentry | Server-side logs for API routes and Server Actions, structured logging for debugging |
| SEO Monitoring | Google Search Console | Indexing status, search performance, Core Web Vitals field data, and crawl errors |

---

# Part C: System Architecture

## 27. High-Level Architecture

The system follows a Jamstack-inspired architecture with server-side rendering capabilities.

```
┌─────────────────────────────────────────────────────────────┐
│                   Visitors & Clients                        │
│              (Desktop, Tablet, Mobile)                      │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                  Vercel Edge Network                        │
│     Global CDN, SSL/TLS, DDoS Protection, Image Opt.       │
│     Preview Deployments, Analytics, Instant Rollbacks       │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│             Next.js 15 Application (App Router)             │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────────┐ │
│  │ Presentation │  │   Server     │  │  Route Handlers   │ │
│  │ RSC,Tailwind │  │   Actions    │  │  Webhooks, Cron   │ │
│  │ Framer,shad  │  │ Forms, APIs  │  │  Revalidation     │ │
│  └──────────────┘  └──────────────┘  └───────────────────┘ │
│                                                             │
│  ┌────────────────────────┐  ┌────────────────────────────┐ │
│  │    ISR / SSG / SSR     │  │  Auth.js (Phase 2)         │ │
│  │  Per-page rendering    │  │  OAuth, credentials        │ │
│  └────────────────────────┘  └────────────────────────────┘ │
└───────────┬─────────────────────────────┬───────────────────┘
            │                             │
            ▼                             ▼
┌───────────────────────────┐  ┌──────────────────────────────┐
│      Sanity CMS v3        │  │   Supabase (PostgreSQL)      │
│  Services, blogs, FAQs    │  │  Leads, contacts, subs       │
│  Testimonials, settings   │  │  Prisma ORM, RLS policies    │
│  GROQ, Portable Text      │  │  File storage (Phase 2)      │
└───────────────────────────┘  └──────────────────────────────┘

             Third-Party Integrations
┌──────────┐ ┌─────────┐ ┌────────┐ ┌──────────────┐
│ HubSpot  │ │ Cal.com │ │ Resend │ │  Cloudflare  │
│   CRM    │ │ Booking │ │ Email  │ │  Turnstile   │
└──────────┘ └─────────┘ └────────┘ └──────────────┘
┌──────────┐ ┌─────────┐ ┌────────┐ ┌──────────────┐
│ PostHog  │ │ Sentry  │ │ Tidio/ │ │ Microsoft    │
│Analytics │ │ Errors  │ │ AI Chat│ │ 365 (Ph.2)   │
└──────────┘ └─────────┘ └────────┘ └──────────────┘

                  Phased Delivery
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Phase 1:    │  │  Phase 2:    │  │  Phase 3:    │
│  Core Site   │  │  Portal      │  │  AI & Auto   │
│  Pages, SEO  │  │  Auth, Docs  │  │  Chatbot,    │
│  Leads       │  │  M365        │  │  Automation   │
└──────────────┘  └──────────────┘  └──────────────┘
```

The public website is a Next.js application deployed on Vercel, consuming structured content from Sanity CMS. Server Actions handle form submissions, API integrations, and backend logic without requiring a separate API server in Phase 1. A PostgreSQL database (Supabase) provides persistent storage for leads, analytics events, and future portal data.

---

## 28. Application Layers

### 28.1 Presentation Layer

- Next.js App Router with React Server Components for zero-JS-by-default pages
- Client components used selectively for interactive elements (forms, chat widget, booking modal)
- Tailwind CSS with a custom design token system mapped to brand colours, typography, and spacing
- Responsive breakpoints: mobile (< 640px), tablet (640–1024px), desktop (> 1024px)
- Framer Motion for page transitions, scroll-triggered animations, and micro-interactions
- Optimised images via Next.js Image component with automatic WebP/AVIF conversion

### 28.2 Content Layer

- Sanity Studio deployed as a route within the Next.js application (`/studio`)
- Structured content schemas for: services, industries, blog posts, testimonials, team members, FAQs, and site settings
- GROQ queries for content fetching with ISR (Incremental Static Regeneration) for cache management
- Sanity webhooks triggering on-demand revalidation in Next.js when content is published
- Portable Text rendering for rich content with custom block components

### 28.3 Application Layer

- Next.js Server Actions for form handling, CRM integration, and email dispatch
- Route Handlers (API routes) for webhook endpoints, third-party callbacks, and cron jobs
- Zod schemas for server-side input validation on all form submissions
- Rate limiting via Upstash Redis to prevent abuse of public endpoints
- Structured error handling with Sentry integration for production monitoring

### 28.4 Data Layer

- Supabase PostgreSQL for structured data: leads, contact submissions, newsletter subscribers, portal users (Phase 2)
- Prisma ORM with typed queries, migrations, and seeding
- Supabase Storage for file uploads in the future client portal
- Row-level security policies for multi-tenant data isolation in the portal

---

## 29. Content Model (Sanity CMS)

The following content types will be defined as Sanity document schemas, enabling the client to manage all dynamic content through the studio interface:

| Schema | Fields | Used On |
|---|---|---|
| `service` | title, slug, description, icon, full content (Portable Text), SEO metadata, order | Services hub, service landing pages, home page |
| `industry` | title, slug, description, associated services, content, SEO metadata | Industries page, industry landing pages |
| `blogPost` | title, slug, author, published date, categories, excerpt, body (Portable Text), featured image, SEO metadata | Blog listing, individual posts, home page |
| `testimonial` | client name, company, quote, rating, industry, featured flag | Testimonials page, home page, service pages |
| `teamMember` | name, role, bio, photo, qualifications, order | About Us page |
| `faq` | question, answer (Portable Text), category, order | FAQ page, service pages |
| `siteSettings` | company name, logo, contact details, social links, footer content, default SEO | Global layout, header, footer |
| `page` | title, slug, body (Portable Text), SEO metadata | Privacy Policy, Terms & Conditions, generic pages |
| `resource` | title, slug, description, file attachment, category, SEO metadata | Resources / Guides page |

---

## 30. Database Schema (Supabase)

### 30.1 Phase 1 Tables

| Table | Key Columns | Purpose |
|---|---|---|
| `contact_submissions` | id, name, email, phone, service_interest, message, source_page, utm_params, created_at, synced_to_crm | Store all form submissions with attribution data |
| `newsletter_subscribers` | id, email, name, subscribed_at, status, source | Email list management and double opt-in tracking |
| `booking_events` | id, cal_event_id, name, email, service, datetime, status, created_at | Track consultation bookings from Cal.com webhooks |

### 30.2 Phase 2 Tables (Client Portal)

| Table | Key Columns | Purpose |
|---|---|---|
| `portal_users` | id, email, name, company, role, created_at, last_login | Client accounts for secure portal access |
| `documents` | id, user_id, title, file_path, file_type, uploaded_by, shared_at, expires_at | Secure document sharing between firm and clients |
| `notifications` | id, user_id, type, message, read_at, created_at | In-app notifications for document uploads and messages |

---

## 31. Phased Delivery Plan

### Phase 1 — Core Website (MVP)

The initial launch delivers the complete public-facing website with lead generation capabilities:

- Next.js application with all pages defined in Section 19.2
- Sanity CMS with all content schemas, studio access, and editorial training
- Contact and enquiry forms with Turnstile protection and email notifications
- HubSpot CRM integration for lead tracking
- Cal.com booking integration for free consultations
- Newsletter signup with email marketing integration
- Full SEO implementation: metadata, structured data, sitemap, robots.txt
- Cookie consent and GDPR compliance
- PostHog analytics and Sentry error tracking
- Vercel deployment with custom domain and SSL
- Admin training for content management via Sanity Studio

### Phase 2 — Client Portal & Advanced Features

- Secure client authentication via Auth.js with Microsoft 365 OAuth
- Client dashboard with document upload/download and sharing
- Supabase Storage for encrypted file management
- In-app notifications for document activity
- Microsoft 365 calendar and email integration via Graph API
- Advanced CRM workflows and lead scoring

### Phase 3 — AI & Automation

- AI-powered chatbot using Anthropic Claude API for service enquiries and MTD guidance
- Marketing automation: lead nurturing sequences, behavioural triggers
- Advanced analytics dashboards for the firm
- Client onboarding workflow automation
- A/B testing on landing pages and CTAs via PostHog feature flags

---

## 32. Non-Functional Requirements Summary

| Category | Requirement | Standard |
|---|---|---|
| Performance | Page load speed | LCP < 2.5s, PageSpeed > 90 |
| Performance | Availability | 99.9% uptime (Vercel SLA) |
| Security | Data encryption | TLS 1.3 in transit, AES-256 at rest (Supabase) |
| Security | Authentication | bcrypt password hashing, OAuth 2.0, session management |
| Scalability | Traffic capacity | Auto-scaling via Vercel serverless functions |
| Scalability | Content growth | No architectural limits on pages, posts, or services |
| Maintainability | Code quality | TypeScript strict mode, >80% test coverage on critical paths |
| Maintainability | Documentation | README, architectural decision records, API documentation |
| Accessibility | Compliance | WCAG 2.1 Level AA |
| Compatibility | Browsers | Last 2 versions of Chrome, Firefox, Safari, Edge |
| Compatibility | Devices | Mobile, tablet, and desktop with responsive design |
| Internationalisation | Language | English only (no i18n required) |
| Compliance | Data protection | UK GDPR compliant |

---

# Part D: Appendices

## 33. Items Requiring Further Discussion

The following items were flagged during the discovery session as requiring further discussion and agreement before finalisation:

| # | Item | Category | Source |
|---|---|---|---|
| 1 | Client onboarding workflow and requirements | Functional | Questionnaire Q2 |
| 2 | Calendly vs alternative booking system selection | Integration | Questionnaire Q7 |
| 3 | Secure client login and document portal | Future Phase | Questionnaire Q7 |
| 4 | Tax document sharing features | Future Phase | Questionnaire Q7 |
| 5 | Downloadable resources and guides format | Content | Questionnaire Q6 |
| 6 | Copywriting scope and responsibility | Content | Questionnaire Q4 |
| 7 | Local SEO strategy | SEO | Questionnaire Q8 |
| 8 | Google Business optimisation | SEO | Questionnaire Q8 |
| 9 | Blog SEO strategy | SEO | Questionnaire Q8 |
| 10 | Service/location landing page strategy | SEO | Questionnaire Q8 |
| 11 | GDPR and privacy compliance approach | Security | Questionnaire Q9 |
| 12 | Security hardening and DDoS protection | Security | Questionnaire Q12 |
| 13 | Spam protection approach | Security | Questionnaire Q12 |
| 14 | Compliance/security policies | Security | Questionnaire Q12 |
| 15 | CRM system selection | Integration | Questionnaire Q7/Q11 |
| 16 | Email marketing platform selection | Integration | Questionnaire Q11 |
| 17 | API integration requirements | Technical | Questionnaire Q11 |
| 18 | Phased delivery approach (MVP vs full build) | Project | Questionnaire Q14 |
| 19 | Budget and timeline agreement | Project | Questionnaire Q14 |
| 20 | Preferred launch date | Project | Questionnaire Q14 |
| 21 | What client dislikes about current website | Design | Questionnaire Q5 |
| 22 | Team page inclusion | Content | Questionnaire Q6 |
| 23 | Careers page inclusion | Content | Questionnaire Q6 |
| 24 | Number of services (8 stated vs 10 identified) | Content | Questionnaire Q6 |
| 25 | SSL / security hardening needs | Security | Questionnaire Q12 |

---

## 34. Risks, Dependencies & Constraints

### 34.1 Key Risks

| Risk | Mitigation | Severity |
|---|---|---|
| Content delays | Establish content delivery schedule with clear deadlines and responsibilities | Medium |
| Unclear hosting setup | Audit current hosting and domain arrangement early in the project | Medium |
| Scope creep on future features | Clearly define Phase 1 scope and defer portal/advanced features to later phases | High |
| Limited professional photography | Plan a professional photo shoot or source high-quality stock imagery | Low |
| Communication gaps | Establish regular progress updates and a clear point of contact on both sides | High |
| Large number of "discuss" items | Schedule a follow-up session to resolve all open items before development begins | Medium |
| Client unfamiliarity with hosting/domain setup | Provide guided assistance during DNS and hosting configuration | Low |

### 34.2 Client Feedback on Previous Agencies

The client expressed the following frustrations with previous website projects, which should be actively addressed:

- Lack of clear communication and updates throughout the project
- No clear direction or understanding of requirements
- Limited collaboration and responsiveness

The development partner should establish a clear communication cadence, provide regular progress reports, and ensure the client is involved in key decisions throughout the project.

---

## 35. Technology Decision Log

| Decision | Chosen | Alternatives Considered |
|---|---|---|
| Frontend framework | Next.js (App Router) | Angular, React + Express, Nuxt.js, Astro |
| CMS | Sanity v3 | Contentful, Strapi, WordPress headless |
| Database | Supabase (PostgreSQL) | PlanetScale, Neon, Railway Postgres |
| Hosting | Vercel | AWS Amplify, SST on AWS, Cloudflare Pages |
| ORM | Prisma | Drizzle, Kysely, raw SQL |
| Email service | Resend | SendGrid, AWS SES, Postmark |
| CRM | HubSpot (Free tier) | Salesforce, Pipedrive, FluentCRM |
| Booking | Cal.com | Calendly, Amelia, custom solution |
| Analytics | PostHog | Google Analytics, Plausible, Fathom |

---

## 36. Glossary

| Term | Definition |
|---|---|
| ISR | Incremental Static Regeneration — Next.js feature that regenerates static pages in the background when content changes |
| SSG | Static Site Generation — pages pre-rendered at build time for maximum performance |
| SSR | Server-Side Rendering — pages rendered on each request for dynamic content |
| RSC | React Server Components — components that execute on the server, sending zero JavaScript to the browser |
| GROQ | Graph-Relational Object Queries — Sanity's query language for fetching structured content |
| RLS | Row-Level Security — PostgreSQL feature that restricts database access at the row level based on user context |
| Core Web Vitals | Google's metrics for user experience: LCP (loading), FID (interactivity), CLS (visual stability) |
| Edge Function | Serverless function executed at the CDN edge closest to the user for minimal latency |
| Portable Text | Sanity's rich text format that stores content as structured data rather than HTML |
| MTD | Making Tax Digital — HMRC's requirement for businesses to keep digital records and submit tax returns using compatible software |
| LCP | Largest Contentful Paint — measures loading performance |
| FID | First Input Delay — measures interactivity |
| CLS | Cumulative Layout Shift — measures visual stability |
| TTFB | Time to First Byte — measures server responsiveness |
| WCAG | Web Content Accessibility Guidelines — international standard for web accessibility |
| GDPR | General Data Protection Regulation — UK/EU data protection law |
| HSTS | HTTP Strict Transport Security — forces browsers to use HTTPS |
| CSP | Content Security Policy — HTTP header that prevents XSS and data injection attacks |
| DPA | Data Processing Agreement — contract required under GDPR between data controllers and processors |
| IR35 | UK tax legislation designed to combat tax avoidance by workers supplying services via an intermediary |

---

## 37. Discovery Session Notes

The following raw notes were captured during the discovery meeting for reference. All items have been incorporated into the relevant sections of this document.

**Key business goals:**
- Improve brand trust, credibility, and visibility in the UK market
- Increase organic traffic through SEO and content optimisation

**Important technical notes:**
- Mobile-responsive and fully optimised for all devices
- Contact forms with spam protection and email integration
- Fast loading speed and lightweight design

**Branding preferences:**
- Modern, clean, and professional design style
- Clear messaging that reflects expertise in accounting and tax

**Integrations discussed:**
- Email integration for enquiries and notifications
- Social media links (LinkedIn, etc.)
- Online booking or appointment scheduling system
- Contact and enquiry forms with automated responses

**SEO considerations:**
- Keyword optimisation for accounting, tax, payroll, and advisory services
- High-quality, informative content for service pages

**Future phases:**
- Addition of a secure client portal
- Advanced SEO and digital marketing campaigns
- Online document upload and secure file-sharing features
- Live chat or AI assistant integration

**Open items from meeting:**
- Budget expectations: not discussed
- Timeline expectations: not discussed
- Risks/concerns: not discussed

---

## 38. Approval & Sign-Off

This document serves as the consolidated specification for the Huxridge Accountants & Tax Consultants website project. Upon review and agreement, both parties should sign below to confirm acceptance of the documented requirements.

**Client**

| | |
|---|---|
| Name | |
| Signature | |
| Date | |

**Development Partner**

| | |
|---|---|
| Name | |
| Signature | |
| Date | |

---

*Document version 1.0 — Confidential — Huxridge Accountants & Tax Consultants*
