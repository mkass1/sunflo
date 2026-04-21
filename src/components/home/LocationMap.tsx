"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car } from "lucide-react";
import { contact } from "@/data/contact";
import Container from "@/components/ui/Container";

export default function LocationMap() {
  return (
    <section className="relative py-20 sm:py-28 bg-dark border-t border-dark-border">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 rounded-sm overflow-hidden border border-dark-border min-h-[280px]"
          >
            <iframe
              title="Sunflo Detailing Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3525503083524!2d-80.13513052466247!3d26.185207477088312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a7071fb518fb%3A0x8db1839c761770d4!2sSunflo%20Detailing!5e0!3m2!1sen!2sus!4v1776789160519!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)", display: "block", minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-center gap-6"
          >
            <div>
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-3">
                Find Us
              </p>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-brand-400 shrink-0 mt-0.5" />
                <span className="text-white text-sm leading-relaxed">{contact.address}</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=4708+NE+11th+Ave+Oakland+Park+Florida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-brand-500/40 text-brand-400 text-sm font-semibold px-5 py-3 rounded-sm hover:bg-brand-500/10 hover:border-brand-500/70 hover:text-brand-300 transition-all duration-200 tracking-wide group w-fit"
            >
              <Navigation size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              Get Directions
            </a>

            <div className="relative border border-brand-500/25 bg-brand-500/[0.07] rounded-sm p-4 flex items-start gap-3">
              <div className="absolute top-0 left-0 w-6 h-px bg-brand-500/60" />
              <div className="absolute top-0 left-0 w-px h-6 bg-brand-500/60" />
              <Car size={15} className="text-brand-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-400 mb-1">
                  Studio or Mobile
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Drop off at our Oakland Park studio, or we come to you. Same professional results either way — call to discuss which works best for your service.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-gray-400 mb-2">
                Areas Served
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Oakland Park · Fort Lauderdale · Wilton Manors · Pompano Beach · Lighthouse Point · Lauderdale-by-the-Sea · South Florida
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
