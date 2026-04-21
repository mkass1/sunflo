import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { servicePages } from "@/data/service-pages";
import { contact } from "@/data/contact";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/layout/CTABanner";

const SITE_URL = "https://www.sunflodetailing.com";

const AREA_SERVED = [
  "Oakland Park",
  "Fort Lauderdale",
  "Wilton Manors",
  "Pompano Beach",
  "Lighthouse Point",
  "Lauderdale-by-the-Sea",
  "Deerfield Beach",
];

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}/services/${page.slug}`,
      images: [
        {
          url: page.ogImage ?? "/images/hero/porsche-911.jpg",
          width: 1920,
          height: 1080,
          alt: page.h1,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: "Automotive Detailing",
    description: page.metaDescription,
    provider: { "@id": `${SITE_URL}#business` },
    areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
    url: `${SITE_URL}/services/${page.slug}`,
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Custom quote — price varies by vehicle size and condition",
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: page.h1, item: `${SITE_URL}/services/${page.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
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

      {/* Content sections */}
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
                <p className="text-gray-400 text-sm leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark-muted border-t border-dark-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl font-bold text-white mb-10"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-dark-border pb-8 last:border-b-0 last:pb-0">
                  <h3
                    className="text-base font-semibold text-white mb-3"
                  >
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Inline CTA */}
      <section className="py-16 bg-dark border-t border-dark-border">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto bg-dark-card border border-dark-border rounded-sm p-8">
            <div>
              <p
                className="text-xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to book?
              </p>
              <p className="text-gray-400 text-sm">
                Call us or send a message — we&apos;ll confirm availability and answer any questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 bg-dark-muted border border-dark-border text-white font-semibold px-5 py-3 rounded-sm hover:border-brand-500/40 transition-colors text-sm"
              >
                <Phone size={14} />
                {contact.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-5 py-3 rounded-sm hover:bg-brand-700 transition-colors text-sm"
              >
                Request a Quote
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Related services */}
      {page.related.length > 0 && (
        <section className="py-16 bg-dark-muted border-t border-dark-border">
          <Container>
            <div className="max-w-3xl mx-auto">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-6">
                Related Services
              </p>
              <div className="flex flex-wrap gap-3">
                {page.related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 bg-dark-card border border-dark-border text-gray-300 text-sm font-medium px-4 py-2 rounded-sm hover:border-brand-500/40 hover:text-white transition-colors"
                  >
                    {rel.label}
                    <ArrowRight size={12} className="text-brand-400" />
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 bg-dark-card border border-dark-border text-gray-500 text-sm font-medium px-4 py-2 rounded-sm hover:border-dark-elevated hover:text-gray-300 transition-colors"
                >
                  All Services
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      <CTABanner />
    </>
  );
}
