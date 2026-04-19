"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ServiceList, PricingTier } from "./_shared";
import type { ServiceItem } from "@/types";

interface PackageShowcaseRowProps {
  service: ServiceItem;
  index: number;
}

const OBJECT_POSITIONS: Record<string, string> = {
  "complete-interior": "center 85%",
  "gloss-enhancement": "center 30%",
  "paint-enhancement": "center center",
  "paint-correction": "center center",
};

export default function PackageShowcaseRow({ service, index }: PackageShowcaseRowProps) {
  const imageLeft = index % 2 === 0;
  const isFeatured = service.id === "paint-enhancement";

  const ImageBlock = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden border border-dark-border hover:border-brand-500/40 transition-all duration-500 group"
    >
      <Image
        src={service.image}
        alt={`${service.name} — ${service.tagline}`}
        fill
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        style={{ objectPosition: OBJECT_POSITIONS[service.id] ?? "center center" }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 via-40% to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/25 via-transparent to-transparent" />

      {/* L-bracket top-left */}
      <div className="absolute top-0 left-0 w-10 h-px bg-brand-500/70 z-10" />
      <div className="absolute top-0 left-0 w-px h-10 bg-brand-500/70 z-10" />

      {/* Badge */}
      {service.badge && (
        <div className="absolute top-4 right-4 z-10 bg-brand-600 text-white text-[10px] font-bold px-3 py-1 rounded-sm tracking-[0.12em] uppercase">
          {service.badge}
        </div>
      )}

      {/* Tier indicator bars — bottom-left */}
      {service.pricing && (
        <div className="absolute bottom-5 left-5 z-10 flex items-end gap-1">
          {[3, 5, 7].map((h, i) => (
            <div key={i} className="w-2.5 bg-brand-500/70 rounded-[1px]" style={{ height: `${h}px` }} />
          ))}
          <span className="text-[9px] tracking-[0.2em] uppercase text-white/40 font-semibold ml-1 leading-none mb-[1px]">
            3 tiers
          </span>
        </div>
      )}

      {/* Hover wipe */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-500 group-hover:w-full transition-all duration-[600ms] ease-out" />
    </motion.div>
  );

  const ContentBlock = (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-7 h-px bg-brand-500/60 shrink-0" />
        <span className="text-[11px] font-medium tracking-[0.15em] text-brand-500 uppercase">
          Core · Package {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {service.name}
      </h2>

      {/* Tagline */}
      <p className="text-brand-400 text-base font-medium mb-5 leading-snug">
        {service.tagline}
      </p>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
        {service.description}
      </p>

      {/* Pricing tiers */}
      {service.pricing && (
        <div className="grid grid-cols-3 gap-3 mb-8">
          <PricingTier label="Small" price={service.pricing.small} />
          <PricingTier label="Medium" price={service.pricing.medium} highlighted={isFeatured} />
          <PricingTier label="Large" price={service.pricing.large} />
        </div>
      )}

      {/* What's included accordion */}
      <div className="mb-8 border border-dark-border rounded-sm overflow-hidden">
        <Accordion>
          <AccordionItem value="included">
            <AccordionTrigger className="px-4 py-3.5 text-sm font-medium text-gray-400 hover:text-white hover:no-underline rounded-none">
              What&apos;s Included
            </AccordionTrigger>
            <AccordionContent className="border-t border-dark-border">
              <div className="px-4 py-5 flex flex-col gap-5">
                {service.exteriorServices.length > 0 && (
                  <ServiceList title="Exterior" items={service.exteriorServices} />
                )}
                {service.interiorServices.length > 0 && (
                  <ServiceList title="Interior" items={service.interiorServices} />
                )}
                {service.benefits && service.benefits.length > 0 && (
                  <ServiceList title="Also Included" items={service.benefits} />
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative group">
          <span className="absolute inset-0 bg-brand-500/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm" />
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2.5 bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-sm hover:bg-brand-700 transition-colors duration-200 tracking-wide text-sm shadow-lg shadow-brand-500/20 group/cta"
          >
            Book This Service
            <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
        {service.slug && (
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-gray-400 font-medium text-sm hover:text-white transition-colors duration-200 group"
          >
            Learn More
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        )}
      </div>
    </motion.div>
  );

  return (
    <article
      id={`pkg-${service.id}`}
      className="scroll-mt-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {imageLeft ? (
        <>
          {ImageBlock}
          {ContentBlock}
        </>
      ) : (
        <>
          <div className="lg:order-2">{ImageBlock}</div>
          <div className="lg:order-1">{ContentBlock}</div>
        </>
      )}
    </article>
  );
}
