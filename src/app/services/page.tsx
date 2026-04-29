import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";
import { services } from "@/data/services";

const SITE_URL = "https://www.sunflodetailing.com";

const autoDetailServices = services.filter((s) => s.tier === "auto-detail" && s.id !== "auto-detail-packages");
const interiorServices = services.filter((s) => s.tier === "interior");
const correctionServices = services.filter((s) => s.tier === "correction");
const specialtyServices = services.filter((s) => s.category === "specialty");
const alaCarteServices = services.filter((s) => s.category === "alacarte");

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.description,
      provider: { "@id": `${SITE_URL}#business` },
      areaServed: { "@type": "City", name: "Oakland Park", containedInPlace: { "@type": "State", name: "Florida" } },
      ...(s.pricing && {
        offers: [
          { "@type": "Offer", name: "Small Vehicle", price: String(s.pricing.small), priceCurrency: "USD" },
          { "@type": "Offer", name: "Medium Vehicle", price: String(s.pricing.medium), priceCurrency: "USD" },
          { "@type": "Offer", name: "Large Vehicle", price: String(s.pricing.large), priceCurrency: "USD" },
        ],
      }),
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
};

export const metadata: Metadata = {
  title: "Auto Detailing Services & Pricing in Oakland Park, FL",
  description:
    "Professional auto detailing, ceramic coatings, paint correction, PPF, and window tinting in Oakland Park, FL. Serving South Florida since 2017. Packages from $120 — see full pricing.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Auto Detailing Services & Pricing | Sunflo Detailing",
    description:
      "Interior detailing, paint correction, ceramic coatings, PPF, window tinting, and wraps. Serving Oakland Park and South Florida since 2017.",
    url: `${SITE_URL}/services`,
    images: [{ url: "/images/hero/porsche-911.jpg", width: 1920, height: 1080, alt: "Sunflo Detailing Services" }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServicesContent
        autoDetailServices={autoDetailServices}
        interiorServices={interiorServices}
        correctionServices={correctionServices}
        specialtyServices={specialtyServices}
        alaCarteServices={alaCarteServices}
      />
    </>
  );
}
