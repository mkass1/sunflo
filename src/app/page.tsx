import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import BrandStrip from "@/components/home/BrandStrip";
import FeaturedServices from "@/components/home/FeaturedServices";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import CTABanner from "@/components/layout/CTABanner";

export const metadata: Metadata = {
  title: "Auto Detailing, Ceramic Coatings & Paint Correction in Oakland Park, FL",
  description:
    "Sunflo Detailing — in-house auto detailing, ceramic coatings, paint correction, PPF, vehicle wraps, and window tinting in Oakland Park, FL. Serving South Florida since 2017.",
  alternates: { canonical: "/" },
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
      <CTABanner />
    </>
  );
}
