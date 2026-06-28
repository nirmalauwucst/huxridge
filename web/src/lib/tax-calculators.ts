import { TAX_YEAR_LABEL } from "./calculators/tax-year-config";

export type CalculatorMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
  featured: boolean;
  relatedServices: string[];  // service slugs
  relatedIndustries: string[]; // industry slugs
  relatedCalculators: string[]; // calculator slugs
  faqs: Array<{ question: string; answer: string }>;
};

export const taxCalculators: CalculatorMeta[] = [
  {
    slug: "personal-tax-calculator",
    title: "Personal Tax Calculator",
    shortTitle: "Personal Tax",
    description: "Estimate your UK income tax and National Insurance contributions for the current tax year, including income from employment, self-employment, rental, and dividends.",
    shortDescription: "Estimate your income tax and NI from salary, rental, dividends and more.",
    seoTitle: `Personal Tax Calculator ${TAX_YEAR_LABEL} | Huxridge Accountants`,
    seoDescription: `Estimate your UK income tax and National Insurance for ${TAX_YEAR_LABEL}. For employees, self-employed, landlords and directors. Free to use.`,
    category: "Income Tax",
    featured: true,
    relatedServices: ["personal-tax"],
    relatedIndustries: ["landlords", "contractors", "nurses-clinicians"],
    relatedCalculators: ["take-home-pay-calculator", "dividend-tax-calculator"],
    faqs: [
      {
        question: "What income sources can this calculator handle?",
        answer: "This calculator covers employment income, self-employment profit, rental income, and dividend income. Enter the gross figures before tax and it will estimate your total tax and NI liability.",
      },
      {
        question: "What is the personal allowance for 2025/26?",
        answer: "The personal allowance for 2025/26 is £12,570 — the amount you can earn tax-free. It tapers away for incomes above £100,000, reducing by £1 for every £2 over the threshold.",
      },
      {
        question: "Does this include the personal savings allowance or ISA income?",
        answer: "This calculator focuses on employment, self-employment, rental, and dividend income. ISA income is tax-free and not included. For a full picture including savings interest and other income sources, please speak to our team.",
      },
      {
        question: "Why does my effective rate look higher than the headline tax rate?",
        answer: "Your effective rate reflects all taxes paid — income tax at multiple rates, National Insurance contributions, and any student loan repayments — as a proportion of your total income. Because multiple rates and thresholds interact, the effective rate is often different from any single headline rate.",
      },
      {
        question: "Should I use this to file my Self Assessment return?",
        answer: "No — this calculator provides an estimate for planning purposes only. Your actual tax liability will depend on your exact figures, available reliefs, and your personal circumstances. We recommend speaking to one of our accountants before filing.",
      },
    ],
  },
  {
    slug: "corporation-tax-calculator",
    title: "Corporation Tax Calculator",
    shortTitle: "Corporation Tax",
    description: "Estimate your UK corporation tax liability including marginal relief, effective rate, and profit after tax — for any accounting period and company structure.",
    shortDescription: "Estimate company tax including marginal relief for any profit level.",
    seoTitle: `Corporation Tax Calculator ${TAX_YEAR_LABEL} | Huxridge Accountants`,
    seoDescription: `Estimate UK corporation tax for ${TAX_YEAR_LABEL} including small profits rate (19%), main rate (25%), and marginal relief. Quick, accurate estimates for limited companies.`,
    category: "Corporation Tax",
    featured: true,
    relatedServices: ["corporation-tax", "annual-accounts"],
    relatedIndustries: ["contractors", "nurseries", "care-homes"],
    relatedCalculators: ["salary-vs-dividend-calculator", "personal-tax-calculator"],
    faqs: [
      {
        question: "What are the UK corporation tax rates for 2025/26?",
        answer: "Companies with profits up to £50,000 pay the small profits rate of 19%. Companies with profits of £250,000 or more pay the main rate of 25%. Profits between these thresholds benefit from marginal relief, giving a gradually rising effective rate.",
      },
      {
        question: "What is marginal relief?",
        answer: "Marginal relief reduces the corporation tax owed by companies with profits between £50,000 and £250,000. It is calculated using the fraction 3/200 × (upper limit − taxable profit), and means the effective rate rises gradually rather than jumping from 19% to 25% at a single threshold.",
      },
      {
        question: "How do associated companies affect my thresholds?",
        answer: "If your company has associated companies (broadly, other companies under the same control), the £50,000 and £250,000 thresholds are divided by the total number of companies. This can mean a company hits the higher rate sooner than expected.",
      },
      {
        question: "Does this cover short accounting periods?",
        answer: "Yes. If your accounting period is shorter than 12 months, the thresholds are pro-rated accordingly. Enter the number of days in your period and the calculator will adjust the limits automatically.",
      },
      {
        question: "Can I reduce my corporation tax liability?",
        answer: "Yes — through reliefs such as capital allowances, R&D tax credits, trading losses, and pension contributions. The amount you can save depends on your specific circumstances. Speak to our team to identify all available reliefs before filing your CT600.",
      },
    ],
  },
  {
    slug: "vat-calculator",
    title: "VAT Calculator",
    shortTitle: "VAT",
    description: "Add or remove UK VAT at standard (20%), reduced (5%), or zero rates. Instantly see net, VAT, and gross amounts for any transaction.",
    shortDescription: "Add or remove UK VAT at standard, reduced or zero rates instantly.",
    seoTitle: `UK VAT Calculator ${TAX_YEAR_LABEL} | Huxridge Accountants`,
    seoDescription: `Free UK VAT calculator. Add or remove VAT at 20%, 5%, or 0%. Instantly calculate net, VAT amount, and gross for any value.`,
    category: "VAT",
    featured: true,
    relatedServices: ["vat-services", "making-tax-digital"],
    relatedIndustries: ["contractors", "nurseries", "care-homes"],
    relatedCalculators: ["personal-tax-calculator", "corporation-tax-calculator"],
    faqs: [
      {
        question: "What are the current UK VAT rates?",
        answer: "The standard rate is 20%, applying to most goods and services. A reduced rate of 5% applies to items such as domestic energy and children's car seats. A zero rate (0%) applies to food, children's clothing, books, and certain other items. Some supplies are exempt from VAT entirely.",
      },
      {
        question: "When do I need to register for VAT?",
        answer: "You must register for VAT when your taxable turnover exceeds the registration threshold — currently £90,000 in any rolling 12-month period. Voluntary registration is also possible below this threshold, which may be beneficial if you have significant VAT-ratable costs to recover.",
      },
      {
        question: "What is the difference between exempt and zero-rated?",
        answer: "Zero-rated supplies are taxable at 0% — you can still reclaim VAT on costs related to them. Exempt supplies are outside the VAT system — you cannot charge or reclaim VAT on them. Being partially exempt can restrict how much input VAT you can recover.",
      },
      {
        question: "What is Making Tax Digital for VAT?",
        answer: "MTD for VAT is mandatory for all VAT-registered businesses. You must keep digital VAT records and submit returns using MTD-compatible software. Huxridge can set this up and manage your submissions on your behalf.",
      },
      {
        question: "Can I use the Flat Rate Scheme?",
        answer: "The Flat Rate Scheme allows eligible businesses to pay a fixed percentage of their VAT-inclusive turnover to HMRC, which can simplify administration. Whether it is beneficial depends on your sector rate and the level of VAT-ratable costs in your business.",
      },
    ],
  },
  {
    slug: "dividend-tax-calculator",
    title: "Dividend Tax Calculator",
    shortTitle: "Dividend Tax",
    description: "Estimate how much tax you will pay on dividend income from your limited company or other shareholdings, taking into account your other income sources.",
    shortDescription: "Estimate tax on dividends from your company or shareholdings.",
    seoTitle: `Dividend Tax Calculator ${TAX_YEAR_LABEL} | Huxridge Accountants`,
    seoDescription: `Estimate UK dividend tax for ${TAX_YEAR_LABEL}. Enter your other income and dividend amount to see your tax bill at basic, higher, and additional rates.`,
    category: "Income Tax",
    featured: false,
    relatedServices: ["personal-tax", "corporation-tax"],
    relatedIndustries: ["contractors"],
    relatedCalculators: ["salary-vs-dividend-calculator", "personal-tax-calculator"],
    faqs: [
      {
        question: "What is the dividend allowance for 2025/26?",
        answer: "The dividend allowance for 2025/26 is £500. Dividends up to this amount are tax-free, regardless of your other income or tax band.",
      },
      {
        question: "What rates of tax apply to dividends?",
        answer: "Dividends above the allowance are taxed at 8.75% within the basic rate band, 33.75% within the higher rate band, and 39.35% within the additional rate band. Which rate applies depends on your total income for the year.",
      },
      {
        question: "Why do dividends sit on top of my other income?",
        answer: "For tax purposes, dividends are treated as the top slice of your income. This means your other income (employment, rental, self-employment) uses up the basic and higher rate bands first, and dividends are taxed at the rate applicable to whatever band remains.",
      },
      {
        question: "Do I need to declare dividends on a Self Assessment return?",
        answer: "If your dividend income exceeds £500, or if you are a higher or additional rate taxpayer, you will need to declare dividends on a Self Assessment return. We prepare these returns accurately and on time for all our clients.",
      },
      {
        question: "Can I split dividends with a spouse or partner?",
        answer: "If shares are held jointly, dividends can be split between spouses or civil partners, which may reduce the overall tax burden if one partner pays a lower rate. The split must reflect the actual shareholding ratio unless a Form 17 election is made. We can advise on the most tax-efficient structure for your circumstances.",
      },
    ],
  },
  {
    slug: "salary-vs-dividend-calculator",
    title: "Salary vs Dividend Calculator",
    shortTitle: "Salary vs Dividends",
    description: "Compare the after-tax take-home pay from different salary and dividend combinations to find the most tax-efficient extraction strategy for your limited company.",
    shortDescription: "Compare salary, dividends, and mixed strategies for your limited company.",
    seoTitle: `Salary vs Dividend Calculator ${TAX_YEAR_LABEL} | Huxridge Accountants`,
    seoDescription: `Compare salary vs dividends for UK director/shareholders in ${TAX_YEAR_LABEL}. See the after-tax take-home for different extraction strategies.`,
    category: "Tax Planning",
    featured: false,
    relatedServices: ["personal-tax", "corporation-tax", "company-formation-secretarial"],
    relatedIndustries: ["contractors"],
    relatedCalculators: ["corporation-tax-calculator", "dividend-tax-calculator"],
    faqs: [
      {
        question: "Why do most directors take a low salary plus dividends?",
        answer: "Taking a salary at or just above the secondary NI threshold (£9,100 in 2025/26) preserves your NI record while avoiding employer and employee NI contributions. Above that level, dividends are generally more tax-efficient than salary because they attract lower rates and avoid NI.",
      },
      {
        question: "Is this still the most efficient approach in 2025/26?",
        answer: "For most director/shareholders it remains the most tax-efficient approach, but the optimal salary point and dividend level depend on your personal allowance, other income sources, pension contributions, and the employment allowance position of the company. We model this individually for each client.",
      },
      {
        question: "What is the Employment Allowance and does it affect my salary choice?",
        answer: "The Employment Allowance (£10,500 in 2025/26) allows eligible employers to reduce their employer NI bill. However, companies with a sole director as the only employee cannot claim it. If your company employs other staff, claiming the allowance may change the optimal salary level.",
      },
      {
        question: "Should I contribute to a pension from my company?",
        answer: "Employer pension contributions are deductible from company profits before corporation tax, which can make them very tax-efficient — effectively funding your retirement at the corporation tax rate rather than income tax rates. We model pension contributions alongside salary and dividend planning for all director clients.",
      },
      {
        question: "Can I use this calculator to decide my extraction strategy for the year?",
        answer: "This calculator gives you a useful starting point, but the right strategy depends on your personal circumstances, the company's cash position, and any other income you have. We review the optimal mix with every director client at the start of each tax year.",
      },
    ],
  },
  {
    slug: "landlord-tax-calculator",
    title: "Landlord Tax Calculator",
    shortTitle: "Landlord Tax",
    description: "Estimate the income tax on your rental profits, see how Section 24 mortgage interest restriction affects your bill, and compare personal vs company ownership.",
    shortDescription: "Estimate tax on rental income including Section 24 mortgage interest restriction.",
    seoTitle: `Landlord Tax Calculator ${TAX_YEAR_LABEL} | Huxridge Accountants`,
    seoDescription: `UK landlord tax calculator for ${TAX_YEAR_LABEL}. Estimate tax on rental income including the Section 24 mortgage interest restriction. Compare personal vs limited company ownership.`,
    category: "Property Tax",
    featured: false,
    relatedServices: ["personal-tax", "corporation-tax"],
    relatedIndustries: ["landlords"],
    relatedCalculators: ["personal-tax-calculator", "corporation-tax-calculator"],
    faqs: [
      {
        question: "What expenses can I offset against rental income?",
        answer: "Allowable expenses include letting agent fees, insurance, repairs and maintenance, accountancy fees, and certain legal costs. Mortgage interest is subject to the Section 24 restriction for personally held properties — you cannot deduct it directly from profits but receive a 20% tax relief credit instead.",
      },
      {
        question: "What is Section 24 and how does it affect me?",
        answer: "Section 24 (also called the mortgage interest restriction) means that landlords who own properties personally can no longer deduct mortgage interest directly from rental profits. Instead, you receive a tax credit equal to 20% of your finance costs. This can significantly increase the effective tax rate on rental income, particularly for higher-rate taxpayers.",
      },
      {
        question: "Is it better to hold property personally or in a limited company?",
        answer: "This is the most important question for most landlords, and the answer depends on your income tax rate, the number of properties, your mortgage position, and your long-term intentions. We prepare a detailed financial model for each client before making a recommendation.",
      },
      {
        question: "Do I pay Capital Gains Tax when I sell a rental property?",
        answer: "Yes. Gains on UK residential property are taxed at 18% (basic rate) or 24% (higher rate) after the annual CGT exemption (£3,000 in 2025/26). You must report and pay CGT on residential property within 60 days of completion.",
      },
      {
        question: "I have multiple properties — does this calculator handle portfolios?",
        answer: "This calculator estimates the tax on a single property's rental income. For portfolio analysis — including the interaction between multiple properties, potential incorporation, and capital gains planning — please book a consultation with our property tax team.",
      },
    ],
  },
  {
    slug: "take-home-pay-calculator",
    title: "Take-Home Pay Calculator",
    shortTitle: "Take-Home Pay",
    description: "Find out your monthly and annual take-home pay after income tax, National Insurance, pension contributions, and student loan repayments for the 2025/26 tax year.",
    shortDescription: "Calculate net monthly and annual pay after all deductions.",
    seoTitle: `Take-Home Pay Calculator ${TAX_YEAR_LABEL} | Huxridge Accountants`,
    seoDescription: `UK take-home pay calculator for ${TAX_YEAR_LABEL}. Find out your net monthly salary after income tax, National Insurance, pension, and student loan deductions.`,
    category: "Income Tax",
    featured: false,
    relatedServices: ["personal-tax"],
    relatedIndustries: ["nurses-clinicians", "contractors"],
    relatedCalculators: ["personal-tax-calculator", "ir35-calculator"],
    faqs: [
      {
        question: "What deductions does this calculator include?",
        answer: "This calculator deducts income tax, National Insurance contributions (Class 1 employee), employer pension contributions you elect to pay, and student loan repayments. It does not include workplace benefits, salary sacrifice arrangements, or other payroll deductions.",
      },
      {
        question: "How does a pension contribution reduce my tax bill?",
        answer: "Employee pension contributions made through payroll are deducted from your gross salary before income tax is calculated, reducing your taxable income. This means you effectively receive tax relief at your marginal rate on every £1 contributed to your pension.",
      },
      {
        question: "Which student loan plan should I select?",
        answer: "Plan 1 covers loans taken before September 2012 in England/Wales (or any time in Northern Ireland). Plan 2 covers loans from September 2012 in England/Wales. Plan 4 covers loans in Scotland. Postgraduate covers postgraduate Master's or Doctoral loans from August 2016. If you are unsure, check your most recent loan statement.",
      },
      {
        question: "My employer also contributes to my pension — should I include that?",
        answer: "Employer contributions do not affect your take-home pay (they come from the employer's budget, not your salary), so you do not need to include them in this calculator. Only enter the percentage you personally contribute from your gross salary.",
      },
      {
        question: "Why is my actual payslip different from this estimate?",
        answer: "Your payslip may reflect different tax codes (especially if HMRC has adjusted for multiple employments, benefits in kind, or underpayments), salary sacrifice arrangements, or other deductions specific to your employment. This calculator assumes a standard tax code.",
      },
    ],
  },
  {
    slug: "ir35-calculator",
    title: "IR35 Calculator",
    shortTitle: "IR35",
    description: "Compare your estimated take-home pay inside and outside IR35 to understand the financial impact of your IR35 status — and how much difference it could make annually.",
    shortDescription: "Compare take-home pay inside vs outside IR35 for your contract rate.",
    seoTitle: `IR35 Calculator ${TAX_YEAR_LABEL} | Huxridge Accountants`,
    seoDescription: `UK IR35 calculator for ${TAX_YEAR_LABEL}. Compare take-home pay inside vs outside IR35 at your day rate. See the annual financial impact of your IR35 status.`,
    category: "Tax Planning",
    featured: false,
    relatedServices: ["personal-tax", "corporation-tax"],
    relatedIndustries: ["contractors"],
    relatedCalculators: ["take-home-pay-calculator", "salary-vs-dividend-calculator"],
    faqs: [
      {
        question: "What is IR35?",
        answer: "IR35 (the off-payroll working rules) is legislation that determines whether a contractor working through a limited company should be treated as employed (inside IR35) or genuinely self-employed (outside IR35) for tax purposes. The rules apply when the contractor would be an employee if they worked directly for the end client.",
      },
      {
        question: "How is IR35 status determined?",
        answer: "Status is determined by assessing the actual working relationship against three key tests: control (who decides how the work is done), substitution (whether you can send a substitute), and mutuality of obligation (whether work must be offered and accepted). HMRC also considers other factors including provision of equipment and financial risk.",
      },
      {
        question: "Who determines my IR35 status?",
        answer: "From April 2021, for medium and large private sector clients (and public sector clients), the end client makes the status determination and issues a Status Determination Statement (SDS). For small private sector clients, the contractor's own company remains responsible for determining and accounting for the correct tax.",
      },
      {
        question: "What is the financial difference between inside and outside IR35?",
        answer: "The difference can be significant — typically tens of thousands of pounds per year at higher day rates. When inside IR35, the income is subject to income tax and both employee and employer National Insurance, which is far less tax-efficient than drawing a salary plus dividends through a limited company outside IR35.",
      },
      {
        question: "Can Huxridge review my contracts for IR35 compliance?",
        answer: "Yes. We review contracts and working practices, provide written IR35 status opinions, and advise on how to strengthen your outside-IR35 position where appropriate. Contact us for an IR35 contract review.",
      },
    ],
  },
];

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return taxCalculators.find((c) => c.slug === slug);
}

export function getFeaturedCalculators(): CalculatorMeta[] {
  return taxCalculators.filter((c) => c.featured);
}

export function getCalculatorsForService(serviceSlug: string): CalculatorMeta[] {
  return taxCalculators.filter((c) => c.relatedServices.includes(serviceSlug));
}

export function getCalculatorsForIndustry(industrySlug: string): CalculatorMeta[] {
  return taxCalculators.filter((c) => c.relatedIndustries.includes(industrySlug));
}

export function getRelatedCalculators(currentSlug: string): CalculatorMeta[] {
  const current = getCalculatorBySlug(currentSlug);
  if (!current) return [];
  return current.relatedCalculators
    .map((slug) => getCalculatorBySlug(slug))
    .filter(Boolean) as CalculatorMeta[];
}
