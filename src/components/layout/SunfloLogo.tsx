import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SunfloLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { height: 46, width: 70 },
  md: { height: 64, width: 98 },
  lg: { height: 86, width: 132 },
};

export default function SunfloLogo({ className, size = "md" }: SunfloLogoProps) {
  const { height, width } = sizeMap[size];

  return (
    <Link href="/" className={cn("block shrink-0", className)}>
      <Image
        src="/images/sunflo-logo-cropped.jpg"
        alt="Sunflo Detailing"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </Link>
  );
}
