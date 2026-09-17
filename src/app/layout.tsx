import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
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
  title: "Tieko Media | Digital Intelligence and Infrastructure",
  description:
    "Tieko Media helps African businesses build stronger foundations, improve visibility, create useful content, manage information and make better decisions. Book a call.",
  metadataBase: new URL("https://tiekomedia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Build a Business People Can Find, Trust and Choose | Tieko Media",
    description:
      "From media and content to compliance coordination, business intelligence, digital optimisation and records management, Tieko builds the systems behind credible growth.",
    url: "/",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: "/brand/tieko-logo-trimmed.png",
    apple: "/brand/tieko-logo-trimmed.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-ivory text-ink-black selection:bg-tieko-red selection:text-white">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
