import {
  INCOME_TAX,
  NI_EMPLOYEE,
  NI_EMPLOYER,
  DIVIDENDS,
  CORPORATION_TAX,
  OPTIMAL_DIRECTOR_SALARY,
} from "./tax-year-config";

export type Ir35Input = {
  dayRate: number;
  daysPerYear: number;
  expenses: number; // deductible business expenses (outside IR35 only)
};

export type Ir35ScenarioResult = {
  label: string;
  grossIncome: number;
  totalTax: number;
  takeHome: number;
  effectiveRate: number;
  notes: string;
};

export type Ir35Result = {
  outside: Ir35ScenarioResult;
  inside: Ir35ScenarioResult;
  annualDifference: number;
};

function outsideIr35TakeHome(grossIncome: number, expenses: number): Ir35ScenarioResult {
  const salary = OPTIMAL_DIRECTOR_SALARY;
  const employerNi = Math.max(0, salary - NI_EMPLOYER.secondaryThreshold) * NI_EMPLOYER.rate;
  const companyProfit = Math.max(0, grossIncome - salary - employerNi - expenses);

  const corpTax = companyProfit <= CORPORATION_TAX.smallProfitsLimit
    ? companyProfit * CORPORATION_TAX.smallProfitsRate
    : companyProfit >= CORPORATION_TAX.mainRateLimit
    ? companyProfit * CORPORATION_TAX.mainRate
    : companyProfit * CORPORATION_TAX.mainRate - CORPORATION_TAX.marginalReliefFraction * (CORPORATION_TAX.mainRateLimit - companyProfit);

  const dividends = Math.max(0, companyProfit - corpTax);

  // Employee NI on salary
  const niMain = Math.max(0, Math.min(salary - NI_EMPLOYEE.primaryThreshold, NI_EMPLOYEE.upperEarningsLimit - NI_EMPLOYEE.primaryThreshold));
  const employeeNi = niMain * NI_EMPLOYEE.mainRate;

  // Income tax on salary + dividends
  const adjIncome = salary + dividends;
  const excess = Math.max(0, adjIncome - INCOME_TAX.taperStart);
  const pa = Math.max(0, INCOME_TAX.personalAllowance - Math.floor(excess / 2));

  const salTaxable = Math.max(0, salary - pa);
  const basicBand = INCOME_TAX.basicRateLimit - pa;
  const higherBand = INCOME_TAX.additionalRateThreshold - INCOME_TAX.basicRateLimit;

  const basicSal = Math.min(salTaxable, basicBand);
  const higherSal = Math.min(Math.max(0, salTaxable - basicBand), higherBand);
  const addSal = Math.max(0, salTaxable - basicBand - higherBand);
  const salTax = basicSal * INCOME_TAX.basicRate + higherSal * INCOME_TAX.higherRate + addSal * INCOME_TAX.additionalRate;

  const remBasic = Math.max(0, basicBand - salTaxable);
  const remHigher = Math.max(0, higherBand - Math.max(0, salTaxable - basicBand));
  const divAbove = Math.max(0, dividends - DIVIDENDS.allowance);
  const divBasic = Math.min(divAbove, remBasic);
  const divHigher = Math.min(Math.max(0, divAbove - divBasic), remHigher);
  const divAdd = Math.max(0, divAbove - divBasic - divHigher);
  const divTax = divBasic * DIVIDENDS.basicRate + divHigher * DIVIDENDS.higherRate + divAdd * DIVIDENDS.additionalRate;

  const incomeTax = salTax + divTax;
  const totalTax = corpTax + incomeTax + employeeNi + employerNi;
  const takeHome = salary + dividends - incomeTax - employeeNi;

  return {
    label: "Outside IR35 (limited company)",
    grossIncome,
    totalTax,
    takeHome,
    effectiveRate: grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0,
    notes: "Salary at secondary NI threshold, remaining profit drawn as dividends",
  };
}

function insideIr35TakeHome(grossIncome: number): Ir35ScenarioResult {
  // Inside IR35: effectively treated as employment — employer NI deducted, remainder taxed as salary
  // 5% expenses allowance still applies but treat gross as deemed employment income
  const deemedEmployment = grossIncome * 0.95; // 5% expenses offset (⚠️ VERIFY — may be abolished)
  const employerNi = Math.max(0, deemedEmployment - NI_EMPLOYER.secondaryThreshold) * NI_EMPLOYER.rate;
  const employmentIncome = Math.max(0, deemedEmployment - employerNi);

  const excess = Math.max(0, employmentIncome - INCOME_TAX.taperStart);
  const pa = Math.max(0, INCOME_TAX.personalAllowance - Math.floor(excess / 2));

  const taxable = Math.max(0, employmentIncome - pa);
  const basicBand = INCOME_TAX.basicRateLimit - pa;
  const higherBand = INCOME_TAX.additionalRateThreshold - INCOME_TAX.basicRateLimit;

  const basic = Math.min(taxable, basicBand);
  const higher = Math.min(Math.max(0, taxable - basicBand), higherBand);
  const additional = Math.max(0, taxable - basicBand - higherBand);
  const incomeTax = basic * INCOME_TAX.basicRate + higher * INCOME_TAX.higherRate + additional * INCOME_TAX.additionalRate;

  const niMain = Math.max(0, Math.min(employmentIncome - NI_EMPLOYEE.primaryThreshold, NI_EMPLOYEE.upperEarningsLimit - NI_EMPLOYEE.primaryThreshold));
  const niUpper = Math.max(0, employmentIncome - NI_EMPLOYEE.upperEarningsLimit);
  const employeeNi = niMain * NI_EMPLOYEE.mainRate + niUpper * NI_EMPLOYEE.upperRate;

  const totalTax = incomeTax + employeeNi + employerNi;
  const takeHome = employmentIncome - incomeTax - employeeNi;

  return {
    label: "Inside IR35 (deemed employment)",
    grossIncome,
    totalTax,
    takeHome,
    effectiveRate: grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0,
    notes: "Deemed employment calculation — 5% expenses offset applied to contract income",
  };
}

export function calculateIr35(input: Ir35Input): Ir35Result {
  const grossIncome = Math.max(0, input.dayRate * input.daysPerYear);
  const outside = outsideIr35TakeHome(grossIncome, input.expenses);
  const inside = insideIr35TakeHome(grossIncome);
  return {
    outside,
    inside,
    annualDifference: outside.takeHome - inside.takeHome,
  };
}
