import { INCOME_TAX, NI_EMPLOYEE, DIVIDENDS, STUDENT_LOANS } from "./tax-year-config";

export type StudentLoanPlan = "none" | "plan1" | "plan2" | "plan4" | "postgrad";

export type PersonalTaxInput = {
  employmentIncome: number;
  selfEmploymentProfit: number;
  rentalIncome: number;
  dividendIncome: number;
  pensionContributions: number;
  studentLoanPlan: StudentLoanPlan;
};

export type PersonalTaxResult = {
  grossIncome: number;
  personalAllowance: number;
  incomeTax: number;
  ni: number;
  studentLoanRepayment: number;
  totalDeductions: number;
  netIncome: number;
  effectiveRate: number;
  breakdown: {
    basicRateTax: number;
    higherRateTax: number;
    additionalRateTax: number;
    dividendTax: number;
  };
};

export function calculatePersonalTax(input: PersonalTaxInput): PersonalTaxResult {
  const { employmentIncome, selfEmploymentProfit, rentalIncome, dividendIncome, pensionContributions, studentLoanPlan } = input;

  const nonDividendIncome = employmentIncome + selfEmploymentProfit + rentalIncome;
  const grossIncome = nonDividendIncome + dividendIncome;

  // Adjusted net income (after pension relief) for PA taper
  const adjustedNetIncome = Math.max(0, grossIncome - pensionContributions);
  const excessOverTaper = Math.max(0, adjustedNetIncome - INCOME_TAX.taperStart);
  const personalAllowance = Math.max(0, INCOME_TAX.personalAllowance - Math.floor(excessOverTaper / 2));

  // Non-dividend taxable income
  const nonDivTaxable = Math.max(0, nonDividendIncome - pensionContributions - personalAllowance);
  const basicBandWidth = INCOME_TAX.basicRateLimit - personalAllowance;
  const higherBandWidth = INCOME_TAX.additionalRateThreshold - INCOME_TAX.basicRateLimit;

  const basicNonDiv = Math.min(nonDivTaxable, basicBandWidth);
  const higherNonDiv = Math.min(Math.max(0, nonDivTaxable - basicBandWidth), higherBandWidth);
  const additionalNonDiv = Math.max(0, nonDivTaxable - basicBandWidth - higherBandWidth);

  const basicRateTax = basicNonDiv * INCOME_TAX.basicRate;
  const higherRateTax = higherNonDiv * INCOME_TAX.higherRate;
  const additionalRateTax = additionalNonDiv * INCOME_TAX.additionalRate;

  // Dividend tax (dividends sit on top of non-dividend income)
  const dividendAboveAllowance = Math.max(0, dividendIncome - DIVIDENDS.allowance);
  const remainingBasic = Math.max(0, basicBandWidth - nonDivTaxable);
  const remainingHigher = Math.max(0, higherBandWidth - Math.max(0, nonDivTaxable - basicBandWidth));

  const divBasic = Math.min(dividendAboveAllowance, remainingBasic);
  const divHigher = Math.min(Math.max(0, dividendAboveAllowance - divBasic), remainingHigher);
  const divAdditional = Math.max(0, dividendAboveAllowance - divBasic - divHigher);

  const dividendTax = divBasic * DIVIDENDS.basicRate + divHigher * DIVIDENDS.higherRate + divAdditional * DIVIDENDS.additionalRate;
  const incomeTax = basicRateTax + higherRateTax + additionalRateTax + dividendTax;

  // NI applies to employment + self-employment only
  const niableIncome = employmentIncome + selfEmploymentProfit;
  const niMain = Math.max(0, Math.min(niableIncome - NI_EMPLOYEE.primaryThreshold, NI_EMPLOYEE.upperEarningsLimit - NI_EMPLOYEE.primaryThreshold));
  const niUpper = Math.max(0, niableIncome - NI_EMPLOYEE.upperEarningsLimit);
  const ni = Math.max(0, niMain) * NI_EMPLOYEE.mainRate + niUpper * NI_EMPLOYEE.upperRate;

  // Student loan
  let studentLoanRepayment = 0;
  if (studentLoanPlan !== "none") {
    const plan = STUDENT_LOANS[studentLoanPlan];
    studentLoanRepayment = Math.max(0, niableIncome - plan.threshold) * plan.rate;
  }

  const totalDeductions = incomeTax + ni + studentLoanRepayment;
  const netIncome = grossIncome - totalDeductions;
  const effectiveRate = grossIncome > 0 ? (totalDeductions / grossIncome) * 100 : 0;

  return {
    grossIncome,
    personalAllowance,
    incomeTax,
    ni,
    studentLoanRepayment,
    totalDeductions,
    netIncome,
    effectiveRate,
    breakdown: { basicRateTax, higherRateTax, additionalRateTax, dividendTax },
  };
}
