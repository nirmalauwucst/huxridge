"use client";

import { useState, useEffect } from "react";
import { calculateTakeHomePay } from "@/lib/calculators/take-home-pay";
import { TAX_YEAR_LABEL } from "@/lib/calculators/tax-year-config";
import type { StudentLoanPlan } from "@/lib/calculators/personal-tax";
import { CalculatorCta } from "./calculator-cta";
import { CalculatorDisclaimer } from "./calculator-disclaimer";
import { trackEvent } from "@/lib/analytics";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);
const fmtDec = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);

const studentLoanOptions: { value: StudentLoanPlan; label: string }[] = [
  { value: "none", label: "None" },
  { value: "plan1", label: "Plan 1" },
  { value: "plan2", label: "Plan 2" },
  { value: "plan4", label: "Plan 4" },
  { value: "postgrad", label: "Postgraduate" },
];

export function TakeHomePayForm() {
  const [grossSalary, setGrossSalary] = useState(35_000);
  const [pensionPercent, setPensionPercent] = useState(5);
  const [studentLoanPlan, setStudentLoanPlan] =
    useState<StudentLoanPlan>("none");
  const [hasInteracted, setHasInteracted] = useState(false);

  const result = calculateTakeHomePay({
    grossSalary,
    pensionPercent,
    studentLoanPlan,
  });

  useEffect(() => {
    trackEvent("calculator_viewed", {
      calculator_slug: "take-home-pay-calculator",
    });
  }, []);

  const handleChange = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("calculator_started", {
        calculator_slug: "take-home-pay-calculator",
      });
    }
  };

  return (
    <div>
      <p className="text-accent-600 mb-4 text-xs font-semibold tracking-widest uppercase">
        Tax year {TAX_YEAR_LABEL}
      </p>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <div>
            <label
              htmlFor="thp-salary"
              className="text-primary-900 mb-1 block text-sm font-semibold"
            >
              Gross annual salary
            </label>
            <div className="relative">
              <span className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
                £
              </span>
              <input
                id="thp-salary"
                type="number"
                min={0}
                step={1000}
                value={grossSalary}
                onChange={(e) => {
                  setGrossSalary(Math.max(0, Number(e.target.value)));
                  handleChange();
                }}
                className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white py-2.5 pr-3 pl-8 text-base focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="thp-pension"
              className="text-primary-900 mb-1 block text-sm font-semibold"
            >
              Employee pension contribution{" "}
              <span className="text-muted-foreground font-normal">(%)</span>
            </label>
            <p className="text-muted-foreground mb-1.5 text-xs">
              Your personal contribution as % of gross salary
            </p>
            <div className="relative">
              <input
                id="thp-pension"
                type="number"
                min={0}
                max={100}
                step={0.5}
                value={pensionPercent}
                onChange={(e) => {
                  setPensionPercent(
                    Math.min(100, Math.max(0, Number(e.target.value))),
                  );
                  handleChange();
                }}
                className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white px-3 py-2.5 pr-8 text-base focus:ring-2 focus:outline-none"
              />
              <span className="text-muted-foreground pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
                %
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="thp-student-loan"
              className="text-primary-900 mb-1.5 block text-sm font-semibold"
            >
              Student loan
            </label>
            <select
              id="thp-student-loan"
              value={studentLoanPlan}
              onChange={(e) => {
                setStudentLoanPlan(e.target.value as StudentLoanPlan);
                handleChange();
              }}
              className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white px-3 py-2.5 text-base focus:ring-2 focus:outline-none"
            >
              {studentLoanOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-3" aria-live="polite">
          <div className="bg-primary-900 rounded-xl p-5 text-white">
            <p className="text-primary-300 text-sm">Monthly take-home</p>
            <p className="text-accent-300 mt-1 font-serif text-4xl font-semibold tabular-nums">
              {fmtDec(result.netMonthly)}
            </p>
            <p className="text-primary-300 mt-1 text-sm">
              {fmt(result.netAnnual)} per year · {fmt(result.netWeekly)} per
              week
            </p>
          </div>

          <div className="border-border rounded-xl border p-5">
            <h3 className="text-primary-900 mb-3 text-sm font-semibold">
              Deductions breakdown
            </h3>
            <div className="space-y-1.5">
              {result.breakdown.map((row) => (
                <div
                  key={row.label}
                  className={`flex justify-between text-sm ${row.isTotal ? "border-border border-t pt-2 font-semibold" : ""}`}
                >
                  <span
                    className={
                      row.isTotal ? "text-primary-900" : "text-muted-foreground"
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

            <div className="bg-primary-50 border-primary-100 mt-4 rounded-lg border p-3 text-xs">
              <span className="text-primary-900 font-medium">
                Effective tax rate:{" "}
              </span>
              <span className="text-muted-foreground">
                {result.effectiveRate.toFixed(1)}% of gross salary
              </span>
            </div>
          </div>
        </div>
      </div>

      <CalculatorDisclaimer className="mt-6" />
      <CalculatorCta variant="result" />
    </div>
  );
}
