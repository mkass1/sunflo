import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";
import { services } from "@/data/services";

const SITE_URL = "https://sunflodetailing.com";

const coreServices = services.filter((s) => s.category === "core");
const specialtyServices = services.filter((s) => s.category === "specialty");

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
      areaServed: "South Florida",
      ...(s.pricing && {
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: s.pricing.small,
          highPrice: s.pricing.large,
        },
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
  title: "Services & Pricing",
  description:
    "Explore Sunflo Detailing's full range of services — from interior detailing to full paint correction and ceramic coatings. Serving Oakland Park and South Florida.",
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServicesContent coreServices={coreServices} specialtyServices={specialtyServices} />
    </>
  );
}
