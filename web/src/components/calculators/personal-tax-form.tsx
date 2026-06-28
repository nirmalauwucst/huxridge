"use client";

import { useState, useEffect } from "react";
import {
  calculatePersonalTax,
  type StudentLoanPlan,
} from "@/lib/calculators/personal-tax";
import { TAX_YEAR_LABEL } from "@/lib/calculators/tax-year-config";
import { CalculatorCta } from "./calculator-cta";
import { CalculatorDisclaimer } from "./calculator-disclaimer";
import { trackEvent } from "@/lib/analytics";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);

type Field = {
  id: string;
  label: string;
  helper?: string;
  key: keyof Omit<FormState, "studentLoanPlan">;
};

const incomeFields: Field[] = [
  {
    id: "ptf-employment",
    label: "Employment income (gross)",
    helper: "Your gross salary before deductions",
    key: "employmentIncome",
  },
  {
    id: "ptf-selfemployment",
    label: "Self-employment profit",
    helper: "Net profit after allowable expenses",
    key: "selfEmploymentProfit",
  },
  {
    id: "ptf-rental",
    label: "Rental income",
    helper: "Gross rental receipts before expenses",
    key: "rentalIncome",
  },
  {
    id: "ptf-dividends",
    label: "Dividend income",
    helper: "Dividends received from company shareholdings",
    key: "dividendIncome",
  },
  {
    id: "ptf-pension",
    label: "Pension contributions",
    helper: "Employee pension contributions (gross)",
    key: "pensionContributions",
  },
];

type FormState = {
  employmentIncome: number;
  selfEmploymentProfit: number;
  rentalIncome: number;
  dividendIncome: number;
  pensionContributions: number;
  studentLoanPlan: StudentLoanPlan;
};

const studentLoanOptions: { value: StudentLoanPlan; label: string }[] = [
  { value: "none", label: "No student loan" },
  { value: "plan1", label: "Plan 1 (pre-2012, England/Wales)" },
  { value: "plan2", label: "Plan 2 (post-2012, England/Wales)" },
  { value: "plan4", label: "Plan 4 (Scotland)" },
  { value: "postgrad", label: "Postgraduate loan" },
];

export function PersonalTaxForm() {
  const [form, setForm] = useState<FormState>({
    employmentIncome: 50_000,
    selfEmploymentProfit: 0,
    rentalIncome: 0,
    dividendIncome: 0,
    pensionContributions: 0,
    studentLoanPlan: "none",
  });
  const [hasInteracted, setHasInteracted] = useState(false);

  const result = calculatePersonalTax(form);

  useEffect(() => {
    trackEvent("calculator_viewed", {
      calculator_slug: "personal-tax-calculator",
    });
  }, []);

  const update = (key: keyof FormState, value: number | StudentLoanPlan) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("calculator_started", {
        calculator_slug: "personal-tax-calculator",
      });
    }
  };

  const breakdownRows = [
    { label: "Gross income", value: result.grossIncome },
    { label: `Personal allowance`, value: result.personalAllowance },
    { label: "Income tax", value: result.incomeTax },
    { label: "National Insurance", value: result.ni },
    ...(result.studentLoanRepayment > 0
      ? [{ label: "Student loan", value: result.studentLoanRepayment }]
      : []),
    { label: "Total deductions", value: result.totalDeductions, isTotal: true },
    { label: "Net income (annual)", value: result.netIncome, isNet: true },
  ];

  return (
    <div>
      <p className="text-accent-600 mb-4 text-xs font-semibold tracking-widest uppercase">
        Tax year {TAX_YEAR_LABEL}
      </p>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Inputs */}
        <div className="space-y-4 lg:col-span-2">
          {incomeFields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="text-primary-900 mb-1 block text-sm font-semibold"
              >
                {field.label}
              </label>
              {field.helper && (
                <p
                  id={`${field.id}-hint`}
                  className="text-muted-foreground mb-1.5 text-xs"
                >
                  {field.helper}
                </p>
              )}
              <div className="relative">
                <span className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-base">
                  £
                </span>
                <input
                  id={field.id}
                  type="number"
                  min={0}
                  step={100}
                  value={form[field.key] as number}
                  onChange={(e) =>
                    update(field.key, Math.max(0, Number(e.target.value)))
                  }
                  aria-describedby={
                    field.helper ? `${field.id}-hint` : undefined
                  }
                  className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white py-2.5 pr-3 pl-8 text-base focus:ring-2 focus:outline-none"
                />
              </div>
            </div>
          ))}

          <div>
            <label
              htmlFor="ptf-student-loan"
              className="text-primary-900 mb-1.5 block text-sm font-semibold"
            >
              Student loan plan
            </label>
            <select
              id="ptf-student-loan"
              value={form.studentLoanPlan}
              onChange={(e) =>
                update("studentLoanPlan", e.target.value as StudentLoanPlan)
              }
              className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white px-3 py-2.5 text-base focus:ring-2 focus:outline-none"
            >
              {studentLoanOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div
          className="space-y-4 lg:col-span-3"
          aria-live="polite"
          aria-label="Tax calculation results"
        >
          <div className="bg-primary-50 border-primary-100 rounded-xl border p-5">
            <p className="text-muted-foreground text-sm">
              Estimated total tax &amp; NI
            </p>
            <p className="text-primary-900 mt-1 font-serif text-4xl font-semibold tabular-nums">
              {fmt(result.totalDeductions)}
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              Effective rate:{" "}
              <strong className="text-primary-900">
                {result.effectiveRate.toFixed(1)}%
              </strong>
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="border-border rounded-lg border bg-white p-3">
                <p className="text-muted-foreground text-xs">Income tax</p>
                <p className="text-primary-900 mt-0.5 text-lg font-semibold tabular-nums">
                  {fmt(result.incomeTax)}
                </p>
              </div>
              <div className="border-border rounded-lg border bg-white p-3">
                <p className="text-muted-foreground text-xs">
                  National Insurance
                </p>
                <p className="text-primary-900 mt-0.5 text-lg font-semibold tabular-nums">
                  {fmt(result.ni)}
                </p>
              </div>
              <div className="border-border rounded-lg border bg-white p-3">
                <p className="text-muted-foreground text-xs">
                  Personal allowance
                </p>
                <p className="text-primary-900 mt-0.5 text-lg font-semibold tabular-nums">
                  {fmt(result.personalAllowance)}
                </p>
              </div>
              <div className="bg-primary-900 rounded-lg p-3">
                <p className="text-primary-200 text-xs">Net income</p>
                <p className="text-accent-300 mt-0.5 text-lg font-semibold tabular-nums">
                  {fmt(result.netIncome)}
                </p>
              </div>
            </div>
          </div>

          <div className="border-border rounded-xl border p-5">
            <h3 className="text-primary-900 mb-3 text-sm font-semibold">
              Breakdown
            </h3>
            <div className="space-y-1.5">
              {breakdownRows.map((row) => (
                <div
                  key={row.label}
                  className={`flex justify-between text-sm ${(row as { isTotal?: boolean }).isTotal ? "border-border border-t pt-2 font-semibold" : ""}`}
                >
                  <span
                    className={
                      (row as { isTotal?: boolean }).isTotal
                        ? "text-primary-900"
                        : "text-muted-foreground"
                    }
                  >
                    {row.label}
                  </span>
                  <span className="text-primary-900 tabular-nums">
                    {fmt(row.value)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {(result.breakdown.basicRateTax > 0 ||
            result.breakdown.higherRateTax > 0 ||
            result.breakdown.additionalRateTax > 0) && (
            <div className="border-border rounded-xl border p-5">
              <h3 className="text-primary-900 mb-3 text-sm font-semibold">
                Income tax detail
              </h3>
              <div className="space-y-1.5">
                {[
                  {
                    label: "Basic rate (20%)",
                    value: result.breakdown.basicRateTax,
                  },
                  {
                    label: "Higher rate (40%)",
                    value: result.breakdown.higherRateTax,
                  },
                  {
                    label: "Additional rate (45%)",
                    value: result.breakdown.additionalRateTax,
                  },
                  {
                    label: "Dividend tax",
                    value: result.breakdown.dividendTax,
                  },
                ]
                  .filter((r) => r.value > 0)
                  .map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="text-primary-900 tabular-nums">
                        {fmt(row.value)}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <CalculatorDisclaimer className="mt-6" />
      <CalculatorCta variant="result" />
    </div>
  );
}
