"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import CTABanner from "@/components/layout/CTABanner";
import type { ServiceItem } from "@/types";

interface ServicesContentProps {
  coreServices: ServiceItem[];
  specialtyServices: ServiceItem[];
}

export default function ServicesContent({ coreServices, specialtyServices }: ServicesContentProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-dark-muted border-b border-dark-border overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[280px] bg-brand-700/14 rounded-full blur-[140px] pointer-events-none" />
        <Container>
          <div className="w-24 h-px bg-brand-500/40 mx-auto mb-10" />
          <SectionHeading
            label="Services & Pricing"
            title="Detailing Packages"
            subtitle="Transparent pricing, no hidden fees. Every package is tailored to your vehicle size — Small, Medium, or Large — so you only pay for what you need."
            centered
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[11px] uppercase tracking-[0.14em] text-gray-500">
            {["7 Packages", "Oakland Park, FL", "Custom Quotes Available"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand-500 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Packages */}
      <section className="py-20 sm:py-28 bg-dark">
        <Container>
          <div className="w-24 h-px bg-brand-500/40 mx-auto mb-12" />
          <SectionHeading
            label="Core Packages"
            title="Paint & Interior"
            subtitle="Fixed pricing based on vehicle size. Every service includes detailed exterior and interior care at its tier."
            centered
          />
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {coreServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specialty Packages */}
      <section className="relative py-20 sm:py-28 bg-dark-muted overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[420px] h-[420px] bg-brand-700/10 rounded-full blur-[140px] pointer-events-none" />
        <Container>
          <div className="w-24 h-px bg-brand-500/40 mx-auto mb-12" />
          <SectionHeading
            label="Specialty Packages"
            title="Built For Specific Needs"
            subtitle="Bundle services scoped to your situation. Pricing is quoted per job — contact us and we'll put together the right package."
            centered
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 p-6 bg-dark-card border border-dark-border rounded-sm text-center"
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              Also available à la carte:{" "}
              <span className="text-white font-medium">paint protection film (PPF)</span>,{" "}
              <span className="text-white font-medium">window tinting</span>, and{" "}
              <span className="text-white font-medium">vinyl wraps</span>.{" "}
              <a href="/contact" className="text-brand-400 hover:text-brand-300 transition-colors font-medium">
                Contact us for a quote.
              </a>
            </p>
          </motion.div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
