import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Huxridge Accountants & Tax Consultants",
  description:
    "Huxridge Privacy Policy — how we collect, use, and protect your personal data.",
};

const MOCK_COMPANY = {
  name: site.name,
  registrationNumber: "14123456",
  registeredAddress: "20 Fenchurch Street, London, EC3M 3BY",
  website: site.url,
  icoNumber: "ZA987654",
  email: site.contact.email,
  phone: site.contact.phone,
};

export default function PrivacyPolicyPage() {
  return (
    <Section padding="lg" background="default">
      <Container size="narrow">
        <div className="prose prose-slate prose-lg prose-headings:scroll-mt-24 prose-li:my-1.5 prose-p:leading-8 prose-ul:leading-8 prose-h2:mb-8 prose-h3:mb-4 max-w-none">
          <p className="text-muted-foreground !mt-0 !mb-6 text-sm">
            Last updated: 21 June 2026 &nbsp;·&nbsp; Version 1.0
          </p>

          <h1 className="text-primary-900 !mb-1 font-serif text-4xl font-semibold">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground !mt-0 !mb-8">
            Website Privacy Notice
          </p>

          <p>
            This privacy policy explains how {MOCK_COMPANY.name}{" "}
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;the firm&rdquo;) collects, uses, and protects personal data
            when you visit our website, get in touch through it, or engage us
            for accountancy, tax, payroll, and business advisory services. It
            also explains your rights and how the law protects you.
          </p>

          <div className="not-prose my-8 space-y-2 rounded-lg border border-slate-200 bg-slate-50 px-6 py-5 text-sm leading-6 text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">
                Company name:
              </span>{" "}
              {MOCK_COMPANY.name}
            </p>
            <p>
              <span className="font-semibold text-slate-900">
                Company registration number:
              </span>{" "}
              {MOCK_COMPANY.registrationNumber}
            </p>
            <p>
              <span className="font-semibold text-slate-900">
                Registered address:
              </span>{" "}
              {MOCK_COMPANY.registeredAddress}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Website:</span>{" "}
              <a
                href={MOCK_COMPANY.website}
                className="text-primary-600 underline"
              >
                {MOCK_COMPANY.website}
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-900">
                ICO registration number:
              </span>{" "}
              {MOCK_COMPANY.icoNumber}
            </p>
          </div>

          <p>
            We are the data controller responsible for your personal data. We
            handle it in line with the UK General Data Protection Regulation (UK
            GDPR), the Data Protection Act 2018, the Privacy and Electronic
            Communications Regulations (PECR), and our professional and
            regulatory obligations as accountants.
          </p>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            1. Information We Collect
          </h2>
          <p>
            Depending on how you interact with us, we may collect and process
            the following categories of personal data:
          </p>

          <h3 className="mt-6 mb-2 text-base font-semibold text-slate-800">
            Information you give us through our website
          </h3>
          <ul>
            <li>Your name, email address, and telephone number</li>
            <li>Your business or company name</li>
            <li>
              Details of your enquiry or the services you are interested in
            </li>
            <li>
              Any information you choose to include in contact forms, callback
              requests, or newsletter sign-ups
            </li>
          </ul>

          <h3 className="mt-6 mb-2 text-base font-semibold text-slate-800">
            Information we collect automatically when you visit
          </h3>
          <ul>
            <li>Your IP address and approximate location</li>
            <li>Browser type, device, and operating system</li>
            <li>Pages viewed, time spent, and how you reached our site</li>
            <li>Cookie and analytics data (see our Cookies section below)</li>
          </ul>

          <h3 className="mt-6 mb-2 text-base font-semibold text-slate-800">
            Information we collect when you become a client
          </h3>
          <ul>
            <li>
              Identity and contact details, date of birth, and National
              Insurance number
            </li>
            <li>Unique Taxpayer Reference (UTR) and other tax identifiers</li>
            <li>Bank account, payment, income, expenditure, and tax records</li>
            <li>Payroll, pension, and VAT information</li>
            <li>
              Company registration numbers, ownership, and details of directors,
              partners, and beneficial owners
            </li>
            <li>
              Copies of identity and proof-of-address documents for anti-money
              laundering (AML) and &ldquo;know your client&rdquo; (KYC) checks
            </li>
            <li>Records of our communications and correspondence with you</li>
          </ul>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            2. How We Collect Your Information
          </h2>
          <ul>
            <li>
              Directly from you, when you complete a form on our website, email
              or call us, or engage our services
            </li>
            <li>
              Automatically, through cookies and similar technologies when you
              use our website
            </li>
            <li>
              From third parties acting on your behalf, such as your previous
              accountant or financial adviser
            </li>
            <li>
              From publicly available sources, such as Companies House and the
              electoral register
            </li>
            <li>Through identity verification and AML screening providers</li>
          </ul>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            3. Why We Process Your Data and Our Lawful Basis
          </h2>
          <p>
            We only process your personal data where we have a lawful basis to
            do so. Depending on the circumstances, we rely on one or more of the
            following:
          </p>
          <ul>
            <li>
              <strong>Contractual necessity</strong> &ndash; to respond to your
              enquiry and to provide the services set out in our engagement
              letter
            </li>
            <li>
              <strong>Legal obligation</strong> &ndash; to comply with our
              duties under tax law, the Money Laundering Regulations, and HMRC
              and Companies House reporting requirements
            </li>
            <li>
              <strong>Legitimate interests</strong> &ndash; to respond to
              website enquiries, administer and improve our website and
              services, prevent fraud, and manage our business, provided your
              interests and rights do not override these
            </li>
            <li>
              <strong>Consent</strong> &ndash; where you have given clear
              consent, for example to receive marketing communications or to
              allow non-essential cookies (which you may withdraw at any time)
            </li>
          </ul>
          <p>
            Where we process special category data or criminal offence data (for
            example as part of AML checks), we do so in accordance with the
            additional conditions set out in the Data Protection Act 2018.
          </p>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            4. Cookies and Analytics
          </h2>
          <p>
            Our website uses cookies and similar technologies to help it
            function, to remember your preferences, and to understand how
            visitors use the site. Cookies are small text files placed on your
            device.
          </p>
          <h3 className="mt-6 mb-2 text-base font-semibold text-slate-800">
            Types of cookies we use
          </h3>
          <ul>
            <li>
              <strong>Strictly necessary cookies</strong> &ndash; required for
              the website to function and which do not need your consent
            </li>
            <li>
              <strong>Analytics cookies</strong> &ndash; help us understand how
              visitors use our site so we can improve it (for example, web
              analytics tools)
            </li>
            <li>
              <strong>Functionality cookies</strong> &ndash; remember choices
              you make to improve your experience
            </li>
            <li>
              <strong>Marketing cookies</strong> &ndash; used to deliver
              relevant content and measure the effectiveness of campaigns
            </li>
          </ul>
          <p>
            Where required, we will ask for your consent before placing
            non-essential cookies. You can accept, reject, or manage cookies at
            any time through our cookie banner or your browser settings.
            Blocking some cookies may affect how the website works.
          </p>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            5. Who We Share Your Data With
          </h2>
          <p>
            We treat your information as confidential and only share it where
            necessary to provide our services, meet our legal obligations, or
            with your consent. Recipients may include:
          </p>
          <ul>
            <li>HM Revenue &amp; Customs (HMRC) and Companies House</li>
            <li>Website hosting, analytics, and IT service providers</li>
            <li>
              Third-party accounting, payroll, and practice management software
              platforms
            </li>
            <li>Secure cloud storage providers</li>
            <li>
              Sub-contractors, bookkeepers, or specialists engaged to assist
              with your work
            </li>
            <li>
              Banks, lenders, and other financial institutions, where you have
              authorised us to do so
            </li>
            <li>
              Our professional indemnity insurers and legal advisers, where
              necessary
            </li>
            <li>Regulatory and professional bodies, where required</li>
            <li>
              Law enforcement or government agencies, where we are legally
              required to disclose information
            </li>
          </ul>
          <p>
            Where we use third-party processors, we put written agreements in
            place requiring them to keep your data secure and to process it only
            on our instructions.
          </p>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            6. International Data Transfers
          </h2>
          <p>
            Some of our service providers &ndash; including certain website,
            hosting, and analytics tools &ndash; may store or process data
            outside the United Kingdom. Where this happens, we take steps to
            ensure your data receives an equivalent level of protection, for
            example by relying on adequacy regulations or appropriate safeguards
            such as the International Data Transfer Agreement or Standard
            Contractual Clauses.
          </p>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            7. How Long We Keep Your Data
          </h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the
            purposes for which it was collected, including to meet legal,
            regulatory, accounting, and reporting requirements. As a general
            guide:
          </p>
          <ul>
            <li>
              <strong>Website enquiries that do not become clients</strong>{" "}
              &ndash; retained only for as long as needed to deal with your
              enquiry, then securely deleted
            </li>
            <li>
              <strong>Accounting and tax records</strong> &ndash; retained for
              at least six years from the end of the relevant accounting period
            </li>
            <li>
              <strong>Anti-money laundering records</strong> &ndash; retained
              for five years after the end of our business relationship with you
            </li>
            <li>
              <strong>Other records</strong> &ndash; retained for as long as
              needed for the purpose concerned, after which they are securely
              deleted or destroyed
            </li>
          </ul>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            8. How We Protect Your Data
          </h2>
          <p>
            We take the security of your personal data seriously and have
            appropriate technical and organisational measures in place,
            including:
          </p>
          <ul>
            <li>Encryption and secure access controls</li>
            <li>Secure, reputable website hosting</li>
            <li>Restricting access to personal data to staff who need it</li>
            <li>
              Regular staff training on data protection and confidentiality
            </li>
            <li>Secure storage of physical and electronic records</li>
            <li>
              Procedures to detect, report, and investigate any personal data
              breach
            </li>
          </ul>
          <p>
            In the event of a data breach likely to result in a risk to your
            rights and freedoms, we will notify the Information
            Commissioner&apos;s Office (ICO) and, where required, affected
            individuals.
          </p>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            9. Your Rights
          </h2>
          <p>
            Under data protection law, you have a number of rights in relation
            to your personal data:
          </p>
          <ul>
            <li>
              <strong>Right of access</strong> &ndash; to request a copy of the
              personal data we hold about you
            </li>
            <li>
              <strong>Right to rectification</strong> &ndash; to have inaccurate
              or incomplete data corrected
            </li>
            <li>
              <strong>Right to erasure</strong> &ndash; to request deletion of
              your data, where there is no overriding legal reason to retain it
            </li>
            <li>
              <strong>Right to restriction</strong> &ndash; to ask us to limit
              how we use your data in certain circumstances
            </li>
            <li>
              <strong>Right to data portability</strong> &ndash; to receive your
              data in a structured, commonly used format
            </li>
            <li>
              <strong>Right to object</strong> &ndash; to object to processing
              based on our legitimate interests or to direct marketing
            </li>
            <li>
              <strong>Rights relating to automated decision-making</strong>{" "}
              &ndash; where applicable, not to be subject to decisions based
              solely on automated processing
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the details
            below. We will respond within one month. There is usually no charge,
            although we may charge a reasonable fee or refuse a request that is
            manifestly unfounded or excessive.
          </p>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            10. Marketing Communications
          </h2>
          <p>
            Where you have consented or where we are otherwise permitted to do
            so, we may send you information about our services that may be of
            interest to you. You can opt out of marketing at any time by using
            the unsubscribe link in our emails or by contacting us. Opting out
            of marketing will not affect the services we provide to you.
          </p>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            11. Use of Software and Automated Tools
          </h2>
          <p>
            We use a range of accounting software and technology, which may
            include automated and AI-assisted tools, to help prepare and review
            your accounts and to deliver our services efficiently. We do not
            make decisions that produce legal or similarly significant effects
            about you based solely on automated processing without appropriate
            safeguards and human oversight.
          </p>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            12. Links to Other Websites
          </h2>
          <p>
            Our website may contain links to third-party websites. This privacy
            policy applies only to our website, and we are not responsible for
            the privacy practices of any third-party sites. We encourage you to
            read the privacy policy of any website you visit.
          </p>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            13. How to Complain
          </h2>
          <p>
            If you have any concerns about how we handle your personal data,
            please contact us in the first instance so we can try to resolve the
            matter. You also have the right to lodge a complaint with the
            Information Commissioner&apos;s Office (ICO):
          </p>
          <ul>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
            </li>
            <li>
              <strong>Helpline:</strong> 0303 123 1113
            </li>
          </ul>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            14. Contact Us
          </h2>
          <p>
            If you have any questions about this privacy policy or how we use
            your personal data, please contact us:
          </p>
          <address className="leading-8 not-italic">
            <strong>{MOCK_COMPANY.name}</strong>
            <br />
            {MOCK_COMPANY.registeredAddress}
            <br />
            Email:{" "}
            <a href={`mailto:${MOCK_COMPANY.email}`}>{MOCK_COMPANY.email}</a>
            <br />
            Telephone: {MOCK_COMPANY.phone}
          </address>

          <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
            15. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time to reflect
            changes in our practices, our website, or legal requirements. The
            latest version will always be published on this page.
          </p>
        </div>
      </Container>
    </Section>
  );
}
