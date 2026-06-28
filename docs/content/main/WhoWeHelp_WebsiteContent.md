# Who We Help — Website Content

**Site:** Huxridge
**Page URL:** `/who-we-help`
**Version:** 1.0 | June 2026

---

## 2. Page Header

| Element | Content |
|---|---|
| Eyebrow label | `WHO WE HELP` |
| H1 heading | `Built for your profession, not just your accounts` |
| Intro paragraph | `We work with healthcare professionals, property owners, and business owners who need an accountant that genuinely understands their sector — not just their spreadsheets.` |

---

## 3. Sector Groups

Sectors are organised into two groups. Each group has a heading row (with a coloured badge label) followed by its sector cards stacked vertically.

### Group 1 — Healthcare & childcare

**Badge label:** `Healthcare & childcare`
**Badge style:** Teal-tinted background, teal text

Contains 4 sector cards (in this order): Dentists, Care homes, Nurses & clinicians, Nurseries

---

### Group 2 — Business & property

**Badge label:** `Business & property`
**Badge style:** Blue-tinted background, blue text

Contains 2 sector cards (in this order): Landlords, Contractors

---

## 4. Sector Card — Layout & Behaviour

Every sector card follows the same structure. Cards default to **collapsed**. On click they **expand** to reveal services.

### Collapsed state (default)

**Layout:** A single horizontal row containing three elements:

- **Left:** Small square icon block with a sector-relevant icon inside.
- **Middle:** Sector title above the intro paragraph — takes up the remaining width.
- **Right:** A small outlined `See services +` button, vertically centred in the row.

### Expanded state (on click)

When the user clicks `See services +`, a panel slides open beneath the intro row.

**Layout of expanded panel:**

- **Top area:** Services list displayed in a 2-column grid. Each item has a small teal dot bullet.
- **Bottom area:** A thin border divides the services list from a footer row containing:
  - Left side: a "Get in touch" link (teal, bold, 13px) — specific text and URL per sector (see Section 6).
  - Right side: a `Close ↑` link (muted grey, 12px) — collapses the card on click.

### Accordion behaviour

- Only one card may be open at a time.
- Opening a new card automatically closes the previously open one.
- Button text toggles: `See services +` when collapsed, `Hide services −` when expanded.

### Animation

Use a smooth CSS transition on expand/collapse — not an instant show/hide.

```css
transition: max-height 0.25s ease, opacity 0.2s ease;
overflow: hidden;
```

---

## 5. Full Sector Content

All copy below is final. Use exactly as written.

---

### GROUP 1 — Healthcare & childcare

---

#### Dentists

**Icon:** `ti-tooth` *(use the equivalent from the existing font icon family)*

**Intro paragraph (always visible):**
> From newly qualified associates filing their first self-assessment to established practice owners planning their next acquisition — we already speak your language.

**Services (shown when expanded):**
- Associate tax & self-assessment
- NHS pension & annual allowance advice
- Practice purchase & incorporation
- Squat practice set-up & financial planning
- Partnership agreements & profit sharing
- CQC compliance & practice valuations

**Get in touch link text:** `Get in touch about your practice →`
**Get in touch link URL:** `/contact?sector=dentists`

---

#### Care homes

**Icon:** `ti-heart-rate-monitor` *(use the equivalent from the existing font icon family)*

**Intro paragraph (always visible):**
> Tight margins, a large workforce, and ever-changing regulatory demands. We help care operators stay compliant, control costs, and plan ahead with confidence.

**Services (shown when expanded):**
- Payroll & auto-enrolment for care staff
- CQC compliance costs & financial planning
- Property & business rates advice
- Care fee income structuring
- Corporation tax & annual accounts
- VAT planning for mixed-use care properties

**Get in touch link text:** `Get in touch about your care home →`
**Get in touch link URL:** `/contact?sector=care-homes`

---

#### Nurses & clinicians

**Icon:** `ti-stethoscope` *(use the equivalent from the existing font icon family)*

**Intro paragraph (always visible):**
> NHS employee, locum, or limited company — your tax position is more complex than most. We make sure you're not paying a penny more than you need to.

**Services (shown when expanded):**
- Locum & agency tax returns
- IR35 awareness & status advice
- NHS pension planning & annual allowance
- Allowable expenses claims
- Self-assessment for bank & agency shifts
- Limited company set-up & ongoing accounts

**Get in touch link text:** `Get in touch about your situation →`
**Get in touch link URL:** `/contact?sector=nurses`

---

#### Nurseries

**Icon:** `ti-building-community` *(use the equivalent from the existing font icon family)*

**Intro paragraph (always visible):**
> High staffing costs, complex government funding streams, and razor-thin margins. We help nursery owners get a clear picture of their finances and build a sustainable business.

**Services (shown when expanded):**
- Payroll & auto-enrolment for nursery staff
- Government funding reconciliation
- Business rates relief advice
- Annual accounts & corporation tax
- Childcare scheme accounting
- Cash flow planning & management accounts

**Get in touch link text:** `Get in touch about your nursery →`
**Get in touch link URL:** `/contact?sector=nurseries`

---

### GROUP 2 — Business & property

---

#### Landlords

**Icon:** `ti-building` *(use the equivalent from the existing font icon family)*

**Intro paragraph (always visible):**
> From a single buy-to-let to a growing portfolio — tax rules around property have never been more complex. We help landlords hold on to more of what their properties earn.

**Services (shown when expanded):**
- Buy-to-let tax returns & allowable expenses
- Capital gains tax planning on disposals
- Limited company incorporation advice
- HMO & holiday let tax treatment
- Mortgage interest & Section 24 advice
- Stamp duty land tax planning

**Get in touch link text:** `Get in touch about your portfolio →`
**Get in touch link URL:** `/contact?sector=landlords`

---

#### Contractors

**Icon:** `ti-tools` *(use the equivalent from the existing font icon family)*

**Intro paragraph (always visible):**
> IR35, dividend strategy, VAT, limited company efficiency — contracting comes with complexity. We help contractors keep more of what they earn and stay on the right side of HMRC.

**Services (shown when expanded):**
- IR35 assessment & ongoing advice
- Limited company vs umbrella comparison
- Dividend & salary strategy
- VAT flat rate scheme
- Allowable business expenses
- Self-assessment & annual accounts

**Get in touch link text:** `Get in touch about your contract →`
**Get in touch link URL:** `/contact?sector=contractors`

---

## 6. CTA Band

Full-width band that sits above the footer.

**Layout:** All elements stacked and centred inside a full-width rounded container. On mobile, centre-align all elements.

| Element | Content |
|---|---|
| Heading | `Not sure if we're the right fit?` |
| Subtext | `Book a free 30-minute discovery call. No commitment, no jargon — just honest advice.` |
| Button | `Book a free call →` — links to `/contact` |

**Container:** Full width, 12px border radius, 2rem padding on all sides.

---

## 7. Typography Summary

| Element | Size | Weight | Notes |
|---|---|---|---|
| Eyebrow label | 11px | 700 | Uppercase, letter-spacing 0.07em |
| H1 page title | 28px | 500 | Max-width 560px |
| Intro paragraph | 14px | 400 | Line-height 1.7, max-width 560px |
| Group heading | 15px | 500 | Sits next to group badge |
| Sector title | 15px | 500 | Inside card header |
| Sector intro | 13px | 400 | Line-height 1.6, always visible |
| Service item | 13px | 400 | Inside expanded panel, 2-col grid |
| Get in touch link | 13px | 500 | Inside expanded panel |
| Close link | 12px | 400 | Inside expanded panel |
| CTA heading | 18px | 500 | White text |
| CTA subtext | 13px | 400 | White, 80% opacity |
| CTA button | 13px | 500 | |

**Font:** Use a clean sans-serif — Inter, DM Sans, or similar. Do not use `system-ui` as the primary font (renders inconsistently across platforms).

---

## 8. Developer Notes

### Get in touch links
Each sector's link passes a query parameter so the contact page can pre-select the right option in the "I am a..." dropdown:

| Sector | URL |
|---|---|
| Dentists | `/contact?sector=dentists` |
| Care homes | `/contact?sector=care-homes` |
| Nurses & clinicians | `/contact?sector=nurses` |
| Nurseries | `/contact?sector=nurseries` |
| Landlords | `/contact?sector=landlords` |
| Contractors | `/contact?sector=contractors` |

### Mobile responsiveness
- Nav: collapse to hamburger menu on mobile
- Sector cards: stack full width on mobile
- Services grid: single column on mobile (not 2-col)
- CTA band: centre-align all elements on mobile

### Pre-launch checklist
- [ ] All 6 sector cards render correctly in collapsed state
- [ ] Expand / collapse works on all 6 cards
- [ ] Only one card open at a time
- [ ] Button text toggles correctly (`See services +` / `Hide services −`)
- [ ] Smooth transition on expand / collapse
- [ ] Get in touch links point to correct `/contact?sector=` URLs
- [ ] Group badges display correct colours (teal for healthcare, blue for business)
- [ ] CTA band button links to `/contact`
- [ ] Page is mobile responsive
- [ ] Active nav state shows 'Who we help' as teal & bold
- [ ] All copy matches exactly as specified in Section 5

---

*Questions before build? Contact Charles at Huxridge to clarify any requirements.*
