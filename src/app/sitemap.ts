import type { MetadataRoute } from "next";
import { INDEXABLE_ROUTES, absoluteUrl } from "@/lib/site";
import { insights } from "@/lib/insights";
import { storeProducts } from "@/lib/store-products";

const lastModified = new Date("2026-10-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes: MetadataRoute.Sitemap = INDEXABLE_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/services" || route === "/insights" || route === "/digital-intelligence-quotient" ? 0.9 : 0.8,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: absoluteUrl(`/insights/${insight.slug}`),
    lastModified: new Date(insight.updatedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const storeRoutes: MetadataRoute.Sitemap = storeProducts.map((product) => ({
    url: absoluteUrl(`/store/${product.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...coreRoutes, ...storeRoutes, ...insightRoutes];
}
