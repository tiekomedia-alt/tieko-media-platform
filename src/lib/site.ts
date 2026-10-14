export const SITE_URL = "https://www.tiekomedia.com";

export const INDEXABLE_ROUTES = [
  "/",
  "/about",
  "/privacy-policy",
  "/terms-of-service",
  "/services",
  "/services/compliance",
  "/services/content-creation",
  "/services/billboard-advertising",
  "/services/seo-aeo-ranking",
  "/services/digital-presence-optimisation",
  "/services/data-records-management",
  "/services/intelligence-reports",
  "/work",
  "/store",
  "/insights",
  "/digital-intelligence-quotient",
  "/book-a-call",
  "/mediaservices",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
