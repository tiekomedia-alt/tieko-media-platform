import "server-only";

export type SalesOffer = {
  slug: string;
  name: string;
  shortDescription: string;
  amountSubunit: number | null;
  currency: "NGN" | "USD";
  includes: string[];
};

function readPositiveInteger(value: string | undefined) {
  if (!value || !/^\d+$/.test(value)) return null;

  const amount = Number(value);
  return Number.isSafeInteger(amount) && amount > 0 ? amount : null;
}

const offers: Record<string, SalesOffer> = {
  "content-system-session": {
    slug: "content-system-session",
    name: "Content System Strategy Session",
    shortDescription:
      "A focused working session that turns your content goal into a practical message, channel and production plan.",
    amountSubunit: (() => {
      const priceNgn = readPositiveInteger(process.env.CONTENT_SESSION_PRICE_NGN);
      return priceNgn ? priceNgn * 100 : null;
    })(),
    currency: "NGN",
    includes: [
      "Pre-session business and content questionnaire",
      "60-minute strategy and onboarding session",
      "Priority content themes and channel direction",
      "A written 30-day action plan",
    ],
  },
};

export function getSalesOffer(slug: string) {
  return offers[slug] ?? null;
}

export function formatOfferPrice(offer: SalesOffer) {
  if (!offer.amountSubunit) return null;

  return new Intl.NumberFormat(offer.currency === "USD" ? "en-US" : "en-NG", {
    style: "currency",
    currency: offer.currency,
    maximumFractionDigits: 0,
  }).format(offer.amountSubunit / 100);
}
