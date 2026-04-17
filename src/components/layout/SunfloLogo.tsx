import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SunfloLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "nav" | "wide";
}

const sizeMap = {
  sm: { height: 40, width: 90 },
  md: { height: 54, width: 122 },
  lg: { height: 72, width: 162 },
};

const srcMap = {
  nav: "/images/sunflo-logo-nav.png",
  wide: "/images/sunflo-logo-wide.png",
};

export default function SunfloLogo({ className, size = "md", variant = "nav" }: SunfloLogoProps) {
  const { height, width } = sizeMap[size];

  return (
    <Link href="/" className={cn("block shrink-0", className)}>
      <Image
        src={srcMap[variant]}
        alt="Sunflo Detailing"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </Link>
  );
}
