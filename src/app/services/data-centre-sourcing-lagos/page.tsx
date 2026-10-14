import type { Metadata } from "next";
import DataCentreSourcingLanding from "@/components/services/DataCentreSourcingLanding";

const faqs = [
  ["What is the difference between colocation and cloud hosting in Nigeria?", "Colocation places your equipment in a facility that provides space, power, cooling, security and connectivity. Cloud hosting rents computing resources managed by the provider. Many organisations use both."],
  ["How much does data centre colocation in Lagos cost?", "There is no single price. Space, committed power, cooling, connectivity, contract length, billing currency and support charges all affect the cost."],
  ["Do I have to host my data in Nigeria?", "It depends on your sector, data type and contracts. Confirm your specific obligations with qualified Nigerian counsel and the relevant regulator."],
  ["What does Tier III actually mean?", "Tier III is an Uptime Institute classification associated with concurrent maintainability. Confirm whether a facility holds formal certification or only claims to be designed to that standard."],
  ["How reliable is power for data centres in Nigeria?", "The key questions are design redundancy, UPS and generator arrangement, backup runtime, fuel logistics and the facility's documented outage history."],
];

export const metadata: Metadata = {
  title: "Data Centre Sourcing in Lagos, Nigeria | Tieko Media",
  description: "Independent advisory for finding and shortlisting data centres in Lagos and Nigeria. Requirements, vendor questions, location, power, compliance and budget, handled end to end.",
  alternates: { canonical: "/services/data-centre-sourcing-lagos" },
  openGraph: {
    title: "Data Centre Sourcing in Lagos and Nigeria | Tieko Media",
    description: "Independent advisory for a data-centre shortlist built around capacity, power, connectivity, compliance, location and budget.",
    url: "/services/data-centre-sourcing-lagos",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/services/data-centre-sourcing-lagos.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Centre Sourcing in Lagos and Nigeria | Tieko Media",
    description: "Independent advisory for a data-centre shortlist built around capacity, power, connectivity, compliance, location and budget.",
    images: ["/images/services/data-centre-sourcing-lagos.jpg"],
  },
};

export default function DataCentreSourcingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Data Centre Sourcing in Lagos and Nigeria",
        serviceType: "Data centre advisory and sourcing",
        provider: { "@type": "Organization", name: "Tieko Media" },
        areaServed: [{ "@type": "Country", name: "Nigeria" }, { "@type": "Place", name: "Worldwide" }],
        description: "Independent advisory for defining requirements, comparing and shortlisting data centres in Lagos and Nigeria, covering power, connectivity, compliance, location and budget.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <DataCentreSourcingLanding />
    </>
  );
}
