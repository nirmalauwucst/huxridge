import { INCOME_TAX, NI_EMPLOYEE, STUDENT_LOANS } from "./tax-year-config";
import type { StudentLoanPlan } from "./personal-tax";

export type TakeHomePayInput = {
  grossSalary: number;
  pensionPercent: number; // employee pension contribution %
  studentLoanPlan: StudentLoanPlan;
};

export type TakeHomePayResult = {
  grossSalary: number;
  incomeTax: number;
  nationalInsurance: number;
  pensionContribution: number;
  studentLoanRepayment: number;
  totalDeductions: number;
  netAnnual: number;
  netMonthly: number;
  netWeekly: number;
  effectiveRate: number;
  breakdown: Array<{
    label: string;
    value: number;
    isDeduction?: boolean;
    isTotal?: boolean;
  }>;
};

export function calculateTakeHomePay(
  input: TakeHomePayInput,
): TakeHomePayResult {
  const { grossSalary, pensionPercent, studentLoanPlan } = input;

  const pensionContribution = Math.max(0, grossSalary * (pensionPercent / 100));
  const adjSalary = Math.max(0, grossSalary - pensionContribution);

  // Personal allowance (no taper for typical salary calc)
  const excess = Math.max(0, adjSalary - INCOME_TAX.taperStart);
  const pa = Math.max(0, INCOME_TAX.personalAllowance - Math.floor(excess / 2));

  // Income tax
  const taxable = Math.max(0, adjSalary - pa);
  const basicBand = INCOME_TAX.basicRateLimit - pa;
  const higherBand =
    INCOME_TAX.additionalRateThreshold - INCOME_TAX.basicRateLimit;

  const basic = Math.min(taxable, basicBand);
  const higher = Math.min(Math.max(0, taxable - basicBand), higherBand);
  const additional = Math.max(0, taxable - basicBand - higherBand);
  const incomeTax =
    basic * INCOME_TAX.basicRate +
    higher * INCOME_TAX.higherRate +
    additional * INCOME_TAX.additionalRate;

  // NI
  const niMain = Math.max(
    0,
    Math.min(
      grossSalary - NI_EMPLOYEE.primaryThreshold,
      NI_EMPLOYEE.upperEarningsLimit - NI_EMPLOYEE.primaryThreshold,
    ),
  );
  const niUpper = Math.max(0, grossSalary - NI_EMPLOYEE.upperEarningsLimit);
  const nationalInsurance =
    niMain * NI_EMPLOYEE.mainRate + niUpper * NI_EMPLOYEE.upperRate;

  // Student loan
  let studentLoanRepayment = 0;
  if (studentLoanPlan !== "none") {
    const plan = STUDENT_LOANS[studentLoanPlan];
    studentLoanRepayment =
      Math.max(0, grossSalary - plan.threshold) * plan.rate;
  }

  const totalDeductions =
    incomeTax + nationalInsurance + pensionContribution + studentLoanRepayment;
  const netAnnual = grossSalary - totalDeductions;

  return {
    grossSalary,
    incomeTax,
    nationalInsurance,
    pensionContribution,
    studentLoanRepayment,
    totalDeductions,
    netAnnual,
    netMonthly: netAnnual / 12,
    netWeekly: netAnnual / 52,
    effectiveRate: grossSalary > 0 ? (totalDeductions / grossSalary) * 100 : 0,
    breakdown: [
      { label: "Gross salary", value: grossSalary },
      { label: "Income tax", value: incomeTax, isDeduction: true },
      {
        label: "National Insurance",
        value: nationalInsurance,
        isDeduction: true,
      },
      ...(pensionContribution > 0
        ? [
            {
              label: `Pension (${pensionPercent}%)`,
              value: pensionContribution,
              isDeduction: true,
            },
          ]
        : []),
      ...(studentLoanRepayment > 0
        ? [
            {
              label: "Student loan repayment",
              value: studentLoanRepayment,
              isDeduction: true,
            },
          ]
        : []),
      { label: "Take-home pay (annual)", value: netAnnual, isTotal: true },
    ],
  };
}
