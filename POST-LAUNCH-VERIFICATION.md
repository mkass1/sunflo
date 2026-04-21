# Sunflo Detailing — Post-Launch Verification

**Site went live:** 2026-04-21  
**Converted from:** `LAUNCH-CHECKLIST.md` (pre-launch reference)  
**Status as of:** 2026-04-21 evening — post-launch live pass complete

This document records the verified state of each launch checklist item. Items marked ✅ are confirmed done. Items marked ❌ are outstanding. Items marked ❓ require owner action to verify.

---

## Phase 1: Environment & Code

| Item | Status | Notes |
|---|---|---|
| `RESEND_API_KEY` env variable set in Vercel | ❓ | Owner-set — verify contact form delivers email |
| `CONTACT_FORM_TO_EMAIL` env variable set | ❓ | Should be `sunflodetailing@gmail.com` |
| Real Google Maps CID wired | ✅ | CID `0x88d9a7071fb518fb:0x8db1839c761770d4` in both `LocationMap.tsx` and `contact/page.tsx` |
| aggregateRating synced to live GBP | ❌ | Currently hardcoded 120 reviews / 5.0 stars — owner must confirm live count |
| Jason surname in Person schema | ✅ | `layout.tsx` ownerJsonLd and `about/page.tsx` personJsonLd both say "Jason Girasol" |
| Jason surname in /about body copy | ✅ | "Jason Girasol started Sunflo Detailing in Oakland Park in 2017" |
| www canonical mismatch | ✅ | All 10 SITE_URL instances updated to `https://www.sunflodetailing.com` |
| GeoCoordinates correct | ✅ | 26.185207 / -80.135131 (matches real place_id pin) |
| Review schema types (numbers not strings) | ✅ | Fixed in layout.tsx |
| Phone visible on mobile | ✅ | Removed `hidden sm:inline` from Navbar |
| 18.8 MB video deleted | ✅ | `public/videos/cinematic-reel.mp4` removed; only `cinematic-reel-opt.mp4` (3 MB) remains |
| /locations index page | ✅ | `src/app/locations/page.tsx` created — no more 404 on breadcrumb |
| llms.txt www URLs | ✅ | All 9 internal links updated |
| FAQ payment methods consistent | ✅ | CashApp added to FAQ #9; matches llms.txt |
| FAQ #18 client count consistent | ✅ | "more than 2,000 vehicles" matches site-wide copy |
| Build passes with zero TS errors | ❓ | Run `npx tsc --noEmit` to verify |

---

## Phase 2: DNS & HTTPS

| Item | Status | Notes |
|---|---|---|
| Site accessible at https://www.sunflodetailing.com | ✅ | Live confirmed |
| HTTPS certificate valid (TLS via Vercel/Let's Encrypt) | ✅ | |
| Non-www redirects to www | ✅ | 308 Permanent confirmed via Vercel project → Domains |
| HSTS header present | ✅ | `max-age=63072000; includeSubDomains; preload` |
| X-Frame-Options present | ✅ | `SAMEORIGIN` |
| X-Content-Type-Options present | ✅ | `nosniff` |
| Referrer-Policy present | ✅ | `strict-origin-when-cross-origin` |
| Permissions-Policy present | ✅ | geolocation=(), microphone=(), camera=() |
| CSP header present | ✅ | Added to `next.config.ts` — deployed |

---

## Phase 3: Google Search Console

| Item | Status | Notes |
|---|---|---|
| GSC property added (Domain verification) | ✅ | Verified via `public/google71ff0a97a41f9fd2.html` file committed |
| GSC www property verified | ✅ | Verified via HTML file method — separate www property added |
| Sitemap submitted (`/sitemap.xml`) | ✅ | Success — 15 URLs discovered |
| www sitemap submitted | ✅ | `https://www.sunflodetailing.com/sitemap.xml` submitted |
| Old dead sitemaps removed | ✅ | Stale 2023 + 2025 sitemaps deleted from both GSC properties |
| Homepage indexing requested | ❓ | Use URL Inspection in GSC |
| Key pages indexing requested | ❓ | Ceramic-coating, About, Fort Lauderdale, Contact |

---

## Phase 4: Bing Webmaster Tools

| Item | Status | Notes |
|---|---|---|
| Bing property added | ✅ | Imported from GSC — 15 URLs discovered |
| Sitemap submitted to Bing | ✅ | Both www and non-www sitemaps submitted |

---

## Phase 5: Functional Testing

| Item | Status | Notes |
|---|---|---|
| Contact form delivers email to Gmail | ❓ | Resend DNS still propagating — retest once verified |
| Phone CTA in Navbar dials on mobile | ✅ | Verified code is correct (`tel:+19542356882`) |
| Phone visible on mobile screens | ✅ | Fixed — `hidden sm:inline` removed |
| Google Maps embed shows correct location | ✅ | Real CID wired in both locations |
| Navbar links all resolve | ✅ | |
| Footer service deep-links work | ✅ | Each service slug in Footer |
| Footer city links resolve | ✅ | All 5 city pages exist |
| /locations index page resolves (no 404) | ✅ | Created this pass |

---

## Phase 6: Google Business Profile

| Item | Status | Notes |
|---|---|---|
| Website URL on GBP = https://www.sunflodetailing.com | ❓ | Owner must verify — update if it says non-www |
| Phone on GBP = (954) 235-6882 | ❓ | Owner to verify |
| Address on GBP = 4708 NE 11th Ave, Oakland Park, FL 33334 | ❓ | Owner to verify |
| Primary category = "Car detailing service" | ❓ | High-priority ranking signal |
| Secondary categories added | ❌ | Recommended: Car wash, Window tinting service, Auto body shop |
| GBP description written | ❌ | Template in `GBP-AUDIT.md` §3 |
| 20+ photos uploaded | ❓ | See `GBP-AUDIT.md` §10 |

---

## Phase 7: Announce

| Item | Status | Notes |
|---|---|---|
| Instagram post announcing site | ❓ | |
| Facebook post | ❓ | |
| Regulars notified | ❓ | |

---

## Remaining Open Issues (carry to ACTION-PLAN.md)

1. **Contact form** — Resend DNS still propagating; retest once green
2. **GBP profile completion** — description, secondary categories, photos, posts (Jason)
3. **Apple Maps + Yelp + Bing Places claims** — owner tasks from `docs/seo-owner-actions.md`
4. **Request indexing** — use GSC URL Inspection on homepage + key pages

---

*Converted from LAUNCH-CHECKLIST.md on 2026-04-21 by Matthew Kass.*
