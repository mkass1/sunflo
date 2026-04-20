"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "9+", label: "Years in business" },
  { value: "2K+", label: "Vehicles detailed" },
  { value: "5.0★", label: "120 Google reviews" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end bg-[#050508]">

      {/* All decorative background elements — clipped to section bounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Car image — bleeds in from right with diagonal mask */}
        <div
          className="absolute inset-0"
          style={{
            maskImage: "linear-gradient(105deg, transparent 28%, rgba(0,0,0,0.5) 44%, black 62%)",
            WebkitMaskImage: "linear-gradient(105deg, transparent 28%, rgba(0,0,0,0.5) 44%, black 62%)",
            opacity: 0.52,
          }}
        >
          <Image
            src="/images/hero/porsche-911.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Left-side dark fade */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #050508 0%, #050508 35%, rgba(5,5,8,0.65) 52%, transparent 68%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to top, #050508 0%, transparent 100%)" }}
        />

        {/* Ambient blue glow */}
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[300px] bg-brand-700/12 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[30%] w-[200px] h-[200px] bg-brand-600/8 rounded-full blur-[80px]" />

        {/* Vertical accent rule */}
        <div className="absolute top-0 left-[calc(max(2rem,calc(50vw-44rem)))] w-px h-[60%] bg-gradient-to-b from-transparent via-brand-500/30 to-transparent hidden lg:block" />
      </div>

      {/* Content — left-aligned */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-36">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-7 h-px bg-brand-500 shrink-0" />
          <span className="text-[11px] font-medium tracking-[0.15em] text-brand-400 uppercase">
            Oakland Park, FL&nbsp;&nbsp;·&nbsp;&nbsp;Est. 2017
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="text-[2.75rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[10.5rem] font-black leading-[0.84] tracking-[-0.01em] uppercase mb-10 max-w-[660px] lg:max-w-[58%]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block text-white"
          >
            Passionate
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
            className="block text-transparent [-webkit-text-stroke:1.5px_#3b82f6] sm:[-webkit-text-stroke:2.5px_#3b82f6] md:[-webkit-text-stroke:3.5px_#3b82f6]"
          >
            Professional
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="block text-white"
          >
            Detailing.
          </motion.span>
        </h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
          className="text-gray-300 max-w-[420px] text-[15px] sm:text-base leading-relaxed mb-10"
        >
          Interior &amp; exterior detailing, paint correction, ceramic coatings, PPF, vehicle wraps,
          and window tinting — in-house or mobile across South Florida.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.46, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-5 mb-20"
        >
          <div className="relative group">
            <span className="absolute inset-0 bg-brand-500/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm" />
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2.5 bg-brand-600 text-white font-semibold px-8 py-3.5 hover:bg-brand-700 transition-colors duration-200 tracking-wide text-sm"
            >
              Book Your Service
              <ArrowRight size={15} />
            </Link>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-white/20 text-gray-300 font-medium text-sm px-6 py-3.5 hover:text-white hover:border-white/40 transition-colors duration-200 group"
          >
            View Services
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-5 sm:gap-10 pt-8 border-t border-white/[0.06]"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={i > 0 ? "pl-5 sm:pl-10 border-l border-white/[0.08]" : ""}>
              <p
                className="text-[1.5rem] sm:text-[2.25rem] md:text-[2.75rem] font-black text-white leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </p>
              <p className="text-[11px] text-gray-500 mt-1.5 tracking-[0.14em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
