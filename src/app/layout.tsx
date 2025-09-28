import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legit IELTS Certificates | Get Your IELTS Band Score Certificate",
  description: "Professional IELTS certificate services with authentic documentation. Get your desired IELTS band score certificate quickly and securely. Available for Academic and General Training modules.",
  keywords: ["IELTS certificate", "IELTS band score", "IELTS documentation", "English proficiency certificate", "IELTS Academic", "IELTS General Training", "language certificate"],
  authors: [{ name: "IELTS Certificate Services" }],
  creator: "IELTS Certificate Services",
  publisher: "IELTS Certificate Services",
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Legit IELTS Certificates | Get Your IELTS Band Score Certificate",
    description: "Professional IELTS certificate services with authentic documentation. Get your desired IELTS band score certificate quickly and securely.",
    url: "https://your-domain.com",
    siteName: "IELTS Certificate Services",
    images: [
      {
        url: "https://ext.same-assets.com/2498427149/1558874626.webp",
        width: 1200,
        height: 630,
        alt: "IELTS Certificate Services - Professional English Language Testing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legit IELTS Certificates | Get Your IELTS Band Score Certificate",
    description: "Professional IELTS certificate services with authentic documentation. Get your desired IELTS band score certificate quickly and securely.",
    images: ["https://ext.same-assets.com/2498427149/1558874626.webp"],
    creator: "@ieltsservices",
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
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "IELTS Certificate Services",
    "description": "Professional IELTS certificate services with authentic documentation for English language proficiency testing.",
    "url": "https://your-domain.com",
    "logo": "https://ext.same-assets.com/2498427149/1558874626.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1234567890",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "areaServed": "Worldwide",
    "serviceType": "Educational Certification Services",
    "offers": [
      {
        "@type": "Service",
        "name": "IELTS Academic Certificate",
        "description": "Official IELTS Academic certificate with desired band score"
      },
      {
        "@type": "Service",
        "name": "IELTS General Training Certificate",
        "description": "Official IELTS General Training certificate with desired band score"
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#20385c" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://api.fontshare.com/v2/css?f[]=supreme@400&f[]=chubbo@700&display=swap" rel="stylesheet" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
