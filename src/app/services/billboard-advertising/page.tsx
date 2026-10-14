import type { Metadata } from "next";
import FocusedServiceLanding from "@/components/services/FocusedServiceLanding";
import { focusedServices } from "@/lib/focused-services";

export const metadata: Metadata = {
  title: "Billboard and Outdoor Advertising in Lagos",
  description: "Plan billboard and outdoor advertising with location assessment, format coordination, creative readiness and placement support from Tieko Media.",
  alternates: { canonical: "/services/billboard-advertising" },
  openGraph: {
    title: "Billboard and Outdoor Advertising in Lagos | Tieko Media",
    description: "Outdoor campaign planning and placement coordination built around audience, location, format and clear campaign objectives.",
    url: "/services/billboard-advertising",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/services/billboard-lagos.webp"],
  },
};

export default function BillboardAdvertisingPage() {
  return <FocusedServiceLanding service={focusedServices["billboard-advertising"]} />;
}
