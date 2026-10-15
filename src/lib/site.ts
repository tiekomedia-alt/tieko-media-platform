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
  "/contact",
  "/mediaservices",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = (forwardedHost ?? request.headers.get("host"))?.toLowerCase();
  if (!origin || !host) return false;

  try {
    return new URL(origin).host.toLowerCase() === host;
  } catch {
    return false;
  }
}
