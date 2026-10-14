import type { Metadata } from "next";
import FocusedServiceLanding from "@/components/services/FocusedServiceLanding";
import { focusedServices } from "@/lib/focused-services";

export const metadata: Metadata = {
  title: "Data and Records Management Services",
  description: "Organise, digitise, classify and retrieve authorised business records through practical records-management systems from Tieko Media.",
  alternates: { canonical: "/services/data-records-management" },
  openGraph: {
    title: "Data and Records Management Services | Tieko Media",
    description: "Practical systems for records inventory, classification, digitisation, retrieval and governance support.",
    url: "/services/data-records-management",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/services/records-management.webp"],
  },
};

export default function DataRecordsManagementPage() {
  return <FocusedServiceLanding service={focusedServices["data-records-management"]} />;
}
