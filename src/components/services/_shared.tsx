import { Check } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export function ServiceList({ title, items }: { title: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h4 className="text-xs font-semibold text-brand-400 uppercase tracking-[0.14em] mb-3">
        {title}
      </h4>
      <ul className="grid sm:grid-cols-2 gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
            <Check size={13} className="text-brand-500 mt-0.5 shrink-0" />
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
      className={`flex flex-col items-center p-4 border rounded-sm transition-colors ${
        highlighted
          ? "bg-brand-500/[0.06] border-brand-500/40"
          : "bg-dark-muted border-dark-border"
      }`}
    >
      <span className="text-xs text-gray-500 uppercase tracking-[0.14em] mb-2">{label}</span>
      <span
        className="text-2xl font-bold text-white tabular-nums"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {formatPrice(price)}
      </span>
    </div>
  );
}
