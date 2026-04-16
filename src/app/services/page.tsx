import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import CTABanner from "@/components/layout/CTABanner";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore Sunflo Detailing's full range of services — from interior detailing to full paint correction and ceramic coatings. Serving Oakland Park and South Florida.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-16 bg-dark-muted border-b border-dark-border">
        <Container>
          <SectionHeading
            label="Services & Pricing"
            title="Detailing Packages"
            subtitle="Transparent pricing, no hidden fees. Every package is tailored to your vehicle size — Small, Medium, or Large — so you only pay for what you need."
          />
        </Container>
      </section>

      {/* Service grid */}
      <section className="py-20 bg-dark">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Additional services note */}
          <div className="mt-12 p-6 bg-dark-card border border-dark-border rounded-sm text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              We also offer{" "}
              <span className="text-white font-medium">paint protection film (PPF)</span>,{" "}
              <span className="text-white font-medium">window tinting</span>,{" "}
              and <span className="text-white font-medium">vinyl wraps</span>.{" "}
              <a href="/contact" className="text-brand-400 hover:text-brand-300 transition-colors font-medium">
                Contact us for a custom quote.
              </a>
            </p>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
