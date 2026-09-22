import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
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
    default: "Tieko Media | Business Services, Media and Digital Systems",
    template: "%s | Tieko Media",
  },
  description:
    "Tieko Media helps African businesses build stronger foundations, improve visibility, create useful content, manage information and make better decisions. Book a call.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Build a Business People Can Find, Trust and Choose | Tieko Media",
    description:
      "From media and content to compliance coordination, business intelligence, digital optimisation and records management, Tieko Media builds the systems behind credible growth.",
    url: "/",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
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
      <body className="min-h-full flex flex-col bg-warm-ivory text-ink-black selection:bg-tieko-red selection:text-white">
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
      </body>
    </html>
  );
}
