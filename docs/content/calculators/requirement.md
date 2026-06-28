We need to add a new **Tax Calculators** feature to the Huxridge Accountants & Tax Consultants website.

Project context:

* The website is for a UK accountancy and tax advisory firm.
* The calculators should support lead generation, SEO, and user experience.
* The calculators must not replace professional tax advice. Always include a clear disclaimer.

Goal:
Implement a dedicated Tax Calculators section under Resources, and also embed relevant calculator teasers/components into related service and industry pages.

Required routes:

1. `/resources/tax-calculators`

   * Main hub page listing all tax calculators.
   * Use a clean grid/card layout.
   * Include intro copy explaining that these tools provide estimates only.
   * Include CTA buttons to book a consultation and contact the firm.

2. `/resources/tax-calculators/personal-tax-calculator`

3. `/resources/tax-calculators/corporation-tax-calculator`

4. `/resources/tax-calculators/vat-calculator`

5. `/resources/tax-calculators/dividend-tax-calculator`

6. `/resources/tax-calculators/salary-vs-dividend-calculator`

7. `/resources/tax-calculators/landlord-tax-calculator`

8. `/resources/tax-calculators/take-home-pay-calculator`

9. `/resources/tax-calculators/ir35-calculator`

Navigation:

* Add “Tax Calculators” under the existing Resources navigation area.
* Do not make it a top-level main navigation item unless the design already supports it cleanly.
* In the footer Resources section, add a link to `/resources/tax-calculators`.

Homepage:

* Add a small “Useful Tax Tools” teaser section on the homepage.
* Show only 3 featured calculator cards:

  1. Personal Tax Calculator
  2. Corporation Tax Calculator
  3. VAT Calculator
* Add a “View all tax calculators” CTA linking to `/resources/tax-calculators`.
* Keep this section concise so the homepage does not feel cluttered.

Service page integrations:
Add relevant calculator blocks or teaser cards to these pages:

* `/services/personal-tax`

  * Embed or link to Personal Tax Calculator.
  * Also optionally link to Dividend Tax Calculator and Take-home Pay Calculator.

* `/services/corporation-tax`

  * Embed or link to Corporation Tax Calculator.

* `/services/vat-services`

  * Embed or link to VAT Calculator.

* `/services/company-formation`

  * Link to Salary vs Dividend Calculator and Corporation Tax Calculator.

* `/services/making-tax-digital`

  * Link to VAT Calculator and relevant MTD-related guidance.

Industry page integrations:
Add relevant calculator blocks or teaser cards to:

* `/industries/landlords`

  * Landlord Tax Calculator.
  * Personal Tax Calculator.

* `/industries/contractors`

  * IR35 Calculator.
  * Take-home Pay Calculator.
  * Salary vs Dividend Calculator.

* `/industries/startups`

  * Corporation Tax Calculator.
  * Salary vs Dividend Calculator.
  * VAT Calculator.

Calculator page structure:
Each calculator page should have:

1. Breadcrumb:
   Home > Resources > Tax Calculators > Calculator Name

2. Hero section:

   * Calculator name
   * Short explanation of who it is for
   * CTA: “Book a Free Consultation”

3. Calculator form:

   * Clean form layout
   * Mobile-friendly fields
   * Clear labels
   * Helpful helper text
   * Accessible validation messages
   * Avoid unnecessary complexity

4. Result section:

   * Show estimated result clearly
   * Break down calculation where helpful
   * Include disclaimer:
     “This calculator provides an estimate only and should not be treated as tax advice. Tax rules and allowances can change, and your personal circumstances may affect the final amount. Please speak to Huxridge for tailored advice.”

5. CTA after result:

   * “Book a Free Consultation”
   * “Ask Us About This Result”
   * “Contact an Accountant”

6. Related content:

   * Related services
   * Related blog posts or guides if available
   * Related calculators

7. FAQ section:

   * Add 3–5 FAQs for each calculator.

Technical implementation:

* Create a reusable calculator layout component.
* Create a reusable calculator card component.
* Create a reusable calculator CTA block.
* Create a central calculator config file, for example:
  `src/lib/tax-calculators.ts`
* Store calculator metadata there:

  * title
  * slug
  * description
  * shortDescription
  * relatedServices
  * relatedIndustries
  * relatedCalculators
  * seoTitle
  * seoDescription
  * featured flag
  * category
* Use dynamic route generation where appropriate.
* Keep calculator logic separated from UI components.
* Create calculation utility files such as:

  * `src/lib/calculators/personal-tax.ts`
  * `src/lib/calculators/corporation-tax.ts`
  * `src/lib/calculators/vat.ts`
  * `src/lib/calculators/dividend-tax.ts`
  * `src/lib/calculators/salary-vs-dividend.ts`
  * `src/lib/calculators/landlord-tax.ts`
  * `src/lib/calculators/take-home-pay.ts`
  * `src/lib/calculators/ir35.ts`

Important:

* UK tax thresholds, allowances, and rates should be configurable, not deeply hard-coded into components.
* Add a clear comment or config structure for tax year values.
* Use the latest confirmed UK tax-year values only if they are already available in the project or provided by the client/accountant.
* If exact values are not confirmed, implement the UI and architecture with placeholder config values clearly marked as “TO BE VERIFIED BY CLIENT/ACCOUNTANT”.
* Do not present unverified tax calculations as final.

SEO requirements:

* Each calculator page must have unique metadata:

  * title
  * description
  * canonical URL
  * Open Graph title/description
* Add FAQ schema where FAQ content exists.
* Add BreadcrumbList structured data.
* Use clean URLs.
* Ensure each calculator page has a single H1.
* Add internal links from calculator pages to relevant service pages.

Accessibility:

* All form inputs must have labels.
* Error messages must be accessible.
* Results must be announced or clearly visible after calculation.
* Buttons must be keyboard accessible.
* Maintain WCAG AA colour contrast.

Analytics:

* Add tracking events where the existing analytics structure supports it:

  * calculator_viewed
  * calculator_started
  * calculator_completed
  * calculator_cta_clicked
* Do not load analytics unless cookie consent allows analytics.

Design:

* Follow existing Huxridge design system.
* Use the existing Card, Button, Badge, Breadcrumb, Section, Container, SectionHeading and CTABanner components where possible.
* Keep the design premium, clean, and professional.
* Avoid making calculators look like generic free tools.
* Make the result panel feel polished and trustworthy.

CMS consideration:

* If Sanity CMS is already integrated, add a calculator content type or allow calculator intro/FAQ/disclaimer content to be editable from Sanity.
* If Sanity is not yet integrated, use static config/mock content now but structure the data so it can be migrated to Sanity later.

Acceptance criteria:

* `/resources/tax-calculators` displays all calculator cards.
* Individual calculator pages render correctly.
* Homepage shows a small featured calculators section.
* Related service and industry pages link to the most relevant calculators.
* All calculator forms work on mobile and desktop.
* Each calculator shows a clear disclaimer.
* Each result section includes a consultation CTA.
* No broken links.
* TypeScript passes.
* Lint passes.
* Build passes.
* No console errors.
* Calculator values are clearly marked as verified or awaiting accountant/client verification.
