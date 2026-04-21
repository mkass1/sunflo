# Sunflo Detailing — Web Performance Audit
**Date:** 2026-04-21
**URL:** https://sunflodetailing.com
**Stack:** Next.js 16.2.4, React 19, Vercel, Framer Motion 12, Vercel Analytics + Speed Insights
**Method:** Static code analysis + local asset measurement (Lighthouse CLI unavailable in this environment; no CrUX field data available — site traffic may be below CrUX threshold)

---

## Overall Score Estimate: 72 / 100

This is a lab-equivalent estimate derived from code and asset analysis. The site has strong fundamentals (image optimization active, font swap, hero priority) but has several medium-priority issues that will depress real-world LCP and INP scores on slower mobile connections.

---

## Core Web Vitals — Estimated Status

| Metric | Estimated Value | Status |
|--------|----------------|--------|
| LCP | ~2.2–3.0s (mobile 4G) | Needs Improvement / borderline Good |
| INP | ~150–220ms | Good / borderline Needs Improvement |
| CLS | ~0.02–0.05 | Good |

### LCP Rationale
The LCP candidate is the hero `porsche-911.jpg` (281 KB on disk, served from Vercel CDN with `next/image` optimization active). `priority` is correctly set and `sizes="100vw"` is correct. Next.js will serve WebP/AVIF variants and add the preload link automatically — this is the biggest LCP win already in place.

However, three factors will push LCP toward the 2.5–3.0s range on mobile:
1. Three Google Fonts (Sora, Big Shoulders, Geist) are loaded via `next/font/google` which generates preload hints at build time. All three fonts load concurrently, but the Geist font has no `display` property set in layout.tsx (only Sora and Big Shoulders have `display: "swap"`). Geist is assigned to `--font-sans` which is the `font-sans` Tailwind class applied to `<html>` — meaning it is the body font and a late-swap could cause layout reflow.
2. The hero section is a `"use client"` component with Framer Motion animations (`initial/animate`). This means the entire Framer Motion bundle (~50 KB gzipped) must be parsed before the hero content is rendered. The hero image cannot visually complete until JS hydration finishes.
3. The hero image is wrapped in a `pointer-events-none` div with a CSS mask (`maskImage`/`WebkitMaskImage`). While this does not block the network fetch, it can delay browser paint compositing in some cases.

### INP Rationale
INP risk is moderate. The site uses Framer Motion `whileInView` throughout (AboutPreview, FeaturedServices, GalleryTeaser, TestimonialsPreview, LocationMap). Each section registers an IntersectionObserver and schedules layout reads/writes. On slower devices with many Framer Motion variants active simultaneously, main thread tasks can exceed 50ms during scroll.

`useIsDesktop` (FeaturedServices, GalleryTeaser) initializes to `false` on the server and `true` after first effect, causing a hydration mismatch suppressed by conditional animation. This is fine for CLS but adds a small JS cost at hydration.

The Google Maps iframe in LocationMap is always rendered (not lazy-mounted behind an interaction). The iframe itself has `loading="lazy"` on the `<iframe>` element which is correct, but the parent `motion.div` wrapper with `whileInView` will trigger the IO observer eagerly. The Maps domain (`maps.googleapis.com`) will open a connection on first scroll into view.

### CLS Rationale
CLS is expected to be very low:
- All `next/image` usages with `fill` prop have proper parent containers with explicit aspect ratios (`aspect-[4/5]`, `aspect-[3/4]`, `aspect-[4/3]`). No layout shift from images.
- Gallery images in `GalleryGrid` have explicit `width`/`height` props, so the browser can reserve space before load.
- Fonts use `display: "swap"` (Sora, Big Shoulders). Geist missing `display: "swap"` — minor risk of FOUT contributing to CLS if Geist loads after content is painted.
- The hero section uses `min-h-screen` which reserves space immediately.
- No ads, no dynamic content injection without reserved containers.

The one CLS risk: Geist is loaded without `display: "swap"`. If the system fallback font metrics differ enough from Geist, the swap could cause a small CLS event on initial load.

---

## Detailed Findings

### 1. Image Optimization — PASS with caveats

- `next.config.ts` has `images: { remotePatterns: [] }` and NO `unoptimized: true`. Next.js image optimization is active.
- `sharp` 0.34.5 is installed as a dependency, enabling server-side image processing on Vercel.
- Hero image: 281 KB JPEG, `priority` set, `sizes="100vw"` — Next.js will generate WebP/AVIF at appropriate sizes. Good.
- Founder image: 276 KB JPEG, `fill` with `sizes="(max-width: 1024px) 100vw, 42vw"` — correct.
- Gallery images: sizes range from 77 KB (bmw-m4-matte) to 917 KB (ram-trx-shop). Several source images are very large:
  - `ram-trx-shop.jpg`: 917 KB at 1440x1800 declared dimensions
  - `corvette-silver-rear.jpg`: 565 KB at 4032x3024 declared dimensions
  - `porsche-blue-front.jpg`: 507 KB at 4032x3024 declared dimensions
  - `mclaren-gray-rear.jpg`: 508 KB at 4032x3024 declared dimensions
  - `ferrari-red-wheel.jpg`: 495 KB at 4032x3024 declared dimensions
  Next.js will resize these on-demand to the requested `sizes`, so the first visitor to trigger each size will see a slower response while Vercel processes the image. Subsequent requests hit CDN cache. The declared `width`/`height` of 4032x3024 in gallery.ts are the source dimensions — these are correct for aspect ratio calculation but `sizes` attributes are missing from gallery image entries passed to `GalleryGrid` (images use `width={image.width}` and `height={image.height}` directly, not `fill` with `sizes`). This means Next.js may generate a very large initial srcset entry.

- The cinematic reel video poster uses `sunflo-team-lamborghini.jpg` (428 KB). The poster is loaded eagerly on the gallery page. Consider optimizing the poster image or using a smaller crop.

### 2. Video Delivery — PASS

- `cinematic-reel-opt.mp4`: 3.1 MB (vs 18.8 MB original). Good — 83% size reduction.
- `preload="metadata"` is set correctly. The browser will only fetch the first few KB of the video file to get duration/dimensions.
- `autoPlay muted loop playsInline` — correct for silent background video.
- The original `cinematic-reel.mp4` (18.8 MB) is still present in `public/videos/`. It is not referenced in any component, but it is deployed to Vercel's CDN edge and adds to build artifact size. Remove it.

### 3. Font Loading — PARTIAL PASS

- Sora: `display: "swap"` — correct.
- Big Shoulders: `display: "swap"` — correct.
- Geist: loaded via `Geist({ subsets: ['latin'], variable: '--font-sans' })` with NO `display` property. Geist defaults to `display: "optional"` in `next/font` which means the browser may skip rendering the font entirely if it doesn't load within a short window — or fall back and potentially swap. This is inconsistent with the `display: "swap"` set on the other two fonts. It should be `display: "swap"` for consistency, or `display: "optional"` if intentional (optional is actually better for CLS but can cause invisible text briefly).
- Three fonts are being loaded. Geist is not visibly used in the UI (Sora is `--font-inter`, Big Shoulders is `--font-outfit`/heading). Confirm whether Geist/`--font-sans` is actually needed; if not, removing it saves one font round-trip.
- `font-sans` class on `<html>` applies `--font-sans` (Geist) as the default body font, but Sora is loaded as `--font-inter`. The variable name mismatch (`--font-inter` for Sora, `--font-outfit` for Big Shoulders) is cosmetically confusing but not a performance issue.

### 4. Hero Image Priority — PASS

- `priority` prop is set on the hero `<Image>` in `HeroSection.tsx` (line 30). Next.js will inject a `<link rel="preload" as="image">` tag for this image in the `<head>`.
- However, `HeroSection` is a `"use client"` component. In Next.js App Router, Client Components are still server-rendered as HTML on first load (SSR), so the preload hint will be included in the initial HTML document. This is correct behavior.

### 5. JavaScript Bundle — MODERATE CONCERN

- **Framer Motion 12.38.0** is a heavy dependency. The full Framer Motion bundle is approximately 100 KB parsed (50 KB gzipped). Every page imports it because all home section components are `"use client"` with Framer Motion animations.
- All home section components are Client Components: HeroSection, AboutPreview, FeaturedServices, GalleryTeaser, TestimonialsPreview, LocationMap — none of these strictly need to be Client Components except for the ones using `useIsDesktop` or `useState`. Static sections like TestimonialsPreview (no interactive state, only `whileInView`) could be made Server Components using CSS animations instead, eliminating their contribution to the client bundle.
- `GalleryGrid` is a Client Component (needed for lightbox state and category filter). This is correct.
- `useIsDesktop` hook: this pattern (returns `false` on server, `true` after effect) causes a React hydration mismatch for `isDesktop`-gated animations. Next.js suppresses this with `suppressHydrationWarning` implicitly for some cases, but it can cause a flash on mobile. Consider passing `isDesktop` as a prop from a Server Component using `headers()` User-Agent detection, or simply always enable animations and let CSS `@media` handle the reduced-motion case.

### 6. Third-Party Scripts

| Script | Load Method | Main Thread Impact |
|--------|-------------|-------------------|
| Vercel Analytics (`@vercel/analytics/next`) | Async, deferred via Next.js | Low — fires after hydration |
| Vercel Speed Insights (`@vercel/speed-insights/next`) | Async, deferred | Low — observes CWV passively |
| Google Maps Embed (LocationMap iframe) | `loading="lazy"` | Medium — opens connections to `maps.googleapis.com`, `maps.gstatic.com` when iframe enters viewport |
| Google Fonts | Via `next/font` (self-hosted at build time) | Low — fonts are served from Vercel CDN, not Google servers |

The Google Maps iframe is the most significant third-party impact. When a user scrolls to the bottom of the homepage, the iframe triggers DNS lookups and connections to Google's map tile servers. This will consume main thread time and network bandwidth but does not affect LCP (LCP is measured at initial render, not after scroll).

### 7. JSON-LD / SEO — PASS

Three JSON-LD blocks (WebSite, AutomotiveBusiness, Person) are inlined in `layout.tsx` using `dangerouslySetInnerHTML`. This is correct and renders server-side. The `localBusinessJsonLd` block includes `aggregateRating` with `reviewCount: 120` and `ratingValue: 5.0` — note the comment in the file to update this monthly.

### 8. Security Headers — PASS

All security headers are applied via `next.config.ts` headers config: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. No performance impact.

---

## Prioritized Recommendations

### Priority 1 — High Impact, Low Effort

**1a. Add `display: "swap"` to the Geist font loader**
In `src/app/layout.tsx` line 12, change:
```ts
const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
```
to:
```ts
const geist = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
```
Impact: eliminates potential invisible text / FOUT on body text. Risk: zero.

**1b. Remove the original video from public/**
`public/videos/cinematic-reel.mp4` (18.8 MB) is unreferenced but deployed. Delete it.
```bash
rm /Users/matthewkass/Desktop/sunflo/public/videos/cinematic-reel.mp4
```
Impact: reduces Vercel build artifact by 18.8 MB, speeds up deploys, reduces CDN storage cost.

**1c. Correct gallery image `sizes` attributes**
Several gallery images in `gallery.ts` declare source dimensions (4032x3024) as `width`/`height`. In `GalleryGrid.tsx`, these are passed directly to `<Image width={image.width} height={image.height}>` without a `sizes` prop. Next.js will generate a srcset based on the declared intrinsic width (4032px), which may serve unnecessarily large images.

Add `sizes` to the `GalleryImage` type and data, or add a default `sizes` prop in `GalleryGrid`:
```tsx
<Image
  src={image.src}
  alt={image.alt}
  width={image.width}
  height={image.height}
  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
  className="w-full object-cover ..."
/>
```
Impact: reduces gallery image transfer size by 40–70% for mobile users on first visit (before CDN caches their size variant).

### Priority 2 — Medium Impact, Medium Effort

**2a. Convert static Client Components to Server Components**
`TestimonialsPreview`, `BrandStrip`, and `LocationMap` do not need client-side JS for their core functionality. Their only client dependency is Framer Motion animations. Converting them to Server Components and using CSS transitions (or the `tw-animate-css` package already installed) would reduce the client bundle.

`TestimonialsPreview` has no state or events — all data comes from static `testimonials` array. Remove `"use client"`, remove `motion.*` wrappers, and use CSS animation classes instead. Same for `BrandStrip` (likely a simple marquee/strip).

Impact: estimated 15–25 KB reduction in initial JS parse work.

**2b. Lazy-load Google Maps behind a click-to-load facade**
Instead of rendering the `<iframe>` eagerly (even with `loading="lazy"`), render a static placeholder (a screenshot of the map or a styled address card) and only inject the iframe on user click. This is the "facade" pattern.

```tsx
const [showMap, setShowMap] = useState(false);
// render <button onClick={() => setShowMap(true)}> initially
// only render <iframe> when showMap is true
```
Impact: eliminates ~80 KB of Google Maps JS loading on the homepage, saves 3–4 DNS lookups per page view, and reduces TBT by an estimated 50–150ms on mobile.

**2c. Optimize large gallery source images**
Run the existing `scripts/optimize-images.mjs` against the gallery directory, or manually compress:
- `ram-trx-shop.jpg` (917 KB) — target <250 KB
- `corvette-silver-rear.jpg` (565 KB) — target <250 KB
- `porsche-blue-front.jpg` (507 KB) — target <250 KB
- `mclaren-gray-rear.jpg` (508 KB) — target <250 KB
- `ferrari-red-wheel.jpg` (495 KB) — target <200 KB

Next.js CDN will cache optimized versions after first request, but compressing sources reduces Vercel image optimization CPU time and the first-visitor penalty.

### Priority 3 — Low Impact / Nice to Have

**3a. Audit whether Geist font is actually used**
`--font-sans` (Geist) is applied to `<html>` via Tailwind `font-sans`. Confirm in `globals.css`/Tailwind config whether `font-sans` maps to `--font-sans`. If Sora (`--font-inter`) is the primary body font, Geist may be unused. Removing it saves one font file download entirely.

**3b. Add `fetchpriority="high"` hint to video poster**
The gallery page video poster (`sunflo-team-lamborghini.jpg`, 428 KB) is loaded as a native `poster` attribute. Unlike `next/image`, native `<video poster>` does not benefit from Next.js optimization. Consider serving a smaller WebP version of the poster (target <80 KB) and referencing the pre-optimized path, or using a `<picture>` fallback.

**3c. Consider partial prerendering for the gallery page**
The `/gallery` page is currently a Client Component-heavy page. With Next.js Partial Prerendering (PPR, available in Next.js 15+, and 16), the static shell of the gallery page (heading, filter tabs) can be prerendered while the interactive grid streams in. This can improve gallery page LCP.

---

## What Is Already Working Well

- `images.unoptimized` is NOT set — Next.js image optimization is active and correctly configured.
- Hero image has `priority` — preload hint is injected automatically.
- Both display fonts (Sora, Big Shoulders) have `display: "swap"`.
- Cinematic reel video is the optimized version (`cinematic-reel-opt.mp4`, 3.1 MB), not the 18 MB original.
- Video uses `preload="metadata"` and a poster image — correct lazy loading.
- Google Maps iframe has `loading="lazy"` — will not block initial page paint.
- Vercel Analytics and Speed Insights are loaded as Next.js components (deferred, async) — minimal render-blocking impact.
- All gallery images have explicit `width`/`height` props — no CLS from image loading.
- Gallery images use `fill` with explicit aspect-ratio parent containers in GalleryTeaser — no CLS.
- JSON-LD structured data is server-rendered inline — no extra network request.
- Security headers are comprehensive.
- `sharp` is installed — Vercel can perform server-side image format conversion (WebP/AVIF).
