import type { Metadata } from "next";
import { faqs, faqCategories } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/layout/CTABanner";
import TestimonialCard from "@/components/faq/TestimonialCard";
import FAQExperience from "@/components/faq/FAQExperience";

const SITE_URL = "https://www.sunflodetailing.com";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
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
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
  ],
};

export const metadata: Metadata = {
  title: "Auto Detailing FAQ — Ceramic Coatings, PPF & Pricing in Oakland Park, FL",
  description:
    "Answers to the most common questions about auto detailing, ceramic coatings, PPF, paint correction, and pricing at Sunflo Detailing in Oakland Park, FL.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Auto Detailing FAQ | Sunflo Detailing",
    description:
      "Everything you need to know about ceramic coatings, PPF, paint correction, and pricing — answered by Sunflo Detailing in Oakland Park, FL.",
    url: `${SITE_URL}/faq`,
    images: [{ url: "/images/hero/porsche-911.jpg", width: 1920, height: 1080, alt: "Sunflo Detailing FAQ — Oakland Park, FL" }],
  },
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-dark-muted border-b border-dark-border">
        <Container>
          <SectionHeading
            as="h1"
            label="FAQ & Reviews"
            title="Auto Detailing FAQ: Oakland Park, FL"
            subtitle="Everything you need to know about ceramic coatings, PPF, paint correction, and pricing at Sunflo Detailing."
          />
        </Container>
      </section>

      <FAQExperience faqs={faqs} categories={faqCategories} />

      {/* Testimonials */}
      <section className="py-20 bg-dark-muted border-t border-dark-border">
        <Container>
          <div className="text-center mb-14">
            <SectionHeading label="Client Reviews" title="What Our Clients Say" centered />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
