import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/ui/json-ld";
import { buildBreadcrumbList } from "@/lib/jsonld";
import { site } from "@/lib/site";
import type { Metadata } from "next";

const title = "Website Terms of Use | Huxridge Accountants & Tax Consultants";
const description =
  "Terms governing your access to and use of the Huxridge Accountants & Tax Consultants website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title, description, url: "/terms" },
  twitter: { title, description },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ])}
      />
      <Section padding="lg" background="default">
        <Container size="narrow">
          <div className="prose prose-slate prose-lg prose-headings:scroll-mt-24 prose-li:my-1.5 prose-p:leading-8 prose-ul:leading-8 prose-h2:mb-8 max-w-none">
            <p className="text-muted-foreground !mt-0 !mb-6 text-sm">
              Last updated: 1 May 2026 &nbsp;·&nbsp; Version 1.0
            </p>

            <h1 className="text-primary-900 !mb-1 font-serif text-4xl font-semibold">
              Website Terms of Use
            </h1>
            <p className="text-muted-foreground !mt-0 !mb-8">
              Please read these terms carefully before using this website.
            </p>

            {/* About box */}
            <div className="not-prose my-8 space-y-2 rounded-lg border border-slate-200 bg-slate-50 px-6 py-5 text-sm leading-6 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Operator:</span>{" "}
                Huxridge Limited, trading as Huxridge Accountants &amp; Tax
                Consultants
              </p>
              <p>
                <span className="font-semibold text-slate-900">
                  Registered in:
                </span>{" "}
                England and Wales
              </p>
              <p>
                <span className="font-semibold text-slate-900">
                  Regulation:
                </span>{" "}
                AAT Licensed Member in Practice, regulated by the Association of
                Accounting Technicians (AAT)
              </p>
              <p>
                <span className="font-semibold text-slate-900">Website:</span>{" "}
                <a href={site.url} className="text-primary-600 underline">
                  {site.url}
                </a>
              </p>
            </div>

            <p>
              By accessing or using this website (the &lsquo;Site&rsquo;), you
              confirm that you accept these Terms of Use and agree to comply
              with them. If you do not agree, you must not use the Site. These
              Terms should be read alongside our{" "}
              <a href="/privacy-policy">Privacy Policy</a> and Cookie Policy.
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              1. About These Terms
            </h2>
            <p>
              <strong>1.1</strong> These Terms of Use (&lsquo;Terms&rsquo;)
              govern your access to and use of the Site. We may revise these
              Terms at any time by amending this page &mdash; the date above
              shows when they were last updated.
            </p>
            <p>
              <strong>1.2</strong> We recommend that you print or save a copy of
              these Terms for your records.
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              2. Changes to These Terms and the Site
            </h2>
            <p>
              <strong>2.1</strong> We may revise these Terms at any time by
              amending this page. Your continued use of the Site after any
              change constitutes acceptance of the revised Terms.
            </p>
            <p>
              <strong>2.2</strong> We may update and change the Site from time
              to time to reflect changes to our services, our users&rsquo;
              needs, and our business priorities. We do not guarantee that the
              Site, or any content on it, will always be available or
              uninterrupted.
            </p>
            <p>
              <strong>2.3</strong> We may suspend, withdraw, or restrict the
              availability of all or any part of the Site for business or
              operational reasons without notice or liability.
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              3. No Professional Advice
            </h2>
            <p>
              <strong>3.1</strong> The content on the Site &mdash; including
              articles, guides, blog posts, calculators, tax tips, and any other
              material &mdash; is provided for{" "}
              <strong>general information only</strong>. It does not constitute
              accountancy, tax, financial, legal, or other professional advice.
            </p>
            <p>
              <strong>3.2</strong> Although we make reasonable efforts to keep
              information up to date, we make no warranties or guarantees that
              content is accurate, complete, or current. Tax rates, legislation,
              and HMRC practice change frequently.
            </p>
            <p>
              <strong>3.3</strong> You must not rely on any content on the Site
              as an alternative to professional advice.{" "}
              <strong>No client relationship is created</strong> by your use of
              the Site or by contacting us through it. A client relationship
              arises only once we have issued, and you have accepted, a formal
              Letter of Engagement.
            </p>
            <p>
              <strong>3.4</strong> Before taking, or refraining from, any action
              on the basis of Site content, you should obtain professional
              advice specific to your circumstances. We accept no liability for
              any loss arising from reliance on Site content (see Clause 8).
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              4. Acceptable Use
            </h2>
            <p>
              <strong>4.1</strong> You may use the Site only for lawful
              purposes. You must not:
            </p>
            <ul>
              <li>
                use the Site in any way that breaches any applicable law or
                regulation;
              </li>
              <li>
                use the Site in any way that is fraudulent, or has any
                fraudulent purpose or effect;
              </li>
              <li>
                transmit any material that is defamatory, obscene, offensive, or
                otherwise objectionable;
              </li>
              <li>
                attempt to gain unauthorised access to the Site, the server on
                which it is stored, or any connected server, computer, or
                database;
              </li>
              <li>
                introduce any virus, trojan, worm, or other material that is
                malicious or technologically harmful;
              </li>
              <li>
                attack the Site via a denial-of-service attack or distributed
                denial-of-service attack;
              </li>
              <li>
                use any automated system, such as scraping, data-mining, or
                harvesting tools, to access or copy content without our prior
                written consent.
              </li>
            </ul>
            <p>
              <strong>4.2</strong> We reserve the right to suspend or terminate
              your access to the Site if you breach this clause, and to report
              any breach to the relevant law enforcement authorities.
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              5. Intellectual Property
            </h2>
            <p>
              <strong>5.1</strong> We are the owner or licensee of all
              intellectual property rights in the Site and in the material
              published on it, including text, graphics, logos, design, and the
              &lsquo;Huxridge&rsquo; name and branding. These works are
              protected by copyright, trademark, and other laws.
            </p>
            <p>
              <strong>5.2</strong> You may view, download, and print extracts of
              Site content for your own personal, non-commercial use, provided
              you do not modify it and keep intact all copyright and proprietary
              notices.
            </p>
            <p>
              <strong>5.3</strong> You must not use any part of the content for
              commercial purposes, or reproduce, republish, or distribute it,
              without obtaining a licence from us.
            </p>
            <p>
              <strong>5.4</strong> If you print, copy, or download any part of
              the Site in breach of these Terms, your right to use the Site will
              cease immediately and you must return or destroy any copies you
              have made.
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              6. Links and Third-Party Content
            </h2>
            <p>
              <strong>6.1</strong> Where the Site contains links to other sites
              and resources provided by third parties, these links are provided
              for your information only. We have no control over the contents of
              those sites or resources and accept no responsibility for them or
              for any loss or damage that may arise from your use of them.
            </p>
            <p>
              <strong>6.2</strong> The display of any third-party advertising,
              link, or reference on the Site does not constitute an endorsement
              by us of that third party, its products, or its services.
            </p>
            <p>
              <strong>6.3</strong> You may link to our home page, provided you
              do so in a way that is fair and legal and does not damage our
              reputation or take advantage of it. We reserve the right to
              withdraw linking permission without notice.
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              7. Enquiries and Information You Submit
            </h2>
            <p>
              <strong>7.1</strong> If you contact us through the Site (for
              example, via a contact or enquiry form, or by email), you are
              responsible for ensuring the information you provide is accurate.
              We will handle any personal data you submit in accordance with our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>
            <p>
              <strong>7.2</strong> Submitting an enquiry does not oblige us to
              provide services to you, nor does it create any contractual or
              client relationship. We will respond to enquiries at our
              discretion.
            </p>
            <p>
              <strong>7.3</strong> You must not submit, through any form or
              feature of the Site, any confidential or sensitive financial
              information until a formal engagement has been established and a
              secure means of communication agreed.
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              8. Our Liability
            </h2>
            <p>
              <strong>8.1</strong> Nothing in these Terms excludes or limits our
              liability for death or personal injury arising from our
              negligence, for fraud or fraudulent misrepresentation, or for any
              other liability that cannot be excluded or limited under English
              law.
            </p>
            <p>
              <strong>8.2</strong> We exclude all implied conditions,
              warranties, representations, or other terms that may apply to the
              Site or any content on it, to the fullest extent permitted by law.
            </p>
            <p>
              <strong>8.3</strong> We will not be liable to any user for any
              loss or damage, whether in contract, tort (including negligence),
              breach of statutory duty, or otherwise, arising under or in
              connection with use of, or inability to use, the Site. In
              particular, we will not be liable for:
            </p>
            <ul>
              <li>loss of profits, sales, business, or revenue;</li>
              <li>business interruption;</li>
              <li>loss of anticipated savings;</li>
              <li>loss of business opportunity, goodwill, or reputation;</li>
              <li>any indirect or consequential loss or damage.</li>
            </ul>
            <p>
              <strong>8.4</strong> We do not guarantee that the Site will be
              secure or free from bugs or viruses. You are responsible for
              configuring your own technology and using your own
              virus-protection software.
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              9. Privacy and Cookies
            </h2>
            <p>
              <strong>9.1</strong> We process personal data collected through
              the Site in accordance with our{" "}
              <a href="/privacy-policy">Privacy Policy</a>, which explains what
              we collect, how we use it, and your rights under the UK General
              Data Protection Regulation (UK GDPR) and the Data Protection Act
              2018.
            </p>
            <p>
              <strong>9.2</strong> The Site uses cookies and similar
              technologies. Details of the cookies we use and how you can manage
              them are set out in our Cookie Policy.
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              10. General
            </h2>
            <p>
              <strong>10.1</strong> These Terms are governed by English law. You
              and we both agree that the courts of England and Wales will have
              exclusive jurisdiction over any dispute arising from or related to
              your use of the Site.
            </p>
            <p>
              <strong>10.2</strong> If any provision of these Terms is found to
              be invalid or unenforceable, the remaining provisions will
              continue in full force and effect.
            </p>
            <p>
              <strong>10.3</strong> A failure or delay by us to enforce any
              provision of these Terms does not constitute a waiver of our right
              to do so later.
            </p>
            <p>
              <strong>10.4</strong> These Terms do not create any rights
              enforceable by third parties under the Contracts (Rights of Third
              Parties) Act 1999.
            </p>

            <h2 className="text-primary-900 mt-12 border-t border-slate-200 pt-8 text-2xl font-semibold">
              11. Contact Us
            </h2>
            <p>
              <strong>11.1</strong> This Site is operated by Huxridge Limited.
              To contact us:
            </p>
            <address className="leading-8 not-italic">
              <strong>{site.name}</strong>
              <br />
              Email:{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <br />
              Telephone: {site.contact.phone}
            </address>
          </div>
        </Container>
      </Section>
    </>
  );
}
