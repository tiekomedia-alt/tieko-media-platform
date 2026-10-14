import StructuredData from "@/components/seo/StructuredData";
import { absoluteUrl } from "@/lib/site";

type ServiceStructuredDataProps = {
  name: string;
  description: string;
  path: string;
  serviceType?: string | string[];
};

export default function ServiceStructuredData({
  name,
  description,
  path,
  serviceType,
}: ServiceStructuredDataProps) {
  const url = absoluteUrl(path);

  return (
    <StructuredData
      data={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name,
          description,
          url,
          serviceType: serviceType ?? name,
          areaServed: [
            { "@type": "Country", name: "Nigeria" },
            { "@type": "Place", name: "Africa" },
            { "@type": "Place", name: "International" },
          ],
          provider: {
            "@type": "Organization",
            "@id": `${absoluteUrl("/")}#organization`,
            name: "Tieko Media Limited",
            url: absoluteUrl("/"),
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
            { "@type": "ListItem", position: 3, name, item: url },
          ],
        },
      ]}
    />
  );
}
