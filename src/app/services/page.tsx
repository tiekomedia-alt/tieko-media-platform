import type { Metadata } from "next";
import ServicesLanding from "@/components/services/ServicesLanding";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Tieko Media services across visibility, content, business foundations, automation and intelligence, then begin with a focused onboarding session.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services Built Around How Businesses Actually Grow | Tieko Media",
    description:
      "Choose the right Tieko Media service or start with a free business visibility review and guided onboarding session.",
    url: "/services",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesLanding />;
}
