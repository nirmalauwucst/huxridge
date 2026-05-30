import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Huxridge Accountants & Tax Consultants",
  description: "Terms and conditions for use of the Huxridge website and services.",
};

export default function TermsPage() {
  return (
    <Section padding="lg" background="default">
      <Container size="narrow">
        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground text-sm">Last updated: 1 May 2026</p>

          <h1 className="text-primary-900 font-serif text-4xl font-semibold">Terms &amp; Conditions</h1>

          <p>
            Please read these Terms and Conditions carefully before using the {site.name} website located at {site.url} (the &ldquo;Website&rdquo;). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Website.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">1. Use of Website</h2>
          <p>
            You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to:
          </p>
          <ul>
            <li>Use the Website in any way that violates any applicable UK or international law or regulation</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
            <li>Knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, or any other harmful programs or similar computer code</li>
            <li>Attempt to gain unauthorised access to any part of the Website or any server, computer, or database connected to the Website</li>
            <li>Attack the Website via a denial-of-service attack or a distributed denial-of-service attack</li>
          </ul>
          <p>
            We reserve the right to terminate or restrict your access to the Website at any time, without notice, if we reasonably believe you have violated these Terms.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">2. Information on This Website</h2>
          <p>
            The content on the Website is provided for general information purposes only. It is not intended to constitute professional advice and should not be relied on as such. While we take reasonable steps to ensure the accuracy and currency of content, we make no warranties or representations — express or implied — as to its completeness or accuracy.
          </p>
          <p>
            Tax law and accountancy standards change regularly. We recommend you always seek specific professional advice before acting on any information contained on this Website.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">3. Intellectual Property</h2>
          <p>
            All content on the Website — including text, graphics, logos, icons, images, and downloadable files — is the property of {site.name} or its content suppliers and is protected by UK and international copyright and intellectual property laws.
          </p>
          <p>
            You may print or download extracts from the Website for your personal, non-commercial use, provided that you do not modify the material and you acknowledge our ownership. You may not reproduce, distribute, or republish any content for commercial purposes without our prior written consent.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">4. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, {site.name} excludes all liability for any loss or damage (whether direct, indirect, consequential, or otherwise) arising from your use of or inability to use the Website or its content, including but not limited to:
          </p>
          <ul>
            <li>Loss of income or revenue</li>
            <li>Loss of business or profits</li>
            <li>Loss of anticipated savings</li>
            <li>Loss of data</li>
            <li>Loss of goodwill</li>
            <li>Any indirect or consequential loss</li>
          </ul>
          <p>
            Nothing in these Terms limits or excludes our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">5. Links to Third-Party Websites</h2>
          <p>
            The Website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those websites and accept no responsibility for them or for any loss or damage that may arise from your use of them. Inclusion of a link does not imply our endorsement of the linked website.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">6. Privacy</h2>
          <p>
            Your use of the Website is also governed by our{" "}
            <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into these Terms by reference. Please review it to understand our practices.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">7. Changes to These Terms</h2>
          <p>
            We may revise these Terms at any time by updating this page. The &ldquo;Last updated&rdquo; date at the top indicates when the Terms were last revised. Your continued use of the Website after any changes constitutes your acceptance of the revised Terms. We encourage you to review this page periodically.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">8. Governing Law and Jurisdiction</h2>
          <p>
            These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2 className="text-primary-900 text-2xl font-semibold">9. Contact</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <address className="not-italic">
            {site.name}<br />
            Email: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a><br />
            Telephone: {site.contact.phone}
          </address>
        </div>
      </Container>
    </Section>
  );
}
