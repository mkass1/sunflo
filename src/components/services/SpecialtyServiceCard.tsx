"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ServiceList } from "./_shared";
import type { ServiceItem } from "@/types";

interface SpecialtyServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function SpecialtyServiceCard({ service, index }: SpecialtyServiceCardProps) {
  const hasExterior = service.exteriorServices.length > 0;
  const hasInterior = service.interiorServices.length > 0;
  const hasBenefits = (service.benefits ?? []).length > 0;
  const benefitsLabel = service.quoteOnly ? "Optional Add-Ons" : "Also Included";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="group relative bg-dark-card/60 backdrop-blur-sm border border-dark-border rounded-sm overflow-hidden hover:border-brand-500/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
    >
      {/* L-bracket corners */}
      <div className="absolute top-0 left-0 w-8 h-px bg-brand-500/70 z-10" />
      <div className="absolute top-0 left-0 w-px h-8 bg-brand-500/70 z-10" />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
        <Image
          src={service.image}
          alt={`${service.name} — ${service.tagline}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
        {service.badge && (
          <div className="absolute top-3 right-3 z-10 bg-dark-card/80 backdrop-blur-sm border border-brand-500/30 text-brand-400 text-[9px] font-bold px-2.5 py-1 rounded-sm tracking-[0.14em] uppercase">
            {service.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <h3
          className="text-xl font-bold text-white mb-1.5 leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {service.name}
        </h3>
        <p className="text-brand-400 text-xs font-medium mb-3 uppercase tracking-[0.1em]">
          {service.tagline}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Inclusions accordion */}
        {(hasExterior || hasInterior || hasBenefits) && (
          <div className="mb-6 border border-dark-border rounded-sm overflow-hidden">
            <Accordion>
              {hasExterior && (
                <AccordionItem value="exterior" className="border-b border-dark-border last:border-b-0">
                  <AccordionTrigger className="px-4 py-3 text-xs font-medium text-gray-500 hover:text-white hover:no-underline rounded-none tracking-wide">
                    Exterior Services
                  </AccordionTrigger>
                  <AccordionContent className="border-t border-dark-border">
                    <div className="px-4 py-4">
                      <ServiceList title="" items={service.exteriorServices} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
              {hasInterior && (
                <AccordionItem value="interior" className="border-b border-dark-border last:border-b-0">
                  <AccordionTrigger className="px-4 py-3 text-xs font-medium text-gray-500 hover:text-white hover:no-underline rounded-none tracking-wide">
                    Interior Services
                  </AccordionTrigger>
                  <AccordionContent className="border-t border-dark-border">
                    <div className="px-4 py-4">
                      <ServiceList title="" items={service.interiorServices} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
              {hasBenefits && (
                <AccordionItem value="addons" className="last:border-b-0">
                  <AccordionTrigger className="px-4 py-3 text-xs font-medium text-gray-500 hover:text-white hover:no-underline rounded-none tracking-wide">
                    {benefitsLabel}
                  </AccordionTrigger>
                  <AccordionContent className="border-t border-dark-border">
                    <div className="px-4 py-4">
                      <ServiceList title="" items={service.benefits ?? []} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-[0.14em] text-gray-600 font-medium">
              Quoted per job
            </span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-brand-500 font-medium">
              Custom scope
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-2.5 bg-brand-600 text-white font-semibold py-3.5 rounded-sm hover:bg-brand-700 transition-colors duration-200 tracking-wide text-sm group/cta"
            >
              Request a Quote
              <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform duration-200" />
            </Link>
            {service.slug && (
              <Link
                href={`/services/${service.slug}`}
                className="flex w-full items-center justify-center gap-2 text-gray-500 text-xs font-medium hover:text-gray-300 transition-colors py-1"
              >
                Learn more about this service
                <ArrowRight size={11} />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hover wipe */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-500 group-hover:w-full transition-all duration-[600ms] ease-out" />
    </motion.article>
  );
}
