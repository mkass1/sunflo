"use client";

import { Check, Minus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/utils";
import type { ServiceItem } from "@/types";

interface PackageComparisonTableProps {
  services: ServiceItem[];
}

function hasFeature(service: ServiceItem, query: string): boolean {
  const q = query.toLowerCase();
  return (
    service.exteriorServices.some((s) => s.toLowerCase().includes(q)) ||
    service.interiorServices.some((s) => s.toLowerCase().includes(q)) ||
    (service.benefits ?? []).some((s) => s.toLowerCase().includes(q))
  );
}

function getCeramicLevel(service: ServiceItem): string {
  if (hasFeature(service, "multi-stage") || hasFeature(service, "two layers")) return "Pro (2 layers)";
  if (hasFeature(service, "pro level ceramic")) return "Pro Level";
  if (hasFeature(service, "entry level ceramic")) return "Entry Level";
  return "—";
}

function getCorrectionLevel(service: ServiceItem): string {
  if (hasFeature(service, "multi-stage paint correction")) return "Multi-Stage";
  if (hasFeature(service, "paint enhancement")) return "Enhancement";
  if (hasFeature(service, "gloss enhancement") && service.id !== "gloss-enhancement") return "Gloss";
  if (hasFeature(service, "gloss enhancement")) return "Gloss Polish";
  return "—";
}

const bestFor: Record<string, string> = {
  "complete-interior": "Cabin refresh",
  "gloss-enhancement": "Daily driver shine",
  "paint-enhancement": "Enthusiast finish",
  "paint-correction": "Show-car perfection",
};

const rows = [
  {
    label: "Starting price",
    render: (s: ServiceItem) =>
      s.pricing ? (
        <span className="text-white font-semibold tabular-nums" style={{ fontFamily: "var(--font-heading)" }}>
          {formatPrice(s.pricing.small)}
        </span>
      ) : (
        "—"
      ),
  },
  {
    label: "Vehicle tiers",
    render: () => <span className="text-gray-400 text-xs">Small · Med · Large</span>,
  },
  {
    label: "Paint decontamination",
    render: (s: ServiceItem) =>
      hasFeature(s, "decontamination") ? <Check size={15} className="text-brand-500 mx-auto" /> : <Minus size={14} className="text-dark-border mx-auto" />,
  },
  {
    label: "Clay bar",
    render: (s: ServiceItem) =>
      hasFeature(s, "clay bar") ? <Check size={15} className="text-brand-500 mx-auto" /> : <Minus size={14} className="text-dark-border mx-auto" />,
  },
  {
    label: "Ceramic coating",
    render: (s: ServiceItem) => {
      const level = getCeramicLevel(s);
      return level !== "—" ? (
        <span className="text-brand-400 text-xs font-medium">{level}</span>
      ) : (
        <Minus size={14} className="text-dark-border mx-auto" />
      );
    },
  },
  {
    label: "Paint correction",
    render: (s: ServiceItem) => {
      const level = getCorrectionLevel(s);
      return level !== "—" ? (
        <span className="text-gray-300 text-xs">{level}</span>
      ) : (
        <Minus size={14} className="text-dark-border mx-auto" />
      );
    },
  },
  {
    label: "Interior cleaning",
    render: (s: ServiceItem) =>
      s.interiorServices.length > 0 || (s.benefits ?? []).length > 0 ? (
        <Check size={15} className="text-brand-500 mx-auto" />
      ) : (
        <Minus size={14} className="text-dark-border mx-auto" />
      ),
  },
  {
    label: "Best for",
    render: (s: ServiceItem) => (
      <span className="text-gray-400 text-xs">{bestFor[s.id] ?? "—"}</span>
    ),
  },
];

export default function PackageComparisonTable({ services }: PackageComparisonTableProps) {
  return (
    <section id="compare" className="relative py-20 sm:py-28 bg-dark-muted scroll-mt-20">
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
        >
          <SectionHeading
            label="Compare Packages"
            title="Find Your Fit"
            subtitle="A quick side-by-side before you dive in. Pick based on the level of correction and protection you need."
            centered
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-14 relative"
        >
          {/* Container card with L-brackets */}
          <div className="relative bg-dark-card/60 backdrop-blur-sm border border-dark-border rounded-sm overflow-hidden">
            {/* L-bracket corners */}
            <div className="absolute top-0 left-0 w-10 h-px bg-brand-500/70 z-10" />
            <div className="absolute top-0 left-0 w-px h-10 bg-brand-500/70 z-10" />
            <div className="absolute bottom-0 right-0 w-10 h-px bg-brand-500/30 z-10" />
            <div className="absolute bottom-0 right-0 w-px h-10 bg-brand-500/30 z-10" />

            <Table>
              <TableHeader>
                <TableRow className="border-b border-dark-border hover:bg-transparent">
                  {/* Feature label column */}
                  <TableHead className="w-[160px] py-5 px-5 text-gray-500 text-xs uppercase tracking-[0.12em]">
                    Feature
                  </TableHead>
                  {services.map((service) => (
                    <TableHead
                      key={service.id}
                      className={`py-5 px-4 text-center align-top ${
                        service.id === "paint-enhancement"
                          ? "bg-brand-500/[0.04] border-t-2 border-brand-500"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        {service.badge && (
                          <span
                            className={`text-[9px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 rounded-sm ${
                              service.id === "paint-enhancement"
                                ? "bg-brand-500/20 text-brand-400"
                                : "bg-white/5 text-gray-500"
                            }`}
                          >
                            {service.badge}
                          </span>
                        )}
                        <span
                          className="text-white font-bold text-sm leading-tight text-center"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {service.name}
                        </span>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, ri) => (
                  <TableRow
                    key={row.label}
                    className={`border-b border-dark-border/60 hover:bg-white/[0.015] transition-colors ${
                      ri === rows.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <TableCell className="py-4 px-5 text-xs text-gray-500 font-medium tracking-wide whitespace-nowrap">
                      {row.label}
                    </TableCell>
                    {services.map((service) => (
                      <TableCell
                        key={service.id}
                        className={`py-4 px-4 text-center ${
                          service.id === "paint-enhancement" ? "bg-brand-500/[0.04]" : ""
                        }`}
                      >
                        {row.render(service)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* "See details" row */}
                <TableRow className="border-t border-dark-border hover:bg-transparent">
                  <TableCell className="py-5 px-5" />
                  {services.map((service) => (
                    <TableCell
                      key={service.id}
                      className={`py-5 px-4 text-center ${
                        service.id === "paint-enhancement" ? "bg-brand-500/[0.04]" : ""
                      }`}
                    >
                      <a
                        href={`#pkg-${service.id}`}
                        className="inline-flex items-center gap-1.5 text-[11px] text-brand-400 hover:text-brand-300 transition-colors tracking-wide font-medium group"
                      >
                        See details
                        <span className="group-hover:translate-y-0.5 transition-transform duration-150 inline-block">↓</span>
                      </a>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Mobile hint */}
          <p className="mt-4 text-center text-[11px] text-gray-600 sm:hidden">
            Scroll horizontally to see all packages
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
