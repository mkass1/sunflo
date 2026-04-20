"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/layout/CTABanner";
import ServicesHero from "./ServicesHero";
import PackageShowcaseRow from "./PackageShowcaseRow";
import CompactPackageCard from "./CompactPackageCard";
import SpecialtyServiceCard from "./SpecialtyServiceCard";
import { PRICING_DISCLAIMER } from "@/data/services";
import type { ServiceItem } from "@/types";

interface ServicesContentProps {
  autoDetailServices: ServiceItem[];
  interiorServices: ServiceItem[];
  correctionServices: ServiceItem[];
  specialtyServices: ServiceItem[];
  alaCarteServices: ServiceItem[];
}

function PricingNote() {
  return (
    <div className="relative mx-auto mt-14 max-w-2xl flex items-center justify-center gap-4 text-[10.5px] text-gray-500 uppercase tracking-[0.22em] font-medium">
      <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent to-dark-border" />
      <span className="text-center">{PRICING_DISCLAIMER}</span>
      <span className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent to-dark-border" />
    </div>
  );
}

export default function ServicesContent({
  autoDetailServices,
  interiorServices,
  correctionServices,
  specialtyServices,
  alaCarteServices,
}: ServicesContentProps) {
  return (
    <>
      <ServicesHero />

      {/* ============ Auto Detailing Packages ============ */}
      <section className="relative py-20 sm:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-brand-500/40" />
          <div className="absolute top-1/3 left-0 w-[420px] h-[420px] bg-brand-700/[0.06] blur-[140px]" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-16"
          >
            <SectionHeading
              label="Auto Detailing Packages"
              title="Three Levels Of Care"
              subtitle="Our everyday detailing service — full inside and out, finished with paint protection. Step up the level for longer-lasting protection."
              centered
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {autoDetailServices.map((service, i) => (
              <CompactPackageCard
                key={service.id}
                service={service}
                index={i}
                tierLabel="Auto Detail"
              />
            ))}
          </div>
          <PricingNote />
        </Container>
      </section>

      {/* ============ Interior Detailing ============ */}
      <section className="relative py-20 sm:py-28 bg-dark-muted overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-brand-500/40" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-brand-700/[0.05] blur-[140px]" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-16"
          >
            <SectionHeading
              label="Interior Detailing"
              title="Cabin-First Packages"
              subtitle="Pure interior services — for cars that need a quick reset or a full cabin restoration."
              centered
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-7 max-w-4xl mx-auto">
            {interiorServices.map((service, i) => (
              <CompactPackageCard
                key={service.id}
                service={service}
                index={i}
                tierLabel="Interior"
              />
            ))}
          </div>
          <PricingNote />
        </Container>
      </section>

      {/* ============ Paint Correction & Ceramic Coating ============ */}
      <section id="correction" className="relative py-20 sm:py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-brand-500/40" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-700/[0.04] blur-[140px]" />
          <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-600/[0.05] blur-[120px]" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-20 sm:mb-24"
          >
            <SectionHeading
              label="Paint Correction & Ceramic Coating"
              title="The Premium Tier"
              subtitle="Multi-stage correction work paired with professional ceramic coatings for vehicles you really care about."
              centered
            />
          </motion.div>

          <div className="flex flex-col gap-24 sm:gap-32">
            {correctionServices.map((service, i) => (
              <PackageShowcaseRow key={service.id} service={service} index={i} />
            ))}
          </div>

          <PricingNote />
        </Container>
      </section>

      {/* ============ Specialty Packages ============ */}
      <section className="relative py-20 sm:py-28 bg-dark-muted overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-brand-500/40" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[420px] h-[420px] bg-brand-700/[0.07] blur-[140px]" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-16"
          >
            <SectionHeading
              label="Specialty Packages"
              title="Built For Specific Needs"
              subtitle="Bundle services scoped to your situation. Pricing is quoted per job — contact us and we'll put together the right package."
              centered
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, i) => (
              <SpecialtyServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ============ À la carte ============ */}
      <section className="relative py-20 sm:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-brand-500/40" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-brand-700/[0.05] blur-[140px]" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-16"
          >
            <SectionHeading
              title="Also Available"
              subtitle="Individual services, custom-quoted per job. Add any of these to a package or book them on their own — we'll scope it to your vehicle and goals."
              centered
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alaCarteServices.map((service, i) => (
              <SpecialtyServiceCard key={service.id} service={service} index={i} photoless />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
