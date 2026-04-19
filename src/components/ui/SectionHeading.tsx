import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  as?: "h1" | "h2";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {label && (
        <p className="mb-3 text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500">
          {label}
        </p>
      )}
      <Tag
        className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={cn("mt-4 max-w-2xl text-base text-gray-400 sm:text-lg leading-relaxed", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
