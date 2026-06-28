"use client";

import { useState, useEffect } from "react";
import { calculateCorporationTax } from "@/lib/calculators/corporation-tax";
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
const fmtPct = (n: number) => `${n.toFixed(2)}%`;

export function CorporationTaxForm() {
  const [profit, setProfit] = useState(100_000);
  const [assoc, setAssoc] = useState(0);
  const [days, setDays] = useState(365);
  const [hasInteracted, setHasInteracted] = useState(false);

  const result = calculateCorporationTax({
    taxableProfit: profit,
    associatedCompanies: assoc,
    periodDays: days,
  });

  useEffect(() => {
    trackEvent("calculator_viewed", {
      calculator_slug: "corporation-tax-calculator",
    });
  }, []);

  const handleChange = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("calculator_started", {
        calculator_slug: "corporation-tax-calculator",
      });
    }
  };

  const bandColour =
    result.band === "small"
      ? "text-green-700 bg-green-50"
      : result.band === "marginal"
        ? "text-amber-700 bg-amber-50"
        : "text-red-700 bg-red-50";

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Inputs */}
        <div className="space-y-5 lg:col-span-2">
          <p className="text-accent-600 text-xs font-semibold tracking-widest uppercase">
            Tax year {TAX_YEAR_LABEL}
          </p>

          <div>
            <label
              htmlFor="ctf-profit"
              className="text-primary-900 mb-1.5 block text-sm font-semibold"
            >
              Taxable profit for the period
            </label>
            <div className="relative">
              <span className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-base">
                £
              </span>
              <input
                id="ctf-profit"
                type="number"
                min={0}
                step={1000}
                value={profit}
                onChange={(e) => {
                  setProfit(Math.max(0, Number(e.target.value)));
                  handleChange();
                }}
                className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white py-2.5 pr-3 pl-8 text-base focus:ring-2 focus:outline-none"
                aria-label="Taxable profit in pounds"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="ctf-assoc"
                className="text-primary-900 mb-1.5 block text-sm font-semibold"
              >
                Associated companies
              </label>
              <input
                id="ctf-assoc"
                type="number"
                min={0}
                step={1}
                value={assoc}
                onChange={(e) => {
                  setAssoc(Math.max(0, Number(e.target.value)));
                  handleChange();
                }}
                className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white px-3 py-2.5 text-base focus:ring-2 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="ctf-days"
                className="text-primary-900 mb-1.5 block text-sm font-semibold"
              >
                Period{" "}
                <span className="text-muted-foreground font-normal">
                  (days)
                </span>
              </label>
              <input
                id="ctf-days"
                type="number"
                min={1}
                max={365}
                step={1}
                value={days}
                onChange={(e) => {
                  setDays(Math.min(365, Math.max(1, Number(e.target.value))));
                  handleChange();
                }}
                className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white px-3 py-2.5 text-base focus:ring-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div
          className="bg-primary-50 border-primary-100 rounded-xl border p-5 lg:col-span-3"
          aria-live="polite"
          aria-label="Calculation results"
        >
          <p className="text-muted-foreground text-sm">
            Estimated corporation tax
          </p>
          <p className="text-primary-900 mt-1 font-serif text-4xl font-semibold tabular-nums">
            {fmt(result.taxDue)}
          </p>
          <span
            className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${bandColour}`}
          >
            {result.bandLabel}
          </span>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="border-border rounded-lg border bg-white p-3">
              <p className="text-muted-foreground text-xs">Effective rate</p>
              <p className="text-primary-900 mt-0.5 text-lg font-semibold tabular-nums">
                {fmtPct(result.effectiveRate)}
              </p>
            </div>
            <div className="border-border rounded-lg border bg-white p-3">
              <p className="text-muted-foreground text-xs">Profit after tax</p>
              <p className="text-primary-900 mt-0.5 text-lg font-semibold tabular-nums">
                {fmt(result.profitAfterTax)}
              </p>
            </div>
          </div>

          <div className="border-border mt-4 space-y-1.5 border-t pt-4">
            {result.breakdown.map((row) => (
              <div
                key={row.label}
                className={`flex justify-between text-sm ${row.isTotal ? "border-border border-t pt-1.5 font-semibold" : ""}`}
              >
                <span
                  className={
                    row.isTotal ? "text-primary-900" : "text-muted-foreground"
                  }
                >
                  {row.label}
                </span>
                <span className="text-primary-900 tabular-nums">
                  {fmt(Math.abs(row.value))}
                </span>
              </div>
            ))}
            {(assoc > 0 || days < 365) && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Adjusted thresholds
                </span>
                <span className="text-primary-900 tabular-nums">
                  {fmt(result.lowerLimit)} – {fmt(result.upperLimit)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <CalculatorDisclaimer className="mt-6" />
      <CalculatorCta variant="result" />
    </div>
  );
}
