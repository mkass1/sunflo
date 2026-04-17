"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "text-brand-400 fill-brand-400" : "text-gray-700"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPreview() {
  const [featured, ...rest] = testimonials.slice(0, 3);

  return (
    <section className="relative py-20 sm:py-28 bg-dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-brand-500/40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-700/[0.04] blur-[120px]" />
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <SectionHeading
            label="Client Reviews"
            title="What Our Clients Say"
            subtitle="What South Florida drivers say after a Sunflo detail."
            centered
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Featured testimonial — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 relative bg-dark-card/60 backdrop-blur-sm border border-dark-border rounded-sm p-8 flex flex-col overflow-hidden hover:border-brand-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-10 h-px bg-brand-500/70" />
            <div className="absolute top-0 left-0 w-px h-10 bg-brand-500/70" />

            <div className="mb-5">
              <StarRating rating={featured.rating} />
            </div>

            <p className="text-gray-200 text-base leading-relaxed flex-1">
              &ldquo;{featured.text}&rdquo;
            </p>

            <div className="mt-8 pt-5 border-t border-dark-border">
              <p className="text-white font-semibold">{featured.name}</p>
              {featured.vehicle && (
                <p className="text-brand-400/75 text-xs mt-0.5 font-medium tracking-wide">
                  {featured.vehicle}
                </p>
              )}
              {featured.date && (
                <p className="text-gray-500 text-xs mt-0.5">{featured.date}</p>
              )}
            </div>
          </motion.div>

          {/* Remaining two — stacked in right column */}
          <div className="flex flex-col gap-5">
            {rest.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                className="relative bg-dark-card/60 backdrop-blur-sm border border-dark-border rounded-sm p-6 flex flex-col overflow-hidden hover:border-brand-500/30 hover:-translate-y-0.5 transition-all duration-300 flex-1"
              >
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="mt-5 pt-4 border-t border-dark-border">
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  {testimonial.vehicle && (
                    <p className="text-brand-400/75 text-xs mt-0.5 font-medium tracking-wide">
                      {testimonial.vehicle}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
