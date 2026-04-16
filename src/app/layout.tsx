import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { contact } from "@/data/contact";
import { testimonials } from "@/data/testimonials";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://sunflodetailing.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sunflo Detailing | Premium Auto Detailing in Oakland Park, FL",
    template: "%s | Sunflo Detailing",
  },
  description:
    "Professional auto detailing, ceramic coatings, paint correction, wraps, tints, and PPF in Oakland Park, Florida. Serving South Florida since 2017.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Sunflo Detailing",
    title: "Sunflo Detailing | Premium Auto Detailing in Oakland Park, FL",
    description:
      "Professional auto detailing, ceramic coatings, paint correction, and more in Oakland Park, Florida. Est. 2017.",
    images: [
      {
        url: "/images/hero/porsche-911.jpg",
        width: 1920,
        height: 1080,
        alt: "Sunflo Detailing — Oakland Park, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunflo Detailing | Premium Auto Detailing",
    description: "Professional auto detailing in Oakland Park, FL. Est. 2017.",
    images: ["/images/hero/porsche-911.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#020208",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE_URL}#business`,
  name: "Sunflo Detailing",
  alternateName: "Sunflo Car Detailing",
  description:
    "Premium auto detailing, ceramic coatings, paint correction, paint protection film, vehicle wraps, and window tinting in Oakland Park, South Florida.",
  url: SITE_URL,
  telephone: contact.phoneHref.replace("tel:", ""),
  email: contact.email,
  image: `${SITE_URL}/images/hero/porsche-911.jpg`,
  logo: `${SITE_URL}/images/hero/porsche-911.jpg`,
  priceRange: "$$-$$$",
  foundingDate: "2017",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4708 NE 11th Ave",
    addressLocality: "Oakland Park",
    addressRegion: "FL",
    postalCode: "33334",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Oakland Park" },
    { "@type": "City", name: "Fort Lauderdale" },
    { "@type": "City", name: "Wilton Manors" },
    { "@type": "City", name: "Pompano Beach" },
    { "@type": "AdministrativeArea", name: "South Florida" },
  ],
  sameAs: [contact.instagram],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(testimonials.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: t.text,
    ...(t.date && { datePublished: t.date }),
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark text-gray-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
