import "server-only";

export type SalesOffer = {
  slug: string;
  name: string;
  shortDescription: string;
  amountSubunit: number | null;
  currency: "NGN" | "USD";
  includes: string[];
  requiresProjectDetails: boolean;
  fulfillment: "manual" | "ui-ux-drive-access";
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
    requiresProjectDetails: true,
    fulfillment: "manual",
    includes: [
      "Pre-session business and content questionnaire",
      "60-minute strategy and onboarding session",
      "Priority content themes and channel direction",
      "A written 30-day action plan",
    ],
  },
  "ui-ux-foundations-six-week-project": {
    slug: "ui-ux-foundations-six-week-project",
    name: "Six-Week UI/UX Project Tutorial",
    shortDescription:
      "Private access to a structured six-week, project-led UI/UX learning folder designed to build fundamentals before AI-assisted execution.",
    amountSubunit: (readPositiveInteger(process.env.UIUX_TUTORIAL_PRICE_NGN) ?? 30000) * 100,
    currency: "NGN",
    requiresProjectDetails: false,
    fulfillment: "ui-ux-drive-access",
    includes: [
      "A structured six-week project pathway",
      "Foundation-first UI and UX learning material",
      "A reusable reference folder for continued practice",
      "Private access delivered by email after verified payment",
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
