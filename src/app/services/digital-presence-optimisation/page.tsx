import type { Metadata } from "next";
import FocusedServiceLanding from "@/components/services/FocusedServiceLanding";
import { focusedServices } from "@/lib/focused-services";

export const metadata: Metadata = {
  title: "Website & Conversion Optimisation",
  description: "Improve your website, landing pages, messaging, conversion paths, analytics and enquiry follow-up with a clearer digital customer journey.",
  alternates: { canonical: "/services/digital-presence-optimisation" },
  openGraph: {
    title: "Website & Conversion Optimisation | Tieko Media",
    description: "Improve your website, landing pages, messaging, conversion paths, analytics and enquiry follow-up.",
    url: "/services/digital-presence-optimisation",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/services/digital-optimisation.webp"],
  },
};

export default function DigitalPresenceOptimisationPage() {
  return <FocusedServiceLanding service={focusedServices["digital-presence-optimisation"]} />;
}
