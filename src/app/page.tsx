import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import BrandStrip from "@/components/home/BrandStrip";
import FeaturedServices from "@/components/home/FeaturedServices";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import CTABanner from "@/components/layout/CTABanner";
import LocationMap from "@/components/home/LocationMap";

export const metadata: Metadata = {
  title: "Sunflo Detailing | Auto Detailing, Ceramic Coating & Paint Correction in Fort Lauderdale, FL",
  description:
    "Sunflo Detailing is an appointment-only auto detailing studio in Fort Lauderdale, FL offering ceramic coatings, paint correction, PPF, window tinting, vinyl wraps, and full interior/exterior detailing for Broward County drivers.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sunflo Detailing | Premium Auto Detailing in Fort Lauderdale, FL",
    description:
      "Professional auto detailing, ceramic coatings, paint correction, PPF, vehicle wraps, and window tinting in Fort Lauderdale, Florida. Est. 2017.",
    url: "https://www.sunflodetailing.com",
    images: [{ url: "/images/og/sunflo-og.jpg", width: 1200, height: 630, alt: "Sunflo Detailing — Fort Lauderdale, FL" }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <BrandStrip />
      <FeaturedServices />
      <GalleryTeaser />
      <TestimonialsPreview />
      <LocationMap />
      <CTABanner />
    </>
  );
}
