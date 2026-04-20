import { Check } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export function ServiceList({ title, items }: { title: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-3 h-px bg-brand-500/70" />
        <h4 className="text-[10px] font-semibold text-brand-400 uppercase tracking-[0.18em]">
          {title}
        </h4>
      </div>
      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[13px] text-gray-400 leading-snug">
            <Check size={12} className="text-brand-500 mt-[3px] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PricingTier({
  label,
  price,
  highlighted = false,
}: {
  label: string;
  price: number;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center px-2 pt-3.5 pb-3 border rounded-sm transition-all overflow-hidden ${
        highlighted
          ? "bg-gradient-to-b from-brand-500/[0.08] to-brand-500/[0.02] border-brand-500/40"
          : "bg-gradient-to-b from-dark-muted to-[#0f0f0f] border-dark-border hover:border-brand-500/25"
      }`}
    >
      {/* top hairline accent */}
      <span
        className={`absolute top-0 left-0 right-0 h-px ${
          highlighted ? "bg-brand-500/80" : "bg-brand-500/30"
        }`}
        aria-hidden="true"
      />
      <span className="text-[10px] text-gray-500 uppercase tracking-[0.18em] mb-1.5 font-medium">
        {label}
      </span>
      <span
        className={`text-[1.55rem] font-bold tabular-nums leading-none ${
          highlighted ? "text-white" : "text-white"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {formatPrice(price)}
      </span>
    </div>
  );
}
