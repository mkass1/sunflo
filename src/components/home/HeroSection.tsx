"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "9+", label: "Years in business" },
  { value: "2K+", label: "Vehicles detailed" },
  { value: "5★", label: "Avg. review" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep cinematic background */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#020208_0%,#040412_20%,#060820_50%,#040412_80%,#020208_100%)]" />

      {/* Layered asymmetric glow orbs */}
      <div className="absolute top-[10%] left-[15%] w-[560px] h-[560px] bg-brand-700/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[35%] left-[45%] w-[280px] h-[280px] bg-brand-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-[420px] h-[420px] bg-brand-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[65%] left-[5%] w-[180px] h-[180px] bg-brand-400/10 rounded-full blur-[70px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vertical accent lines */}
      <div className="absolute top-0 left-[18%] w-px h-48 bg-gradient-to-b from-transparent via-brand-500/30 to-transparent" />
      <div className="absolute top-0 right-[22%] w-px h-32 bg-gradient-to-b from-transparent via-brand-400/15 to-transparent" />

      {/* Hero image */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(ellipse 85% 90% at 65% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 90% at 65% 50%, black 0%, transparent 100%)",
          opacity: 0.38,
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

      {/* Center scrim — improves text legibility without killing the image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 65% 70% at 50% 48%, rgba(2,2,8,0.72) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Location eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="text-sm font-semibold tracking-[0.2em] text-gray-300 uppercase mb-8"
        >
          Oakland Park, FL &nbsp;·&nbsp; Est. 2017
        </motion.p>

        {/* Headline — three stacked words inside one h1 */}
        <h1
          className="text-[4.5rem] sm:text-[6rem] lg:text-[8rem] font-bold leading-[0.9] tracking-tight mb-10"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="block text-white"
          >
            Passionate
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="block"
            style={{
              background: "linear-gradient(135deg, #93c5fd 0%, #60a5fa 55%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Professional
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
            className="block text-white"
          >
            Detailing.
          </motion.span>
        </h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.27, ease: "easeOut" }}
          className="mx-auto max-w-xl text-base sm:text-lg text-gray-200 mb-12 leading-relaxed"
        >
          Interior &amp; exterior detailing, paint correction, ceramic coatings, PPF, vehicle wraps, and window tinting — in-house or mobile across South Florida.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          {/* Primary with glow ring */}
          <div className="relative group">
            <span className="absolute inset-0 rounded-sm bg-brand-500/25 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2.5 bg-brand-500 text-white font-semibold px-9 py-4 rounded-sm hover:bg-brand-600 transition-all duration-200 tracking-wide text-sm shadow-[0_0_28px_rgba(59,130,246,0.22)] hover:shadow-[0_0_40px_rgba(59,130,246,0.38)]"
            >
              Book Your Service
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Ghost secondary */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 border border-white/10 text-white/75 font-semibold px-9 py-4 rounded-sm hover:border-brand-500/45 hover:text-white hover:bg-white/5 transition-all duration-200 tracking-wide text-sm"
          >
            View Services
            <ArrowRight size={16} className="opacity-50" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.52 }}
          className="flex items-center justify-center gap-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-brand-500/50 pl-4">
              <p
                className="text-2xl sm:text-3xl font-bold text-white leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </p>
              <p className="text-[10px] text-gray-500 mt-1.5 tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
