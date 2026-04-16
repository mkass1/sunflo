"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const brands = ["CarPro", "ShineSupply", "XPEL", "3M"];

export default function BrandStrip() {
  return (
    <section className="relative py-16 bg-dark border-y border-dark-border">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-gray-500">
            Brands We Trust &amp; Use Every Day
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          >
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-xl sm:text-2xl font-bold text-gray-500 hover:text-gray-300 transition-colors tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
