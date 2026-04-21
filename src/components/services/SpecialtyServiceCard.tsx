"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { ServiceList } from "./_shared";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types";

interface SpecialtyServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function SpecialtyServiceCard({ service, index }: SpecialtyServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasExterior = service.exteriorServices.length > 0;
  const hasInterior = service.interiorServices.length > 0;
  const hasBenefits = (service.benefits ?? []).length > 0;
  const hasAny = hasExterior || hasInterior || hasBenefits;
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

      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
        <Image
          src={service.image}
          alt={`${service.name} — ${service.tagline}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
        {service.badge && (
          <div className="absolute top-3 right-3 z-10 bg-dark-card/80 backdrop-blur-sm border border-brand-500/30 text-brand-400 text-[9px] font-bold px-2.5 py-1 rounded-sm tracking-[0.14em] uppercase">
            {service.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="text-lg font-bold text-white mb-1.5 leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {service.name}
        </h3>
        <p className="text-brand-400 text-xs font-medium mb-3 uppercase tracking-[0.1em]">
          {service.tagline}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Single "What's Included" toggle */}
        {hasAny && (
          <>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="group/toggle relative w-full flex items-center justify-between py-3 mb-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gray-500 hover:text-brand-400 transition-colors duration-200"
            >
              <span className="absolute top-0 left-0 right-0 h-px bg-dark-border group-hover/toggle:bg-brand-500/50 transition-colors duration-300" />
              <span className="relative">{expanded ? "Hide" : "View"}&nbsp;What&apos;s Included</span>
              <span
                className={cn(
                  "relative w-5 h-5 flex items-center justify-center border border-dark-border rounded-sm transition-all duration-300 group-hover/toggle:border-brand-500/60",
                  expanded && "rotate-45 border-brand-500/60 text-brand-400"
                )}
              >
                <Plus size={11} strokeWidth={2.5} />
              </span>
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-1 pb-5 flex flex-col gap-5">
                    {hasExterior && <ServiceList title="Exterior" items={service.exteriorServices} />}
                    {hasInterior && <ServiceList title="Interior" items={service.interiorServices} />}
                    {hasBenefits && <ServiceList title={benefitsLabel} items={service.benefits ?? []} />}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Footer — CTA pinned to card bottom so every "Request a Quote" baseline
            aligns across the row. "Learn more" (when present) hovers above the CTA. */}
        <div className="mt-auto pt-4 flex flex-col gap-2.5">
          {service.slug && (
            <Link
              href={`/services/${service.slug}`}
              className="group/more inline-flex items-center justify-center gap-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gray-500 hover:text-brand-400 transition-colors duration-200"
            >
              <span className="relative">
                Learn more
                <span className="absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-brand-500/60 group-hover/more:scale-x-100 transition-transform duration-300 ease-out" />
              </span>
              <ArrowRight size={11} className="opacity-70 group-hover/more:translate-x-0.5 transition-transform duration-200" />
            </Link>
          )}
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2.5 bg-brand-600 text-white font-semibold py-3.5 rounded-sm hover:bg-brand-700 transition-colors duration-200 tracking-wide text-sm group/cta"
          >
            Request a Quote
            <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Hover wipe */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-500 group-hover:w-full transition-all duration-[600ms] ease-out" />
    </motion.article>
  );
}
