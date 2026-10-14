import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the Tieko Media website, assessments, enquiries, paid offers and professional services.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | Tieko Media",
    description: "Terms governing the Tieko Media website, assessments, enquiries, paid offers and services.",
    url: "/terms-of-service",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const sections = [
  {
    title: "Acceptance and eligibility",
    content: (
      <>
        <p>These terms govern your use of the Tieko Media Limited website, forms, assessments, checkout pages and related online services. By using the website, you agree to these terms and our Privacy Policy.</p>
        <p>You must be at least 18 years old and legally able to enter an agreement. If you use the website for an organisation, you confirm that you are authorised to act for that organisation.</p>
      </>
    ),
  },
  {
    title: "Website information and free tools",
    content: (
      <>
        <p>Website articles, checklists, assessments and other free material provide general business information. They are not legal, tax, investment, accounting, cybersecurity or other regulated professional advice.</p>
        <p>The Digital Intelligence Quotient is a diagnostic and educational tool based on the answers you provide. Its score is not a certification, audit, guarantee of security or prediction of business performance. You remain responsible for decisions made using the result.</p>
      </>
    ),
  },
  {
    title: "Enquiries and professional services",
    content: (
      <>
        <p>Sending a form or booking request does not create a client relationship, guarantee acceptance or reserve a time unless we confirm it. Introductory calls are for discussing fit and next steps; detailed strategy and implementation may require a paid engagement.</p>
        <p>Paid professional work will normally be governed by a proposal, statement of work, invoice, engagement letter or other written agreement describing scope, fees, responsibilities, assumptions and external dependencies. If that agreement conflicts with these website terms, the specific written agreement controls for that service.</p>
        <p>Government bodies, platforms, media owners, search engines, payment providers and licensed professionals control their own approvals, inventory, rules and timelines. We do not guarantee regulatory approval, media placement, search ranking, sales, traffic, funding or another third-party outcome.</p>
      </>
    ),
  },
  {
    title: "Payments, cancellation and refunds",
    content: (
      <>
        <p>Prices and currencies are displayed at checkout or in the applicable written offer. Payments may be processed by Flutterwave or another stated provider. You authorise the processor to charge the selected payment method and agree to provide accurate billing and contact information.</p>
        <p>Delivery dates, rescheduling, cancellation and refund terms may vary by offer and will be stated at checkout, in the offer or in the service agreement. Where no specific term is stated, contact us promptly before the scheduled session or before substantive work begins. Completed sessions and work already delivered are generally not refundable except where required by applicable law.</p>
        <p>A payment confirmation is subject to successful verification. We may pause delivery while a transaction is pending, reversed, disputed or reasonably suspected to be unauthorised.</p>
      </>
    ),
  },
  {
    title: "Digital products and access",
    content: (
      <>
        <p>Digital products and private learning resources are licensed to the purchaser for personal, non-transferable use unless a product page expressly states otherwise. Purchase does not transfer copyright or grant permission to share, reproduce, upload, resell or redistribute the files, folder links or access credentials.</p>
        <p>Access is delivered to the email address supplied at checkout after successful payment verification. You are responsible for entering a working email address and keeping the delivery email and link secure. Contact us with your payment reference if delivery does not arrive within a reasonable period.</p>
        <p>Because digital access may be delivered immediately, cancellation or refund rights can be limited after access has been sent, except where the product is materially unavailable, defective or applicable law requires otherwise.</p>
      </>
    ),
  },
  {
    title: "Your submissions and acceptable use",
    content: (
      <>
        <p>You are responsible for ensuring that information you submit is accurate, lawful and does not violate another person&apos;s rights. Do not send confidential records, passwords, payment-card details, unlawful material or personal information you are not authorised to share through a general enquiry form.</p>
        <p>You must not attempt to bypass security, inject malicious code, overload the service, scrape the website in a harmful manner, impersonate another person, interfere with payment verification or use the website for fraud or unlawful activity.</p>
        <p>We may restrict or block access where reasonably necessary to protect users, the business, service providers or the integrity of the website.</p>
      </>
    ),
  },
  {
    title: "Intellectual property",
    content: (
      <>
        <p>The website, Tieko Media branding, original writing, assessment structure, graphics, downloadable scorecards and other original materials are owned by or licensed to Tieko Media Limited and are protected by applicable intellectual-property laws.</p>
        <p>You may use public pages and a scorecard generated for you for personal or internal business purposes and may share the unaltered scorecard. You may not reproduce, sell, remove attribution from, misrepresent, reverse engineer or create a competing commercial product from our protected material without written permission.</p>
        <p>Ownership and permitted use of client deliverables are governed by the applicable service agreement.</p>
      </>
    ),
  },
  {
    title: "Third-party services and availability",
    content: (
      <>
        <p>The website may link to or rely on third-party services such as Cal.com, Flutterwave and external institutional websites. We do not control their availability, content, security or terms, and your direct use of them may be governed by separate agreements.</p>
        <p>We aim to keep the website useful and available but do not promise uninterrupted, error-free or permanently available access. We may update, suspend or withdraw a feature for maintenance, security, legal or operational reasons.</p>
      </>
    ),
  },
  {
    title: "Responsibility and liability",
    content: (
      <>
        <p>You are responsible for independently evaluating information and maintaining appropriate backups, account controls and professional advice. To the extent permitted by law, Tieko Media Limited is not responsible for indirect, incidental or consequential loss arising solely from use of free website material or reliance on a diagnostic score.</p>
        <p>Nothing in these terms excludes or limits liability that cannot lawfully be excluded, or removes any mandatory consumer right that applies to you.</p>
      </>
    ),
  },
  {
    title: "Governing law, changes and contact",
    content: (
      <>
        <p>These website terms are governed by the laws of the Federal Republic of Nigeria. The parties should first attempt in good faith to resolve a dispute directly. Subject to any mandatory dispute process or right that applies, unresolved disputes are subject to the jurisdiction of the courts in Lagos State, Nigeria.</p>
        <p>We may update these terms to reflect changes to the website, our services or applicable requirements. Continued use after an update means the revised terms apply from the stated update date.</p>
        <p>Questions about these terms may be sent to <a href="mailto:info@tiekomedia.com">info@tiekomedia.com</a>, or to Tieko Media Limited at 13b Samuel Awoniyi, off Salvation Road, Opebi, Ikeja, Lagos 100212, Nigeria.</p>
      </>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      eyebrow="Clear terms for using this website"
      summary="These terms explain how you may use the Tieko Media website, what our free tools mean and how enquiries, paid offers and professional engagements are handled."
      path="/terms-of-service"
      updated="14 October 2026"
      sections={sections}
    />
  );
}
