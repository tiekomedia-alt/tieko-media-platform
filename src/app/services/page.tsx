import type { Metadata } from "next";
import ServicesLanding from "@/components/services/ServicesLanding";
import StructuredData from "@/components/seo/StructuredData";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business research, content creation and digital presence optimisation for African businesses. Start with the problem, not the deliverable.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Tieko Media",
    description:
      "Business research, content creation and digital presence optimisation for African businesses. Start with the problem, not the deliverable.",
    url: "/services",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/services/digital-optimisation.webp"],
  },
};

export default function ServicesPage() {
  const services = [
    ["SEO, AEO and Search Ranking", "/services/seo-aeo-ranking"],
    ["Compliance and Institutional Support", "/services/compliance"],
    ["Content Strategy and Creation", "/services/content-creation"],
    ["Media Services and Campaign Planning", "/mediaservices"],
    ["Billboard and Outdoor Advertising", "/services/billboard-advertising"],
    ["Website and Conversion Optimisation", "/services/digital-presence-optimisation"],
    ["Data and Records Management", "/services/data-records-management"],
    ["Business Intelligence and Research", "/services/intelligence-reports"],
  ];

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Tieko Media services",
          url: absoluteUrl("/services"),
          itemListElement: services.map(([name, path], index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
            url: absoluteUrl(path),
          })),
        }}
      />
      <ServicesLanding />
    </>
  );
}
