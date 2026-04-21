"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { contact } from "@/data/contact";

const pillars = [
  {
    num: "01",
    title: "In-House Work",
    body: "Every detail done by our own team in Oakland Park. No rotating subcontractors, no outsourced coatings.",
  },
  {
    num: "02",
    title: "Pro-Grade Materials",
    body: "CarPro, ShineSupply, XPEL, 3M — pro-grade products used by top shops nationwide. No consumer-grade shortcuts.",
  },
  {
    num: "03",
    title: "Nine Years In",
    body: "Over 2,000 vehicles corrected, coated, wrapped, and tinted since 2017 — from daily drivers to show cars.",
  },
];

export default function AboutPreview() {
  return (
    <section className="relative py-20 sm:py-28 bg-dark-muted">
      {/* Background accents — clipped independently */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-500/[0.05] blur-[110px]" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-700/[0.04] blur-[90px]" />
      </div>

      {/* Top hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-brand-500/40" />

      <Container>
        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-dark-border">
              <Image
                src="/images/about/founder.jpg"
                alt="Jason — Owner & Lead Detailer at Sunflo Detailing"
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              {/* Corner vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%)",
                }}
              />
              {/* Brand glow at base */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-500/10 via-transparent to-transparent pointer-events-none" />
              {/* Location pill */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur-sm">
                <MapPin size={11} className="text-brand-400 shrink-0" />
                <span className="text-brand-400 text-[11px] font-medium tracking-wide">
                  Oakland Park · South Florida
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-4"
            >
              Est. 2017 · Oakland Park, FL
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Sunflo
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-300 text-base leading-relaxed max-w-lg mb-4"
            >
              Started by Jason in Oakland Park in 2017, Sunflo Detailing was built around one principle: do
              the work properly or don&apos;t do it at all. South Florida&apos;s sun, salt air, and UV
              intensity demand more from paint protection than the rest of the country — and that&apos;s
              the environment we&apos;ve been working in for nine years. We serve Oakland Park, Fort
              Lauderdale, Wilton Manors, Pompano Beach, and surrounding Broward County from our shop
              at 4708 NE 11th Ave.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-sm leading-relaxed max-w-lg mb-6"
            >
              Every service — from a mini interior refresh to a multi-stage paint correction topped with
              two layers of ceramic coating — is performed by our own hands in a climate-controlled bay
              with professional lighting. We use CarPro, XPEL, 3M, and ShineSupply products because
              they perform, not because they&apos;re cheap. No subcontractors, no shortcuts.
            </motion.p>

            {/* Numbered pillars */}
            <div className="flex flex-col divide-y divide-dark-border/80">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="grid grid-cols-[auto_1fr] gap-6 py-4"
                >
                  <span
                    className="text-[3.2rem] font-bold text-brand-500/25 leading-none tabular-nums select-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {pillar.num}
                  </span>
                  <div className="pt-1">
                    <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-gray-400 mb-2">
                      {pillar.title}
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learn more link */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-6"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 text-sm font-medium tracking-wide transition-colors duration-200 group"
              >
                Learn more about Sunflo
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Signature block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 pt-8 border-t border-dark-border flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6"
        >
          <div>
            <p
              className="text-xl text-white italic mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              — Jason a.k.a Flo
            </p>
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-gray-400">
              Owner &amp; Lead Detailer
            </p>
          </div>

          <div className="flex sm:justify-end items-center gap-2 text-gray-400 text-sm">
            <MapPin size={13} className="text-brand-400 shrink-0" />
            <span>{contact.address}</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
