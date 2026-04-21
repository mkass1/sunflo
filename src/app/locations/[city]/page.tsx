import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { cityPages } from "@/data/city-pages";
import { contact } from "@/data/contact";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/layout/CTABanner";

const SITE_URL = "https://www.sunflodetailing.com";

const MAPS_URL =
  "https://maps.google.com/?q=4708+NE+11th+Ave,+Oakland+Park,+FL+33334";

const serviceCards = [
  {
    title: "Ceramic Coating",
    description: "Long-term paint protection bonded to your clear coat.",
    href: "/services/ceramic-coating",
  },
  {
    title: "Paint Correction",
    description: "Remove swirls, scratches, and oxidation before they spread.",
    href: "/services/paint-correction",
  },
  {
    title: "Paint Protection Film",
    description: "Physical impact barrier — XPEL PPF installed in-house.",
    href: "/services/paint-protection-film",
  },
  {
    title: "Window Tinting",
    description: "UV and heat rejection with 3M professional film.",
    href: "/services/window-tinting",
  },
];

export function generateStaticParams() {
  return cityPages.map((p) => ({ city: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const page = cityPages.find((p) => p.slug === city);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/locations/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}/locations/${page.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const page = cityPages.find((p) => p.slug === city);
  if (!page) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Auto Detailing in ${page.city}, FL`,
    serviceType: "Automotive Detailing",
    description: page.metaDescription,
    provider: { "@id": `${SITE_URL}#business` },
    areaServed: { "@type": "City", name: page.city },
    url: `${SITE_URL}/locations/${page.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${SITE_URL}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${page.city} Auto Detailing`,
        item: `${SITE_URL}/locations/${page.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-16 bg-dark-muted border-b border-dark-border">
        <Container>
          <SectionHeading
            as="h1"
            label={page.eyebrow}
            title={page.h1}
            subtitle={page.intro}
          />
        </Container>
      </section>

      {/* ── Section 2: Content ───────────────────────────────────────────── */}
      <section className="py-20 bg-dark">
        <Container>
          <div className="max-w-3xl mx-auto space-y-14">
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2
                  className="text-2xl font-bold text-white mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {section.heading}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 3: Services Grid ─────────────────────────────────────── */}
      <section className="py-20 bg-dark-muted border-t border-dark-border">
        <Container>
          <div className="mb-12">
            <SectionHeading
              label="What We Offer"
              title={`Services We Offer in ${page.city}`}
              subtitle={`All services performed in-house at our Oakland Park studio — ${page.driveTime} from ${page.city}.`}
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="p-6 border border-dark-border rounded-sm bg-dark-muted/40 flex flex-col"
              >
                <p
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.title}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1 text-brand-400 text-sm font-medium mt-4 hover:text-brand-300 transition-colors"
                >
                  Learn more
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 4: Drive Time + Contact ─────────────────────────────── */}
      <section className="py-16 bg-dark border-t border-dark-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Drive time callout */}
            <div className="flex items-center gap-3 mb-8">
              <MapPin size={16} className="text-brand-400 shrink-0" />
              <p
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                About {page.driveTime} from Oakland Park
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {/* Contact info */}
              <div className="p-6 border border-dark-border rounded-sm bg-dark-muted/40">
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-4">
                  Studio Contact
                </p>
                <div className="space-y-3">
                  <a
                    href={contact.phoneHref}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Phone size={13} className="text-brand-400 shrink-0" />
                    {contact.phone}
                  </a>
                  <p className="flex items-start gap-2 text-gray-400 text-sm">
                    <MapPin
                      size={13}
                      className="text-brand-400 shrink-0 mt-0.5"
                    />
                    {contact.address}
                  </p>
                  <a
                    href={contact.emailHref}
                    className="text-brand-400 hover:text-brand-300 transition-colors text-sm"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Map CTA */}
              <div className="p-6 border border-dark-border rounded-sm bg-dark-muted/40 flex flex-col justify-between">
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Drop off at our Oakland Park studio, or book a mobile appointment
                  and we come to you anywhere in South Florida. Call to discuss
                  which option works best for your service.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-dark-muted border border-dark-border text-white font-semibold px-5 py-3 rounded-sm hover:border-brand-500/40 transition-colors text-sm self-start"
                >
                  <MapPin size={13} className="text-brand-400" />
                  Get directions
                </a>
              </div>
            </div>

            {/* Local hook */}
            <div className="p-5 border border-brand-500/20 rounded-sm bg-brand-500/5">
              <p className="text-gray-300 text-sm leading-relaxed italic">
                &ldquo;{page.localHook}&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────────── */}
      <CTABanner
        title={`Ready to Protect Your ${page.city} Vehicle?`}
        subtitle={`Drop off at our Oakland Park studio — ${page.driveTime} from ${page.city}. We will evaluate your paint and recommend the right protection for your vehicle and budget.`}
        buttonText="Book Your Service"
        buttonHref="/contact"
      />
    </>
  );
}
