"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AccordionItem from "@/components/faq/AccordionItem";
import TestimonialCard from "@/components/faq/TestimonialCard";
import CTABanner from "@/components/layout/CTABanner";
import { faqs } from "@/data/faq";
import { testimonials } from "@/data/testimonials";

const SITE_URL = "https://sunflodetailing.com";

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

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Page hero */}
      <section className="pt-40 pb-16 bg-dark-muted border-b border-dark-border">
        <Container>
          <SectionHeading
            label="FAQ & Reviews"
            title="Questions & Testimonials"
            subtitle="Everything you need to know about our services — plus what our clients have to say."
          />
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark">
        <Container>
          <div className="max-w-3xl">
            <h2
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <AccordionItem
                    faq={faq}
                    isOpen={openId === faq.id}
                    onToggle={() =>
                      setOpenId(openId === faq.id ? null : faq.id)
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-muted">
        <Container>
          <div className="text-center mb-14">
            <SectionHeading
              label="Client Reviews"
              title="What Our Clients Say"
              centered
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
