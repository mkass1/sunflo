"use client";

import { usePathname } from "next/navigation";
import LocationMap from "@/components/home/LocationMap";

export default function LocationMapWrapper() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return <LocationMap />;
}
