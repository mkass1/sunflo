"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { formatPrice } from "@/lib/utils";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const OBJECT_POSITIONS: Record<string, string> = {
  "complete-interior": "center 85%",
  "gloss-enhancement": "center 30%",
  "paint-enhancement": "center center",
  "paint-correction": "center center",
};

export default function FeaturedServices() {
  const isDesktop = useIsDesktop();
  const featured = services.filter((s) => s.featured);

  return (
    <section className="relative py-20 sm:py-28 bg-dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-brand-500/40" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-700/[0.04] blur-[120px]" />
      </div>

      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <SectionHeading
            label="What We Offer"
            title="Our Detailing Packages"
            subtitle="From essential interior refreshes to full paint transformations — a service for every vehicle and every need."
          />
          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2.5 border border-white/15 text-white/70 text-sm font-semibold px-5 py-2.5 rounded-sm hover:border-brand-500/50 hover:text-white hover:bg-white/[0.04] transition-all duration-200 tracking-wide group"
          >
            View All Services
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((service, i) => (
            <motion.article
              key={service.id}
              initial={isDesktop ? { opacity: 0, y: 28 } : false}
              whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
              viewport={isDesktop ? { once: true } : undefined}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="group relative aspect-[3/4] rounded-sm overflow-hidden border border-dark-border hover:border-brand-500/40 transition-all duration-300"
            >
              {/* Photo, full-bleed */}
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: OBJECT_POSITIONS[service.id] }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Scrim: deep black from bottom, subtle brand tint at base */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-45% to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/25 via-transparent to-transparent" />

              {/* Content pinned to bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-3">
                <h3
                  className="text-white font-bold text-lg leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.name}
                </h3>

                {service.hasTiers && (
                  <div className="flex items-end gap-1.5">
                    {[3, 5, 7].map((h, idx) => (
                      <div
                        key={idx}
                        className="w-2.5 bg-brand-500/70 rounded-[1px]"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                    <span className="text-[9px] tracking-[0.22em] uppercase text-white/40 font-semibold ml-0.5 leading-none mb-[1px]">
                      3 levels
                    </span>
                  </div>
                )}

                <div className="flex items-baseline gap-2">
                  <span className="text-[10px] tracking-[0.12em] uppercase text-gray-500">from</span>
                  <span
                    className="text-brand-400 font-bold leading-none tabular-nums"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: `${1.9 + i * 0.1}rem`,
                    }}
                  >
                    {service.pricing ? formatPrice(service.pricing.small) : "—"}
                  </span>
                </div>

              </div>

              {/* Hover accent wipe */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-500 group-hover:w-full transition-all duration-[600ms] ease-out" />

              {/* Whole-card link */}
              <Link
                href="/services"
                aria-label={`${service.name} details`}
                className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
              />
            </motion.article>
          ))}
        </div>

        {/* Also available strip */}
        <motion.div
          initial={isDesktop ? { opacity: 0, y: 12 } : false}
          whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
          viewport={isDesktop ? { once: true } : undefined}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-dark-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-3">
                Also available at our Oakland Park shop
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
                {["Ceramic Coatings", "Paint Protection Film", "Vehicle Wraps", "Window Tinting"].map((s, i) => (
                  <span key={s} className="flex items-center gap-6">
                    {i > 0 && <span className="hidden sm:block w-px h-3 bg-dark-border" />}
                    <span className="text-sm text-white font-semibold tracking-wide">{s}</span>
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="shrink-0 self-center sm:self-auto inline-flex items-center gap-2.5 bg-brand-600 text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-brand-700 transition-all duration-200 tracking-wide shadow-lg shadow-brand-500/20 group"
            >
              Get a Custom Quote
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
