import type { Metadata } from "next";
import ContentCreationLanding from "@/components/services/ContentCreationLanding";

export const metadata: Metadata = {
  title: "Content Creation Services",
  description:
    "Build a credible, repeatable content system with strategy, copy, design, video and distribution planning from Tieko Media.",
  alternates: {
    canonical: "/services/content-creation",
  },
  openGraph: {
    title: "Content Creation Services | Tieko Media",
    description: "Strategy, copy, design, video and distribution planning for a more useful content system.",
    url: "/services/content-creation",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
  },
};

export default function ContentCreationPage() {
  return <ContentCreationLanding />;
}
