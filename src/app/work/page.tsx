import type { Metadata } from "next";
import WorkLanding from "@/components/work/WorkLanding";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Explore selected Tieko Media work across digital products, websites, compliance, licensing and brand foundations.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Selected Work | Tieko Media",
    description: "Selected Tieko Media product, website and business-foundation work, including TeamShuffle and supporting client projects.",
    url: "/work",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
  },
};

export default function WorkPage() {
  return <WorkLanding />;
}
