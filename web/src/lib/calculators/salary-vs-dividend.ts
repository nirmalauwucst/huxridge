import {
  INCOME_TAX,
  NI_EMPLOYEE,
  NI_EMPLOYER,
  DIVIDENDS,
  CORPORATION_TAX,
  OPTIMAL_DIRECTOR_SALARY,
} from "./tax-year-config";

export type SalaryVsDividendInput = {
  companyProfit: number; // pre-salary profit
  pensionContributions: number;
};

export type ScenarioResult = {
  label: string;
  salary: number;
  dividends: number;
  corporationTax: number;
  incomeTax: number;
  employeeNi: number;
  employerNi: number;
  totalTax: number;
  takeHome: number;
  effectiveRate: number;
};

function calcCorpTax(profit: number): number {
  if (profit <= 0) return 0;
  if (profit <= CORPORATION_TAX.smallProfitsLimit)
    return profit * CORPORATION_TAX.smallProfitsRate;
  if (profit >= CORPORATION_TAX.mainRateLimit)
    return profit * CORPORATION_TAX.mainRate;
  return (
    profit * CORPORATION_TAX.mainRate -
    CORPORATION_TAX.marginalReliefFraction *
      (CORPORATION_TAX.mainRateLimit - profit)
  );
}

function calcIncomeTax(
  income: number,
  dividends: number,
  pension: number,
): number {
  const adjIncome = Math.max(0, income + dividends - pension);
  const excess = Math.max(0, adjIncome - INCOME_TAX.taperStart);
  const pa = Math.max(0, INCOME_TAX.personalAllowance - Math.floor(excess / 2));

  const incTaxable = Math.max(0, income - pension - pa);
  const basicBand = INCOME_TAX.basicRateLimit - pa;
  const higherBand =
    INCOME_TAX.additionalRateThreshold - INCOME_TAX.basicRateLimit;

  const basicInc = Math.min(incTaxable, basicBand);
  const higherInc = Math.min(Math.max(0, incTaxable - basicBand), higherBand);
  const additionalInc = Math.max(0, incTaxable - basicBand - higherBand);

  const incTax =
    basicInc * INCOME_TAX.basicRate +
    higherInc * INCOME_TAX.higherRate +
    additionalInc * INCOME_TAX.additionalRate;

  // Dividend tax
  const remainingBasic = Math.max(0, basicBand - incTaxable);
  const remainingHigher = Math.max(
    0,
    higherBand - Math.max(0, incTaxable - basicBand),
  );
  const divAbove = Math.max(0, dividends - DIVIDENDS.allowance);
  const divBasic = Math.min(divAbove, remainingBasic);
  const divHigher = Math.min(Math.max(0, divAbove - divBasic), remainingHigher);
  const divAdditional = Math.max(0, divAbove - divBasic - divHigher);
  const divTax =
    divBasic * DIVIDENDS.basicRate +
    divHigher * DIVIDENDS.higherRate +
    divAdditional * DIVIDENDS.additionalRate;

  return incTax + divTax;
}

export function calculateSalaryVsDividend(input: SalaryVsDividendInput): {
  optimal: ScenarioResult;
  allSalary: ScenarioResult;
  halfAndHalf: ScenarioResult;
} {
  const { companyProfit, pensionContributions } = input;

  function buildScenario(label: string, salary: number): ScenarioResult {
    // Employer NI on salary above secondary threshold
    const employerNi =
      Math.max(0, salary - NI_EMPLOYER.secondaryThreshold) * NI_EMPLOYER.rate;
    const profitAfterSalaryAndNi = Math.max(
      0,
      companyProfit - salary - employerNi,
    );
    const corpTax = calcCorpTax(profitAfterSalaryAndNi);
    const retainedProfit = profitAfterSalaryAndNi - corpTax;

    // Director draws all retained as dividends
    const dividends = Math.max(0, retainedProfit);

    // Employee NI
    const niMain = Math.max(
      0,
      Math.min(
        salary - NI_EMPLOYEE.primaryThreshold,
        NI_EMPLOYEE.upperEarningsLimit - NI_EMPLOYEE.primaryThreshold,
      ),
    );
    const niUpper = Math.max(0, salary - NI_EMPLOYEE.upperEarningsLimit);
    const employeeNi =
      niMain * NI_EMPLOYEE.mainRate + niUpper * NI_EMPLOYEE.upperRate;

    const incomeTax = calcIncomeTax(salary, dividends, pensionContributions);
    const grossIncome = companyProfit;
    const totalTax = corpTax + incomeTax + employeeNi + employerNi;
    const takeHome = salary + dividends - incomeTax - employeeNi;
    const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;

    return {
      label,
      salary,
      dividends,
      corporationTax: corpTax,
      incomeTax,
      employeeNi,
      employerNi,
      totalTax,
      takeHome,
      effectiveRate,
    };
  }

  const optimal = buildScenario(
    "Optimal (low salary + dividends)",
    OPTIMAL_DIRECTOR_SALARY,
  );
  const allSalary = buildScenario("All salary (PAYE)", companyProfit);
  const halfAndHalf = buildScenario("50/50 split", companyProfit * 0.5);

  return { optimal, allSalary, halfAndHalf };
}
