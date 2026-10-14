import type { Metadata } from "next";
import WorkLanding from "@/components/work/WorkLanding";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore selected Tieko Media projects and brands we have supported across technology, compliance, hospitality, media, agriculture, childcare and nonprofit work.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work | Tieko Media",
    description: "Selected Tieko Media projects and brands supported across technology, compliance, hospitality, media, agriculture, childcare and nonprofit work.",
    url: "/work",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/work/teamshuffle-home.webp"],
  },
};

export default function WorkPage() {
  return <WorkLanding />;
}
