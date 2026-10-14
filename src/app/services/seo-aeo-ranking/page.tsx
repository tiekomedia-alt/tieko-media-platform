import type { Metadata } from "next";
import SeoAeoLanding from "@/components/services/SeoAeoLanding";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";

export const metadata: Metadata = {
  title: "SEO, AEO & Search Ranking Services in Nigeria | Tieko Media",
  description:
    "Build durable search visibility with technical SEO, answer engine optimisation, demand-led content, ethical backlinks, directory placement and conversion measurement.",
  alternates: { canonical: "/services/seo-aeo-ranking" },
  openGraph: {
    title: "SEO, AEO & Search Authority | Tieko Media",
    description:
      "Find the visibility leaks, repair the search foundation and build useful answers that turn discovery into qualified demand.",
    url: "/services/seo-aeo-ranking",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/insights/seo-aeo-visibility.webp"],
  },
};

export default function SeoAeoRankingPage() {
  return (
    <>
      <ServiceStructuredData
        name="SEO, AEO and Search Ranking Services"
        description="Technical SEO, answer engine optimisation, demand-led content, ethical backlinks, directory placement and conversion measurement."
        path="/services/seo-aeo-ranking"
        serviceType={[
          "Search engine optimisation",
          "Answer engine optimisation",
          "Technical SEO",
          "SEO content strategy",
          "Digital authority building",
        ]}
      />
      <SeoAeoLanding />
    </>
  );
}
