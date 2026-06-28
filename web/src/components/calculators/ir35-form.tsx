"use client";

import { useState, useEffect } from "react";
import { calculateIr35 } from "@/lib/calculators/ir35";
import { TAX_YEAR_LABEL } from "@/lib/calculators/tax-year-config";
import { CalculatorCta } from "./calculator-cta";
import { CalculatorDisclaimer } from "./calculator-disclaimer";
import { trackEvent } from "@/lib/analytics";
import { TrendingUp, TrendingDown } from "lucide-react";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);
const fmtPct = (n: number) => `${n.toFixed(1)}%`;

export function Ir35Form() {
  const [dayRate, setDayRate] = useState(500);
  const [daysPerYear, setDaysPerYear] = useState(220);
  const [expenses, setExpenses] = useState(3_000);
  const [hasInteracted, setHasInteracted] = useState(false);

  const result = calculateIr35({ dayRate, daysPerYear, expenses });

  useEffect(() => {
    trackEvent("calculator_viewed", { calculator_slug: "ir35-calculator" });
  }, []);

  const handleChange = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("calculator_started", { calculator_slug: "ir35-calculator" });
    }
  };

  const isPositive = result.annualDifference >= 0;

  return (
    <div>
      <p className="text-accent-600 mb-4 text-xs font-semibold uppercase tracking-widest">Tax year {TAX_YEAR_LABEL}</p>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <label htmlFor="ir35-dayrate" className="text-primary-900 mb-1 block text-sm font-semibold">Day rate</label>
            <div className="relative">
              <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">£</span>
              <input
                id="ir35-dayrate"
                type="number"
                min={0}
                step={50}
                value={dayRate}
                onChange={(e) => { setDayRate(Math.max(0, Number(e.target.value))); handleChange(); }}
                className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white py-2.5 pl-8 pr-3 text-base focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="ir35-days" className="text-primary-900 mb-1 block text-sm font-semibold">
              Billable days per year
            </label>
            <p className="text-muted-foreground mb-1.5 text-xs">Typical range is 180–240 for full-time contractors</p>
            <input
              id="ir35-days"
              type="number"
              min={1}
              max={260}
              step={5}
              value={daysPerYear}
              onChange={(e) => { setDaysPerYear(Math.min(260, Math.max(1, Number(e.target.value)))); handleChange(); }}
              className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white px-3 py-2.5 text-base focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="ir35-expenses" className="text-primary-900 mb-1 block text-sm font-semibold">
              Annual business expenses <span className="text-muted-foreground font-normal">(outside IR35 only)</span>
            </label>
            <p className="text-muted-foreground mb-1.5 text-xs">Deductible company expenses: software, equipment, training</p>
            <div className="relative">
              <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">£</span>
              <input
                id="ir35-expenses"
                type="number"
                min={0}
                step={100}
                value={expenses}
                onChange={(e) => { setExpenses(Math.max(0, Number(e.target.value))); handleChange(); }}
                className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white py-2.5 pl-8 pr-3 text-base focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="bg-primary-50 border-primary-100 rounded-lg border p-3 text-xs text-primary-800">
            <strong>Gross contract income:</strong> {fmt(result.outside.grossIncome)} / year
            <br />({fmt(dayRate)} × {daysPerYear} days)
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4" aria-live="polite">
          <div className={`flex gap-3 rounded-xl p-4 ${isPositive ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
            {isPositive
              ? <TrendingUp className="text-green-600 mt-0.5 h-5 w-5 shrink-0" />
              : <TrendingDown className="text-red-600 mt-0.5 h-5 w-5 shrink-0" />}
            <div>
              <p className={`text-sm font-semibold ${isPositive ? "text-green-800" : "text-red-800"}`}>
                Outside IR35 pays {isPositive ? "more" : "less"} — annual difference: <span className="tabular-nums">{fmt(Math.abs(result.annualDifference))}</span>
              </p>
              <p className={`mt-0.5 text-xs ${isPositive ? "text-green-700" : "text-red-700"}`}>
                This is the estimated annual take-home difference between operating outside and inside IR35.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[result.outside, result.inside].map((scenario, i) => {
              const isOutside = i === 0;
              return (
                <div key={scenario.label} className={`rounded-xl border p-4 ${isOutside ? "bg-primary-900 border-primary-900" : "bg-white border-border"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wide ${isOutside ? "text-primary-300" : "text-muted-foreground"}`}>
                    {scenario.label}
                  </p>
                  <p className={`mt-2 font-serif text-3xl font-semibold tabular-nums ${isOutside ? "text-accent-300" : "text-primary-900"}`}>
                    {fmt(scenario.takeHome)}
                  </p>
                  <p className={`text-xs mt-0.5 ${isOutside ? "text-primary-300" : "text-muted-foreground"}`}>take-home per year</p>

                  <div className={`mt-3 space-y-1.5 border-t pt-3 text-xs ${isOutside ? "border-primary-700" : "border-border"}`}>
                    <div className="flex justify-between">
                      <span className={isOutside ? "text-primary-300" : "text-muted-foreground"}>Total tax</span>
                      <span className={`tabular-nums ${isOutside ? "text-white" : "text-primary-900"}`}>{fmt(scenario.totalTax)}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span className={isOutside ? "text-primary-200" : "text-primary-900"}>Effective rate</span>
                      <span className={`tabular-nums ${isOutside ? "text-accent-300" : "text-primary-900"}`}>{fmtPct(scenario.effectiveRate)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-muted-foreground text-xs">
            Outside IR35 assumes optimal salary (£9,100) + dividends structure. Inside IR35 uses 5% expenses offset applied to deemed employment income. ⚠️ The 5% expenses offset may be abolished — verify current rules.
          </p>
        </div>
      </div>

      <CalculatorDisclaimer className="mt-6" />
      <CalculatorCta variant="result" />
    </div>
  );
}
