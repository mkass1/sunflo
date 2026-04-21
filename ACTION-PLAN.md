# Sunflo Detailing — Manager Action Plan (Web / SEO)

**Updated:** 2026-04-21 (post-launch live pass)  
**Scope:** Code + SEO manager tasks only. Owner tasks are in `docs/seo-owner-actions.md`.

See `FULL-AUDIT-REPORT.md` for the full post-launch findings and updated score (86/100).

---

## Resolved — Post-Launch Pass (2026-04-21 evening)

| Item | Resolution |
|---|---|
| ~~C1. Wire the real Google Maps CID~~ | ✅ Real CID `0x88d9a7071fb518fb:0x8db1839c761770d4` added to both `LocationMap.tsx` and `contact/page.tsx` |
| ~~C2. Compress the cinematic reel video~~ | ✅ Original 18.8 MB file deleted; `cinematic-reel-opt.mp4` (3 MB) is the only version |
| ~~C4. Verify and deploy~~ | ✅ Site is live at https://www.sunflodetailing.com |
| ~~H2. Add Jason's last name to Person schema~~ | ✅ `about/page.tsx` body copy updated; schema was already correct |
| ~~H6. Set up Vercel Analytics~~ | ✅ Analytics + SpeedInsights deployed |
| www/non-www canonical mismatch | ✅ All 10 SITE_URL instances updated to www |
| GeoCoordinates 1.4 km off | ✅ Fixed to 26.185207 / -80.135131 |
| Review schema type errors | ✅ ratingValue/bestRating/worstRating are numbers |
| Phone hidden on mobile | ✅ Removed `hidden sm:inline` from Navbar |
| FAQ #9 CashApp missing | ✅ Added to payment methods |
| FAQ #18 "hundreds" inconsistency | ✅ Updated to "more than 2,000 vehicles" |
| llms.txt non-www URLs | ✅ All 9 URLs updated to www |
| /locations 404 on breadcrumb | ✅ `/locations/page.tsx` created |
| Hardcoded non-www OG urls (services, gallery) | ✅ Fixed to use SITE_URL const |

---

## Critical (Fix Now)

### C1. Add CSP header
**File:** `next.config.ts` (securityHeaders array)  
**Effort:** 45–60 minutes

Only remaining security header gap. Start with:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://www.google.com; connect-src 'self' https://api.resend.com https://vitals.vercel-insights.com;
```
Test carefully — Framer Motion uses inline styles. Run Lighthouse after adding to verify no breakage.

### C2. Sync aggregateRating with live GBP
**File:** `src/app/layout.tsx` (line ~154)  
**When:** Owner confirms current GBP review count + average star rating  
**Effort:** 2 minutes

The comment reads "Verified 2026-04-21 — update reviewCount monthly to match live GBP." Get the actual live count from the owner and update `reviewCount: 120` to the real number.

---

## High (This Week)

### H1. Run image optimization script
**File:** `public/images/gallery/*`, `public/images/services/*`  
**Effort:** 20 minutes

```bash
node scripts/optimize-images.mjs
```

Sharp is installed. Pre-optimizing source files reduces the initial WebP conversion delay on first page load.

### H2. Add Yelp + Apple Maps URLs to sameAs
**File:** `src/app/layout.tsx` (AutomotiveBusiness sameAs array)  
**When:** Owner claims listings (see owner plan items 5 & 6)  
**Effort:** 5 minutes per listing

Once the owner shares the URLs, add them to the `sameAs` array alongside the existing Instagram, Facebook, and kgmid URLs.

### H3. Add IntersectionObserver lazy-mount for video
**File:** `src/components/gallery/GalleryGrid.tsx`  
**Effort:** 20 minutes

The video currently uses `preload="metadata"`. Add `useRef` + `IntersectionObserver` so the `<video>` element only renders when scrolled into view. The component is already "use client".

### H4. Submit sitemap to GSC + Bing
**When:** Owner confirms GSC is set up  
**Effort:** 10 minutes

Ensure `https://www.sunflodetailing.com/sitemap.xml` is submitted. The sitemap currently has 16 URLs (added `/locations` this pass). Also request indexing for homepage, `/services/ceramic-coating`, `/about`, `/locations/fort-lauderdale` via URL Inspection.

---

## Medium (Within 30 Days)

### M1. Gallery photo refresh
**When:** Owner supplies 12–20 new before/after photos  
**Effort:** 30 minutes per batch

Add to `public/images/gallery/`, update `src/data/gallery.ts` with alt text. Run the image optimizer after each batch.

### M2. Service OG images (4 needed)
**Effort:** 2 hours

Each service detail page falls back to `porsche-911.jpg` for OpenGraph. Create or commission 4 unique 1200×630 images and add them to `src/data/service-pages.ts` as `ogImage`.

### M3. City page OG images (5 needed)
**Effort:** 1 hour

City landing pages have no `openGraph.images`. Add a shared brand image or city-specific photo to `generateMetadata` in `locations/[city]/page.tsx`.

### M4. Add Review schema datePublished + reviewUrl
**File:** `src/app/layout.tsx` (review array), `src/data/testimonials.ts`  
**Effort:** 30 minutes

Add `datePublished` to all testimonial items missing a `date` field. Add `reviewUrl` to any item with a known Google review URL.

### M5. Structured data for individual service Offer prices
**Files:** `src/data/service-pages.ts`, `src/app/services/[slug]/page.tsx`  
**Effort:** 1 hour

The Services schema currently uses `priceRange`. Add explicit `Offer` items per vehicle tier (Small/Medium/Large) to enable SERP pricing rich results.

### M6. Blog pillar + spoke build-out
**Effort:** 3–4 hours per article

Create `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx`. Highest-demand topics for this market:
1. "How to maintain a ceramic coating in South Florida" → links to `/services/ceramic-coating`
2. "Florida tint laws 2026: what's actually legal on each window" → links to `/services/window-tinting`
3. "PPF vs ceramic coating: which one for your car?" → links to both
4. "How much does ceramic coating cost in Fort Lauderdale?" → links to `/services/ceramic-coating`
5. "What to expect from a paint correction appointment"

Add `Article` + `BreadcrumbList` schema per post.

---

## Low (Backlog)

### L1. Favicon audit
Verify `public/favicon.ico` and `public/favicon.png` dimensions. Consider migrating to Next.js 15+ `app/favicon.ico` + `app/apple-icon.png`.

### L2. Search action in WebSite schema
If internal search is ever added, add `potentialAction: { "@type": "SearchAction" }` to WebSite schema in `layout.tsx`.

### L3. Remove `.DS_Store` from public/
Add `public/**/.DS_Store` to `.gitignore`.

---

## Ongoing (Monthly)

1. Sync `aggregateRating.reviewCount` in `layout.tsx` with live GBP count (owner sends number on 1st of month)
2. Run `node scripts/optimize-images.mjs` after any new images land in `public/`
3. Add new Yelp/Apple Maps/Bing Places URLs to `sameAs` as owner claims each listing
4. Check GSC for new keyword impressions — update city/service page copy to target emerging terms

---

## Verification Commands

```bash
# www canonical serving correctly (should return 200 and www canonical)
curl -I https://www.sunflodetailing.com/

# non-www redirects to www with 308 or 301 (not 307)
curl -I https://sunflodetailing.com/

# sitemap has 16 URLs
curl https://www.sunflodetailing.com/sitemap.xml | grep -c '<url>'

# robots.txt AI crawler rules present
curl https://www.sunflodetailing.com/robots.txt
```

---

*Action plan maintained by Matthew Kass. Last updated 2026-04-21 (post-launch live pass).*  
*See `FULL-AUDIT-REPORT.md` for full findings context.*
