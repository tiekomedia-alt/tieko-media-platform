export const SITE_URL = "https://tiekomedia.com";

export const INDEXABLE_ROUTES = [
  "/",
  "/services",
  "/services/compliance",
  "/services/content-creation",
  "/work",
  "/book-a-call",
  "/mediaservices",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
