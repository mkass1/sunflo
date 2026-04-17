import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

function InstagramIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CTABanner from "@/components/layout/CTABanner";
import { galleryImages } from "@/data/gallery";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sunflodetailing.com/" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://sunflodetailing.com/gallery" },
  ],
};

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Sunflo Detailing's work — paint corrections, ceramic coatings, interior details, and more. South Florida's premium auto detailing studio.",
};

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Page hero */}
      <section className="pt-40 pb-16 bg-dark-muted border-b border-dark-border">
        <Container>
          <SectionHeading
            label="Our Work"
            title="The Gallery"
            subtitle="Every vehicle tells a story. Browse our portfolio of transformations — from daily drivers to exotics."
          />
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-dark">
        <Container>
          <GalleryGrid images={galleryImages} />
        </Container>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-dark-muted border-t border-dark-border">
        <Container>
          <div className="text-center">
            <div className="text-brand-500 mx-auto mb-4 w-9 h-9"><InstagramIcon size={36} /></div>
            <h2
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Follow Us on Instagram
            </h2>
            <p className="text-gray-400 mb-6">
              See daily updates, before &amp; afters, and behind-the-scenes content.
            </p>
            <a
              href="https://instagram.com/sunflodetailing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-6 py-3 rounded-sm hover:bg-brand-700 transition-colors tracking-wide"
            >
              @sunflodetailing
              <ExternalLink size={16} />
            </a>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
