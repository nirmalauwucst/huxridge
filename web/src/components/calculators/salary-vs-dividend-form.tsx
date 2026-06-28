"use client";

import { useState, useEffect } from "react";
import { calculateSalaryVsDividend, type ScenarioResult } from "@/lib/calculators/salary-vs-dividend";
import { TAX_YEAR_LABEL } from "@/lib/calculators/tax-year-config";
import { CalculatorCta } from "./calculator-cta";
import { CalculatorDisclaimer } from "./calculator-disclaimer";
import { trackEvent } from "@/lib/analytics";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);
const fmtPct = (n: number) => `${n.toFixed(1)}%`;

function ScenarioCard({ scenario, highlight }: { scenario: ScenarioResult; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? "bg-primary-900 border-primary-900 text-white" : "bg-white border-border"}`}>
      <p className={`text-xs font-semibold uppercase tracking-wide ${highlight ? "text-primary-300" : "text-muted-foreground"}`}>
        {scenario.label}
      </p>
      <p className={`mt-2 font-serif text-3xl font-semibold tabular-nums ${highlight ? "text-accent-300" : "text-primary-900"}`}>
        {fmt(scenario.takeHome)}
      </p>
      <p className={`mt-0.5 text-xs ${highlight ? "text-primary-300" : "text-muted-foreground"}`}>take-home</p>

      <div className={`mt-3 space-y-1 text-xs border-t pt-3 ${highlight ? "border-primary-700" : "border-border"}`}>
        {[
          { label: "Salary", value: scenario.salary },
          { label: "Dividends", value: scenario.dividends },
          { label: "Corp tax", value: scenario.corporationTax },
          { label: "Income tax", value: scenario.incomeTax },
          { label: "Employee NI", value: scenario.employeeNi },
          { label: "Total tax", value: scenario.totalTax },
        ].map((row) => (
          <div key={row.label} className="flex justify-between">
            <span className={highlight ? "text-primary-300" : "text-muted-foreground"}>{row.label}</span>
            <span className={`tabular-nums ${highlight ? "text-white" : "text-primary-900"}`}>{fmt(row.value)}</span>
          </div>
        ))}
        <div className="flex justify-between font-semibold border-t pt-1 mt-1" style={{ borderColor: highlight ? "rgba(255,255,255,0.2)" : undefined }}>
          <span className={highlight ? "text-primary-200" : "text-primary-900"}>Effective rate</span>
          <span className={`tabular-nums ${highlight ? "text-accent-300" : "text-primary-900"}`}>{fmtPct(scenario.effectiveRate)}</span>
        </div>
      </div>
    </div>
  );
}

export function SalaryVsDividendForm() {
  const [profit, setProfit] = useState(80_000);
  const [pension, setPension] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const results = calculateSalaryVsDividend({ companyProfit: profit, pensionContributions: pension });

  useEffect(() => {
    trackEvent("calculator_viewed", { calculator_slug: "salary-vs-dividend-calculator" });
  }, []);

  const handleChange = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("calculator_started", { calculator_slug: "salary-vs-dividend-calculator" });
    }
  };

  return (
    <div>
      <p className="text-accent-600 mb-4 text-xs font-semibold uppercase tracking-widest">Tax year {TAX_YEAR_LABEL}</p>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 max-w-lg">
        <div>
          <label htmlFor="svd-profit" className="text-primary-900 mb-1 block text-sm font-semibold">
            Company profit (pre-salary)
          </label>
          <p className="text-muted-foreground mb-1.5 text-xs">Income available to extract</p>
          <div className="relative">
            <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">£</span>
            <input
              id="svd-profit"
              type="number"
              min={0}
              step={1000}
              value={profit}
              onChange={(e) => { setProfit(Math.max(0, Number(e.target.value))); handleChange(); }}
              className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white py-2.5 pl-8 pr-3 text-base focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="svd-pension" className="text-primary-900 mb-1 block text-sm font-semibold">
            Pension contributions
          </label>
          <p className="text-muted-foreground mb-1.5 text-xs">Personal contributions (reduces taxable income)</p>
          <div className="relative">
            <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">£</span>
            <input
              id="svd-pension"
              type="number"
              min={0}
              step={100}
              value={pension}
              onChange={(e) => { setPension(Math.max(0, Number(e.target.value))); handleChange(); }}
              className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white py-2.5 pl-8 pr-3 text-base focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3" aria-live="polite">
        <ScenarioCard scenario={results.optimal} highlight />
        <ScenarioCard scenario={results.halfAndHalf} />
        <ScenarioCard scenario={results.allSalary} />
      </div>

      <p className="text-muted-foreground mt-4 text-xs">
        * Optimal scenario assumes director salary at secondary NI threshold (£9,100) with remaining profit distributed as dividends. Employment Allowance not claimed (sole director).
      </p>

      <CalculatorDisclaimer className="mt-6" />
      <CalculatorCta variant="result" />
    </div>
  );
}
