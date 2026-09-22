import type { Metadata } from "next";
import MediaServicesFunnel from "@/components/funnels/MediaServicesFunnel";

export const metadata: Metadata = {
  title: "Media Services and Campaign Planning",
  description:
    "Use Tieko Media's free campaign clarity guide and request a free 15-minute introductory phone or WhatsApp audio call.",
  alternates: {
    canonical: "/mediaservices",
  },
  openGraph: {
    title: "Media Services and Campaign Planning | Tieko Media",
    description: "Connect advertising, landing pages and follow-up around a clearer customer pathway.",
    url: "/mediaservices",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
  },
};

export default function MediaServicesPage() {
  return <MediaServicesFunnel />;
}
