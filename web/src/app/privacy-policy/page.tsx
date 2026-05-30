import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Huxridge Accountants & Tax Consultants",
  description: "Huxridge Privacy Policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <Section padding="lg" background="default">
      <Container size="narrow">
        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground text-sm">Last updated: 1 May 2026</p>

          <h1 className="text-primary-900 font-serif text-4xl font-semibold">Privacy Policy</h1>

          <p>
            This Privacy Policy explains how {site.name} (&ldquo;Huxridge&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, and discloses information about you when you visit our website at {site.url}, enquire about or use our services, or otherwise interact with us.
          </p>
          <p>
            We are committed to protecting your personal data and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">1. Data Controller</h2>
          <p>
            The data controller for personal data processed in connection with this website and our services is:
          </p>
          <address className="not-italic">
            {site.name}<br />
            Email: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a><br />
            Telephone: {site.contact.phone}
          </address>

          <h2 className="text-primary-900 text-2xl font-semibold">2. What Data We Collect</h2>
          <p>We may collect and process the following categories of personal data:</p>
          <ul>
            <li>
              <strong>Identity Data:</strong> your full name, trading name, Companies House registration number.
            </li>
            <li>
              <strong>Contact Data:</strong> your email address, telephone number, and postal address.
            </li>
            <li>
              <strong>Financial Data:</strong> information about your income, expenditure, assets, liabilities, tax history, and banking details necessary to provide accountancy and tax services.
            </li>
            <li>
              <strong>Technical Data:</strong> your IP address, browser type and version, time zone, operating system, and other technology data collected when you visit our website.
            </li>
            <li>
              <strong>Usage Data:</strong> information about how you use our website, including pages visited and links clicked.
            </li>
            <li>
              <strong>Marketing and Communications Data:</strong> your preferences regarding receiving marketing communications from us.
            </li>
          </ul>
          <p>
            We do not collect any Special Categories of Personal Data (such as health data, racial or ethnic origin, or political opinions) except where this is strictly necessary to provide a specific service and you have given explicit consent.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">3. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>To provide and manage the accountancy and tax services you engage us for</li>
            <li>To communicate with you about your account, services, and queries</li>
            <li>To comply with our legal and regulatory obligations, including HMRC requirements</li>
            <li>To send you relevant tax and business information where you have consented to receive it</li>
            <li>To improve our website and services through analysis of usage data</li>
            <li>To prevent fraud and ensure the security of our systems</li>
          </ul>

          <h2 className="text-primary-900 text-2xl font-semibold">4. Legal Basis for Processing</h2>
          <p>We process your personal data on the following legal bases:</p>
          <ul>
            <li>
              <strong>Contract:</strong> processing is necessary to perform the accountancy and tax services contract we have entered into with you.
            </li>
            <li>
              <strong>Legal obligation:</strong> processing is necessary for us to comply with our professional and regulatory obligations (including as a regulated accountancy practice).
            </li>
            <li>
              <strong>Legitimate interests:</strong> processing is necessary for our legitimate interests in operating and improving our business, where these interests are not overridden by your data protection rights.
            </li>
            <li>
              <strong>Consent:</strong> where we send you marketing communications, we rely on your consent, which you may withdraw at any time.
            </li>
          </ul>

          <h2 className="text-primary-900 text-2xl font-semibold">5. Data Retention</h2>
          <p>
            We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, and regulatory obligations. As a regulated accountancy practice, we are generally required to retain client records for a minimum of six years following the end of the engagement. In some circumstances (for example, where records relate to HMRC tax matters) longer retention periods may apply.
          </p>
          <p>
            After the applicable retention period, data is securely deleted or anonymised.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">6. Your Rights</h2>
          <p>Under UK GDPR, you have the following rights in relation to your personal data:</p>
          <ul>
            <li><strong>Right of access:</strong> to request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification:</strong> to request correction of inaccurate or incomplete data.</li>
            <li><strong>Right to erasure:</strong> to request deletion of your data in certain circumstances.</li>
            <li><strong>Right to restrict processing:</strong> to request that we limit how we use your data.</li>
            <li><strong>Right to data portability:</strong> to receive your data in a structured, machine-readable format.</li>
            <li><strong>Right to object:</strong> to object to processing based on legitimate interests or for direct marketing.</li>
            <li><strong>Right to withdraw consent:</strong> where processing is based on consent, to withdraw it at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>. We will respond within one calendar month. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at ico.org.uk.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">7. Cookies</h2>
          <p>
            Our website uses cookies to distinguish you from other users, improve your browsing experience, and analyse how our site is used. We use the following categories of cookie:
          </p>
          <ul>
            <li>
              <strong>Strictly necessary cookies:</strong> essential to operate the website and cannot be switched off.
            </li>
            <li>
              <strong>Analytics cookies:</strong> allow us to measure and improve the performance of our website. These are only set with your consent.
            </li>
          </ul>
          <p>
            You can control or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">8. Third Parties</h2>
          <p>
            We share personal data with third parties only where necessary to provide our services or comply with our obligations. These include:
          </p>
          <ul>
            <li>Cloud accounting software providers (such as Xero Limited, Intuit Inc., and FreeAgent Central Ltd)</li>
            <li>HMRC and other relevant government bodies, where required by law</li>
            <li>Professional bodies of which we are members, where required for regulation or dispute resolution</li>
            <li>IT and cloud services providers who process data on our behalf under data processing agreements</li>
          </ul>
          <p>
            We do not sell, rent, or otherwise share your personal data with third parties for their own marketing purposes.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">9. International Transfers</h2>
          <p>
            Some of the cloud platforms we use store data on servers located outside the UK. Where personal data is transferred outside the UK, we ensure appropriate safeguards are in place (such as UK adequacy regulations or the International Data Transfer Addendum to the EU Standard Contractual Clauses).
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">10. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:
          </p>
          <address className="not-italic">
            {site.name}<br />
            Email: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a><br />
            Telephone: {site.contact.phone}
          </address>
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page indicates when the policy was last revised.
          </p>
        </div>
      </Container>
    </Section>
  );
}
