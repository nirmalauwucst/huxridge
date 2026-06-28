"use client";

import { useState, useEffect } from "react";
import {
  calculateVat,
  type VatRateKey,
  type VatDirection,
} from "@/lib/calculators/vat";
import { CalculatorCta } from "./calculator-cta";
import { CalculatorDisclaimer } from "./calculator-disclaimer";
import { trackEvent } from "@/lib/analytics";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);

export function VatForm() {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState<VatRateKey>("standard");
  const [direction, setDirection] = useState<VatDirection>("add");
  const [hasInteracted, setHasInteracted] = useState(false);

  const result = calculateVat({ amount, rate, direction });

  useEffect(() => {
    trackEvent("calculator_viewed", { calculator_slug: "vat-calculator" });
  }, []);

  const handleChange = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("calculator_started", { calculator_slug: "vat-calculator" });
    }
  };

  const rateLabels: Record<VatRateKey, string> = {
    standard: "Standard rate (20%)",
    reduced: "Reduced rate (5%)",
    zero: "Zero rate (0%)",
  };

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Inputs */}
        <div className="space-y-5 lg:col-span-2">
          <div>
            <label
              htmlFor="vat-amount"
              className="text-primary-900 mb-1.5 block text-sm font-semibold"
            >
              Amount
            </label>
            <div className="relative">
              <span className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-base">
                £
              </span>
              <input
                id="vat-amount"
                type="number"
                min={0}
                step={1}
                value={amount}
                onChange={(e) => {
                  setAmount(Math.max(0, Number(e.target.value)));
                  handleChange();
                }}
                className="border-border text-primary-900 focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border bg-white py-2.5 pr-3 pl-8 text-base focus:ring-2 focus:outline-none"
                aria-label="Amount in pounds"
              />
            </div>
          </div>

          <fieldset>
            <legend className="text-primary-900 mb-2 text-sm font-semibold">
              VAT rate
            </legend>
            <div className="space-y-2">
              {(["standard", "reduced", "zero"] as VatRateKey[]).map((r) => (
                <label
                  key={r}
                  className="has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50 border-border flex cursor-pointer items-center gap-3 rounded-lg border p-3"
                >
                  <input
                    type="radio"
                    name="vat-rate"
                    value={r}
                    checked={rate === r}
                    onChange={() => {
                      setRate(r);
                      handleChange();
                    }}
                    className="accent-primary-700"
                  />
                  <span className="text-primary-900 text-sm">
                    {rateLabels[r]}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-primary-900 mb-2 text-sm font-semibold">
              Calculate
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {(["add", "remove"] as VatDirection[]).map((d) => (
                <label
                  key={d}
                  className="has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50 border-border flex cursor-pointer items-center justify-center gap-2 rounded-lg border p-3 text-center"
                >
                  <input
                    type="radio"
                    name="vat-direction"
                    value={d}
                    checked={direction === d}
                    onChange={() => {
                      setDirection(d);
                      handleChange();
                    }}
                    className="accent-primary-700"
                  />
                  <span className="text-primary-900 text-sm font-medium">
                    {d === "add" ? "Add VAT" : "Remove VAT"}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Results */}
        <div
          className="bg-primary-50 border-primary-100 rounded-xl border p-5 lg:col-span-3"
          aria-live="polite"
          aria-label="VAT calculation results"
        >
          <p className="text-muted-foreground text-sm">
            VAT amount ({result.ratePercent}%)
          </p>
          <p className="text-primary-900 mt-1 font-serif text-4xl font-semibold tabular-nums">
            {fmt(result.vatAmount)}
          </p>

          <div className="mt-5 space-y-3">
            {[
              { label: "Net amount (ex. VAT)", value: result.netAmount },
              {
                label: `VAT (${result.ratePercent}%)`,
                value: result.vatAmount,
              },
              {
                label: "Gross amount (inc. VAT)",
                value: result.grossAmount,
                highlight: true,
              },
            ].map((row) => (
              <div
                key={row.label}
                className={`flex justify-between rounded-lg px-4 py-3 ${row.highlight ? "border-border border bg-white font-semibold" : "bg-white/60"}`}
              >
                <span
                  className={`text-sm ${row.highlight ? "text-primary-900" : "text-muted-foreground"}`}
                >
                  {row.label}
                </span>
                <span className="text-primary-900 text-sm tabular-nums">
                  {fmt(row.value)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CalculatorDisclaimer className="mt-6" />
      <CalculatorCta variant="result" />
    </div>
  );
}
