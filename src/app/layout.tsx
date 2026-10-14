import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import SiteFooter from "@/components/navigation/SiteFooter";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F4F0E7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Tieko Media | Business Services, Media & Digital Systems",
    template: "%s | Tieko Media",
  },
  description:
    "Tieko Media helps African businesses turn attention into trust and enquiries through research, content, business support and digital systems.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Tieko Media | Business Services, Media & Digital Systems",
    description:
      "Research, content, business support and digital systems that help African businesses get found, build trust and grow with stronger foundations.",
    url: "/",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tieko Media business services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tieko Media | Business Services, Media & Digital Systems",
    description: "Research, content, business support and digital systems that help African businesses get found, build trust and grow.",
    images: ["/opengraph-image"],
  },
  verification:
    process.env.GOOGLE_SITE_VERIFICATION || process.env.BING_SITE_VERIFICATION
      ? {
          ...(process.env.GOOGLE_SITE_VERIFICATION
            ? { google: process.env.GOOGLE_SITE_VERIFICATION }
            : {}),
          ...(process.env.BING_SITE_VERIFICATION
            ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
            : {}),
        }
      : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organisationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "Tieko Media",
    legalName: "Tieko Media Limited",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/tieko-logo.png`,
    image: `${SITE_URL}/opengraph-image`,
    telephone: "+2349038198689",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13b Samuel Awoniyi, off Salvation Road, Opebi",
      addressLocality: "Ikeja",
      addressRegion: "Lagos",
      postalCode: "100212",
      addressCountry: "NG",
    },
    description:
      "Tieko Media provides business-foundation, media, content and digital-system services for organisations in Nigeria and international markets.",
  };

  return (
    <html
      lang="en-GB"
      className={`${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="premium-motion min-h-full flex flex-col bg-warm-ivory text-ink-black selection:bg-tieko-red selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
