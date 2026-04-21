import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { cityPages } from "@/data/city-pages";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/layout/CTABanner";

const SITE_URL = "https://www.sunflodetailing.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/locations` },
  ],
};

export const metadata: Metadata = {
  title: "Auto Detailing Service Areas — South Florida",
  description:
    "Sunflo Detailing serves Fort Lauderdale, Wilton Manors, Pompano Beach, Deerfield Beach, Lighthouse Point, and all of South Florida. Studio in Oakland Park, FL.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Service Areas | Sunflo Detailing",
    description:
      "Professional auto detailing serving Fort Lauderdale, Pompano Beach, Wilton Manors, and surrounding South Florida cities from our Oakland Park, FL studio.",
    url: `${SITE_URL}/locations`,
    images: [{ url: "/images/hero/porsche-911.jpg", width: 1920, height: 1080, alt: "Sunflo Detailing — Oakland Park, FL" }],
  },
};

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="pt-40 pb-16 bg-dark-muted border-b border-dark-border">
        <Container>
          <SectionHeading
            as="h1"
            label="Service Areas"
            title="Serving South Florida"
            subtitle="Drop off at our Oakland Park studio or book a mobile appointment. We serve all of Broward County and beyond."
          />
        </Container>
      </section>

      <section className="py-20 bg-dark">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityPages.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-dark-card border border-dark-border rounded-sm p-6 hover:border-brand-500/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-sm bg-brand-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={14} className="text-brand-400" />
                  </div>
                  <div>
                    <h2
                      className="text-white font-bold text-lg leading-snug group-hover:text-brand-300 transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {city.city}
                    </h2>
                    <p className="text-gray-500 text-xs mt-0.5">{city.eyebrow}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{city.localHook}</p>
                <div className="flex items-center gap-1 mt-4 text-brand-400 text-sm font-medium">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-dark-card border border-dark-border rounded-sm p-8 max-w-2xl">
            <h2
              className="text-white font-bold text-xl mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Not seeing your city?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              We serve all of South Florida including Boca Raton, Miami, Lauderdale-by-the-Sea, and more.
              Drop off at our studio in Oakland Park or contact us to arrange a mobile appointment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-brand-700 transition-colors tracking-wide"
            >
              Book an Appointment <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
