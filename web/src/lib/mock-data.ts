// ─── Services ────────────────────────────────────────────────────────────────

export const mockServices = [
  {
    slug: "bookkeeping-management-accounts",
    title: "Bookkeeping & Management Accounts",
    tagline: "Accurate books and timely insight, every month.",
    description:
      "Good bookkeeping is the foundation of every well-run business. We keep your records accurate and up to date — using Xero or FreeAgent — so you always have a clear picture of where your business stands. Our management accounts go a step further, giving you monthly or quarterly insight to help you make confident decisions.",
    features: [
      "Monthly bookkeeping",
      "Xero & FreeAgent set-up and training",
      "Management accounts (monthly or quarterly)",
      "Cash flow reporting",
      "Software migration & clean-up",
      "Reconciliations & year-end preparation",
    ],
    targetClients:
      "Small and medium-sized businesses, sole traders, growing SMEs, and directors who want professionally maintained records combined with the regular financial reporting they need to make informed decisions throughout the year.",
    benefits: [
      {
        title: "Always Up-to-Date",
        description:
          "Real-time visibility into your finances means you always know where you stand, with no month-end backlog surprises and clean records ready for every deadline.",
      },
      {
        title: "Informed Decision-Making",
        description:
          "Regular management reports give you the data to act quickly on opportunities and address issues before they become serious — not just at year-end.",
      },
      {
        title: "Save Time and Grow",
        description:
          "Stop spending evenings on spreadsheets. We handle the numbers, produce the reports, and give you the insight to focus on growing your business.",
      },
    ],
    faqs: [
      {
        question: "Which accounting software do you use?",
        answer:
          "We work primarily with Xero, QuickBooks, and FreeAgent. If you already use a different platform, we can usually accommodate that too — just ask.",
      },
      {
        question: "How often will my books be updated?",
        answer:
          "This depends on your chosen plan. We offer weekly or monthly bookkeeping depending on your transaction volume and business needs. Management reports are produced monthly or quarterly.",
      },
      {
        question: "How are management accounts different from annual accounts?",
        answer:
          "Annual accounts are statutory documents filed at Companies House. Management accounts are prepared more frequently — monthly or quarterly — and are focused on helping you manage the business, not on compliance. Think of them as your real-time financial dashboard.",
      },
      {
        question: "Can you take over from my existing bookkeeper?",
        answer:
          "Yes. We handle the transition process, including reviewing and cleaning up historical records if necessary, so there is minimal disruption to your business.",
      },
      {
        question:
          "Can you help me set a budget and track performance against it?",
        answer:
          "Yes. We can work with you to create an annual budget and then track performance against it each period, highlighting variances and providing commentary on the key movements.",
      },
    ],
    relatedSlugs: ["annual-accounts", "vat-services", "corporation-tax"],
  },
  {
    slug: "personal-tax",
    title: "Personal Tax",
    tagline: "Stress-free Self Assessment, done properly.",
    description:
      "We handle your self-assessment from start to finish — making sure you pay exactly what you owe, nothing more. Whether your income comes from employment, self-employment, property, or investments, we make the process simple and stress-free.",
    features: [
      "Self-assessment filing",
      "Personal tax planning",
      "Business tax planning",
      "Income from multiple sources",
      "Rental income reporting",
      "Capital gains tax",
      "Inheritance tax planning",
    ],
    targetClients:
      "Self-employed individuals, company directors, landlords, higher-rate taxpayers, and anyone with income sources outside of PAYE.",
    benefits: [
      {
        title: "Maximise Your Allowances",
        description:
          "We proactively review your circumstances to ensure you claim all available reliefs and deductions — many clients are surprised by what they were missing.",
      },
      {
        title: "No Late Penalties",
        description:
          "We manage deadlines proactively and remind you well in advance, so you never face HMRC's late filing or payment penalties.",
      },
      {
        title: "Year-Round Support",
        description:
          "Tax planning is not just a January activity. We advise on structuring income and timing transactions throughout the year to minimise your liability.",
      },
    ],
    faqs: [
      {
        question: "When is the Self Assessment deadline?",
        answer:
          "The online filing deadline is 31 January following the end of the tax year (5 April). Payment of any tax owed is also due by 31 January. Payments on account may be due on 31 January and 31 July.",
      },
      {
        question: "What information do I need to provide?",
        answer:
          "We will send you a tailored checklist based on your circumstances. Typically this includes P60s, P11Ds, bank interest statements, rental income details, and any investment disposals.",
      },
      {
        question: "Can you deal with HMRC enquiries on my behalf?",
        answer:
          "Yes. If HMRC opens an enquiry into your tax return, we will manage the correspondence and represent your interests throughout the process.",
      },
      {
        question: "I have income from multiple sources — can you handle that?",
        answer:
          "Absolutely. Complex tax affairs are our speciality. We are experienced in returns involving employment, self-employment, rental income, dividends, capital gains, and foreign income.",
      },
    ],
    relatedSlugs: [
      "corporation-tax",
      "bookkeeping-management-accounts",
      "vat-services",
    ],
  },
  {
    slug: "annual-accounts",
    title: "Annual Accounts",
    tagline: "Statutory accounts prepared with precision and care.",
    description:
      "Statutory accounts prepared accurately and on time, every year. Whether you're a sole trader, partnership, or limited company, we produce compliant accounts and handle all submissions to HMRC and Companies House.",
    features: [
      "Sole trader accounts",
      "Partnership accounts",
      "Limited company accounts",
      "Charity & non-profit accounts",
      "Companies House filing",
      "HMRC submission",
    ],
    targetClients:
      "Limited companies, LLPs, and other registered entities that have a statutory obligation to prepare and file accounts each year.",
    benefits: [
      {
        title: "Always Compliant",
        description:
          "We ensure your accounts meet all relevant accounting standards and are filed correctly with both Companies House and HMRC, avoiding fines.",
      },
      {
        title: "Tax-Efficient",
        description:
          "Before finalising your accounts we review available reliefs — such as capital allowances and R&D credits — to minimise your corporation tax bill.",
      },
      {
        title: "Professional Presentation",
        description:
          "Well-presented accounts build credibility with banks, investors, and suppliers. Our accounts are clear, accurate, and professionally formatted.",
      },
    ],
    faqs: [
      {
        question: "When must annual accounts be filed?",
        answer:
          "For private limited companies, accounts must be filed at Companies House within 9 months of the year-end. The corporation tax return must be filed within 12 months, with payment due within 9 months and 1 day.",
      },
      {
        question: "Do micro-companies need full accounts?",
        answer:
          "Micro-entities (turnover under £632,000, balance sheet under £316,000) can file simplified accounts under FRS 105. We will confirm which reporting standard applies to you.",
      },
      {
        question: "What happens if I miss the Companies House deadline?",
        answer:
          "Automatic penalties apply, starting at £150 for being up to one month late and rising to £1,500 for being more than six months late. We track all deadlines proactively to prevent this.",
      },
      {
        question: "Can you prepare accounts for previous years I have missed?",
        answer:
          "Yes. We can prepare overdue accounts and manage the filing process, including negotiating with HMRC and Companies House where penalties have already accrued.",
      },
    ],
    relatedSlugs: [
      "corporation-tax",
      "bookkeeping-management-accounts",
      "vat-services",
    ],
  },
  {
    slug: "corporation-tax",
    title: "Corporation Tax",
    tagline: "Minimise your liability, stay fully compliant.",
    description:
      "We prepare and file your CT600, identify reliefs you're entitled to, and keep your tax bill as low as legally possible. We also handle any correspondence with HMRC on your behalf.",
    features: [
      "Corporation tax return (CT600)",
      "Tax planning & reliefs",
      "R&D tax credits",
      "Group structures",
      "Deferred tax planning",
      "HMRC correspondence",
    ],
    targetClients:
      "UK limited companies and groups seeking accurate, compliant corporation tax returns and proactive planning to reduce their tax burden.",
    benefits: [
      {
        title: "Full Relief Utilisation",
        description:
          "We systematically review available reliefs — from capital allowances to R&D credits — to ensure you never overpay corporation tax.",
      },
      {
        title: "No Surprises",
        description:
          "We calculate your tax liability in advance, so you can plan your cash flow and avoid scrambling for funds at payment deadlines.",
      },
      {
        title: "Audit Trail",
        description:
          "Our thorough documentation of all claims and computations provides a robust defence in the event of an HMRC enquiry.",
      },
    ],
    faqs: [
      {
        question: "What is the current UK corporation tax rate?",
        answer:
          "From April 2023, the main rate is 25% for companies with profits over £250,000. A small profits rate of 19% applies to profits under £50,000, with marginal relief for profits between those thresholds.",
      },
      {
        question: "What is the CT600 deadline?",
        answer:
          "The CT600 must be filed within 12 months of the end of the accounting period. Tax payment is generally due 9 months and 1 day after the accounting period ends (or quarterly instalments for large companies).",
      },
      {
        question: "Can I claim R&D tax relief?",
        answer:
          "If your company undertakes qualifying research and development activity, you may be entitled to a significant tax credit or enhanced deduction. We will assess your eligibility and prepare the claim.",
      },
      {
        question: "We operate through multiple companies — can you help?",
        answer:
          "Yes. We advise on group structures, group relief, transfer pricing considerations, and the allocation of profits and losses across connected entities.",
      },
    ],
    relatedSlugs: [
      "annual-accounts",
      "bookkeeping-management-accounts",
      "personal-tax",
    ],
  },
  {
    slug: "internal-audit",
    title: "Internal Audit",
    tagline: "Independent assurance that strengthens your business.",
    description:
      "Independent reviews of your financial controls and processes. Particularly valuable for care homes, nurseries, and other regulated businesses that need to demonstrate robust financial governance — whether for CQC, investors, or lenders.",
    features: [
      "Internal audit reviews",
      "Financial controls assessment",
      "Risk & compliance reporting",
      "Process improvement advice",
      "Preparation for external audit",
      "Regulatory compliance checks",
    ],
    targetClients:
      "SMEs, charities, and healthcare organisations that need independent financial oversight or are required to demonstrate governance compliance to regulators, funders, or boards.",
    benefits: [
      {
        title: "Identify Weaknesses Early",
        description:
          "An independent review surfaces control gaps and process inefficiencies before they lead to financial loss or regulatory censure.",
      },
      {
        title: "Stakeholder Assurance",
        description:
          "Boards, trustees, and funders gain confidence from an independent audit opinion, reinforcing trust in your financial management.",
      },
      {
        title: "Practical Recommendations",
        description:
          "We do not just identify problems — we provide actionable, prioritised recommendations that are proportionate to your size and resources.",
      },
    ],
    faqs: [
      {
        question: "Is internal audit mandatory for my business?",
        answer:
          "It is not legally required for most SMEs, but it is strongly recommended for charities above certain income thresholds, NHS-regulated bodies, and businesses where good governance is expected by funders or investors.",
      },
      {
        question: "How long does an internal audit take?",
        answer:
          "This depends on scope. A focused controls review for a small business typically takes two to five days; a broader operational audit may take two to three weeks.",
      },
      {
        question: "Will the audit disrupt our day-to-day operations?",
        answer:
          "We plan the audit carefully to minimise disruption. Most of the work is done remotely through document review and online interviews.",
      },
      {
        question: "What do I receive at the end?",
        answer:
          "You receive a detailed written report summarising findings, risk ratings, and prioritised recommendations, plus an executive summary suitable for presenting to your board.",
      },
    ],
    relatedSlugs: [
      "annual-accounts",
      "bookkeeping-management-accounts",
      "corporation-tax",
    ],
  },
  {
    slug: "making-tax-digital",
    title: "Making Tax Digital",
    tagline: "Navigate MTD with confidence — we handle the complexity.",
    description:
      "MTD is changing how businesses report to HMRC. We'll make sure you're set up correctly on the right software — whether that's Xero, FreeAgent, or TaxCalc — well before the deadlines hit.",
    features: [
      "MTD for VAT",
      "MTD for income tax (ITSA)",
      "Xero & FreeAgent MTD set-up",
      "TaxCalc compliance",
      "Compliance reviews",
      "Staff training & support",
    ],
    targetClients:
      "VAT-registered businesses, self-employed individuals, and landlords who need to comply with HMRC's Making Tax Digital requirements.",
    benefits: [
      {
        title: "Full Compliance",
        description:
          "We ensure your systems and processes meet HMRC's MTD requirements, protecting you from penalties for non-compliant record-keeping or late submissions.",
      },
      {
        title: "Seamless Transition",
        description:
          "We manage the migration from your existing systems to MTD-compatible software, with minimal disruption and comprehensive training for your team.",
      },
      {
        title: "Always Ahead",
        description:
          "As MTD requirements evolve, we keep you informed and ensure your processes are updated well in advance of any new mandates.",
      },
    ],
    faqs: [
      {
        question: "Is MTD for VAT mandatory?",
        answer:
          "Yes. All VAT-registered businesses must keep digital records and submit returns using MTD-compatible software. This has been mandatory since April 2022 regardless of turnover.",
      },
      {
        question: "When does MTD for Income Tax come into effect?",
        answer:
          "MTD for Income Tax Self Assessment (ITSA) is being phased in from April 2026, starting with self-employed individuals and landlords with income over £50,000, followed by those over £30,000 from April 2027.",
      },
      {
        question: "Which software works with MTD?",
        answer:
          "HMRC maintains a list of approved MTD-compatible software. We recommend Xero, QuickBooks, or FreeAgent, all of which we can set up and manage on your behalf.",
      },
      {
        question: "What are the penalties for not complying with MTD?",
        answer:
          "HMRC operates a points-based penalty system for late submissions and a separate penalty regime for late payment. Non-compliance with digital record-keeping can also attract fines.",
      },
    ],
    relatedSlugs: [
      "vat-services",
      "bookkeeping-management-accounts",
      "personal-tax",
    ],
  },
  {
    slug: "vat-services",
    title: "VAT Services",
    tagline: "Expert VAT compliance, from registration to returns.",
    description:
      "From registration to quarterly returns, we take VAT off your plate completely. We'll make sure you're on the right scheme for your business and flag anything that could save you money.",
    features: [
      "VAT registration",
      "Quarterly VAT returns",
      "Flat rate scheme advice",
      "Cash accounting scheme",
      "Cross-border VAT",
      "VAT investigation support",
    ],
    targetClients:
      "VAT-registered businesses, businesses approaching the registration threshold (currently £90,000), and those with complex VAT positions including partial exemption or international trade.",
    benefits: [
      {
        title: "Optimal Scheme Selection",
        description:
          "Choosing the right VAT scheme can make a significant difference to your cash flow and admin burden. We review your position and recommend the most advantageous option.",
      },
      {
        title: "Maximum Input Tax Recovery",
        description:
          "We review your expenditure to identify all reclaimable VAT, including items that are often overlooked, to reduce your net VAT liability.",
      },
      {
        title: "Inspection Ready",
        description:
          "Our returns are prepared with HMRC scrutiny in mind. Robust documentation and clear audit trails mean you are always ready for a VAT visit.",
      },
    ],
    faqs: [
      {
        question: "When do I need to register for VAT?",
        answer:
          "You must register for VAT when your taxable turnover exceeds the registration threshold (£90,000 as of April 2024) in any rolling 12-month period. Voluntary registration is also possible below this threshold.",
      },
      {
        question: "What is the Flat Rate Scheme?",
        answer:
          "The Flat Rate Scheme allows eligible businesses to pay a fixed percentage of their VAT-inclusive turnover to HMRC, which can simplify administration. It is most beneficial for businesses with low VAT-ratable costs.",
      },
      {
        question: "How often must I submit a VAT return?",
        answer:
          "Most businesses submit quarterly VAT returns. Annual accounting is available to businesses with turnover below £1.35 million. Monthly returns are an option for businesses in a regular repayment position.",
      },
      {
        question: "Can you help with a VAT inspection or dispute?",
        answer:
          "Yes. We will prepare for the inspection, accompany you (virtually or in person), and handle all correspondence with the HMRC VAT officer.",
      },
    ],
    relatedSlugs: [
      "bookkeeping-management-accounts",
      "making-tax-digital",
      "annual-accounts",
    ],
  },
  {
    slug: "company-formation-secretarial",
    title: "Company Formation & Secretarial Services",
    tagline:
      "Start right and stay compliant — from incorporation to ongoing filings.",
    description:
      "Starting a new company or keeping an existing one compliant — we handle the admin so you don't have to. From incorporation through to ongoing secretarial support, we make sure everything is filed correctly and on time.",
    features: [
      "Company incorporation",
      "Registered office address",
      "Confirmation statements",
      "Company secretarial support",
      "Shareholder & director changes",
      "Companies House compliance",
    ],
    targetClients:
      "Entrepreneurs and freelancers incorporating for the first time, existing business owners restructuring for tax efficiency or investment readiness, and UK limited companies that want their ongoing Companies House obligations managed accurately and on time.",
    benefits: [
      {
        title: "Get it Right from Day One",
        description:
          "The decisions made at incorporation — share structure, director arrangements, pension setup — have long-term tax consequences. We ensure the structure is optimal from the outset.",
      },
      {
        title: "Always Compliant",
        description:
          "Missed confirmation statements and late filings can lead to your company being struck off the register. We track all deadlines and file on time, every time.",
      },
      {
        title: "Confidentiality",
        description:
          "By using our registered office address service, you can keep your home or business address off the public Companies House register.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to form a limited company?",
        answer:
          "Standard Companies House incorporation typically takes 24 hours. Same-day service is available for a small additional fee.",
      },
      {
        question:
          "Should I trade through a limited company or as a sole trader?",
        answer:
          "This depends on your income level, risk appetite, and long-term goals. A limited company typically becomes more tax-efficient once profits exceed approximately £30,000–£40,000. We will model both options for you.",
      },
      {
        question: "What is a confirmation statement and when is it due?",
        answer:
          "A confirmation statement (formerly the annual return) is filed annually with Companies House confirming your company's publicly registered information is accurate. It must be filed within 14 days of the review date. We track the deadline and file on your behalf.",
      },
      {
        question: "What happens if I miss my confirmation statement deadline?",
        answer:
          "Companies House may begin dissolution proceedings if a confirmation statement is not filed. The company can be restored but this is costly and time-consuming. We ensure this never happens.",
      },
      {
        question: "What is the best way to extract money from my company?",
        answer:
          "The most common approach is a combination of salary (up to the National Insurance threshold) and dividends. We will advise on the optimal mix based on your personal tax position.",
      },
    ],
    relatedSlugs: [
      "bookkeeping-management-accounts",
      "corporation-tax",
      "annual-accounts",
    ],
  },
] as const;

// ─── Industries ───────────────────────────────────────────────────────────────

export const mockIndustries = [
  {
    slug: "dentists",
    title: "Dentists",
    tagline: "Practice owners, associates & squat practices, NHS & private.",
    description:
      "Dental finances are unlike any other profession. Whether you are a principal running an NHS contract, an associate building a private patient list, or setting up a squat practice from scratch, the tax and compliance landscape is genuinely complex. We work exclusively with dental professionals and understand every aspect of your financial picture — from UDA targets and associate self-employment to CQC registration and NHS pension annual allowance charges.",
    challenges: [
      "Splitting and correctly reporting NHS contract income alongside private fees and associate payments",
      "Managing NHS pension annual allowance charges, which can create unexpected tax bills for high-earning principals",
      "Navigating the financial and contractual implications of setting up a squat practice",
      "Deciding on the most tax-efficient structure — sole principal, partnership, or limited company — given NHS contract restrictions",
      "Capital allowances on expensive dental equipment, digital scanning systems, and practice fit-outs",
    ],
    howWeHelp: [
      "Preparing practice accounts that correctly separate NHS and private income streams for HMRC",
      "Calculating NHS pension annual allowance usage and planning around or funding any annual allowance charge",
      "Advising squat practice founders on financing, CQC registration timelines, and the optimal legal structure from day one",
      "Maximising capital allowances on equipment purchases, fit-outs, and surgery refurbishments",
      "Preparing Self Assessment returns for associate dentists, ensuring lab fees, CPD, indemnity, and subscriptions are fully claimed",
    ],
    relatedServiceSlugs: [
      "bookkeeping-management-accounts",
      "personal-tax",
      "corporation-tax",
      "vat-services",
    ],
    faqs: [
      {
        question: "Is dental treatment subject to VAT?",
        answer:
          "Most dental treatment is exempt from VAT as a medical service. However, certain cosmetic procedures and associated goods may be standard-rated. We review your income streams in detail and confirm your VAT position so you are neither over-charging patients nor exposing the practice to a liability.",
      },
      {
        question: "Should my dental practice operate as a limited company?",
        answer:
          "This is the most important structural question for practice owners. Limited company status can deliver significant tax savings once profits reach a certain level, but there are NHS contract implications — notably that the contract holder must remain a registered dental professional. We model both structures side by side before making a recommendation tailored to your practice.",
      },
      {
        question: "How do you handle associate dentist accounts?",
        answer:
          "Associate dentists are typically self-employed and require an annual Self Assessment return. We prepare these efficiently and ensure all allowable expenses are claimed — lab fees, CPD costs, indemnity insurance, professional subscriptions, and equipment purchased for clinical use.",
      },
      {
        question:
          "What is the NHS pension annual allowance charge and how do I manage it?",
        answer:
          "The NHS Pension Scheme is a defined benefit scheme, and growth in pensionable pay can trigger an annual allowance charge even if you have not made additional contributions. For higher-earning dentists this can mean an unexpected tax bill of tens of thousands of pounds. We calculate your pension input amount each year and help you plan or fund any charge that arises.",
      },
      {
        question:
          "Can you help with the financial side of setting up a squat practice?",
        answer:
          "Yes. We advise squat practice founders on everything from the business plan and financing approach through to the correct legal and tax structure, CQC registration requirements, and initial bookkeeping setup. Getting the foundations right at the start saves significant cost and complexity later.",
      },
    ],
  },
  {
    slug: "care-homes",
    title: "Care Homes",
    tagline: "Residential and domiciliary care operators of all sizes.",
    description:
      "Running a care home or domiciliary care agency means operating in one of the most regulated and financially pressured sectors in the UK. Fee rates set by local authorities, rising staffing costs, CQC compliance obligations, and the capital intensity of property ownership all create a complex financial environment. We provide specialist accountancy and tax advice to residential care homes, nursing homes, and domiciliary care providers across the UK.",
    challenges: [
      "Managing thin operating margins under local authority fee-rate pressure while maintaining CQC compliance standards",
      "High staffing costs and the complexity of payroll for large, shift-based care workforces",
      "Capital allowances and financing for property acquisitions, refurbishments, and new build developments",
      "VAT complexity arising from the exempt status of care services alongside any standard-rated ancillary income",
      "CQC registration, ongoing compliance reporting, and the financial due diligence required for ownership changes",
    ],
    howWeHelp: [
      "Preparing accurate annual accounts and management accounts that give a clear picture of occupancy, fee income, and staffing costs",
      "Handling payroll for care home staff including pension auto-enrolment, holiday pay calculations, and HMRC reporting",
      "Advising on the most tax-efficient ownership structure — whether the property and trading business should be held separately",
      "Maximising capital allowances on fixtures, fittings, equipment, and qualifying refurbishment expenditure",
      "Supporting the financial due diligence and reporting requirements associated with CQC registration and ownership transfers",
    ],
    relatedServiceSlugs: [
      "bookkeeping-management-accounts",
      "annual-accounts",
      "corporation-tax",
      "vat-services",
    ],
    faqs: [
      {
        question: "Are care home fees subject to VAT?",
        answer:
          "The provision of residential or domiciliary care is exempt from VAT as a welfare service. This means you do not charge VAT on fees, but it also means you cannot reclaim VAT on most of your costs. We review your services in detail to confirm the correct VAT treatment and advise on any partially standard-rated activities.",
      },
      {
        question:
          "Should I hold the care home property separately from the trading business?",
        answer:
          "Holding property in a separate entity from the trading operation is a common and often tax-efficient structure. It can protect the property asset from trading liabilities and create flexibility for future sale or succession planning. We assess the pros and cons for your specific situation including Stamp Duty Land Tax, Capital Gains Tax, and the impact on any mortgage arrangements.",
      },
      {
        question: "How do you handle payroll for a large care workforce?",
        answer:
          "We manage payroll for care home operators with teams ranging from a handful of staff to several hundred. This includes calculating pay for different shift patterns, managing pension auto-enrolment, holiday pay accruals for part-time workers, and ensuring accurate and timely RTI submissions to HMRC.",
      },
      {
        question: "What financial information does CQC require?",
        answer:
          "CQC requires registered providers to demonstrate ongoing financial viability. We prepare the financial statements and supporting information required for initial registration and assist with the annual Provider Information Return and any ad hoc requests during inspections or ownership change applications.",
      },
    ],
  },
  {
    slug: "nurses-clinicians",
    title: "Nurses & Clinicians",
    tagline: "Employed, locum, and agency healthcare professionals.",
    description:
      "Healthcare professionals who work across employed, locum, and agency roles face a tax position that is more complicated than most. Multiple income sources, uncertainty over employment status, NHS pension contributions, and expenses rules that differ between employed and self-employed work all require careful management. We help nurses, doctors, allied health professionals, and clinical staff at every career stage get their tax right and keep more of what they earn.",
    challenges: [
      "Managing tax and National Insurance across multiple income sources — NHS employment, bank shifts, locum work, and private practice",
      "Correctly determining employment status for agency and locum engagements and understanding the IR35 implications",
      "NHS pension annual allowance charges for clinicians with rapidly growing pensionable pay",
      "Claiming the right expenses for professional registration, indemnity, CPD, uniforms, and equipment",
      "Completing Self Assessment returns that bring together all income sources and ensure the correct tax is paid",
    ],
    howWeHelp: [
      "Preparing Self Assessment returns that correctly capture all employment income, locum earnings, bank shifts, and any private practice income",
      "Advising on employment status for locum and agency engagements and the tax consequences of inside versus outside IR35 arrangements",
      "Calculating NHS pension annual allowance usage and planning around any annual allowance charge before it becomes a bill",
      "Identifying and claiming all allowable expenses — NMC or GMC fees, indemnity insurance, CPD costs, specialist equipment, and professional subscriptions",
      "Setting up simple bookkeeping systems for clinicians who take on private practice or consultancy work alongside their NHS role",
    ],
    relatedServiceSlugs: [
      "personal-tax",
      "bookkeeping-management-accounts",
      "corporation-tax",
      "vat-services",
    ],
    faqs: [
      {
        question:
          "Do I need to complete a Self Assessment return as a nurse or clinician?",
        answer:
          "You will need to file a Self Assessment return if you have income from locum, bank, agency, or private work in addition to your main NHS employment, if your income exceeds £100,000 in any year, or if you have been issued with a P800 showing underpaid tax. We prepare and file your return accurately and on time.",
      },
      {
        question:
          "Am I employed or self-employed when working through an agency?",
        answer:
          "This depends on how your engagement is structured. Many agency workers in healthcare are treated as employed for tax purposes, meaning tax and NI are deducted at source. Locum arrangements may be genuinely self-employed. We review your contracts and working arrangements and advise on the correct position.",
      },
      {
        question: "Can I claim expenses for my NMC or GMC registration fees?",
        answer:
          "Yes. Professional registration fees, indemnity insurance, and costs that are wholly and exclusively incurred for your professional practice are deductible. The rules differ slightly depending on whether you are employed or self-employed, and we ensure you claim through the correct route in each case.",
      },
      {
        question: "How do I deal with an NHS pension annual allowance charge?",
        answer:
          "If your NHS pension input exceeds the annual allowance in a given tax year, you will face a tax charge on the excess. You can pay this yourself or ask the NHS Pension Scheme to pay it on your behalf in exchange for a reduced pension — a mechanism called Scheme Pays. We calculate your position, compare the options, and help you elect correctly.",
      },
    ],
  },
  {
    slug: "landlords",
    title: "Landlords",
    tagline: "Buy-to-let, HMO, and property portfolio holders.",
    description:
      "Property tax rules have become increasingly complex following the phasing out of mortgage interest relief, the introduction of Section 24, and rising Stamp Duty Land Tax rates for additional properties. Whether you own a single buy-to-let flat, a portfolio of HMOs, or are building a larger property investment business, we help you navigate the tax landscape and make informed decisions about structure, timing, and strategy.",
    challenges: [
      "The impact of Section 24 mortgage interest restriction on higher and additional rate taxpayers",
      "Stamp Duty Land Tax surcharges on additional residential properties and HMO acquisitions",
      "Capital Gains Tax on property disposals, including principal private residence relief and letting relief",
      "Deciding whether to hold property personally or within a limited company given your tax rate, mortgage position, and long-term plans",
      "Managing the additional compliance requirements of HMO licensing, selective licensing, and larger portfolio administration",
    ],
    howWeHelp: [
      "Preparing accurate rental accounts with all allowable expenses correctly claimed and Section 24 correctly applied",
      "Modelling the financial impact of incorporating your property portfolio into a limited company against the costs of transfer",
      "Calculating and advising on Capital Gains Tax exposure before you sell, including available reliefs and optimal timing",
      "Structuring portfolios to make the most of spousal transfers, family trusts, and other available planning opportunities",
      "Advising HMO landlords on the additional tax and compliance considerations specific to multi-let properties",
    ],
    relatedServiceSlugs: [
      "personal-tax",
      "annual-accounts",
      "corporation-tax",
      "bookkeeping-management-accounts",
    ],
    faqs: [
      {
        question:
          "Should I own my buy-to-let properties personally or through a limited company?",
        answer:
          "This is the most common question we receive from landlords. The answer depends on your income tax rate, the number of properties you hold, your mortgage position, and your long-term intentions. We prepare a detailed financial model for each client that shows the after-tax position under both structures before making a recommendation.",
      },
      {
        question: "What expenses can I offset against my rental income?",
        answer:
          "Allowable expenses include mortgage interest (subject to Section 24 restrictions for personal ownership), letting agent fees, repairs and maintenance, insurance, accountancy fees, and certain legal costs. You cannot claim capital expenditure such as extensions or improvements, though these may reduce your Capital Gains Tax liability when you sell.",
      },
      {
        question:
          "How much Capital Gains Tax will I pay when I sell a rental property?",
        answer:
          "Residential property gains are taxed at 18% (basic rate) or 24% (higher rate) after deducting your annual CGT exemption. We calculate the exact liability in advance, identify all available reliefs, and advise on timing to minimise the charge.",
      },
      {
        question:
          "Do I need to file a Capital Gains Tax return quickly after selling?",
        answer:
          "Yes. UK residents must report and pay CGT on UK residential property within 60 days of completion. We prepare these returns promptly to ensure you meet the deadline and avoid late filing penalties.",
      },
      {
        question: "Are there additional tax considerations for HMO landlords?",
        answer:
          "HMOs can generate higher yields but also attract additional scrutiny. The correct treatment of furnishings, shared facilities, and utility costs, as well as the interaction with local authority licensing requirements, all need careful handling. We advise HMO landlords on both the tax and compliance side of their portfolios.",
      },
    ],
  },
  {
    slug: "contractors",
    title: "Contractors",
    tagline: "Limited company & umbrella contractors.",
    description:
      "Contracting offers freedom and significantly higher earning potential compared to permanent employment, but it comes with real tax and compliance complexity. IR35 rules, off-payroll working legislation, limited company administration, dividend planning, and VAT all require active management. Whether you operate through your own limited company or work under an umbrella arrangement, we provide the specialist support you need to stay compliant and keep more of your earnings.",
    challenges: [
      "Understanding and managing IR35 status — determining whether engagements fall inside or outside the off-payroll working rules",
      "Optimising the salary and dividend mix each year to minimise income tax and National Insurance contributions",
      "Deciding whether a personal service company or umbrella arrangement is the right vehicle for your contracting career",
      "Claiming all legitimate business expenses to reduce taxable profit within HMRC guidelines",
      "Keeping on top of VAT, Self Assessment, corporation tax, and Companies House deadlines across multiple concurrent engagements",
    ],
    howWeHelp: [
      "Reviewing contracts and working arrangements and providing written IR35 status opinions to support your outside-IR35 position",
      "Calculating the optimal salary and dividend split each tax year based on your personal allowances, higher-rate thresholds, and pension contributions",
      "Advising on the financial difference between limited company and umbrella contracting for your specific rate and circumstances",
      "Preparing quarterly VAT returns, annual corporation tax computations, and Self Assessment returns accurately and on time",
      "Handling all Companies House filings including confirmation statements and annual accounts",
    ],
    relatedServiceSlugs: [
      "corporation-tax",
      "personal-tax",
      "vat-services",
      "company-formation-secretarial",
    ],
    faqs: [
      {
        question: "Am I inside or outside IR35?",
        answer:
          "IR35 status depends on your actual working practices — the key tests are control (who decides how the work is done), substitution (whether you can send someone else), and mutuality of obligation (whether the client must offer work and you must accept it). We review your contracts and day-to-day working arrangements and provide a written status opinion that you can use to support your position.",
      },
      {
        question:
          "How much should I pay myself as a salary from my limited company?",
        answer:
          "Most contractors take a salary at or around the Secondary National Insurance threshold (£9,100 in 2025/26) to preserve their NI record while avoiding employer and employee NI contributions. Above this level, dividends are generally more tax-efficient. We calculate the optimal split for your personal circumstances each tax year.",
      },
      {
        question: "Should I use a limited company or an umbrella company?",
        answer:
          "A limited company typically retains more of your earnings at higher day rates and gives you greater control, but it requires active administration. An umbrella arrangement is simpler — you are an employee of the umbrella — but you will pay more in tax and NI. We model both options for your specific rate and work pattern before you decide.",
      },
      {
        question: "Can I claim my home office costs as an expense?",
        answer:
          "Yes. You can claim either a use-of-home allowance based on HMRC's published rates or a proportion of your actual home costs based on business use. We assess which approach produces the higher deduction in your circumstances and ensure the claim is documented correctly.",
      },
      {
        question: "Do I need to register for VAT as a contractor?",
        answer:
          "You must register for VAT once your annual taxable turnover exceeds £90,000. Many contractors register voluntarily below this threshold and use the Flat Rate Scheme, which can generate a small additional profit on VAT depending on your sector. We advise on the right approach for your contracting business.",
      },
    ],
  },
  {
    slug: "nurseries",
    title: "Nurseries",
    tagline: "Private nursery owners and childcare providers.",
    description:
      "Running a nursery means managing one of the most financially complex small businesses in the UK. High staffing costs, complex government funding streams, razor-thin margins, and ever-changing EYFS and Ofsted requirements all create a demanding financial environment. We help nursery owners get a clear picture of their finances, manage their cash flow, and build a sustainable childcare business.",
    challenges: [
      "High staffing costs as a proportion of revenue, with strict staff-to-child ratios leaving little room to flex the wage bill",
      "Complex government funding reconciliation across 15- and 30-hour funded places, tax-free childcare, and universal credit childcare",
      "Thin operating margins that make accurate cash flow forecasting essential, particularly around term-time income gaps",
      "Business rates liability on nursery premises and understanding eligibility for charitable or small business relief",
      "VAT exemption on childcare income and the impact this has on recovering VAT on costs such as equipment and refurbishments",
    ],
    howWeHelp: [
      "Preparing accurate annual accounts and monthly management accounts that give a clear breakdown of funded and private fee income alongside staffing and overhead costs",
      "Managing payroll for nursery staff including pension auto-enrolment, holiday pay accruals, and accurate RTI submissions to HMRC",
      "Reconciling government funding receipts against expected entitlements and identifying any shortfalls or overpayments",
      "Advising on business rates relief eligibility and working with local authorities to ensure the nursery is not overpaying",
      "Producing cash flow forecasts that plan ahead for term-time income gaps and capital expenditure on equipment or refurbishment",
    ],
    relatedServiceSlugs: [
      "bookkeeping-management-accounts",
      "annual-accounts",
      "corporation-tax",
      "vat-services",
    ],
    faqs: [
      {
        question: "Is childcare income exempt from VAT?",
        answer:
          "Yes. The provision of childcare by a nursery is exempt from VAT as a welfare service. This means you do not charge VAT on fees, but you also cannot reclaim VAT on most of your costs. We review your income streams in detail to confirm the correct VAT treatment across all activities, including any taxable ancillary income such as meals or after-school activities.",
      },
      {
        question: "How do you handle government funding reconciliation?",
        answer:
          "Government funding for 15- and 30-hour funded places is paid by the local authority based on headcount returns. Errors in those returns — or differences between the rate paid and the rate expected — can create significant discrepancies over a term. We work through funding statements each term, reconcile receipts against headcount data, and flag any variances to the local authority on your behalf.",
      },
      {
        question: "Can my nursery claim business rates relief?",
        answer:
          "Many nurseries qualify for small business rates relief or charitable rates relief depending on how the business is structured and the rateable value of the premises. We assess your eligibility and liaise with the local authority to ensure the correct relief is applied. We also review whether any capital expenditure on the building qualifies for relief through the empty property or improvement relief schemes.",
      },
      {
        question: "How do I manage cash flow around term-time gaps?",
        answer:
          "Term-time cash flow is one of the most common financial pressures for nursery owners, particularly those who operate primarily on funded places. We build a 12-month rolling cash flow forecast for each nursery client that maps income receipts against payroll runs, rent payments, and supplier costs, giving you early warning of any shortfalls and time to act.",
      },
      {
        question:
          "Should my nursery operate as a sole trader, partnership, or limited company?",
        answer:
          "The right structure depends on the size of the nursery, the level of profit, and your personal tax position. Limited company status can deliver significant tax savings at higher profit levels, but also introduces additional administration. We model both structures side by side before making a recommendation tailored to your specific nursery.",
      },
    ],
  },
] as const;

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const mockTestimonials = [
  {
    id: "t1",
    name: "Dr Sarah Mitchell",
    company: "Bright Smiles Dental Practice",
    quote:
      "Huxridge transformed how we manage our practice finances. The switch to cloud accounting was painless and their knowledge of dental practice tax — including the NHS pension implications — is second to none. We saved over £8,000 in our first year.",
    rating: 5,
    industry: "Healthcare" as const,
  },
  {
    id: "t2",
    name: "James Thornton",
    company: "Thornton Property Ltd",
    quote:
      "After Section 24 hit my tax bill hard, I knew I needed specialist advice. Huxridge modelled incorporation for my portfolio and helped me transition in a tax-efficient way. Their responsiveness and clarity on complex property tax issues is outstanding.",
    rating: 5,
    industry: "Landlords" as const,
  },
  {
    id: "t3",
    name: "Priya Desai",
    company: "PD Technology Consulting Ltd",
    quote:
      "As an IT contractor, IR35 was a constant worry. Huxridge reviewed all my contracts, gave me written IR35 opinions, and optimised my salary/dividend structure. I'm confident I'm paying the right amount of tax and no more.",
    rating: 5,
    industry: "Contractors" as const,
  },
  {
    id: "t4",
    name: "Oliver Barnes",
    company: "Greenleaf Catering Ltd",
    quote:
      "We started working with Huxridge when we incorporated our catering business. They set up our Xero accounts, handled our first year-end, and the management accounts they produce each month are genuinely useful for running the business.",
    rating: 5,
    industry: "Start-Up" as const,
  },
  {
    id: "t5",
    name: "Amanda Foster",
    company: "Lakeside Veterinary Clinic",
    quote:
      "I had struggled for years with accountants who didn't understand veterinary practice finances. Huxridge knew exactly what questions to ask. The quarterly VAT returns and year-end accounts are always accurate and on time.",
    rating: 5,
    industry: "Healthcare" as const,
  },
  {
    id: "t6",
    name: "Michael Chen",
    company: "Chen & Partners LLP",
    quote:
      "We needed help with our MTD for VAT transition. Huxridge handled everything — software migration, staff training, the lot — and our first MTD submission went through without a hitch. Brilliant, professional team.",
    rating: 5,
    industry: "SME" as const,
  },
  {
    id: "t7",
    name: "Rachel Okonkwo",
    company: "Northern Care Homes Group",
    quote:
      "Running three registered care homes means complex CQC reporting requirements alongside normal accountancy. Huxridge understand both sides and their internal audit service gave our board real confidence in our financial controls.",
    rating: 5,
    industry: "Healthcare" as const,
  },
  {
    id: "t8",
    name: "Tom Whitfield",
    company: "TW Digital Ltd",
    quote:
      "Switched to Huxridge six months in from another firm that couldn't keep up. The difference is clear — proactive advice, fast responses, and management accounts I actually understand. I wish I'd found them sooner.",
    rating: 5,
    industry: "Contractors" as const,
  },
] as const;

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const mockBlogPosts = [
  {
    slug: "mtd-income-tax-what-landlords-need-to-know",
    title: "MTD for Income Tax: What Landlords Need to Know Before April 2026",
    excerpt:
      "Making Tax Digital for Income Tax Self Assessment is coming for landlords with rental income over £50,000. Here is everything you need to do now to be ready.",
    date: "2026-04-15",
    readingTime: "6 min read",
    category: "Making Tax Digital",
    author: { name: "Huxridge Tax Team", role: "Tax Advisory" },
  },
  {
    slug: "section-24-five-years-on",
    title:
      "Section 24 Five Years On: Is Incorporation Right for Your Portfolio?",
    excerpt:
      "The mortgage interest restriction has fundamentally changed the maths of property investment. We analyse when incorporating your portfolio makes financial sense — and when it does not.",
    date: "2026-03-28",
    readingTime: "8 min read",
    category: "Property Tax",
    author: { name: "Huxridge Property Team", role: "Property Tax Advisory" },
  },
  {
    slug: "r-and-d-tax-credits-sme-guide",
    title: "R&D Tax Credits: A Plain-English Guide for UK SMEs",
    excerpt:
      "Many small businesses are leaving significant R&D tax relief on the table. Our guide explains what qualifies, how much you can claim, and how to make a successful application.",
    date: "2026-03-10",
    readingTime: "7 min read",
    category: "Corporation Tax",
    author: { name: "Huxridge Tax Team", role: "Tax Advisory" },
  },
  {
    slug: "ir35-working-practices-guide",
    title: "IR35 and Working Practices: A Practical Guide for Contractors",
    excerpt:
      "Status is determined by how you actually work, not just what your contract says. We walk through the key tests HMRC uses and how to evidence an outside-IR35 position.",
    date: "2026-02-20",
    readingTime: "9 min read",
    category: "Contractors",
    author: { name: "Huxridge Advisory Team", role: "Contractor Services" },
  },
  {
    slug: "cloud-accounting-for-dental-practices",
    title: "Cloud Accounting for Dental Practices: The Complete Guide",
    excerpt:
      "Switching to cloud accounting saves dental practice owners hours every month and provides the real-time visibility you need to manage a busy practice effectively.",
    date: "2026-02-05",
    readingTime: "5 min read",
    category: "Healthcare",
    author: { name: "Huxridge Healthcare Team", role: "Healthcare Accounting" },
  },
  {
    slug: "startup-accounting-mistakes",
    title:
      "7 Accounting Mistakes New Business Owners Make (and How to Avoid Them)",
    excerpt:
      "From choosing the wrong legal structure to missing the VAT threshold, the financial mistakes made in year one can echo through a business for years. Here is how to get it right from the start.",
    date: "2026-01-22",
    readingTime: "6 min read",
    category: "Start-Ups",
    author: { name: "Huxridge Advisory Team", role: "Start-Up Advisory" },
  },
] as const;

// ─── Sample Blog Post Body ────────────────────────────────────────────────────

export const mockSamplePostBody = [
  "Making Tax Digital for Income Tax Self Assessment (MTD for ITSA) represents the biggest change to how landlords and self-employed individuals interact with HMRC in a generation. From April 2026, if your rental income — or combined rental and self-employment income — exceeds £50,000, you will be required to keep digital records and submit quarterly updates to HMRC through MTD-compatible software.",

  "The quarterly updates are not mini tax returns. They are summaries of your income and expenses for each three-month period. You will submit four updates per year, followed by an end-of-period statement where you finalise the figures and claim any adjustments, and then a final declaration that replaces the current Self Assessment return.",

  "The most important thing to understand is that the 5 April 2026 start date applies to your first accounting period that begins on or after that date. For most landlords who report on the standard tax year basis, this means the first quarterly update will cover April to June 2026 and will be due by 5 August 2026.",

  "What does this mean in practice? You will need MTD-compatible software in place before your new accounting period starts. If you currently use a spreadsheet to track your rental income and expenses, you will need to move to software that can connect directly to HMRC's systems and submit the required updates. HMRC maintains a list of approved products, and we recommend Xero, QuickBooks, or FreeAgent, all of which we can set up and manage on your behalf.",

  "The second wave of MTD for ITSA — covering those with income between £30,000 and £50,000 — is planned for April 2027. If your income is in this range, now is the ideal time to start preparing, even if you are not yet mandated.",

  "There are some exemptions to be aware of. Partnerships are not currently within scope, though HMRC has indicated they will be brought in at a later date. There are also exemptions for certain foreign landlords, those with religious objections to using computers, and those in other circumstances where digital filing is not reasonably practicable.",

  "The penalties for non-compliance with MTD are not trivial. HMRC is moving to a points-based system: each missed quarterly update earns a penalty point, and once you accumulate enough points a financial penalty is charged. There are also separate penalties for late payment of tax. Getting your systems and habits right now means you will never be at risk.",

  "Our recommendation is to start the transition as soon as possible rather than leaving it until the last minute. We can review your current record-keeping, recommend the right software, and ensure your first quarterly submission is filed correctly. Get in touch with the team to discuss your MTD readiness.",
] as const;

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const mockFaqs = {
  Services: [
    {
      question: "How do your service packages work?",
      answer:
        "We offer a range of fixed-fee packages tailored to your business size and needs. Each package includes a defined scope of services so you always know what you are getting and what you are paying.",
    },
    {
      question: "Can I add services as my business grows?",
      answer:
        "Absolutely. Our packages are designed to scale with you. Many clients start with bookkeeping and a self assessment return and gradually add management accounts, VAT, and other services as their business develops.",
    },
    {
      question: "Do you offer one-off services or only ongoing packages?",
      answer:
        "We offer both. We can handle a one-off annual accounts filing or tax return, but most clients find an ongoing engagement provides more value through the year-round advice and planning we provide.",
    },
    {
      question: "Which accounting software do you use?",
      answer:
        "We work primarily with Xero, QuickBooks, and FreeAgent. We will recommend the best fit for your business and handle the setup and ongoing management as part of your package.",
    },
    {
      question: "Do you work with businesses outside London?",
      answer:
        "Yes. We are a fully remote, UK-wide practice. All client work is carried out digitally and we have clients across England, Scotland, Wales, and Northern Ireland.",
    },
  ],
  Pricing: [
    {
      question: "How do you charge for your services?",
      answer:
        "We charge fixed monthly fees for all ongoing services. There are no hourly rates and no unexpected invoices at year-end. You know exactly what you pay from the outset.",
    },
    {
      question: "What is included in my monthly fee?",
      answer:
        "Your monthly fee covers the agreed scope of work plus year-round email and telephone support for routine queries. Complex one-off advisory work outside the agreed scope may be quoted separately.",
    },
    {
      question: "Do you charge separately for tax return preparation?",
      answer:
        "Tax return preparation is included in our annual accounts and personal tax packages. Standalone tax return preparation is available at a fixed price based on the complexity of your affairs.",
    },
    {
      question: "Can I pay annually rather than monthly?",
      answer:
        "Yes. We offer a small discount for clients who pay annually in advance. Ask us about this when we discuss your package.",
    },
    {
      question: "Are there any set-up fees?",
      answer:
        "There is typically a one-off onboarding fee to cover the initial review of your records, software setup, and transition from your previous accountant. This will be clearly stated in your engagement letter.",
    },
  ],
  Process: [
    {
      question: "How do I get started with Huxridge?",
      answer:
        "Book a free initial consultation via our website. We will discuss your needs, explain our services and fees, and provide a written proposal. Once you are happy to proceed, onboarding typically takes one to two weeks.",
    },
    {
      question: "How do you handle the transfer from my current accountant?",
      answer:
        "We manage the professional clearance process directly with your outgoing accountant and request all relevant papers and records on your behalf. Most clients find the transition completely smooth.",
    },
    {
      question: "How do I share documents with you?",
      answer:
        "We use secure cloud storage and your accounting software to share and exchange documents. You can also email documents directly to our team. We are entirely paperless — no printing or posting required.",
    },
    {
      question: "How quickly will you respond to my queries?",
      answer:
        "We aim to respond to all queries within one business day. Complex technical questions may take longer but we will always acknowledge your query and give you a timeframe.",
    },
    {
      question: "Will I have a dedicated accountant?",
      answer:
        "Yes. You will have a named client manager who is your primary point of contact and who knows your affairs. They are supported by our wider team for specialist areas.",
    },
  ],
  MTD: [
    {
      question: "What is Making Tax Digital?",
      answer:
        "Making Tax Digital (MTD) is HMRC's programme to modernise the UK tax system. It requires businesses and individuals to keep digital records and submit information to HMRC using approved software rather than manually completing forms.",
    },
    {
      question: "Am I affected by MTD for VAT?",
      answer:
        "Yes, if you are VAT-registered. MTD for VAT has been mandatory for all VAT-registered businesses since April 2022. You must keep digital VAT records and submit returns via MTD-compatible software.",
    },
    {
      question: "When does MTD for Income Tax affect me?",
      answer:
        "MTD for ITSA is being introduced in phases. From April 2026, self-employed individuals and landlords with combined income over £50,000 must comply. Those with income over £30,000 follow in April 2027.",
    },
    {
      question: "What software do I need for MTD?",
      answer:
        "You need HMRC-approved MTD-compatible software. We recommend Xero, QuickBooks, or FreeAgent, all of which support MTD for both VAT and Income Tax. We can set up and manage your software.",
    },
    {
      question: "What happens if I do not comply with MTD?",
      answer:
        "HMRC operates a points-based penalty system for missed submissions. Accumulating enough points triggers a financial penalty. Non-compliance with digital record-keeping requirements can also attract fines.",
    },
  ],
  General: [
    {
      question: "Are you regulated?",
      answer:
        "Yes. Huxridge is a regulated firm and all our work is carried out to the professional standards required of qualified accountants. We carry full professional indemnity insurance.",
    },
    {
      question: "What size businesses do you work with?",
      answer:
        "We work with sole traders, small and medium-sized businesses, and larger SMEs. Our sweet spot is businesses with turnover between £100,000 and £5 million, though we regularly work with businesses outside this range.",
    },
    {
      question: "Do you offer face-to-face meetings?",
      answer:
        "We are a remote-first practice and conduct most meetings via video call. This allows us to work with clients anywhere in the UK and keeps our costs — and therefore your fees — lower.",
    },
    {
      question: "Can you help with a business that is in difficulty?",
      answer:
        "We can assist with businesses facing financial difficulties, including managing cash flow, preparing creditor negotiations, and liaising with HMRC over time-to-pay arrangements.",
    },
    {
      question: "How do I make a complaint?",
      answer:
        "We hope you will never need to, but if something is not right please contact us directly. We have a formal complaints procedure and will respond within five business days.",
    },
  ],
} as const;

// ─── Resources ────────────────────────────────────────────────────────────────

export const mockResources = [
  {
    title: "Making Tax Digital: A Practical Guide",
    description:
      "A clear walkthrough of what MTD means for UK businesses — from VAT (already live) to income tax (arriving from April 2026) — with what you need to do now.",
    category: "Making Tax Digital",
    cta: "View Guide" as const,
    slug: "making-tax-digital-guide",
  },
  {
    title: "Company Formation & Company Secretarial: A Complete Guide",
    description:
      "Everything you need to know about incorporating a UK limited company and keeping it compliant — from identity verification to confirmation statements and ongoing filings.",
    category: "Business Structure",
    cta: "View Guide" as const,
    slug: "company-formation-secretarial-guide",
  },
  {
    title: "Corporation Tax: A Practical Guide for Company Directors",
    description:
      "A plain-English guide to UK corporation tax in 2025/26 — rates, taxable profits, allowable reliefs including R&D credits, and the deadlines you cannot afford to miss.",
    category: "Corporation Tax",
    cta: "View Guide" as const,
    slug: "corporation-tax-guide",
  },
  {
    title: "Annual Accounts: A Plain Guide for Company Directors",
    description:
      "What statutory accounts actually are, which documents your company must prepare, how size thresholds affect your obligations, and the filing deadlines for Companies House and HMRC.",
    category: "Annual Accounts",
    cta: "View Guide" as const,
    slug: "annual-accounts-guide",
  },
  {
    title: "VAT: A Practical Guide for UK Businesses",
    description:
      "A complete guide to UK VAT — registration thresholds, the rates that apply to different supplies, VAT schemes that can simplify life, MTD for VAT, and the penalties for non-compliance.",
    category: "VAT",
    cta: "View Guide" as const,
    slug: "vat-guide",
  },
  {
    title: "Personal Tax: What You Actually Need to Know",
    description:
      "The 2025/26 personal tax guide covering income tax bands, Self Assessment, dividend and savings taxation, and planning opportunities for directors, landlords, and healthcare professionals.",
    category: "Personal Tax",
    cta: "View Guide" as const,
    slug: "personal-tax-guide",
  },
  {
    title: "Internal Audit: A Practical Guide for Business Owners",
    description:
      "What internal audit actually is, how it differs from external audit, the areas it typically covers, and why an independent periodic review is valuable for growing SMEs, care providers, and regulated businesses.",
    category: "Governance",
    cta: "View Guide" as const,
    slug: "internal-audit-guide",
  },
] as const;
