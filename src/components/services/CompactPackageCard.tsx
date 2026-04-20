"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { ServiceList, PricingTier } from "./_shared";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types";

interface CompactPackageCardProps {
  service: ServiceItem;
  index?: number;
  /** Optional eyebrow label, e.g. "AUTO DETAIL" / "INTERIOR" */
  tierLabel?: string;
}

export default function CompactPackageCard({
  service,
  index = 0,
  tierLabel,
}: CompactPackageCardProps) {
  const [expanded, setExpanded] = useState(false);
  const ctaLabel = service.quoteOnly ? "Request a Quote" : "Book This Package";
  const indexNum = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-dark-card border border-dark-border rounded-sm overflow-hidden hover:border-brand-500/40 hover:shadow-[0_24px_60px_-30px_rgba(59,130,246,0.35)] transition-all duration-500"
    >
      {/* L-bracket corner accents */}
      <div className="absolute top-0 left-0 w-10 h-px bg-brand-500/70 z-20" />
      <div className="absolute top-0 left-0 w-px h-10 bg-brand-500/70 z-20" />
      <div className="absolute bottom-0 right-0 w-8 h-px bg-brand-500/30 z-20" />
      <div className="absolute bottom-0 right-0 w-px h-8 bg-brand-500/30 z-20" />

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* layered scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/30 via-transparent to-transparent" />

        {/* Index marker — bottom-left */}
        <div className="absolute bottom-3 left-4 z-10 flex items-end gap-2">
          <span
            className="text-white/85 text-[2rem] font-black leading-none tabular-nums tracking-tighter"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {indexNum}
          </span>
          {tierLabel && (
            <span className="text-[9px] tracking-[0.22em] uppercase text-white/55 font-semibold mb-1.5 leading-none">
              {tierLabel}
            </span>
          )}
        </div>

        {/* Badge */}
        {service.badge && (
          <div className="absolute top-4 right-4 z-10 backdrop-blur-md bg-brand-600/90 border border-brand-400/40 text-white text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-sm">
            {service.badge}
          </div>
        )}

        {/* Bottom hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      </div>

      {/* Hover wipe */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-500 group-hover:w-full transition-all duration-[700ms] ease-out z-10" />

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        <h3
          className="text-xl lg:text-[1.4rem] font-bold text-white mb-2 leading-[1.15] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {service.name}
        </h3>
        {service.tagline && (
          <p className="text-brand-400 text-[11px] uppercase tracking-[0.16em] mb-4 font-semibold">
            {service.tagline}
          </p>
        )}
        <p className="text-gray-400 text-[13.5px] leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Pricing */}
        {service.pricing && (
          <div className="grid grid-cols-3 gap-2 mb-5">
            <PricingTier label="Small" price={service.pricing.small} />
            <PricingTier label="Medium" price={service.pricing.medium} />
            <PricingTier label="Large" price={service.pricing.large} />
          </div>
        )}

        {/* Hairline expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="group/toggle relative w-full flex items-center justify-between py-3 mb-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gray-500 hover:text-brand-400 transition-colors duration-200"
        >
          <span className="absolute top-0 left-0 right-0 h-px bg-dark-border group-hover/toggle:bg-brand-500/50 transition-colors duration-300" />
          <span className="relative">
            {expanded ? "Hide" : "View"}&nbsp;What&apos;s Included
          </span>
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
                {service.exteriorServices.length > 0 && (
                  <ServiceList title="Exterior" items={service.exteriorServices} />
                )}
                {service.interiorServices.length > 0 && (
                  <ServiceList title="Interior" items={service.interiorServices} />
                )}
                {service.benefits && service.benefits.length > 0 && (
                  <ServiceList
                    title={service.quoteOnly ? "Optional Add-Ons" : "Benefits"}
                    items={service.benefits}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto" />

        {/* CTA */}
        <Link
          href="/contact"
          className="relative mt-3 group/cta flex w-full items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3.5 rounded-sm hover:bg-brand-700 transition-colors tracking-wide text-[13px] overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-[800ms] ease-out" />
          <span className="relative">{ctaLabel}</span>
          <ArrowRight
            size={14}
            className="relative transition-transform duration-200 group-hover/cta:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}
