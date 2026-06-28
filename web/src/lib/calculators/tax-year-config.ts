// UK Tax Year Configuration — 2025/26
// ⚠️  ALL VALUES BELOW MUST BE VERIFIED BY CLIENT/ACCOUNTANT BEFORE GO-LIVE

export const TAX_YEAR_LABEL = "2025/26"; // ⚠️ VERIFY

// ── Income Tax ───────────────────────────────────────────────────────────────
export const INCOME_TAX = {
  personalAllowance: 12_570,          // ⚠️ VERIFY
  basicRateLimit: 50_270,             // ⚠️ VERIFY (top of basic-rate band)
  additionalRateThreshold: 125_140,   // ⚠️ VERIFY
  taperStart: 100_000,                // ⚠️ VERIFY — PA tapers above this
  basicRate: 0.20,                    // ⚠️ VERIFY
  higherRate: 0.40,                   // ⚠️ VERIFY
  additionalRate: 0.45,               // ⚠️ VERIFY
} as const;

// ── National Insurance (Employee Class 1) ────────────────────────────────────
export const NI_EMPLOYEE = {
  primaryThreshold: 12_570, // ⚠️ VERIFY
  upperEarningsLimit: 50_270, // ⚠️ VERIFY
  mainRate: 0.08,  // ⚠️ VERIFY — reduced to 8% from Jan 2024
  upperRate: 0.02, // ⚠️ VERIFY
} as const;

// ── National Insurance (Employer Class 1) ────────────────────────────────────
export const NI_EMPLOYER = {
  secondaryThreshold: 9_100, // ⚠️ VERIFY — 2025/26 value
  rate: 0.138,               // ⚠️ VERIFY — 13.8%
  employmentAllowance: 10_500, // ⚠️ VERIFY — April 2025 increase
} as const;

// ── Dividends ────────────────────────────────────────────────────────────────
export const DIVIDENDS = {
  allowance: 500,      // ⚠️ VERIFY — £500 from 2024/25
  basicRate: 0.0875,   // ⚠️ VERIFY — 8.75%
  higherRate: 0.3375,  // ⚠️ VERIFY — 33.75%
  additionalRate: 0.3935, // ⚠️ VERIFY — 39.35%
} as const;

// ── Corporation Tax ──────────────────────────────────────────────────────────
export const CORPORATION_TAX = {
  smallProfitsRate: 0.19,       // ⚠️ VERIFY — 19%
  smallProfitsLimit: 50_000,    // ⚠️ VERIFY — £50,000
  mainRate: 0.25,               // ⚠️ VERIFY — 25%
  mainRateLimit: 250_000,       // ⚠️ VERIFY — £250,000
  marginalReliefFraction: 3 / 200, // ⚠️ VERIFY
} as const;

// ── VAT ──────────────────────────────────────────────────────────────────────
export const VAT_RATES = {
  standard: 0.20, // ⚠️ VERIFY — 20%
  reduced: 0.05,  // ⚠️ VERIFY — 5%
  zero: 0.00,
} as const;

// ── Capital Gains Tax (Residential Property) ─────────────────────────────────
export const CGT = {
  annualExemption: 3_000, // ⚠️ VERIFY — £3,000 from 2024/25
  propertyBasicRate: 0.18,  // ⚠️ VERIFY — 18% from April 2024
  propertyHigherRate: 0.24, // ⚠️ VERIFY — 24% from April 2024
} as const;

// ── Student Loans ────────────────────────────────────────────────────────────
export const STUDENT_LOANS = {
  plan1:  { threshold: 24_990, rate: 0.09 }, // ⚠️ VERIFY
  plan2:  { threshold: 27_295, rate: 0.09 }, // ⚠️ VERIFY
  plan4:  { threshold: 31_395, rate: 0.09 }, // ⚠️ VERIFY
  postgrad: { threshold: 21_000, rate: 0.06 }, // ⚠️ VERIFY
} as const;

// ── Section 24 (Landlords) ───────────────────────────────────────────────────
export const SECTION_24 = {
  // Mortgage interest relief restricted to basic-rate equivalent
  reliefRate: 0.20, // ⚠️ VERIFY
} as const;

// ── Salary Optimisation ──────────────────────────────────────────────────────
// Recommended director salary up to secondary NI threshold
export const OPTIMAL_DIRECTOR_SALARY = NI_EMPLOYER.secondaryThreshold; // ⚠️ VERIFY
