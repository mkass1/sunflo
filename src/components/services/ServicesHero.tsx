"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const chips = ["7 Packages", "Oakland Park, FL", "Custom Quotes Available"];

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, active: false }))}
      className="relative pt-40 pb-24 md:pb-32 min-h-[70vh] flex items-end bg-[#050508] overflow-hidden"
    >
      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(700px circle at ${spotlight.x}px ${spotlight.y}px, rgba(59,130,246,0.09), transparent 50%)`,
        }}
      />

      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Car image — bleeds in from right with diagonal mask */}
        <div
          className="absolute inset-0"
          style={{
            maskImage: "linear-gradient(105deg, transparent 28%, rgba(0,0,0,0.5) 44%, black 62%)",
            WebkitMaskImage: "linear-gradient(105deg, transparent 28%, rgba(0,0,0,0.5) 44%, black 62%)",
            opacity: 0.45,
          }}
        >
          <Image
            src="/images/services/paint-correction.jpg"
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

        {/* Ambient blue glows */}
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[300px] bg-brand-700/12 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[30%] w-[200px] h-[200px] bg-brand-600/8 rounded-full blur-[80px]" />

        {/* Vertical accent rule */}
        <div className="absolute top-0 left-[calc(max(2rem,calc(50vw-44rem)))] w-px h-[60%] bg-gradient-to-b from-transparent via-brand-500/30 to-transparent hidden lg:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-7 h-px bg-brand-500 shrink-0" />
          <span className="text-[11px] font-medium tracking-[0.15em] text-brand-400 uppercase">
            Services &amp; Pricing
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="text-[2.75rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-black leading-[0.86] tracking-[-0.01em] uppercase mb-10 max-w-[660px] lg:max-w-[60%]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block text-white"
          >
            Detailing
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
            className="block text-transparent [-webkit-text-stroke:1.5px_#3b82f6] sm:[-webkit-text-stroke:2.5px_#3b82f6] md:[-webkit-text-stroke:3px_#3b82f6]"
          >
            Packages.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          className="text-gray-300 max-w-[440px] text-[15px] sm:text-base leading-relaxed mb-8"
        >
          Transparent pricing, no hidden fees. Every package is tailored to your vehicle size —
          Small, Medium, or Large — so you only pay for what you need.
        </motion.p>

        {/* Bullet chips */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 text-[11px] uppercase tracking-[0.14em] text-gray-500"
        >
          {chips.map((chip) => (
            <span key={chip} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand-500 inline-block" />
              {chip}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4"
        >
          <div className="relative group">
            <span className="absolute inset-0 bg-brand-500/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm" />
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2.5 bg-brand-600 text-white font-semibold px-8 py-3.5 hover:bg-brand-700 transition-colors duration-200 tracking-wide text-sm rounded-sm"
            >
              Request a Quote
              <ArrowRight size={14} />
            </Link>
          </div>
          <a
            href="#compare"
            className="inline-flex items-center gap-2.5 border border-white/15 text-white/70 text-sm font-semibold px-6 py-3.5 rounded-sm hover:border-brand-500/50 hover:text-white hover:bg-white/[0.04] transition-all duration-200 tracking-wide group"
          >
            Compare Packages
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
