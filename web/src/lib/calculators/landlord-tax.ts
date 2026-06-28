import { INCOME_TAX, SECTION_24, CGT } from "./tax-year-config";

export type LandlordTaxInput = {
  rentalIncome: number;
  mortgageInterest: number;
  otherAllowableExpenses: number;  // letting agent, insurance, repairs, etc.
  otherPersonalIncome: number;     // employment, pensions, etc.
  ownershipType: "personal" | "company";
};

export type LandlordTaxResult = {
  rentalProfit: number;
  section24Restriction: number;
  taxOnRentalProfit: number;
  mortgageInterestRelief: number;
  netTaxOnRental: number;
  effectiveRentalTaxRate: number;
  totalIncome: number;
  breakdown: Array<{ label: string; value: number; isTotal?: boolean }>;
};

export function calculateLandlordTax(input: LandlordTaxInput): LandlordTaxResult {
  const { rentalIncome, mortgageInterest, otherAllowableExpenses, otherPersonalIncome } = input;

  // Rental profit before mortgage interest (Section 24 applies for personal ownership)
  const rentalProfit = Math.max(0, rentalIncome - otherAllowableExpenses);

  if (input.ownershipType === "company") {
    // For company: mortgage interest is fully deductible
    const netRentalProfit = Math.max(0, rentalProfit - mortgageInterest);
    // Corporation tax at relevant rate (simplified: use main threshold)
    const corpTax = netRentalProfit <= 50_000
      ? netRentalProfit * 0.19
      : netRentalProfit >= 250_000
      ? netRentalProfit * 0.25
      : netRentalProfit * 0.25 - (3 / 200) * (250_000 - netRentalProfit);

    return {
      rentalProfit: netRentalProfit,
      section24Restriction: 0,
      taxOnRentalProfit: corpTax,
      mortgageInterestRelief: mortgageInterest,
      netTaxOnRental: corpTax,
      effectiveRentalTaxRate: netRentalProfit > 0 ? (corpTax / netRentalProfit) * 100 : 0,
      totalIncome: rentalIncome,
      breakdown: [
        { label: "Rental income", value: rentalIncome },
        { label: "Less mortgage interest", value: -mortgageInterest },
        { label: "Less other expenses", value: -otherAllowableExpenses },
        { label: "Net rental profit", value: netRentalProfit },
        { label: "Corporation tax", value: corpTax, isTotal: true },
      ],
    };
  }

  // Personal ownership — Section 24 applies
  // Profit = rental income - allowable expenses (NOT mortgage interest)
  const taxableRentalProfit = rentalProfit; // mortgage interest NOT deducted from profit

  const totalIncome = otherPersonalIncome + taxableRentalProfit;
  const excess = Math.max(0, totalIncome - INCOME_TAX.taperStart);
  const pa = Math.max(0, INCOME_TAX.personalAllowance - Math.floor(excess / 2));

  // Tax on total income
  const totalTaxable = Math.max(0, totalIncome - pa);
  const basicBand = INCOME_TAX.basicRateLimit - pa;
  const higherBand = INCOME_TAX.additionalRateThreshold - INCOME_TAX.basicRateLimit;

  const basic = Math.min(totalTaxable, basicBand);
  const higher = Math.min(Math.max(0, totalTaxable - basicBand), higherBand);
  const additional = Math.max(0, totalTaxable - basicBand - higherBand);

  const totalIncomeTax = basic * INCOME_TAX.basicRate + higher * INCOME_TAX.higherRate + additional * INCOME_TAX.additionalRate;

  // Tax on other income only (to isolate rental portion)
  const otherTaxable = Math.max(0, otherPersonalIncome - pa);
  const basicOther = Math.min(otherTaxable, basicBand);
  const higherOther = Math.min(Math.max(0, otherTaxable - basicBand), higherBand);
  const additionalOther = Math.max(0, otherTaxable - basicBand - higherBand);
  const otherIncomeTax = basicOther * INCOME_TAX.basicRate + higherOther * INCOME_TAX.higherRate + additionalOther * INCOME_TAX.additionalRate;

  const taxOnRentalProfit = Math.max(0, totalIncomeTax - otherIncomeTax);

  // Section 24 relief: 20% of mortgage interest as a tax reducer
  const mortgageInterestRelief = Math.min(mortgageInterest * SECTION_24.reliefRate, taxOnRentalProfit);
  const netTaxOnRental = taxOnRentalProfit - mortgageInterestRelief;
  const section24Restriction = mortgageInterest * (1 - SECTION_24.reliefRate);

  return {
    rentalProfit: taxableRentalProfit,
    section24Restriction,
    taxOnRentalProfit,
    mortgageInterestRelief,
    netTaxOnRental,
    effectiveRentalTaxRate: rentalProfit > 0 ? (netTaxOnRental / rentalProfit) * 100 : 0,
    totalIncome,
    breakdown: [
      { label: "Rental income", value: rentalIncome },
      { label: "Less allowable expenses", value: -otherAllowableExpenses },
      { label: "Rental profit (taxable)", value: taxableRentalProfit },
      { label: "Tax on rental profit", value: taxOnRentalProfit },
      { label: "Section 24 mortgage relief (20%)", value: -mortgageInterestRelief },
      { label: "Net tax on rental income", value: netTaxOnRental, isTotal: true },
    ],
  };
}

// CGT on property sale
export type PropertyCgtInput = {
  salePrice: number;
  purchasePrice: number;
  improvements: number;
  sellingCosts: number;
  otherIncome: number;
};

export type PropertyCgtResult = {
  gain: number;
  annualExemption: number;
  taxableGain: number;
  cgtDue: number;
  rate: number;
};

export function calculatePropertyCgt(input: PropertyCgtInput): PropertyCgtResult {
  const gain = Math.max(0, input.salePrice - input.purchasePrice - input.improvements - input.sellingCosts);
  const taxableGain = Math.max(0, gain - CGT.annualExemption);
  const isHigherRate = input.otherIncome > INCOME_TAX.basicRateLimit;
  const rate = isHigherRate ? CGT.propertyHigherRate : CGT.propertyBasicRate;
  const cgtDue = taxableGain * rate;
  return { gain, annualExemption: CGT.annualExemption, taxableGain, cgtDue, rate };
}
