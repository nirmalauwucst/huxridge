# Huxridge Accountants & Tax Consultants — Implementation Plan

**Project:** Huxridge Website Rebuild  
**Stack:** Next.js 15, TypeScript, Tailwind CSS 4, Sanity v3, Supabase, Vercel  
**Created:** 25 May 2026  

---

## Overview

The plan is structured so that **Phase 1A + 1B produce a fully visual, navigable client demo** — all real pages, real layout, realistic placeholder content — deployed on a Vercel preview URL before any backend or CMS is wired up. After client sign-off on the look and feel, subsequent phases add CMS, forms, integrations, and go-live readiness.

```
Phase 1A — Project Scaffold & Design System        (Days 1–5)
Phase 1B — Static Frontend + Client Demo           (Days 6–18)   ← DEMO MILESTONE
Phase 1C — CMS Integration & Content               (Days 19–28)
Phase 1D — Forms, Integrations & Backend           (Days 29–38)
Phase 1E — SEO, Performance & Launch               (Days 39–46)  ← GO-LIVE
─────────────────────────────────────────────────────────────
Phase 2  — Client Portal & Microsoft 365           (Month 3–4)
Phase 3  — AI Chatbot & Marketing Automation       (Month 5+)
```

---

## Phase 1A — Project Scaffold & Design System
**Duration:** Days 1–5  
**Goal:** A running Next.js app with the full design system in place. Every developer can start building pages immediately with consistent tokens and components.

### Tasks

#### 1. Repository & Tooling Setup
- [ ] Initialise GitHub repository with branch protection (`main`, `develop`, `feature/*` workflow)
- [x] Scaffold Next.js 15 app with App Router and TypeScript strict mode (`create-next-app`) *(shipped on Next.js 16.2.6 — see Deviations)*
- [x] Install and configure pnpm as package manager
- [x] Configure Tailwind CSS 4 with custom config *(CSS-based `@theme` tokens — see Deviations)*
- [x] Install and configure shadcn/ui with Radix primitives *(Radix primitives installed; components hand-built rather than via shadcn CLI — see Deviations)*
- [x] Install Framer Motion
- [x] Configure ESLint (next/core-web-vitals + strict TypeScript rules) and Prettier
- [x] Set up `.env.local`, `.env.preview`, `.env.production` templates with placeholder keys *(single `.env.example` — see Deviations)*
- [x] Add `.gitignore` entries for env files, ensure no secrets are ever committed

#### 2. CI/CD Pipeline
- [x] Create GitHub Actions workflow: type-check → lint → build on every push *(also runs `format:check`)*
- [x] Connect repository to Vercel; enable automatic preview deployments on all branches
- [x] Verify a `develop` branch deployment is accessible at a stable preview URL

#### 3. Design Token System
Extract brand tokens from the client's existing colour scheme and build into Tailwind config:
- [x] Colour palette: primary, secondary, accent, neutral, error, success — map brand colours exactly *(placeholder palette pending client hex values — see Deviations)*
- [x] Typography scale: font family (next/font for self-hosted), sizes, weights, line heights
- [x] Spacing scale: section padding, container max-widths, grid gaps
- [x] Shadow, border radius, and animation duration tokens
- [x] Dark mode: decide on support (likely no dark mode for professional accountancy site — confirm) *(decided: no dark mode for Phase 1)*

#### 4. Core Layout Components
- [x] `<Header>` — logo, navigation links, CTA button ("Book a Consultation"), mobile hamburger menu
- [x] `<Footer>` — company details, service links, industry links, social icons (LinkedIn), legal links, newsletter signup teaser *(newsletter signup teaser deferred to Phase 1B — see Deviations)*
- [x] `<RootLayout>` — wraps all pages with Header + Footer + skip navigation link
- [x] `<Container>` — max-width wrapper with responsive horizontal padding
- [x] `<Section>` — section wrapper with configurable background, padding variants

#### 5. Reusable UI Components
- [x] `<Button>` — primary, secondary, ghost variants; sizes; loading state
- [x] `<Card>` — service card, testimonial card, blog card, team card
- [x] `<Badge>` — for industry tags and service categories
- [x] `<Breadcrumb>` — renders breadcrumb trail from route
- [x] `<SectionHeading>` — consistent h2 + subtitle + optional CTA pattern used across pages
- [x] `<CTABanner>` — full-width call-to-action strip ("Ready to get started?")
- [x] `<Icon>` — wrapper for SVG icons used for services (one per service)

### QA — Phase 1A
- [x] `pnpm typecheck` passes with zero errors
- [x] `pnpm lint` passes with zero warnings
- [x] `pnpm build` completes without errors
- [x] Design tokens render correctly in a sample Storybook/page (`/dev-preview`)
- [ ] Header and Footer render correctly on mobile (375px), tablet (768px), desktop (1280px) *(not yet manually verified in browser)*
- [ ] Navigation menu opens and closes on mobile *(not yet manually verified in browser)*
- [ ] Verify Vercel preview URL is accessible and auto-deploys on push

### Deviations from the plan — Phase 1A

| # | Item | What we did | Why |
|---|---|---|---|
| 1 | Next.js version | Shipped on **Next.js 16.2.6** (Turbopack) instead of 15 | `create-next-app@latest` now ships 16 as GA. Fully compatible with the rest of the stack; no plan changes required. |
| 2 | Brand colour palette | Seeded a **placeholder navy / slate / warm-gold palette** with a flag in `globals.css` | Spec §5 says "retain existing colour scheme" but provides no hex values. Palette must be replaced with client-supplied brand colours before the Phase 1B client demo. |
| 3 | Tailwind config | Used **CSS-first `@theme` tokens in `globals.css`** instead of a `tailwind.config.ts` | Tailwind 4 moved configuration into CSS; the legacy JS config is no longer the recommended path. |
| 4 | shadcn/ui setup | **Radix primitives installed and components hand-built** to project conventions; shadcn CLI was not run | Faster scaffold, exact control over tokens/variants, no copied generated code to maintain. We can still pull individual shadcn recipes later if useful. |
| 5 | LinkedIn icon | Inline SVG in `footer.tsx` rather than `lucide-react` | `lucide-react` v1 removed brand icons; an inline SVG is the lightest replacement. |
| 6 | Env templates | Single **`.env.example`** with phase-tagged variables, not separate `.env.local` / `.env.preview` / `.env.production` files | Vercel's preview/production env vars live in Project Settings, not in committed files. One template that maps to the spec's env appendix is clearer and avoids drift. |
| 7 | Footer newsletter teaser | **Deferred to Phase 1B** | The newsletter Server Action lives in Phase 1D; we'll build the UI in 1B alongside the rest of the page-level content so the component lands with real placement context. |
| 8 | Dark mode | **No dark mode** for Phase 1 | Plan flagged this for confirmation; professional UK accountancy sites (and both inspiration sites) are light-only. Revisit post-launch if needed. |
| 9 | GitHub repo + Vercel hookup | **Not done** — left to the user | Both require account-level browser actions (org choice, branch protection rules, Vercel project link). Local artifacts (CI workflow, `pnpm-lock.yaml`, `.gitignore`) are ready for the first push. |
| 10 | Responsive QA gates | **Not yet manually verified** in a browser | Code passes typecheck/lint/build and the dev server is running; cross-breakpoint and mobile-menu checks are next, then signed off before declaring 1A fully closed. |

---

## Phase 1B — Static Frontend + Client Demo
**Duration:** Days 6–18  
**Goal:** Every public-facing page is built with realistic placeholder content (no CMS, no backend). The site is navigable end-to-end and looks production-quality. A Vercel preview URL is shared with the client for feedback.

All pages use **hardcoded/mock content** at this stage. Content is representative and realistic (not "Lorem ipsum") so the client can evaluate messaging structure and layout.

### Pages to Build

#### Home Page (`/`)
- [x] **Hero section** — headline, subheadline, two CTAs ("Book a Free Consultation" + "View Our Services"), hero image/illustration
- [x] **Services overview strip** — icon cards for all 10 services, links to service pages
- [x] **Why Huxridge section** — 3–4 value proposition cards (Fully Paperless, Proactive Service, Cloud Accounting, UK Nationwide)
- [x] **Target industries strip** — 4 sector cards (Healthcare, Landlords, Contractors, Start-ups)
- [x] **Featured testimonials** — 3 testimonial cards with name, company, quote, rating
- [x] **Latest blog posts** — 3 blog post cards with title, date, excerpt
- [x] **CTA banner** — "Get your free initial consultation today"
- [x] **Stats section** — e.g. "10 specialist services", "UK-wide", "100% paperless"
- [x] Framer Motion: hero fade-in, scroll-triggered section reveals *(ScrollReveal component built; hero uses FadeIn)*

#### About Us (`/about`)
- [x] Company story and founding (2022), values, paperless approach
- [x] "Our Approach" section — paperless workflow, cloud tools, proactive advisory
- [x] Team placeholder section (headshots + bios — with note to confirm team page)
- [x] Accreditations/qualifications strip
- [x] CTA banner

#### Services Hub (`/services`)
- [x] Intro paragraph and value overview
- [x] Grid of all 10 service cards — icon, title, short description, "Learn more" link
- [x] "Not sure which service you need?" CTA to contact page

#### Service Landing Pages — 10 pages (`/services/[slug]`)
Build all 10 individually as static pages initially with appropriate placeholder structure:

| Slug | Title |
|---|---|
| `bookkeeping` | Bookkeeping |
| `management-accounts` | Management Accounts |
| `personal-tax` | Personal Tax |
| `annual-accounts` | Production of Annual Accounts |
| `corporation-tax` | Corporation Tax |
| `internal-audit` | Internal Audit |
| `making-tax-digital` | Making Tax Digital (MTD) |
| `vat-services` | VAT Services |
| `company-formation` | New Company Formation & Start-Up Advisory |
| `company-secretarial` | Company Secretarial Services |

Each service page structure:
- [x] Hero: title, description, "Get Started" CTA
- [x] What's included section (bullet list)
- [x] Who it's for (target client callout)
- [x] Key benefits section (3-column feature grid)
- [x] Related services strip (3 links to other services)
- [x] Testimonial(s) related to service
- [x] FAQ accordion (3–5 questions per service)
- [x] CTA banner: "Book a free consultation"
- [x] Breadcrumb: Home > Services > [Service Name]

#### Industries Hub (`/industries`)
- [x] Overview of target sectors
- [x] 4 industry cards: Healthcare, Landlords, Contractors, Start-ups

#### Industry Landing Pages — 4 pages (`/industries/[slug]`)

| Slug | Title |
|---|---|
| `healthcare` | Accountants for Healthcare Professionals |
| `landlords` | Accountants for Landlords & Property Investors |
| `contractors` | Accountants for Contractors & Freelancers |
| `startups` | Accountants for Start-Ups & New Businesses |

Each industry page structure:
- [x] Hero: sector headline, sector-specific subheadline, CTA
- [x] "Challenges you face" section (pain points)
- [x] "How we help" section (services relevant to this sector)
- [x] Related services grid (linked service cards)
- [x] Testimonials from clients in this sector
- [x] FAQ accordion
- [x] CTA banner
- [x] Breadcrumb

#### Testimonials (`/testimonials`)
- [x] Page hero
- [x] Grid of 6–8 testimonial cards (mock data: name, company, quote, rating, sector)
- [x] Filter by industry (visual only at this stage)

#### Blog Listing (`/blog`)
- [x] Page hero with "Latest Insights" heading
- [x] Grid of 6 blog post cards (mock data: title, excerpt, date, reading time, category)
- [x] Category filter strip (visual only at this stage)
- [x] Pagination component (visual only)

#### Blog Post (`/blog/[slug]`)
Build one sample post to validate the template:
- [x] Full article layout: featured image, title, author, date, reading time, body content
- [ ] Table of contents sidebar *(deferred — see Deviations)*
- [x] Author bio card
- [x] Related posts strip
- [x] "Share this article" links
- [x] CTA banner at bottom

#### FAQ (`/faq`)
- [x] Page hero
- [x] Category tabs (Services, Pricing, Process, MTD, General)
- [x] Accordion FAQ items per category (5+ questions per tab with realistic placeholder answers)
- [x] CTA banner

#### Contact (`/contact`)
- [x] Page hero
- [x] Contact form UI: Name, Email, Phone, Service Interest (dropdown), Message, "How did you hear about us?"
- [x] Form validation states (visual only — no submission yet)
- [x] Contact details: phone, email, address (or "nationwide, remote-first")
- [x] "Book a consultation" button linking to `/book`
- [x] Map or location illustration (placeholder)

#### Consultation Booking (`/book`)
- [x] Page hero: "Book Your Free Initial Consultation"
- [x] Placeholder for Cal.com embed (styled box with "Booking widget loads here")
- [x] Supporting copy: what to expect, how long, what to prepare

#### Resources / Guides (`/resources`)
- [x] Page hero
- [x] Grid of guide cards (mock data: title, description, category, "Download" or "Read" CTA)
- [x] Category filter (visual only)

#### Privacy Policy (`/privacy-policy`)
- [x] Placeholder GDPR-compliant privacy policy template (full text)
- [x] Last updated date

#### Terms & Conditions (`/terms`)
- [x] Placeholder terms of service text
- [x] Last updated date

#### 404 Page
- [x] Branded not-found page with navigation back to home

### QA — Phase 1B

#### Functional
- [ ] All nav links resolve to the correct page (no broken links)
- [ ] All "Book a Consultation" CTAs link to `/book`
- [ ] All service cards on home / services hub link to correct service pages
- [ ] All industry cards link to correct industry pages
- [ ] Breadcrumbs show correct trail on all pages
- [ ] Mobile hamburger menu: opens, closes, links navigate correctly
- [ ] 404 page appears for an unknown URL

#### Visual / Responsive
- [ ] Test all pages at three breakpoints: 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] No horizontal overflow / scroll on any page at mobile width
- [ ] Images are not distorted or cropped incorrectly
- [ ] Typography is readable at all sizes (minimum 16px body on mobile)
- [ ] CTAs are tappable on mobile (44px minimum touch target)
- [ ] Footer links are not overlapping on small screens

#### Design Fidelity
- [ ] Brand colours applied consistently — no default Tailwind blues leaking through
- [ ] Font family matches client brand throughout
- [ ] Spacing feels premium: not cramped, consistent section rhythm
- [ ] Service icons are consistent in style and size
- [ ] Framer Motion animations play correctly and do not cause CLS

#### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, macOS + iOS)
- [ ] Edge (latest)

#### Performance (pre-backend baseline)
- [ ] Run Lighthouse on Home, a Service page, and Contact — score > 90 on desktop
- [ ] No console errors or warnings in browser devtools

### Deviations from the plan — Phase 1B

| # | Item | What we did | Why |
|---|---|---|---|
| 1 | Blog post table of contents | Deferred | TOC requires client-side scroll-spy logic; belongs in Phase 1C once Portable Text body structure is known. Full article layout, author bio, related posts, and CTA are all present. |
| 2 | New components added | `accordion.tsx`, `animated.tsx` (`FadeIn` + `ScrollReveal`), `newsletter-signup.tsx`, `faq-tabs.tsx` | Required for accordion FAQ, Framer Motion reveals, newsletter form in footer, and interactive FAQ page tabs. |
| 3 | Mock data centralised | `src/lib/mock-data.ts` with `mockServices`, `mockIndustries`, `mockTestimonials`, `mockBlogPosts`, `mockFaqs`, `mockResources` | Single source of truth for all placeholder content; easy to swap for CMS queries in Phase 1C. |
| 4 | Blog post SSG | All 6 mock post slugs pre-generated via `generateStaticParams` | The plan said "one sample post" but generating all 6 costs nothing at build time and gives the client a more realistic demo of the blog. |
| 5 | Footer newsletter signup | Added newsletter signup row above bottom bar | Deferred from Phase 1A per plan; implemented here alongside the newsletter UI component. |
| 6 | Build output | 36 static pages generated, `pnpm typecheck` and `pnpm lint` pass with zero errors | — |

---

## CLIENT DEMO MILESTONE

At the end of Phase 1B:

1. **Share the Vercel `develop` branch preview URL** with the client
2. Provide a walkthrough guide: list of all pages with direct URLs
3. Collect feedback on:
   - Overall look and feel vs. the two inspiration sites (Pearl Accountants, Cooper & Co)
   - Colour usage (they like the existing colour scheme — confirm it carries through)
   - Hero and messaging — does it resonate with target audience?
   - Service page structure — anything missing?
   - Navigation structure — is anything hard to find?
   - Any content that needs to be added, removed, or reordered
4. Document all feedback items, categorise as: **Fix before Phase 1C**, **Nice to have**, **Phase 2+**
5. Apply design feedback before moving to Phase 1C

---

## Phase 1C — CMS Integration & Content
**Duration:** Days 19–28  
**Goal:** Sanity CMS is live, all pages pull real content, and the client can edit content through Sanity Studio.

### Tasks

#### Sanity Setup
- [ ] Create Sanity v3 project with project ID and dataset (`production`)
- [ ] Mount Sanity Studio at `/studio` within the Next.js app
- [ ] Configure `next-sanity` client with CDN and token
- [ ] Set up Sanity CORS origins for `localhost` and Vercel preview/production URLs

#### Content Schemas
Create the following Sanity document schemas:

- [ ] `service` — title, slug, description, icon name, content (Portable Text), features list, target clients, FAQs (array), SEO metadata (title, description, OG image)
- [ ] `industry` — title, slug, description, associated services (references), content, challenges list, SEO metadata
- [ ] `blogPost` — title, slug, author, publishedAt, categories (array), excerpt, body (Portable Text), featuredImage, readingTime, SEO metadata
- [ ] `testimonial` — clientName, company, quote, rating, industry, featured (boolean)
- [ ] `teamMember` — name, role, bio, photo, qualifications, order
- [ ] `faq` — question, answer (Portable Text), category, order
- [ ] `resource` — title, slug, description, file (asset), category, SEO metadata
- [ ] `page` — title, slug, body (Portable Text), SEO metadata (for Privacy Policy, Terms, etc.)
- [ ] `siteSettings` (singleton) — companyName, logo, phone, email, address, socialLinks, defaultSEO

#### Content Migration
- [ ] Enter all 10 service page content into Sanity (confirm final count with client)
- [ ] Enter all 4 industry page content into Sanity
- [ ] Enter 6 initial testimonials (real or approved placeholders)
- [ ] Enter 3 initial blog posts (or placeholder posts)
- [ ] Enter FAQ content (organised by category)
- [ ] Enter siteSettings (logo, contact details, social links)
- [ ] Enter Privacy Policy and Terms content

#### Next.js Integration
- [ ] Replace all hardcoded mock data with GROQ queries
- [ ] Implement ISR / SSG / SSR per rendering strategy defined in spec (Section 19.1)
- [ ] Set up Sanity webhook endpoint (`/api/revalidate`) for on-demand ISR revalidation
- [ ] Add `generateStaticParams` for `[slug]` routes (services, industries, blog)
- [ ] Implement Portable Text renderer with custom block components (headings, links, lists, images)
- [ ] Auto-generate Open Graph images via `@vercel/og` for all CMS content types

### QA — Phase 1C
- [ ] All 10 service pages render from CMS data (no hardcoded content remaining)
- [ ] All 4 industry pages render from CMS data
- [ ] Blog listing shows real posts from CMS with correct dates and reading times
- [ ] Blog post page renders Portable Text correctly (headings, links, images, lists)
- [ ] Testimonials on home page and service pages pull from CMS
- [ ] FAQs on FAQ page and service pages pull from CMS
- [ ] Footer contact details and social links come from `siteSettings`
- [ ] Sanity webhook revalidation: update a service in Studio → page refreshes within 5 seconds
- [ ] `generateStaticParams` builds all service and industry slugs at build time
- [ ] `pnpm build` succeeds — no missing data errors during static generation
- [ ] Admin can log into Sanity Studio and edit content without developer help
- [ ] Sanity Studio is protected from public access (admin-only route)

---

## Phase 1D — Forms, Integrations & Backend
**Duration:** Days 29–38  
**Goal:** All forms are functional and go to the right places. Leads captured in HubSpot. Booking works. Emails send. Cookie consent is compliant.

### Tasks

#### Contact Form (Server Action)
- [ ] Wire up contact form (`/contact`) to a Server Action
- [ ] Zod schema validation on server side (name, email, phone, message, service interest)
- [ ] Cloudflare Turnstile integration for bot protection (server-side token verification)
- [ ] Rate limiting via Upstash Redis: max 10 submissions per IP per hour on all form endpoints
- [ ] On success: write record to Supabase `contact_submissions` table (with UTM params if present)
- [ ] On success: send notification email to firm via Resend (branded email template)
- [ ] On success: send confirmation email to the enquirer via Resend
- [ ] On success: sync lead to HubSpot CRM via REST API (Server Action)
- [ ] Form: success and error states with user-friendly messages
- [ ] Form: loading/submitting state with spinner on button

#### Supabase Setup
- [ ] Create Supabase project
- [ ] Set up Prisma schema with Phase 1 tables: `contact_submissions`, `newsletter_subscribers`, `booking_events`
- [ ] Run initial migration (`prisma migrate deploy`)
- [ ] Configure Prisma client in Next.js with connection pooling via Supabase pgBouncer URL

#### Newsletter Signup
- [ ] Build newsletter signup component (used in footer and inline on pages)
- [ ] Server Action: validate email, check for duplicate, insert into `newsletter_subscribers`, send welcome email via Resend
- [ ] Double opt-in: send confirmation email with a verification link
- [ ] Verification route (`/api/newsletter/confirm`) updates subscriber status to `confirmed`

#### Booking Integration (Cal.com)
- [ ] Set up Cal.com account and configure "Free Initial Consultation" event type
- [ ] Embed Cal.com inline booking widget on `/book` page (replace placeholder)
- [ ] Configure Cal.com webhook → `booking_events` table in Supabase on booking confirmed
- [ ] Send booking confirmation email via Resend with appointment details
- [ ] Notify firm of new booking via email

#### HubSpot CRM
- [ ] Set up HubSpot free account and obtain API key
- [ ] Create HubSpot contact from every form submission via REST API
- [ ] Map fields: name, email, phone, service interest, source page, UTM parameters
- [ ] Tag contacts by source (website enquiry, newsletter signup, booking)

#### Email Templates (React Email)
- [ ] Enquiry notification to firm (name, contact, service, message)
- [ ] Enquiry confirmation to prospect ("Thank you for your enquiry")
- [ ] Newsletter welcome email
- [ ] Newsletter double opt-in confirmation email
- [ ] Booking confirmation email

#### Cookie Consent (GDPR)
- [ ] Implement cookie consent banner: necessary, analytics, marketing categories
- [ ] Store consent in a cookie, reload preferences on return visits
- [ ] PostHog and analytics scripts only load after analytics consent is granted
- [ ] Marketing scripts only load after marketing consent is granted
- [ ] "Manage preferences" link in footer opens consent modal

#### Analytics & Monitoring
- [ ] Install PostHog: page view tracking, form submission events, service page engagement
- [ ] Install Sentry: error boundary on root layout, API route error capture, session replay
- [ ] Verify PostHog events fire on form submit, booking click, newsletter signup
- [ ] Verify Sentry catches a test error and reports it to the dashboard

### QA — Phase 1D

#### Contact Form
- [ ] Submit valid form → record appears in Supabase `contact_submissions`
- [ ] Submit valid form → HubSpot contact created with all fields mapped correctly
- [ ] Submit valid form → notification email received by firm email address
- [ ] Submit valid form → confirmation email received by the test enquirer
- [ ] Submit with missing required fields → validation errors shown inline, no submission
- [ ] Submit with invalid email format → validation error shown
- [ ] Submit very long message (> 1000 chars) → server validates and accepts or rejects cleanly
- [ ] Turnstile token missing/invalid → submission rejected with user-friendly error
- [ ] Submit 11 times from same IP → 11th request is rate-limited (HTTP 429 response)

#### Newsletter
- [ ] Enter email in footer signup → welcome email received
- [ ] Click confirmation link in welcome email → subscriber status changes to `confirmed` in DB
- [ ] Enter same email twice → duplicate rejected with appropriate message
- [ ] Enter invalid email format → validation error

#### Booking
- [ ] Cal.com widget loads on `/book` page
- [ ] Complete a test booking → `booking_events` row created in Supabase
- [ ] Booking confirmation email received
- [ ] Firm notification email received

#### Cookie Consent
- [ ] Banner appears on first visit
- [ ] Accepting all consent → PostHog loads and fires a page view event
- [ ] Rejecting analytics → PostHog does not load (check Network tab — no PostHog requests)
- [ ] Revisiting site → banner does not reappear (consent cookie present)
- [ ] Clicking "Manage preferences" → modal opens with current preferences pre-set

#### Email
- [ ] All email templates render correctly in email clients: Gmail, Apple Mail, Outlook
- [ ] Emails are not flagged as spam (check SPF/DKIM records for Resend domain)
- [ ] Plain-text fallback included in all emails

---

## Phase 1E — SEO, Performance & Launch
**Duration:** Days 39–46  
**Goal:** Full SEO implementation, performance targets met, accessibility verified, custom domain live. Site is ready for public launch.

### Tasks

#### SEO Implementation
- [ ] Next.js Metadata API: unique `title`, `description`, `openGraph`, `twitter` metadata on every page
- [ ] Dynamic metadata generated from Sanity fields for all CMS pages
- [ ] JSON-LD structured data: `Organisation`, `LocalBusiness` on home; `Service` on each service page; `FAQPage` on FAQ page; `BlogPosting` on blog posts; `BreadcrumbList` on all inner pages
- [ ] Canonical URLs on every page
- [ ] Dynamic XML sitemap (`/sitemap.xml`): includes all static routes + all CMS-driven slugs
- [ ] `robots.txt` (`/robots.txt`): allow full crawl, reference sitemap, block `/studio`
- [ ] Breadcrumb navigation rendered on all pages below home (already built in Phase 1B — verify JSON-LD matches rendered breadcrumbs)
- [ ] Internal linking: each service page links to 3 related services; each industry page links to relevant service pages

#### Performance Audit
- [ ] Run Lighthouse CI on home, a service page, blog listing, contact page
- [ ] Target: PageSpeed score > 90 on both mobile and desktop
- [ ] LCP < 2.5s, CLS < 0.1 on all tested pages
- [ ] Audit and optimise any image missing `width`/`height` attributes (causes CLS)
- [ ] Verify `next/font` is used for all fonts (no FOUT)
- [ ] Verify third-party scripts (PostHog, Sentry, Tidio) are loaded via `next/script strategy='lazyOnload'`
- [ ] Verify `next/image` is used for all images (WebP/AVIF conversion, lazy load, responsive srcset)
- [ ] Check Next.js build output: first-load JS < 100KB budget

#### Accessibility Audit
- [ ] Run axe-core against home, services hub, a service page, contact, blog post
- [ ] Zero critical or serious violations allowed
- [ ] Verify keyboard navigation: Tab through all interactive elements on every page type, focus indicator visible
- [ ] Verify skip-to-content link appears on Tab from address bar
- [ ] Verify all images have meaningful alt text (populated in Sanity image metadata field)
- [ ] Verify colour contrast meets WCAG AA (4.5:1 body, 3:1 large text) — use browser DevTools contrast checker
- [ ] Screen reader spot-check (VoiceOver / NVDA) on home page and contact form

#### Final Content Review
- [ ] Client reviews and approves all page content
- [ ] Placeholder text ("TBD", "Lorem ipsum") replaced on every page
- [ ] All service page content is accurate, reviewed by the firm
- [ ] Privacy Policy and Terms reviewed by firm (recommend solicitor review)
- [ ] Copyright year and company details correct in footer

#### Security Headers
- [ ] Configure `Content-Security-Policy` header in `next.config.ts`
- [ ] Configure `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`
- [ ] Verify HSTS header is set by Vercel
- [ ] Verify all environment variables are in Vercel project settings, not in code
- [ ] Run `pnpm audit` — zero high-severity npm vulnerabilities
- [ ] Enable GitHub Dependabot for automated dependency vulnerability alerts

#### Domain & Hosting
- [ ] Transfer or point domain to Vercel (update DNS A/CNAME records)
- [ ] Verify SSL certificate provisioned and HTTPS redirect active
- [ ] Set up `develop` branch as `dev.huxridge.co.uk` (staging) in Vercel
- [ ] Verify production deployment on `huxridge.co.uk`
- [ ] Set up uptime monitoring (Better Uptime / UptimeRobot): HTTP check every 60s, alert to firm email

#### Admin Training
- [ ] Training session with client on Sanity Studio: editing services, blog, FAQs, testimonials
- [ ] Provide written guide: "How to publish a blog post", "How to update service page content", "How to add a testimonial"
- [ ] Verify client can log in to Sanity Studio independently
- [ ] Set up Google Search Console: verify ownership, submit sitemap
- [ ] Set up Google Analytics if required (or confirm PostHog is sufficient)

### QA — Phase 1E

#### SEO
- [ ] Validate structured data on 5 page types using Google's Rich Results Test
- [ ] Submit sitemap to Google Search Console — no errors reported
- [ ] `robots.txt` accessible at `/robots.txt`, allows crawling of all public pages, blocks `/studio`
- [ ] Canonical tag on every page points to the correct canonical URL
- [ ] All meta descriptions are unique (no duplicates across pages)
- [ ] OG images render correctly when a URL is pasted into Slack/Twitter/LinkedIn

#### Performance
- [ ] Lighthouse mobile score ≥ 90 on: Home, a Service page, Contact
- [ ] Lighthouse desktop score ≥ 90 on same pages
- [ ] LCP < 2.5s on all three tested pages (measured in PageSpeed Insights)
- [ ] CLS < 0.1 on all tested pages

#### Security
- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] Security headers present — verify with https://securityheaders.com (target grade A or better)
- [ ] No secrets visible in page source or network requests
- [ ] CSP does not produce console errors for legitimate scripts

#### Pre-Launch Smoke Test (on production URL)
- [ ] Home page loads correctly
- [ ] Navigate to all 10 service pages — no 404s
- [ ] Navigate to all 4 industry pages — no 404s
- [ ] Submit contact form with real test data → verify email received, HubSpot contact created, Supabase row inserted
- [ ] Complete Cal.com test booking
- [ ] Subscribe to newsletter, verify double opt-in email, click confirm link
- [ ] Verify cookie consent banner appears on first visit
- [ ] Check Sentry dashboard — no errors thrown during smoke test
- [ ] Check PostHog dashboard — page views recorded for visited pages

---

## Phase 2 — Client Portal & Advanced Features
**Duration:** Month 3–4 (scope after Phase 1 launch)

### Scope
- Secure client authentication: Auth.js (NextAuth v5) with Microsoft 365 OAuth + email magic link fallback
- Client portal pages: dashboard, document list, notification centre
- Supabase Storage for encrypted document uploads
- Document sharing: firm uploads document → client receives email notification → client downloads from portal
- In-portal notifications for new documents and messages
- Microsoft Graph API integration: calendar sync, email notifications
- Supabase Phase 2 tables: `portal_users`, `documents`, `notifications`
- Row-level security policies ensuring clients only see their own documents

### QA Additions — Phase 2
- [ ] A client account can only see their own documents (cannot access another client's files)
- [ ] Document upload limited to approved file types (PDF, XLSX, DOCX — no executables)
- [ ] File size limit enforced (configurable)
- [ ] Auth session expires correctly, re-authentication required
- [ ] Microsoft 365 login OAuth flow completes end-to-end
- [ ] All portal pages require authentication — unauthenticated requests redirect to login

---

## Phase 3 — AI Chatbot & Marketing Automation
**Duration:** Month 5+ (scope after Phase 2)

### Scope
- AI chatbot widget using Anthropic Claude API: service enquiries, MTD guidance, FAQ assistance
- System prompt trained on firm's services, policies, and tone of voice
- Escalation path from chatbot to "speak to a human" contact form
- Marketing automation: HubSpot sequences for new leads (welcome email series, follow-up reminders)
- Lead scoring in HubSpot based on pages visited and services expressed interest in
- A/B testing via PostHog feature flags on home page hero and service page CTAs
- Advanced analytics dashboards for the firm: leads by source, bookings trend, most-viewed services

### QA Additions — Phase 3
- [ ] Chatbot does not hallucinate services or prices the firm does not offer
- [ ] Chatbot escalation to contact form works correctly
- [ ] HubSpot automation sequences do not send duplicate emails
- [ ] A/B test variants render correctly and do not cause layout shift
- [ ] PostHog correctly segments users into test variants

---

## Appendix: Environment Variable Checklist

Track these before each phase deployment:

| Variable | Phase | Service |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | 1C | Sanity |
| `NEXT_PUBLIC_SANITY_DATASET` | 1C | Sanity |
| `SANITY_API_TOKEN` | 1C | Sanity (server only) |
| `SANITY_WEBHOOK_SECRET` | 1C | Sanity webhook validation |
| `DATABASE_URL` | 1D | Supabase (via pgBouncer) |
| `DIRECT_URL` | 1D | Supabase (Prisma migrations) |
| `RESEND_API_KEY` | 1D | Resend email |
| `HUBSPOT_API_KEY` | 1D | HubSpot CRM |
| `TURNSTILE_SECRET_KEY` | 1D | Cloudflare Turnstile |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | 1D | Cloudflare Turnstile (client) |
| `UPSTASH_REDIS_REST_URL` | 1D | Upstash rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | 1D | Upstash rate limiting |
| `NEXT_PUBLIC_POSTHOG_KEY` | 1D | PostHog analytics |
| `NEXT_PUBLIC_POSTHOG_HOST` | 1D | PostHog analytics |
| `SENTRY_DSN` | 1D | Sentry error tracking |
| `CALCOM_WEBHOOK_SECRET` | 1D | Cal.com webhook validation |
| `NEXTAUTH_SECRET` | 2 | Auth.js |
| `MICROSOFT_CLIENT_ID` | 2 | Microsoft 365 OAuth |
| `MICROSOFT_CLIENT_SECRET` | 2 | Microsoft 365 OAuth |
| `ANTHROPIC_API_KEY` | 3 | Claude AI chatbot |

---

## Appendix: Open Items to Resolve Before Phase 1C

These items from the spec (Section 33) must be confirmed before content work begins:

| # | Item | Required By |
|---|---|---|
| 1 | Final number of services: 8 or 10? | Phase 1B completion |
| 2 | Copywriting: client provides, developer writes, or external copywriter? | Phase 1C start |
| 3 | Team page: confirm yes or no | Phase 1B |
| 4 | Professional photos available? Arrange shoot if needed | Phase 1C start |
| 5 | Confirm Cal.com as booking platform (vs Calendly) | Phase 1D start |
| 6 | CRM: confirm HubSpot free tier is acceptable | Phase 1D start |
| 7 | Client's email address for form notification delivery | Phase 1D start |
| 8 | Confirm domain registrar access and DNS management | Phase 1E start |
| 9 | Blog SEO strategy: who owns the content calendar? | Phase 1E launch |
| 10 | Local SEO: city/region pages — confirm in or out of scope | Post-launch |

---

*Plan version 1.0 — Huxridge Accountants & Tax Consultants*
