"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-dark">
      <div className="flex items-center justify-between px-6 py-5 border-b border-dark-border">
        <span className="text-white font-bold tracking-widest text-lg">MENU</span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors p-1"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex flex-col px-6 py-8 gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              "py-4 text-2xl font-semibold border-b border-dark-border transition-colors",
              pathname === link.href
                ? "text-brand-500"
                : "text-gray-300 hover:text-white"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto px-6 py-8">
        <Link
          href="/contact"
          onClick={onClose}
          className="block w-full bg-brand-500 text-white text-center font-semibold py-4 rounded-sm tracking-wide hover:bg-brand-600 transition-colors"
        >
          Book Your Service
        </Link>
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>4708 NE 11th Ave, Oakland Park, FL</p>
          <p className="mt-1">Est. 2017</p>
        </div>
      </div>
    </div>
  );
}
