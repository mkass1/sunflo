export interface ServicePricing {
  small: number;
  medium: number;
  large: number;
}

export interface ServiceItem {
  id: string;
  slug?: string;
  name: string;
  tagline: string;
  description: string;
  pricing?: ServicePricing;
  image: string;
  exteriorServices: string[];
  interiorServices: string[];
  benefits?: string[];
  featured?: boolean;
  badge?: string;
  hasTiers?: boolean;
  quoteOnly?: boolean;
  category?: "core" | "specialty" | "alacarte";
}

export type FaqCategory = "services" | "pricing" | "aftercare" | "location";

export interface FAQ {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  vehicle?: string;
  rating: number;
  text: string;
  date?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "interior" | "exterior" | "ceramic" | "correction" | "all";
  width: number;
  height: number;
}

export interface ServiceSection {
  heading: string;
  body: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
  faqs: ServiceFAQ[];
  related: { slug: string; label: string }[];
  ogImage?: string;
}
