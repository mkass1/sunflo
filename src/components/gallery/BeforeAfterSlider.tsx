"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const clamp = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
    setHasInteracted(true);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging) clamp(e.clientX); };
    const onUp = () => setDragging(false);
    const onTouchMove = (e: TouchEvent) => { if (dragging) clamp(e.touches[0].clientX); };
    const onTouchEnd = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [dragging, clamp]);

  return (
    <div className="break-inside-avoid relative overflow-hidden rounded-sm border border-dark-border select-none cursor-col-resize"
      style={{ aspectRatio: "3 / 4" }}
      ref={containerRef}
      onMouseDown={(e) => { e.preventDefault(); setDragging(true); clamp(e.clientX); }}
      onTouchStart={(e) => { setDragging(true); clamp(e.touches[0].clientX); }}
    >
      {/* After — base layer */}
      <Image
        src="/images/gallery/wheel-after.jpg"
        alt="After detailing — polished mirror-finish wheel"
        fill
        className="object-cover object-center pointer-events-none"
        sizes="(max-width: 640px) 100vw, 512px"
      />

      {/* Before — clipped to the left of the divider */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src="/images/gallery/wheel-before.jpg"
          alt="Before detailing — dirty brake-dust covered wheel"
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 512px"
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-10"
        style={{ left: `calc(${position}% - 1px)`, width: "2px" }}
      >
        <div className="absolute inset-0 bg-brand-500" />
        <div className="absolute inset-0 bg-brand-400 blur-md opacity-40" />
      </div>

      {/* Handle */}
      <div
        className="absolute top-1/2 z-20 pointer-events-none"
        style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
      >
        <div className="w-8 h-8 rounded-full bg-brand-500 border-2 border-white shadow-lg shadow-brand-500/50 flex items-center justify-center gap-[3px]">
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path d="M5 1L1 5L5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Before label */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="text-[9px] font-bold tracking-[0.18em] uppercase px-2 py-1 rounded-[2px] bg-black/60 text-white/60 border border-white/10" style={{ backdropFilter: "blur(4px)" }}>
          Before
        </span>
      </div>

      {/* After label */}
      <div className="absolute top-3 right-3 z-10 pointer-events-none">
        <span className="text-[9px] font-bold tracking-[0.18em] uppercase px-2 py-1 rounded-[2px] bg-brand-600/80 text-white" style={{ backdropFilter: "blur(4px)" }}>
          After
        </span>
      </div>

      {/* Drag hint — fades once user interacts */}
      {!hasInteracted && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-white/50 px-3 py-1 rounded-full border border-white/10 bg-black/50" style={{ backdropFilter: "blur(6px)" }}>
            Drag to compare
          </span>
        </div>
      )}
    </div>
  );
}
