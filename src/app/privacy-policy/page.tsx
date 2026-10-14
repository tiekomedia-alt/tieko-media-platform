import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Tieko Media Limited collects, uses, stores and protects personal information submitted through its website and services.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Tieko Media",
    description: "How Tieko Media Limited handles personal information submitted through its website and services.",
    url: "/privacy-policy",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const sections = [
  {
    title: "Who controls your information",
    content: (
      <>
        <p>Tieko Media Limited is responsible for the personal information described in this policy. Our business address is 13b Samuel Awoniyi, off Salvation Road, Opebi, Ikeja, Lagos 100212, Nigeria.</p>
        <p>Questions, privacy requests and complaints may be sent to <a href="mailto:info@tiekomedia.com">info@tiekomedia.com</a> or made by telephone on <a href="tel:+2349038198689">+234 903 819 8689</a>.</p>
      </>
    ),
  },
  {
    title: "Information we collect",
    content: (
      <>
        <p>We collect information you choose to provide when you request a consultation, review, callback, service or paid offer. This may include your name, organisation, email address, phone or WhatsApp number, preferred date and time, service interest, business goals, website, budget range and other details you enter.</p>
        <p>For the Digital Intelligence Quotient assessment, we process your yes-or-no answers, score, category results and email address so we can display and email your scorecard. Your email is not placed on the downloadable or shared scorecard.</p>
        <p>For paid offers, we process order and transaction information such as your contact details, selected offer, project goal, transaction reference, amount, currency and payment status. We do not receive or store your full card details; payment information is entered into Flutterwave&apos;s payment environment.</p>
        <p>Our hosting, security and analytics systems may process technical information such as your IP address, device and browser information, referring page, pages viewed, interactions, approximate location and event timestamps.</p>
      </>
    ),
  },
  {
    title: "How and why we use information",
    content: (
      <>
        <p>We use personal information to respond to enquiries, prepare for calls, deliver DIQ results, provide purchased services, administer orders, verify payments, send operational messages, prevent abuse, maintain records and improve the website and customer journey.</p>
        <p>Depending on the context, our lawful basis may be your consent, steps taken at your request before a contract, performance of a contract, compliance with a legal obligation or our legitimate interests in operating, securing and improving the business. You may withdraw consent for future processing where consent is the basis, although this does not affect processing already carried out lawfully.</p>
        <p>We do not sell your personal information. We do not use DIQ answers to make a decision that produces legal or similarly significant effects about you.</p>
      </>
    ),
  },
  {
    title: "Service providers and disclosures",
    content: (
      <>
        <p>We use carefully selected service providers to operate the website and deliver requested services. These may include Supabase for database storage, Resend for email delivery, PostHog for product analytics, Cal.com for appointment scheduling, Flutterwave for payment processing and our website hosting and infrastructure providers.</p>
        <p>Each provider processes information for its relevant function and may apply its own privacy terms when you interact directly with its service. Information may also be disclosed to professional advisers, regulators, courts or law-enforcement bodies where disclosure is required by law or reasonably necessary to establish, exercise or defend legal rights.</p>
        <p>Some providers may process information outside Nigeria. Where an international transfer occurs, we take reasonable steps to use an appropriate legal basis and safeguards suitable to the information and destination.</p>
      </>
    ),
  },
  {
    title: "Cookies, analytics and security",
    content: (
      <>
        <p>The DIQ assessment uses a short-lived, secure session cookie to protect submissions against automated abuse. It expires after a limited period and is removed after a completed submission. Analytics services may use cookies or similar browser storage to understand website use and measure interactions.</p>
        <p>You can restrict cookies through your browser settings, although blocking essential storage may prevent parts of the website from working correctly.</p>
        <p>We use measures intended to protect information, including restricted server-side credentials, input limits, origin checks, payment verification and rate limiting. No internet transmission or storage method is completely secure, so absolute security cannot be guaranteed.</p>
      </>
    ),
  },
  {
    title: "Retention",
    content: (
      <>
        <p>We retain information only for as long as reasonably necessary for the purpose collected, including providing services, maintaining business and transaction records, resolving disputes, preventing abuse and meeting legal, accounting or regulatory requirements.</p>
        <p>Different records have different retention needs. When information is no longer required, we take reasonable steps to delete, anonymise or securely restrict it. Backup copies may remain for a limited period before being overwritten.</p>
      </>
    ),
  },
  {
    title: "Your rights",
    content: (
      <>
        <p>Subject to applicable law and relevant exemptions, you may ask to be informed about our processing, access your information, correct inaccurate information, request deletion or restriction, object to processing, request portability, withdraw consent or object to solely automated decision-making.</p>
        <p>We may ask for information needed to verify your identity before acting on a request. You may also raise a complaint with the <a href="https://www.ndpc.gov.ng/" target="_blank" rel="noreferrer">Nigeria Data Protection Commission</a> if you believe your data-protection rights have been infringed.</p>
      </>
    ),
  },
  {
    title: "Children, external links and changes",
    content: (
      <>
        <p>This website is intended for businesses and adults. We do not knowingly request personal information from children. If you believe a child has submitted information, contact us so we can review and remove it where appropriate.</p>
        <p>Our pages may link to third-party websites. Their privacy practices are controlled by them, and you should review their notices before submitting information.</p>
        <p>We may update this policy when our services, technology or legal obligations change. The current version and update date will remain available on this page.</p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      eyebrow="Your information and your rights"
      summary="This policy explains what Tieko Media Limited collects through this website, why we use it, who helps us process it and the choices available to you."
      path="/privacy-policy"
      updated="13 October 2026"
      sections={sections}
    />
  );
}
