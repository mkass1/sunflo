"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";

export default function GalleryTeaser() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-dark-muted">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            label="Our Work"
            title="Recent Work"
            subtitle="Real cars, real results — straight out of our Oakland Park shop."
          />
          <Link
            href="/gallery"
            className="shrink-0 inline-flex items-center gap-2.5 border border-white/15 text-white/70 text-sm font-semibold px-5 py-2.5 rounded-sm hover:border-brand-500/50 hover:text-white hover:bg-white/[0.04] transition-all duration-200 tracking-wide group"
          >
            View Full Gallery
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-sm bg-dark-card border border-dark-border aspect-[4/3] hover:border-brand-500/30 transition-colors"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium leading-snug line-clamp-2">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
