import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import StructuredData from "@/components/seo/structured-data";
import Analytics from "@/components/seo/analytics";


export const metadata = {
  title: {
    default: "Steep Logic - Smart Tech. Sharp Results.",
    template: "%s | Steep Logic"
  },
  description: "We help businesses use AI and modern software to grow faster & smarter. From AI automation and analytics to robust web, mobile, and cloud platforms, we design and ship the tools that streamline operations, accelerate growth, and help your business win.",
  keywords: [
    "software development",
    "AI solutions",
    "custom apps",
    "business tools",
    "technology consulting",
    "web development",
    "mobile apps",
    "cloud solutions",
    "process automation",
    "product design",
    "UX design",
    "DevOps",
    "artificial intelligence",
    "machine learning",
    "startup development",
    "enterprise software",
    "software company India",
    "software development US",
    "global software services",
    "international tech solutions",
    "cross-border development",
    "offshore development India",
    "nearshore development US"
  ],
  authors: [{ name: "Steep Logic Team" }],
  creator: "Steep Logic",
  publisher: "Steep Logic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://steeplogic.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en-IN': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: "Steep Logic - Smart Tech. Sharp Results.",
    description: "We help businesses use AI and modern software to grow faster & smarter. From AI automation and analytics to robust web, mobile, and cloud platforms, we design and ship the tools that streamline operations, accelerate growth, and help your business win.",
    url: "https://steeplogic.com",
    siteName: "Steep Logic",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Steep Logic - Smart Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
    site_name: "Steep Logic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steep Logic - Smart Tech. Sharp Results.",
    description: "We help businesses use AI and modern software to grow faster & smarter. From AI automation and analytics to robust web, mobile, and cloud platforms, we design and ship the tools that streamline operations, accelerate growth, and help your business win.",
    images: ["/og-image.png"],
    creator: "@steeplogic",
    site: "@steeplogic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  category: "technology",
  classification: "Business Services",
  icons: {
    icon: [
      { url: "/steeplogic.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/steeplogic.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Steep Logic",
  },
  other: {
    "theme-color": "#ff0708",
    "msapplication-TileColor": "#ff0708",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ff0708" />
        <meta name="msapplication-TileColor" content="#ff0708" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Steep Logic" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileImage" content="/icon-192.png" />
        <meta name="msapplication-square70x70logo" content="/icon-192.png" />
        <meta name="msapplication-square150x150logo" content="/icon-512.png" />
        <meta name="msapplication-wide310x150logo" content="/icon-512.png" />
        <meta name="msapplication-square310x310logo" content="/icon-512.png" />

        {/* International SEO - hreflang tags */}
        <link rel="alternate" hrefLang="en-US" href="https://steeplogic.com/" />
        <link rel="alternate" hrefLang="en-IN" href="https://steeplogic.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://steeplogic.com/" />
        <meta name="geo.region" content="US-IN" />
        <meta name="geo.placename" content="United States; India" />
        <meta name="ICBM" content="40.7128, -74.0060, 28.6139, 77.2090" />
        <meta name="revisit-after" content="7 days" />
      </Head>
      <body
        className={`antialiased`}
      >
        <StructuredData type="website" />
        <Analytics />
        {children}
      </body>
    </html>
  );
}

