import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://whitespc.studio";
const title = "WhiteSpc | Minimal Digital Marketing Portfolio";
const description =
  "WhiteSpc is a minimal digital marketing studio portfolio for brand strategy, campaign systems, performance marketing, content, and conversion design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | WhiteSpc"
  },
  description,
  applicationName: "WhiteSpc",
  keywords: [
    "digital marketing portfolio",
    "digital marketing agency",
    "performance marketing",
    "brand strategy",
    "content marketing",
    "growth marketing",
    "conversion design"
  ],
  authors: [{ name: "WhiteSpc" }],
  creator: "WhiteSpc",
  publisher: "WhiteSpc",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "WhiteSpc",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WhiteSpc digital marketing portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f7f2"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
