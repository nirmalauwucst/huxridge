import { CORPORATION_TAX } from "./tax-year-config";

export type CorporationTaxInput = {
  taxableProfit: number;
  associatedCompanies: number;
  periodDays: number;
};

export type CorporationTaxResult = {
  taxDue: number;
  effectiveRate: number;
  profitAfterTax: number;
  band: "small" | "marginal" | "main";
  bandLabel: string;
  lowerLimit: number;
  upperLimit: number;
  breakdown: Array<{ label: string; value: number; isTotal?: boolean }>;
};

export function calculateCorporationTax(input: CorporationTaxInput): CorporationTaxResult {
  const profit = Math.max(0, input.taxableProfit);
  const divisor = 1 + Math.max(0, Math.floor(input.associatedCompanies));
  const prorate = Math.min(365, Math.max(1, Math.floor(input.periodDays))) / 365;

  const lower = (CORPORATION_TAX.smallProfitsLimit / divisor) * prorate;
  const upper = (CORPORATION_TAX.mainRateLimit / divisor) * prorate;

  let taxDue: number;
  let band: CorporationTaxResult["band"];
  let bandLabel: string;
  let breakdown: CorporationTaxResult["breakdown"];

  if (profit <= lower) {
    taxDue = profit * CORPORATION_TAX.smallProfitsRate;
    band = "small";
    bandLabel = "Small profits rate · 19%";
    breakdown = [
      { label: "Taxable profit", value: profit },
      { label: "Tax at 19%", value: taxDue, isTotal: true },
    ];
  } else if (profit >= upper) {
    taxDue = profit * CORPORATION_TAX.mainRate;
    band = "main";
    bandLabel = "Main rate · 25%";
    breakdown = [
      { label: "Taxable profit", value: profit },
      { label: "Tax at 25%", value: taxDue, isTotal: true },
    ];
  } else {
    const grossTax = profit * CORPORATION_TAX.mainRate;
    const marginalRelief = CORPORATION_TAX.marginalReliefFraction * (upper - profit);
    taxDue = grossTax - marginalRelief;
    band = "marginal";
    bandLabel = "Marginal rate";
    breakdown = [
      { label: "Tax at 25%", value: grossTax },
      { label: "Less marginal relief", value: -marginalRelief },
      { label: "Tax due", value: taxDue, isTotal: true },
    ];
  }

  const effectiveRate = profit > 0 ? (taxDue / profit) * 100 : 0;

  return {
    taxDue,
    effectiveRate,
    profitAfterTax: profit - taxDue,
    band,
    bandLabel,
    lowerLimit: lower,
    upperLimit: upper,
    breakdown,
  };
}
