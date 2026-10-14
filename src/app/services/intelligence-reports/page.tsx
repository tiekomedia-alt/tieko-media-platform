import type { Metadata } from "next";
import FocusedServiceLanding from "@/components/services/FocusedServiceLanding";
import { focusedServices } from "@/lib/focused-services";

export const metadata: Metadata = {
  title: "Business Intelligence & Market Research",
  description: "Turn scattered information into a clear decision. Market, competitor and opportunity research delivered as a decision-ready brief.",
  alternates: { canonical: "/services/intelligence-reports" },
  openGraph: {
    title: "Business Intelligence & Market Research | Tieko Media",
    description: "Turn scattered information into a clear decision. Market, competitor and opportunity research delivered as a decision-ready brief.",
    url: "/services/intelligence-reports",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/services/business-intelligence.webp"],
  },
};

export default function IntelligenceReportsPage() {
  return <FocusedServiceLanding service={focusedServices["intelligence-reports"]} />;
}
