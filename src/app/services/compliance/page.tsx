import type { Metadata } from "next";
import ComplianceInstitutionalLanding from "@/components/services/ComplianceInstitutionalLanding";

export const metadata: Metadata = {
  title: "Compliance and Institutional Support in Nigeria",
  description:
    "Business administration and application coordination for Nigerian company filings, export registration, trademarks, NDPC, tax and CSCS pathways.",
  alternates: { canonical: "/services/compliance" },
  openGraph: {
    title: "Compliance and Institutional Support in Nigeria | Tieko Media",
    description:
      "Clearer document preparation, application coordination and professional referrals for important Nigerian business processes.",
    url: "/services/compliance",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
  },
};

export default function CompliancePage() {
  return <ComplianceInstitutionalLanding />;
}
