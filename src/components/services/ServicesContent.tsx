"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/layout/CTABanner";
import ServicesHero from "./ServicesHero";
import PackageComparisonTable from "./PackageComparisonTable";
import PackageShowcaseRow from "./PackageShowcaseRow";
import SpecialtyServiceCard from "./SpecialtyServiceCard";
import type { ServiceItem } from "@/types";

interface ServicesContentProps {
  coreServices: ServiceItem[];
  specialtyServices: ServiceItem[];
  alaCarteServices: ServiceItem[];
}

export default function ServicesContent({ coreServices, specialtyServices, alaCarteServices }: ServicesContentProps) {
  return (
    <>
      <ServicesHero />

      <PackageComparisonTable services={coreServices} />

      {/* Core Packages */}
      <section className="relative py-20 sm:py-28 bg-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-brand-500/40" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-700/[0.04] blur-[140px]" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-16 sm:mb-20"
          >
            <SectionHeading
              label="Core Packages"
              title="Paint & Interior"
              subtitle="Fixed pricing based on vehicle size. Every service includes detailed care tailored to its tier — with full transparency on what's included."
              centered
            />
          </motion.div>

          <div className="flex flex-col gap-20 sm:gap-28">
            {coreServices.map((service, i) => (
              <PackageShowcaseRow key={service.id} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Specialty Packages */}
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
            className="mb-14"
          >
            <SectionHeading
              label="Specialty Packages"
              title="Built For Specific Needs"
              subtitle="Bundle services scoped to your situation. Pricing is quoted per job — contact us and we'll put together the right package."
              centered
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyServices.map((service, i) => (
              <SpecialtyServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* À la carte services */}
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
            className="mb-14"
          >
            <SectionHeading
              title="Also Available"
              subtitle="Individual services, custom-quoted per job. Add any of these to a package or book them on their own — we'll scope it to your vehicle and goals."
              centered
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alaCarteServices.map((service, i) => (
              <SpecialtyServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
