"use client";

import { useState, useEffect } from "react";
import { calculateLandlordTax, type LandlordTaxInput } from "@/lib/calculators/landlord-tax";
import { TAX_YEAR_LABEL } from "@/lib/calculators/tax-year-config";
import { CalculatorCta } from "./calculator-cta";
import { CalculatorDisclaimer } from "./calculator-disclaimer";
import { trackEvent } from "@/lib/analytics";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);

export function LandlordTaxForm() {
  const [rentalIncome, setRentalIncome] = useState(15_000);
  const [mortgageInterest, setMortgageInterest] = useState(5_000);
  const [otherExpenses, setOtherExpenses] = useState(2_000);
  const [otherIncome, setOtherIncome] = useState(40_000);
  const [ownershipType, setOwnershipType] = useState<LandlordTaxInput["ownershipType"]>("personal");
  const [hasInteracted, setHasInteracted] = useState(false);

  const result = calculateLandlordTax({
    rentalIncome,
    mortgageInterest,
    otherAllowableExpenses: otherExpenses,
    otherPersonalIncome: otherIncome,
    ownershipType,
  });

  useEffect(() => {
    trackEvent("calculator_viewed", { calculator_slug: "landlord-tax-calculator" });
  }, []);

  const handleChange = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("calculator_started", { calculator_slug: "landlord-tax-calculator" });
    }
  };

  return (
    <div>
      <p className="text-accent-600 mb-4 text-xs font-semibold uppercase tracking-widest">Tax year {TAX_YEAR_LABEL}</p>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <fieldset>
            <legend className="text-primary-900 mb-2 text-sm font-semibold">Ownership type</legend>
            <div className="grid grid-cols-2 gap-2">
              {(["personal", "company"] as const).map((type) => (
                <label key={type} className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border p-3 text-center has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50 border-border">
                  <input
                    type="radio"
                    name="ownership"
                    value={type}
                    checked={ownershipType === type}
                    onChange={() => { setOwnershipType(type); handleChange(); }}
                    className="accent-primary-700"
                  />
                  <span className="text-primary-900 text-sm font-medium capitalize">{type}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {[
            { id: "ltf-rental", label: "Annual rental income", value: rentalIncome, set: setRentalIncome, helper: "Gross rent received" },
            { id: "ltf-mortgage", label: "Annual mortgage interest", value: mortgageInterest, set: setMortgageInterest, helper: "Finance costs (interest only, not capital repayment)" },
            { id: "ltf-expenses", label: "Other allowable expenses", value: otherExpenses, set: setOtherExpenses, helper: "Letting fees, insurance, repairs, accountancy" },
            ...(ownershipType === "personal" ? [{ id: "ltf-other-income", label: "Other personal income", value: otherIncome, set: setOtherIncome, helper: "Salary, pension, or other non-rental income" }] : []),
          ].map(({ id, label, value, set, helper }) => (
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
          <p className="text-muted-foreground text-sm">Estimated tax on rental income</p>
          <p className="text-primary-900 mt-1 font-serif text-4xl font-semibold tabular-nums">{fmt(result.netTaxOnRental)}</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Effective rental tax rate: <strong className="text-primary-900">{result.effectiveRentalTaxRate.toFixed(1)}%</strong>
          </p>

          <div className="border-border mt-5 space-y-1.5 border-t pt-4">
            {result.breakdown.map((row) => (
              <div key={row.label} className={`flex justify-between text-sm ${row.isTotal ? "border-border border-t pt-1.5 font-semibold" : ""}`}>
                <span className={row.isTotal ? "text-primary-900" : "text-muted-foreground"}>{row.label}</span>
                <span className="text-primary-900 tabular-nums">
                  {row.value < 0 ? `−${fmt(Math.abs(row.value))}` : fmt(row.value)}
                </span>
              </div>
            ))}
          </div>

          {ownershipType === "personal" && mortgageInterest > 0 && (
            <div className="bg-amber-50 border-amber-200 mt-4 rounded-lg border p-3 text-xs text-amber-900">
              <strong>Section 24 applies.</strong> Mortgage interest (£{mortgageInterest.toLocaleString()}) cannot be deducted from profits directly. You receive a 20% tax relief credit (£{fmt(result.mortgageInterestRelief)}) instead, which is less beneficial for higher-rate taxpayers.
            </div>
          )}
        </div>
      </div>

      <CalculatorDisclaimer className="mt-6" />
      <CalculatorCta variant="result" />
    </div>
  );
}
