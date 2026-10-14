import type { Metadata } from "next";
import ContentCreationLanding from "@/components/services/ContentCreationLanding";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Content Strategy & Creation Services",
  description:
    "Turn scattered content into a system that builds trust. Strategy, copy, design and video tied to your audience and goals.",
  alternates: {
    canonical: "/services/content-creation",
  },
  openGraph: {
    title: "Content Strategy & Creation Services | Tieko Media",
    description: "Turn scattered content into a system that builds trust. Strategy, copy, design and video tied to your audience and goals.",
    url: "/services/content-creation",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/services/content-creation.webp"],
  },
};

export default function ContentCreationPage() {
  return (
    <>
      <ServiceStructuredData
        name="Content Strategy and Creation"
        description="Content strategy, copy, design and video tied to a clear audience, customer journey and business objective."
        path="/services/content-creation"
        serviceType={["Content strategy", "Copywriting", "Graphic design", "Video content"]}
      />
      <ContentCreationLanding />
    </>
  );
}
