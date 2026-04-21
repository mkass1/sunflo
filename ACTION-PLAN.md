# Sunflo Detailing — Manager Action Plan (Web / SEO)

**Updated:** 2026-04-21  
**Scope:** Code + SEO manager tasks only. Owner tasks are in `docs/seo-owner-actions.md`.

All items from the April 2026 audit pass are marked ✅. Items below are outstanding work.

---

## Critical (Blockers for Launch)

### C1. Wire the real Google Maps CID
**File:** `src/components/home/LocationMap.tsx`  
**When:** Owner provides the full Google Maps browser URL  
**Effort:** 5 minutes

Replace the two placeholder occurrences of the Maps URL with the real `place_id` CID. The TODO comment in the file marks the exact spot. Also generate the review link: `https://search.google.com/local/writereview?placeid=<real_cid>` and add it to `docs/seo-owner-actions.md` item 11.

### C2. Compress the cinematic reel video
**File:** `public/videos/cinematic-reel.mp4` (18.8 MB)  
**When:** Before or immediately after first deploy  
**Effort:** 30 minutes

The video needs to be re-encoded to under 3 MB at 1280×720 with H.264 at ~2 Mbps. Command:
```bash
ffmpeg -i cinematic-reel.mp4 -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart public/videos/cinematic-reel-opt.mp4
```
Then update the `<video>` src in `src/components/gallery/GalleryGrid.tsx`. Also add an IntersectionObserver to only mount the video when it scrolls into view (the component is already "use client", so this is straightforward).

### C3. Sync aggregateRating with live GBP
**File:** `src/app/layout.tsx` (line ~152)  
**When:** Owner confirms current GBP review count + average star rating  
**Effort:** 2 minutes

Update `ratingValue` and `reviewCount` to match live GBP numbers. The TODO comment in the file marks the spot. This should also become a monthly checkin item.

### C4. Verify and deploy
**When:** Owner signals DNS is ready  
**Effort:** 1–2 hours following LAUNCH-CHECKLIST.md

See `LAUNCH-CHECKLIST.md` for the step-by-step.

---

## High (Within 1 Week of Launch)

### H1. Run image optimization script
**File:** `public/images/gallery/*`, `public/images/services/*`  
**Effort:** 20 minutes

```bash
node scripts/optimize-images.mjs
```

The script uses sharp (already installed). After re-enabling `next/image`, Next.js will handle WebP conversion on-the-fly via the built-in optimizer — but pre-optimizing source files reduces the initial conversion delay on first page load.

### H2. Add Jason's last name to Person schema
**Files:** `src/app/layout.tsx`, `src/app/about/page.tsx`  
**When:** Owner confirms last name  
**Effort:** 5 minutes

Two TODO comments mark the exact locations. The full name strengthens Google's entity disambiguation for the Knowledge Panel. Both Person schema nodes should match exactly.

### H3. Add Yelp + Apple Maps URLs to sameAs
**File:** `src/app/layout.tsx` (AutomotiveBusiness sameAs array)  
**When:** Owner claims listings (see owner plan items 5 & 6)  
**Effort:** 5 minutes per listing

Once the owner shares the URLs, add them to the `sameAs` array alongside the existing Instagram, Facebook, and kgmid URLs.

### H4. Add CSP header
**File:** `next.config.ts` (securityHeaders array)  
**Effort:** 45 minutes

Next.js App Router with Framer Motion requires careful CSP tuning. Start with:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://maps.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://www.google.com; connect-src 'self' https://api.resend.com;
```
Test thoroughly — Framer Motion uses inline styles, and Google Maps iframes need `frame-src`. Run Lighthouse after adding to verify no breakage.

### H5. Add IntersectionObserver lazy-mount for video
**File:** `src/components/gallery/GalleryGrid.tsx`  
**Effort:** 20 minutes

The video is currently in the gallery page with `preload="metadata"`. Add a `useRef` + `IntersectionObserver` so the `<video>` element only renders when the gallery section scrolls into view. This prevents the browser from downloading even the metadata until the user scrolls to it.

### H6. Set up Vercel Analytics or Plausible
**Effort:** 30 minutes (Vercel Analytics is zero-config with their dashboard)

```bash
npm install @vercel/analytics
```
Add `<Analytics />` to `src/app/layout.tsx`. No cookie consent required for Vercel Analytics (cookieless). Plausible is also cookieless and GDPR-compliant if preferred.

---

## Medium (Within 1 Month)

### M1. Gallery photo refresh
**When:** Owner supplies 12–20 new before/after photos  
**Effort:** 30 minutes per batch

Add photos to `public/images/gallery/`, update `src/data/gallery.ts` with alt text and metadata. Run the image optimizer after adding. Update the `imageGalleryJsonLd` in `gallery/page.tsx` (it auto-generates from the galleryImages array — just adding entries to gallery.ts is enough).

### M2. Blog / article content (long-tail keywords)
**Effort:** 2–3 hours per article

Create `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx`. Topics by search demand:
1. "How to maintain a ceramic coating in South Florida"
2. "Florida tint laws: what percentage is legal?"
3. "PPF vs ceramic coating: which do you need?"
4. "How much does ceramic coating cost in Fort Lauderdale?"
5. "What to expect from a paint correction appointment"

Add `Article` + `BreadcrumbList` schema per post. Update sitemap to include blog entries.

### M3. Add Review schema items from testimonials
**File:** `src/app/layout.tsx` (already has `review:` array mapped from testimonials)  
**Effort:** 30 minutes

Verify each `testimonials` item in `src/data/testimonials.ts` has a `date` field. Add `datePublished` to any missing. Add `reviewUrl` pointing to the Google review URL for items where it's known.

### M4. Service OG images
**Effort:** 2 hours

Each of the 4 service detail pages currently falls back to `porsche-911.jpg` for OpenGraph. Create or commission a unique OG image for each service (1200×630) and add them to `servicePages` data in `src/data/service-pages.ts` as `ogImage`.

### M5. City page OG images
**Effort:** 1 hour

The 5 city landing pages at `/locations/[city]` currently have no `openGraph.images`. Add a suitable image to the `generateMetadata` function or to the city data. A single high-quality shop/vehicle photo with the brand bar is acceptable as a shared city OG.

### M6. Topic cluster build-out
**Effort:** 4–6 hours

The ceramic coating service page is the natural hub. Planned spokes:
- Ceramic coating vs wax (Fort Lauderdale focus)
- How long does ceramic coating last in Florida?
- Ceramic coating aftercare guide
- Ceramic coating cost guide (Oakland Park / South Florida)

Internal link each spoke back to `/services/ceramic-coating`. Add to sitemap.

---

## Low (Backlog)

### L1. Search action in WebSite schema
If an internal search is ever added to the site, add `potentialAction: { "@type": "SearchAction" }` to the WebSite schema in `layout.tsx`. No action needed until search exists.

### L2. Favicon audit
Verify `public/favicon.ico` and `public/favicon.png` are high-quality and the correct dimensions. Next.js 13+ supports `app/favicon.ico` and `app/apple-icon.png` in the app directory — consider migrating.

### L3. Structured data for individual service packages
The service pages describe specific packages (e.g., Gloss Enhancement $800, Paint Correction $2,000–$3,000). Adding individual `Offer` items with explicit `price` fields to the Service schema could enable Rich Results for pricing in SERPs. Currently blocked by lack of `priceRange` in the data model.

### L4. Remove `.DS_Store` from public/
Add `public/**/.DS_Store` to `.gitignore`. Confirm it's not committed to the repo — visible `.DS_Store` files waste crawl budget (though Next.js won't serve them by default, they should not be tracked).

---

## Post-Deploy Verification (run after DNS is live)

1. `curl -I https://sunflodetailing.com/` — confirm 200, HSTS header present
2. `curl https://sunflodetailing.com/sitemap.xml` — confirm 15 URLs, all with lastModified
3. `curl https://sunflodetailing.com/robots.txt` — confirm AI crawler allow rules
4. Lighthouse audit on live URL (not localhost) — target: Performance ≥85, SEO 100, Best Practices ≥95, Accessibility ≥90
5. Google Rich Results Test: paste `/services/ceramic-coating` and `/about` JSON-LD — expect 0 errors
6. Submit sitemap to GSC + Bing Webmaster Tools
7. Verify Resend contact form end-to-end: submit `/contact` form → confirm email arrives in Gmail

---

*Action plan maintained by Matthew Kass. Last updated 2026-04-21.*  
*See `FULL-AUDIT-REPORT.md` for full findings context.*
