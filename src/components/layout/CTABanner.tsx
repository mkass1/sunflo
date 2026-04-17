"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { contact } from "@/data/contact";
import Container from "@/components/ui/Container";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = "Ready to Transform Your Vehicle?",
  subtitle = "Contact us to schedule your service — we'll find a time that works for you.",
  buttonText = "Book Your Service",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative py-20 sm:py-28 bg-dark border-t border-brand-500/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-brand-700/18 rounded-full blur-[180px]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-brand-900/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left — display headline + phone */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-6"
            >
              Oakland Park, FL · Est. 2017
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.06 }}
              className="text-[3.2rem] sm:text-[4.2rem] lg:text-[5rem] font-bold text-white leading-[0.93] tracking-tight mb-10"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </motion.h2>

            <motion.a
              href={contact.phoneHref}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Phone size={16} className="text-brand-400 group-hover:text-brand-300 transition-colors" />
              <span
                className="text-xl font-semibold tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {contact.phone}
              </span>
            </motion.a>
          </div>

          {/* Right — action card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 border border-dark-border rounded-sm bg-dark-card/60 backdrop-blur-sm">
              {/* Corner accent marks */}
              <div className="absolute top-0 left-0 w-10 h-px bg-brand-500/70" />
              <div className="absolute top-0 left-0 w-px h-10 bg-brand-500/70" />
              <div className="absolute bottom-0 right-0 w-10 h-px bg-brand-500/30" />
              <div className="absolute bottom-0 right-0 w-px h-10 bg-brand-500/30" />

              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-4">
                Book An Appointment
              </p>

              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {subtitle}
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href={buttonHref}
                  className="inline-flex items-center justify-center gap-2.5 bg-brand-600 text-white font-semibold px-8 py-4 rounded-sm hover:bg-brand-700 transition-all duration-200 tracking-wide text-sm shadow-lg shadow-brand-500/25 group"
                >
                  {buttonText}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 border border-white/10 text-white/70 font-semibold px-8 py-4 rounded-sm hover:border-brand-500/40 hover:text-white hover:bg-white/[0.04] transition-all duration-200 tracking-wide text-sm group"
                >
                  <Phone size={14} className="text-brand-400 group-hover:text-brand-300 transition-colors" />
                  Call {contact.phone}
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-dark-border flex items-center gap-2 text-gray-600 text-[11px]">
                <MapPin size={11} className="text-brand-500/50 shrink-0" />
                <span>{contact.address}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
