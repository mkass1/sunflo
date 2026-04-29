"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types";
import { cn } from "@/lib/utils";

type Category = "all" | "interior" | "exterior" | "ceramic" | "correction";

const categories: { label: string; value: Category }[] = [
  { label: "All Work", value: "all" },
  { label: "Interior", value: "interior" },
  { label: "Exterior", value: "exterior" },
  { label: "Ceramic Coating", value: "ceramic" },
  { label: "Paint Correction", value: "correction" },
];

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === "all"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-sm border transition-all duration-200",
              activeCategory === cat.value
                ? "bg-brand-600 border-brand-600 text-white"
                : "border-dark-border text-gray-400 hover:border-brand-500/40 hover:text-white"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <motion.div layout className="columns-2 md:columns-3 gap-4 space-y-4">
        {/* Pinned video — mounts only after scrolled into view */}
        <div ref={videoRef} className="break-inside-avoid relative overflow-hidden rounded-sm border border-dark-border">
          {videoVisible ? (
            <video
              src="/videos/cinematic-reel-opt.mp4"
              poster="/images/gallery/sunflo-team-lamborghini.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full object-cover"
            />
          ) : (
            <Image
              src="/images/gallery/sunflo-team-lamborghini.jpg"
              alt="Sunflo Detailing cinematic reel"
              width={1280}
              height={720}
              className="w-full object-cover"
            />
          )}
        </div>

        <AnimatePresence>
          {filtered.map((image, i) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm border border-dark-border"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-brand-400 transition-colors p-2"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 text-white hover:text-brand-400 transition-colors p-2"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={filtered[lightboxIndex].width}
                height={filtered[lightboxIndex].height}
                className="max-h-[85vh] w-auto object-contain rounded-sm"
              />
              <p className="mt-3 text-center text-gray-400 text-sm">
                {filtered[lightboxIndex].alt}
              </p>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-white hover:text-brand-400 transition-colors p-2"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
