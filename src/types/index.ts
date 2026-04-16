export interface ServicePricing {
  small: number;
  medium: number;
  large: number;
}

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pricing: ServicePricing;
  image: string;
  exteriorServices: string[];
  interiorServices: string[];
  benefits?: string[];
  featured?: boolean;
  badge?: string;
}

export interface FAQ {
  id: string;
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
