"use client";

import { useEffect, useState } from "react";
import { MapPin, X } from "lucide-react";
import { contact } from "@/data/contact";

const STORAGE_KEY = "sunflo:moved-banner-dismissed:v1";
const DISMISS_DAYS = 90;

export default function MovedAnnouncement() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const dismissedAt = Number(raw);
      if (!Number.isFinite(dismissedAt)) {
        setVisible(true);
        return;
      }
      const ageMs = Date.now() - dismissedAt;
      if (ageMs > DISMISS_DAYS * 24 * 60 * 60 * 1000) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed z-[150] inset-x-3 bottom-3 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-sm"
    >
      <div className="relative rounded-sm border border-brand-500/30 bg-dark-card/95 backdrop-blur-sm shadow-2xl shadow-black/40 p-5 pr-10">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute top-2.5 right-2.5 text-gray-500 hover:text-white transition-colors p-1 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
        >
          <X size={15} />
        </button>
        <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-400 mb-2">
          We&apos;ve moved
        </p>
        <p className="text-white text-sm leading-relaxed mb-3">
          Same Sunflo team, new Fort Lauderdale studio at{" "}
          <span className="font-semibold">{contact.addressStreet}</span>. Stop by
          anytime.
        </p>
        <a
          href={contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-300 text-sm font-semibold transition-colors"
        >
          <MapPin size={13} />
          Get directions
        </a>
      </div>
    </div>
  );
}
