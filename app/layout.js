import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Steep Logic - Smart Tech. Sharp Results.",
  description: "We build tools and apps that help your business grow. From AI solutions to custom software development, we turn your ideas into working products that deliver value.",
  keywords: ["software development", "AI solutions", "custom apps", "business tools", "technology consulting", "web development"],
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
  },
  openGraph: {
    title: "Steep Logic - Smart Tech. Sharp Results.",
    description: "We build tools and apps that help your business grow. From AI solutions to custom software development, we turn your ideas into working products that deliver value.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Steep Logic - Smart Tech. Sharp Results.",
    description: "We build tools and apps that help your business grow. From AI solutions to custom software development, we turn your ideas into working products that deliver value.",
    images: ["/og-image.png"],
    creator: "@steeplogic",
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
    },
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
