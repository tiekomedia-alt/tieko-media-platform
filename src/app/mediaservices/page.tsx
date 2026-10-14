import type { Metadata } from "next";
import MediaServicesFunnel from "@/components/funnels/MediaServicesFunnel";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Media Services and Campaign Planning",
  description:
    "Use Tieko Media's free campaign clarity guide and request a free 15-minute introductory phone or WhatsApp audio call.",
  alternates: {
    canonical: "/mediaservices",
  },
  openGraph: {
    title: "Media Services and Campaign Planning | Tieko Media",
      description: "Connect campaigns, customer journeys and response systems around a clearer path to enquiry.",
    url: "/mediaservices",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/services/media-services.webp"],
  },
};

export default function MediaServicesPage() {
  return (
    <>
      <ServiceStructuredData
        name="Media Services and Campaign Planning"
        description="Campaign planning, media buying, landing pages, content and response systems connected around a defined customer journey."
        path="/mediaservices"
        serviceType={["Media planning", "Media buying", "Campaign strategy", "Landing pages"]}
      />
      <MediaServicesFunnel />
    </>
  );
}
