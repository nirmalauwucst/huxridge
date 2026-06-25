# Huxridge — Deferred & Incomplete Items

Items that were explicitly deferred, skipped, or require an external action before they can be completed. Grouped by phase. Tick each box as you complete it.

---

## Phase 1A — Scaffold

- [ ] **GitHub repository setup** — create the repository, configure branch protection rules (`main`, `develop`, `feature/*` workflow), and verify Vercel auto-deploys on push. Left to the user because it requires browser-level account actions.

---

## Phase 1B — Static Frontend

- [ ] **Blog post table of contents** — client-side scroll-spy sidebar on `/blog/[slug]`. Deferred because the TOC component depends on knowing the Portable Text heading structure (Phase 1C). Build after the Sanity `body` field is wired up.
- [ ] **Cross-browser QA** — manually verify all pages in Chrome, Firefox, Safari (macOS + iOS), and Edge at 375 / 768 / 1280 px.
- [ ] **Lighthouse baseline** — run Lighthouse on Home, a Service page, and Contact; target > 90 on desktop. Run before Phase 1C to establish a clean baseline.
- [ ] **Fix any console errors / warnings** visible in browser devtools on the current static build.

---

## Phase 1C — CMS Integration (Sanity)

### Sanity project setup
- [ ] Create Sanity v3 project — note the Project ID and dataset name (`production`).
- [ ] Mount Sanity Studio at `/studio` within the Next.js app (`next-sanity`).
- [ ] Configure `next-sanity` client with CDN and API token.
- [ ] Set up Sanity CORS origins for `localhost`, Vercel preview URLs, and `huxridge.co.uk`.
- [ ] Add env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`, `SANITY_WEBHOOK_SECRET`.

### Content schemas to create in Sanity Studio
- [ ] `service` — title, slug, description, icon name, content (Portable Text), features list, target clients, FAQs array, SEO metadata (title, description, OG image)
- [ ] `industry` — title, slug, description, associated services (references), content, challenges list, SEO metadata
- [ ] `blogPost` — title, slug, author, publishedAt, categories array, excerpt, body (Portable Text), featuredImage, readingTime, SEO metadata
- [ ] `testimonial` — clientName, company, quote, rating, industry, featured (boolean)
- [ ] `teamMember` — name, role, bio, photo, qualifications, order
- [ ] `faq` — question, answer (Portable Text), category, order
- [ ] `resource` — title, slug, description, file (asset), category, SEO metadata
- [ ] `page` — title, slug, body (Portable Text), SEO metadata (for Privacy Policy, Terms, etc.)
- [ ] `siteSettings` (singleton) — companyName, logo, phone, email, address, socialLinks, defaultSEO

### Content entry
- [ ] Enter all 10 service pages into Sanity (confirm final count with client first — 8 or 10?)
- [ ] Enter all 4 industry pages into Sanity
- [ ] Enter 6 initial testimonials (real or approved placeholders)
- [ ] Enter 3 initial blog posts (or approved placeholder posts)
- [ ] Enter all FAQ content organised by category
- [ ] Enter `siteSettings` — logo, contact details, social links
- [ ] Enter Privacy Policy and Terms page content

### Next.js integration
- [ ] Replace all hardcoded mock data in every page with GROQ queries
- [ ] Implement rendering strategy per spec §19.1 (ISR / SSG / SSR per page type)
- [ ] Set up Sanity webhook endpoint at `/api/revalidate` for on-demand ISR revalidation
- [ ] Verify `generateStaticParams` generates all service, industry, and blog slugs from CMS at build time
- [ ] Implement Portable Text renderer with custom block components (headings, links, lists, images)
- [ ] Auto-generate Open Graph images via `@vercel/og` for all CMS content types
- [ ] **Dynamic metadata from Sanity** — replace static `title`/`description`/`openGraph` on service, industry, and blog pages with values from each document's SEO metadata field in Sanity. *(Metadata structure is already in place; this is the Phase 1C wiring step.)*

### Phase 1C QA gates
- [ ] All 10 service pages render from CMS data with no hardcoded content remaining
- [ ] All 4 industry pages render from CMS data
- [ ] Blog listing shows real posts with correct dates and reading times
- [ ] Blog post page renders Portable Text correctly (headings, links, images, lists)
- [ ] Testimonials on home and service pages pull from CMS
- [ ] FAQs on FAQ page and service pages pull from CMS
- [ ] Footer contact details and social links come from `siteSettings`
- [ ] Sanity webhook revalidation works: update content in Studio → page refreshes within 5 seconds
- [ ] `pnpm build` succeeds with no missing-data errors during static generation
- [ ] Client can log in to Sanity Studio and edit content without developer help
- [ ] Sanity Studio route is protected from public access

---

## Phase 1D — Forms, Integrations & Backend

### ACTION REQUIRED — External service setup (no code until these are done)

- [ ] **GA4 Measurement ID** — go to [analytics.google.com](https://analytics.google.com), create a GA4 property for `huxridge.co.uk`, copy the Measurement ID (format `G-XXXXXXXXXX`), add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to Vercel (Production + Preview) and to local `.env`.
- [ ] **Google Search Console** — add property at [search.google.com/search-console](https://search.google.com/search-console), choose HTML tag verification, copy the content value, add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<value>` to Vercel (Production only), redeploy, click Verify, then submit `sitemap.xml`.
- [ ] **Sentry project** — go to [sentry.io](https://sentry.io), create a Next.js project named `huxridge-web`, copy the DSN, add `NEXT_PUBLIC_SENTRY_DSN=https://...` to Vercel (all environments) and local `.env`.
- [ ] **Sentry auth token** (for readable stack traces in production) — create a token at *Settings → Auth Tokens* with `project:releases` and `org:read` scopes; add `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT` to Vercel (Production only).
- [ ] **Redeploy after adding all env vars** — trigger a new Vercel deployment; verify GA4 and Sentry are active.

### Supabase
- [ ] Create Supabase project
- [ ] Set up Prisma schema with Phase 1 tables: `contact_submissions`, `newsletter_subscribers`, `booking_events`
- [ ] Run initial migration (`prisma migrate deploy`)
- [ ] Configure Prisma client in Next.js with connection pooling via Supabase pgBouncer URL
- [ ] Add env vars: `DATABASE_URL` (pgBouncer URL), `DIRECT_URL` (direct connection for migrations)

### Contact form
- [ ] Wire up the contact form at `/contact` to a Server Action
- [ ] Zod schema validation on the server side (name, email, phone, message, service interest)
- [ ] Cloudflare Turnstile integration for bot protection (server-side token verification); add `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`
- [ ] Rate limiting via Upstash Redis — max 10 submissions per IP per hour; add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
- [ ] On success: write record to Supabase `contact_submissions` (include UTM params if present)
- [ ] On success: send notification email to firm via Resend; add `RESEND_API_KEY`
- [ ] On success: send confirmation email to enquirer via Resend
- [ ] On success: sync lead to HubSpot CRM via REST API; add `HUBSPOT_API_KEY`
- [ ] Form success and error states with user-friendly messages
- [ ] Form loading/submitting state with spinner on button

### Newsletter signup
- [ ] Wire newsletter signup Server Action — validate email, check for duplicates, insert into `newsletter_subscribers`, send welcome email via Resend
- [ ] Double opt-in — send confirmation email with a verification link
- [ ] Verification route at `/api/newsletter/confirm` — update subscriber status to `confirmed`

### Cal.com booking
- [ ] Set up Cal.com account, configure "Free Initial Consultation" event type (confirm Cal.com vs Calendly with client)
- [ ] Embed Cal.com inline booking widget on `/book` page (replace the current placeholder box)
- [ ] Configure Cal.com webhook → write to `booking_events` in Supabase on booking confirmed; add `CALCOM_WEBHOOK_SECRET`
- [ ] Send booking confirmation email via Resend with appointment details
- [ ] Send booking notification email to firm

### HubSpot CRM
- [ ] Set up HubSpot free account and obtain API key (confirm free tier is acceptable with client)
- [ ] Create HubSpot contact from every form submission via REST API
- [ ] Map fields: name, email, phone, service interest, source page, UTM parameters
- [ ] Tag contacts by source (website enquiry, newsletter signup, booking)

### Email templates (React Email)
- [ ] Enquiry notification to firm (name, contact, service, message)
- [ ] Enquiry confirmation to prospect ("Thank you for your enquiry")
- [ ] Newsletter welcome email
- [ ] Newsletter double opt-in confirmation email
- [ ] Booking confirmation email
- [ ] Verify all templates render correctly in Gmail, Apple Mail, and Outlook
- [ ] Confirm emails are not flagged as spam (check SPF/DKIM records for Resend domain)
- [ ] Include plain-text fallback in all emails

### Phase 1D QA gates
- [ ] Submit valid contact form → record in Supabase, HubSpot contact created, notification and confirmation emails received
- [ ] Submit with missing required fields → inline validation errors, no submission
- [ ] Turnstile token missing/invalid → rejected with user-friendly error
- [ ] Submit 11 times from same IP → 11th request rate-limited (HTTP 429)
- [ ] Newsletter signup → welcome email received; click confirm link → status changes to `confirmed`
- [ ] Duplicate newsletter email → rejected with appropriate message
- [ ] Cal.com widget loads on `/book`; complete test booking → `booking_events` row created, confirmation and firm emails received
- [ ] Cookie consent — accepting all → GA4 fires a page view (check Network tab); rejecting → no `googletagmanager.com` requests
- [ ] GA4 DebugView — `contact_form_submit`, `booking_cta_click`, `phone_click`, `email_click`, `newsletter_signup` events all appear after user actions
- [ ] Sentry — trigger a test error in a Server Component → error appears in Sentry Issues dashboard
- [ ] Sentry Session Replay — with analytics consent accepted, trigger error → replay attached to issue

---

## Phase 1E — SEO, Performance & Launch

### Performance audit
- [ ] Run Lighthouse CI on Home, a service page, blog listing, and contact — target ≥ 90 mobile and desktop
- [ ] LCP < 2.5s, CLS < 0.1 on all tested pages
- [ ] Audit all images for missing `width`/`height` attributes (causes CLS)
- [ ] Verify `next/font` is used for all fonts (no FOUT)
- [ ] Verify GA4 and Sentry scripts load via `next/script strategy='afterInteractive'` and only after consent
- [ ] Verify `next/image` is used for all images (WebP/AVIF, lazy load, responsive srcset)
- [ ] Check Next.js build output — first-load JS < 100 KB budget

### Accessibility audit
- [ ] Run axe-core against Home, services hub, a service page, contact page, and a blog post — zero critical or serious violations
- [ ] Verify keyboard navigation — Tab through all interactive elements on every page type; focus indicator visible
- [ ] Verify skip-to-content link appears on first Tab from address bar
- [ ] Verify all images have meaningful alt text (populated via Sanity image metadata field in Phase 1C)
- [ ] Verify colour contrast meets WCAG AA (4.5:1 body text, 3:1 large text) using DevTools contrast checker
- [ ] Screen reader spot-check with VoiceOver or NVDA on home page and contact form

### Final content review
- [ ] Client reviews and approves all page content
- [ ] All placeholder text ("TBD", "Lorem ipsum") replaced on every page
- [ ] All service page content reviewed and approved by the firm
- [ ] Privacy Policy and Terms reviewed by the firm (solicitor review recommended)
- [ ] Copyright year and company details are correct in the footer

### Security headers
- [ ] Configure `Content-Security-Policy` header in `next.config.ts`
- [ ] Configure `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`
- [ ] Verify HSTS header is set by Vercel
- [ ] Verify all environment variables are in Vercel Project Settings, not in code
- [ ] Run `pnpm audit` — zero high-severity npm vulnerabilities
- [ ] Enable GitHub Dependabot for automated dependency vulnerability alerts

### Domain & hosting
- [ ] Transfer or point `huxridge.co.uk` to Vercel (update DNS A/CNAME records) — requires registrar access
- [ ] Verify SSL certificate provisioned and HTTPS redirect active
- [ ] Set up `develop` branch as `dev.huxridge.co.uk` (staging) in Vercel
- [ ] Verify production deployment is live on `huxridge.co.uk`
- [ ] Set up uptime monitoring (Better Uptime or UptimeRobot) — HTTP check every 60s, alert to firm email

### Admin training
- [ ] Training session with client on Sanity Studio — editing services, blog, FAQs, testimonials
- [ ] Write user guide: "How to publish a blog post", "How to update a service page", "How to add a testimonial"
- [ ] Verify client can log in to Sanity Studio independently
- [ ] Complete Google Search Console setup (instructions in Phase 1D above)

### Phase 1E QA gates
- [ ] Validate structured data on Home, a service page, FAQ page, a blog post, and an industry page using [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit `sitemap.xml` to Google Search Console — no errors reported
- [ ] OG images render correctly when a URL is pasted into Slack, Twitter/X, and LinkedIn
- [ ] Lighthouse mobile score ≥ 90 on Home, a service page, and Contact
- [ ] LCP < 2.5s on all three tested pages (measured in PageSpeed Insights)
- [ ] CLS < 0.1 on all tested pages
- [ ] HTTPS enforced — HTTP redirects to HTTPS
- [ ] Security headers grade A or better at [securityheaders.com](https://securityheaders.com)
- [ ] No secrets visible in page source or network requests
- [ ] CSP does not produce console errors for legitimate scripts

### Pre-launch smoke test (on production URL)
- [ ] Home page loads correctly
- [ ] Navigate to all 10 service pages — no 404s
- [ ] Navigate to all 4 industry pages — no 404s
- [ ] Submit contact form with real test data → email received, HubSpot contact created, Supabase row inserted
- [ ] Complete a Cal.com test booking
- [ ] Subscribe to newsletter, receive double opt-in email, click confirm link
- [ ] Cookie consent banner appears on first visit
- [ ] Sentry dashboard — no errors thrown during smoke test
- [ ] GA4 Realtime dashboard — page views recorded for visited pages

---

## Open Questions to Resolve Before Phase 1C

These must be confirmed with the client before content work can start:

| # | Question | Blocks |
|---|---|---|
| 1 | Final number of services: 8 or 10? | Phase 1C content entry |
| 2 | Copywriting: client provides, developer writes, or external copywriter? | Phase 1C start |
| 3 | Team page: yes or no? | Phase 1C schema |
| 4 | Professional photos available? Arrange shoot if needed. | Phase 1C content entry |
| 5 | Confirm Cal.com as booking platform (vs Calendly) | Phase 1D booking |
| 6 | Confirm HubSpot free tier is acceptable | Phase 1D CRM |
| 7 | Client email address for form notification delivery | Phase 1D contact form |
| 8 | Confirm domain registrar access and DNS management | Phase 1E domain |
| 9 | Blog SEO strategy: who owns the content calendar? | Phase 1E launch |
| 10 | Local SEO: city/region pages — in or out of scope? | Post-launch |

---

*Last updated: 25 June 2026*
