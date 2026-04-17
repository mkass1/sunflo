"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { ServiceItem } from "@/types";
import { cn, formatPrice } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
}

function PricingTier({
  label,
  price,
}: {
  label: string;
  price: number;
}) {
  return (
    <div className="flex flex-col items-center p-4 bg-dark-muted border border-dark-border rounded-sm">
      <span className="text-xs text-gray-500 uppercase tracking-[0.14em] mb-2">{label}</span>
      <span
        className="text-2xl font-bold text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {formatPrice(price)}
      </span>
    </div>
  );
}

function ServiceList({ title, items }: { title: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h4 className="text-xs font-semibold text-brand-400 uppercase tracking-[0.14em] mb-3">
        {title}
      </h4>
      <ul className="grid sm:grid-cols-2 gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
            <Check size={14} className="text-brand-500 mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-dark-card border border-dark-border rounded-sm overflow-hidden hover:border-brand-500/30 transition-colors duration-300">
      {/* Image + badge */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />
        {service.badge && (
          <div className="absolute top-4 right-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-sm tracking-wide">
            {service.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <h2
          className="text-xl lg:text-2xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {service.name}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

        {/* Pricing */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <PricingTier label="Small" price={service.pricing.small} />
          <PricingTier label="Medium" price={service.pricing.medium} />
          <PricingTier label="Large" price={service.pricing.large} />
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className={cn(
            "w-full flex items-center justify-between py-3 px-4 rounded-sm text-sm font-medium transition-colors",
            expanded
              ? "bg-brand-500/10 text-brand-400"
              : "bg-dark-muted text-gray-400 hover:text-white"
          )}
        >
          <span>{expanded ? "Hide" : "View"} What&apos;s Included</span>
          <ChevronDown
            size={16}
            className={cn("transition-transform duration-300", expanded && "rotate-180")}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 flex flex-col gap-6">
                {service.exteriorServices.length > 0 && (
                  <ServiceList title="Exterior Services" items={service.exteriorServices} />
                )}
                {service.interiorServices.length > 0 && (
                  <ServiceList title="Interior Services" items={service.interiorServices} />
                )}
                {service.benefits && service.benefits.length > 0 && (
                  <ServiceList title="Benefits Included" items={service.benefits} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <Link
          href="/contact"
          className="mt-6 flex w-full items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3.5 rounded-sm hover:bg-brand-700 transition-colors tracking-wide text-sm"
        >
          Book This Service
        </Link>
      </div>
    </div>
  );
}
