import { VAT_RATES } from "./tax-year-config";

export type VatRateKey = "standard" | "reduced" | "zero";
export type VatDirection = "add" | "remove";

export type VatInput = {
  amount: number;
  rate: VatRateKey;
  direction: VatDirection;
};

export type VatResult = {
  netAmount: number;
  vatAmount: number;
  grossAmount: number;
  ratePercent: number;
};

export function calculateVat(input: VatInput): VatResult {
  const rateDecimal = VAT_RATES[input.rate];
  const ratePercent = rateDecimal * 100;
  let netAmount: number;
  let vatAmount: number;
  let grossAmount: number;

  if (input.direction === "add") {
    netAmount = Math.max(0, input.amount);
    vatAmount = netAmount * rateDecimal;
    grossAmount = netAmount + vatAmount;
  } else {
    grossAmount = Math.max(0, input.amount);
    netAmount = grossAmount / (1 + rateDecimal);
    vatAmount = grossAmount - netAmount;
  }

  return { netAmount, vatAmount, grossAmount, ratePercent };
}
