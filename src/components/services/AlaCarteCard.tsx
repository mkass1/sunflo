"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { ServiceList } from "./_shared";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types";

interface AlaCarteCardProps {
  service: ServiceItem;
  index: number;
}

export default function AlaCarteCard({ service, index }: AlaCarteCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasExterior = service.exteriorServices.length > 0;
  const hasInterior = service.interiorServices.length > 0;
  const hasBenefits = (service.benefits ?? []).length > 0;
  const benefitsLabel = service.quoteOnly ? "Optional Add-Ons" : "Also Included";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="group relative bg-dark-card/60 backdrop-blur-sm border border-dark-border rounded-sm overflow-hidden hover:border-brand-500/30 transition-all duration-300"
    >
      {/* L-bracket corners */}
      <div className="absolute top-0 left-0 w-8 h-px bg-brand-500/70 z-10" />
      <div className="absolute top-0 left-0 w-px h-8 bg-brand-500/70 z-10" />

      {/* Badge */}
      {service.badge && (
        <div className="absolute top-3 right-3 z-10 bg-dark-card/80 backdrop-blur-sm border border-brand-500/30 text-brand-400 text-[9px] font-bold px-2.5 py-1 rounded-sm tracking-[0.14em] uppercase">
          {service.badge}
        </div>
      )}

      {/* Toggle header — always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="w-full flex items-center gap-4 px-6 pt-7 pb-5 text-left"
      >
        <div className="flex-1 min-w-0 pr-6">
          <h3
            className="text-base font-bold text-white leading-snug mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {service.name}
          </h3>
          <p className="text-gray-500 text-sm leading-snug truncate">{service.tagline}</p>
        </div>
        <span
          className={cn(
            "shrink-0 w-6 h-6 flex items-center justify-center border border-dark-border rounded-sm text-gray-500 transition-all duration-300 group-hover:border-brand-500/50 group-hover:text-brand-400",
            expanded && "rotate-45 border-brand-500/60 text-brand-400"
          )}
        >
          <Plus size={12} strokeWidth={2.5} />
        </span>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 flex flex-col gap-5">
              {/* Divider */}
              <div className="h-px bg-dark-border" />

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

              {/* Service lists */}
              {(hasExterior || hasInterior || hasBenefits) && (
                <div className="flex flex-col gap-5">
                  {hasExterior && <ServiceList title="What's Included" items={service.exteriorServices} />}
                  {hasInterior && <ServiceList title="Interior" items={service.interiorServices} />}
                  {hasBenefits && <ServiceList title={benefitsLabel} items={service.benefits ?? []} />}
                </div>
              )}

              {/* Footer CTAs */}
              <div className="flex flex-col gap-2.5 pt-1">
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover wipe */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-500 group-hover:w-full transition-all duration-[600ms] ease-out" />
    </motion.article>
  );
}
