import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-brand-400 fill-brand-400" : "text-gray-600"}
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-sm p-6 flex flex-col h-full">
      <Quote size={24} className="text-brand-500/40 mb-4" />
      <p className="text-gray-300 text-sm leading-relaxed flex-1">{testimonial.text}</p>
      <div className="mt-6 pt-5 border-t border-dark-border flex items-end justify-between">
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          {testimonial.vehicle && (
            <p className="text-gray-500 text-xs mt-0.5">{testimonial.vehicle}</p>
          )}
          {testimonial.date && (
            <p className="text-gray-600 text-xs mt-0.5">{testimonial.date}</p>
          )}
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
    </div>
  );
}
