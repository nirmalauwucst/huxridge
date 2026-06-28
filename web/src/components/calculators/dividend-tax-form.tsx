"use client";

import { useState, useEffect } from "react";
import { calculateDividendTax } from "@/lib/calculators/dividend-tax";
import { DIVIDENDS, TAX_YEAR_LABEL } from "@/lib/calculators/tax-year-config";
import { CalculatorCta } from "./calculator-cta";
import { CalculatorDisclaimer } from "./calculator-disclaimer";
import { trackEvent } from "@/lib/analytics";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);

export function DividendTaxForm() {
  const [otherIncome, setOtherIncome] = useState(30_000);
  const [pensionContributions, setPensionContributions] = useState(0);
  const [dividendIncome, setDividendIncome] = useState(20_000);
  const [hasInteracted, setHasInteracted] = useState(false);

  const result = calculateDividendTax({ otherIncome, pensionContributions, dividendIncome });

  useEffect(() => {
    trackEvent("calculator_viewed", { calculator_slug: "dividend-tax-calculator" });
  }, []);

  const handleChange = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("calculator_started", { calculator_slug: "dividend-tax-calculator" });
    }
  };

  return (
    <div>
      <p className="text-accent-600 mb-4 text-xs font-semibold uppercase tracking-widest">Tax year {TAX_YEAR_LABEL}</p>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          {[
            { id: "dtf-other", label: "Other income (salary, rental, etc.)", helper: "Employment or other non-dividend income", value: otherIncome, set: setOtherIncome },
            { id: "dtf-pension", label: "Pension contributions", helper: "Reduces your adjusted net income", value: pensionContributions, set: setPensionContributions },
            { id: "dtf-dividends", label: "Dividend income", helper: "Gross dividends received or declared", value: dividendIncome, set: setDividendIncome },
          ].map(({ id, label, helper, value, set }) => (
            <div key={id}>
              <label htmlFor={id} className="text-primary-900 mb-1 block text-sm font-semibold">{label}</label>
              <p id={`${id}-hint`} className="text-muted-foreground mb-1.5 text-xs">{helper}</p>
              <div className="relative">
                <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">£</span>
                <input
                  id={id}
                  type="number"
                  min={0}
                  step={100}
                  value={value}
                  onChange={(e) => { set(Math.max(0, Number(e.target.value))); handleChange(); }}
                  aria-describedby={`${id}-hint`}
                  className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white py-2.5 pl-8 pr-3 text-base focus:ring-2 focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-50 border-primary-100 rounded-xl border p-5 lg:col-span-3" aria-live="polite">
          <p className="text-muted-foreground text-sm">Estimated dividend tax</p>
          <p className="text-primary-900 mt-1 font-serif text-4xl font-semibold tabular-nums">{fmt(result.dividendTax)}</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Effective rate: <strong className="text-primary-900">{result.effectiveRate.toFixed(1)}%</strong>
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-white border-border rounded-lg border p-3">
              <p className="text-muted-foreground text-xs">Dividend allowance</p>
              <p className="text-primary-900 mt-0.5 text-lg font-semibold">{fmt(DIVIDENDS.allowance)}</p>
            </div>
            <div className="bg-white border-border rounded-lg border p-3">
              <p className="text-muted-foreground text-xs">Taxable dividends</p>
              <p className="text-primary-900 mt-0.5 text-lg font-semibold tabular-nums">{fmt(result.taxableDividends)}</p>
            </div>
          </div>

          {result.breakdown.length > 0 && (
            <div className="border-border mt-4 space-y-1.5 border-t pt-4">
              {result.breakdown.map((row) => (
                <div key={row.label} className={`flex justify-between text-sm ${row.isTotal ? "border-border border-t pt-1.5 font-semibold" : ""}`}>
                  <span className={row.isTotal ? "text-primary-900" : "text-muted-foreground"}>{row.label}</span>
                  <span className="text-primary-900 tabular-nums">{fmt(row.value)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <CalculatorDisclaimer className="mt-6" />
      <CalculatorCta variant="result" />
    </div>
  );
}
