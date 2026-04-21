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
  title: "Auto Detailing, Ceramic Coatings & Paint Correction — Oakland Park & Fort Lauderdale, FL",
  description:
    "Sunflo Detailing — professional auto detailing, ceramic coatings, paint correction, PPF, vehicle wraps, and window tinting in Oakland Park, FL. Serving Fort Lauderdale and South Florida since 2017.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sunflo Detailing | Premium Auto Detailing in Oakland Park, FL",
    description:
      "Professional auto detailing, ceramic coatings, paint correction, PPF, vehicle wraps, and window tinting in Oakland Park, Florida. Est. 2017.",
    url: "https://www.sunflodetailing.com",
    images: [{ url: "/images/hero/porsche-911.jpg", width: 1920, height: 1080, alt: "Sunflo Detailing — Oakland Park, FL" }],
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
