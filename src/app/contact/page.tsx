import type { Metadata } from "next";
import { MapPin, Clock, Phone } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Contact Sunflo Detailing to book your auto detailing appointment. Located at 4708 NE 11th Ave, Oakland Park, Florida.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-16 bg-dark-muted border-b border-dark-border">
        <Container>
          <SectionHeading
            label="Get in Touch"
            title="Book Your Service"
            subtitle="Fill out the form below and we'll get back to you to confirm your appointment. For urgent inquiries, reach us on Instagram."
          />
        </Container>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-dark">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 bg-dark-card border border-dark-border rounded-sm p-8">
              <h2
                className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Info panel */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-dark-card border border-dark-border rounded-sm p-6">
                <h3
                  className="text-white font-bold mb-5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Business Info
                </h3>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-sm bg-brand-500/10 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Location</p>
                      <a
                        href="https://maps.google.com/?q=4708+NE+11th+Ave+Oakland+Park+Florida"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm hover:text-white transition-colors"
                      >
                        4708 NE 11th Ave<br />Oakland Park, FL
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-sm bg-brand-500/10 flex items-center justify-center shrink-0">
                      <InstagramIcon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Instagram</p>
                      <a
                        href="https://instagram.com/sunflodetailing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm hover:text-brand-400 transition-colors"
                      >
                        @sunflodetailing
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-sm bg-brand-500/10 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Booking</p>
                      <p className="text-gray-300 text-sm">
                        By appointment only.<br />Use the form or DM on Instagram.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-sm bg-brand-500/10 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Hours</p>
                      <p className="text-gray-300 text-sm">
                        Mon – Sat: By Appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-sm overflow-hidden border border-dark-border h-64">
                <iframe
                  title="Sunflo Detailing Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.7!2d-80.1350!3d26.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9097db9bcaef3%3A0x0!2s4708+NE+11th+Ave%2C+Oakland+Park%2C+FL+33334!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-brand-500/10 border border-brand-500/20 rounded-sm p-5">
                <p className="text-brand-300 text-sm leading-relaxed">
                  <strong className="text-white">Established in 2017</strong> — serving South Florida&apos;s most discerning vehicle owners for over 7 years.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
