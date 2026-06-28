import { INCOME_TAX, DIVIDENDS } from "./tax-year-config";

export type DividendTaxInput = {
  otherIncome: number;       // employment, self-employment, rental
  pensionContributions: number;
  dividendIncome: number;
};

export type DividendTaxResult = {
  dividendAllowance: number;
  taxableDividends: number;
  dividendTax: number;
  effectiveRate: number;
  breakdown: Array<{ label: string; value: number; rate?: string; isTotal?: boolean }>;
};

export function calculateDividendTax(input: DividendTaxInput): DividendTaxResult {
  const { otherIncome, pensionContributions, dividendIncome } = input;

  const adjOther = Math.max(0, otherIncome - pensionContributions);

  // Personal allowance taper
  const grossIncome = adjOther + dividendIncome;
  const excess = Math.max(0, grossIncome - INCOME_TAX.taperStart);
  const pa = Math.max(0, INCOME_TAX.personalAllowance - Math.floor(excess / 2));

  // Non-dividend portion uses up the bands first
  const nonDivTaxable = Math.max(0, adjOther - pa);
  const basicBand = INCOME_TAX.basicRateLimit - pa;
  const higherBand = INCOME_TAX.additionalRateThreshold - INCOME_TAX.basicRateLimit;

  const remainingBasic = Math.max(0, basicBand - nonDivTaxable);
  const remainingHigher = Math.max(0, higherBand - Math.max(0, nonDivTaxable - basicBand));

  const dividendAboveAllowance = Math.max(0, dividendIncome - DIVIDENDS.allowance);

  const divBasic = Math.min(dividendAboveAllowance, remainingBasic);
  const divHigher = Math.min(Math.max(0, dividendAboveAllowance - divBasic), remainingHigher);
  const divAdditional = Math.max(0, dividendAboveAllowance - divBasic - divHigher);

  const taxBasic = divBasic * DIVIDENDS.basicRate;
  const taxHigher = divHigher * DIVIDENDS.higherRate;
  const taxAdditional = divAdditional * DIVIDENDS.additionalRate;
  const dividendTax = taxBasic + taxHigher + taxAdditional;

  const breakdown: DividendTaxResult["breakdown"] = [];
  if (divBasic > 0) breakdown.push({ label: `Basic rate (${(DIVIDENDS.basicRate * 100).toFixed(2)}%)`, value: taxBasic, rate: `${(DIVIDENDS.basicRate * 100).toFixed(2)}%` });
  if (divHigher > 0) breakdown.push({ label: `Higher rate (${(DIVIDENDS.higherRate * 100).toFixed(2)}%)`, value: taxHigher, rate: `${(DIVIDENDS.higherRate * 100).toFixed(2)}%` });
  if (divAdditional > 0) breakdown.push({ label: `Additional rate (${(DIVIDENDS.additionalRate * 100).toFixed(2)}%)`, value: taxAdditional, rate: `${(DIVIDENDS.additionalRate * 100).toFixed(2)}%` });
  breakdown.push({ label: "Total dividend tax", value: dividendTax, isTotal: true });

  return {
    dividendAllowance: DIVIDENDS.allowance,
    taxableDividends: dividendAboveAllowance,
    dividendTax,
    effectiveRate: dividendIncome > 0 ? (dividendTax / dividendIncome) * 100 : 0,
    breakdown,
  };
}
