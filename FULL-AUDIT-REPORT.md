# Sunflo Detailing — Full SEO Audit Report

**Latest pass:** Post-Launch Live — 2026-04-21 (evening)  
**Original audit:** 2026-04-21 (pre-launch, local codebase)  
**Auditor:** Matthew Kass (web / SEO manager)  
**Site:** https://www.sunflodetailing.com — LIVE  
**Stack:** Next.js 16.2.4, React 19.2.4, App Router, Tailwind v4, TypeScript  

---

## Post-Launch Live Pass — 2026-04-21 (Evening)

### Updated Overall SEO Health Score: 86 / 100

| Category | Weight | Pre-Launch | Post-Launch | Delta |
|---|---|---|---|---|
| Technical SEO | 22% | 84 | 88 | +4 |
| Content Quality | 23% | 79 | 82 | +3 |
| On-Page SEO | 20% | 90 | 92 | +2 |
| Schema / Structured Data | 10% | 91 | 94 | +3 |
| Performance (CWV) | 10% | 62 | 73 | +11 |
| AI Search Readiness | 10% | 90 | 92 | +2 |
| Images | 5% | 76 | 76 | 0 |
| **TOTAL** | **100%** | **82.8** | **86.4** | **+3.6** |

### Critical finding discovered on live site

The most significant finding from the live inspection was a **www vs. non-www canonical mismatch** that affected every single page. The site deploys to `https://www.sunflodetailing.com` (Vercel's default behavior with www configured as primary), but `SITE_URL` in all 10 source files was set to `https://sunflodetailing.com` (non-www). This meant every `<link rel="canonical">` tag on every page pointed to a non-www URL that responded with a **307 Temporary Redirect** to www — a redirect type that does not consolidate ranking signals the way a 301 would. Google was seeing canonical tags pointing at the wrong version.

### Code changes applied in this pass

| # | File | Change |
|---|---|---|
| 1 | All 10 page files with `SITE_URL` | Changed `"https://sunflodetailing.com"` → `"https://www.sunflodetailing.com"` (canonical mismatch resolution) |
| 2 | `src/app/layout.tsx` | Geist font: added `display:'swap'` |
| 3 | `src/app/layout.tsx` | Geo coordinates corrected: `26.17250/-80.13500` → `26.185207/-80.135131` (was 1.4 km off from real place_id pin) |
| 4 | `src/app/layout.tsx` | Review schema type fixes: `ratingValue` / `bestRating` / `worstRating` changed from strings to numbers |
| 5 | `src/app/contact/page.tsx` | Maps iframe: replaced placeholder CID `0x0` with real `0x88d9a7071fb518fb:0x8db1839c761770d4` |
| 6 | `src/app/about/page.tsx` | Added Jason Girasol surname to body copy ("Jason Girasol started Sunflo Detailing…") |
| 7 | `src/app/services/page.tsx:54` | Fixed hardcoded `https://sunflodetailing.com/services` OG url (not covered by SITE_URL const) |
| 8 | `src/app/gallery/page.tsx:59` | Fixed hardcoded `https://sunflodetailing.com/gallery` OG url (not covered by SITE_URL const) |
| 9 | `src/data/faq.ts` | FAQ #9: added CashApp to payment methods (was missing; listed in llms.txt) |
| 10 | `src/data/faq.ts` | FAQ #18: "hundreds of satisfied clients" → "more than 2,000 vehicles serviced" |
| 11 | `src/components/layout/Navbar.tsx` | Removed `hidden sm:inline` from phone span — number now visible on all screen sizes |
| 12 | `src/app/locations/page.tsx` | NEW: `/locations` index page — prevents 404 from breadcrumb links on city pages |
| 13 | `public/llms.txt` | All internal URLs updated to www |
| 14 | `public/videos/cinematic-reel.mp4` | Deleted 18.8 MB unreferenced original (optimized 3 MB version remains) |

### New findings from live site inspection

| Finding | Severity | Status |
|---|---|---|
| www/non-www canonical mismatch (307 redirect) | Critical | ✅ Fixed |
| GeoCoordinates in schema 1.4 km off actual place_id pin | High | ✅ Fixed |
| Review schema ratingValue/bestRating/worstRating as strings | Medium | ✅ Fixed |
| Contact page Maps iframe had stale placeholder CID | High | ✅ Fixed |
| Phone number hidden on mobile (`hidden sm:inline`) | High | ✅ Fixed |
| Jason surname missing from /about body copy | Medium | ✅ Fixed |
| FAQ #9 CashApp missing (NAP-style payment inconsistency) | Low | ✅ Fixed |
| FAQ #18 "hundreds" inconsistent with 2,000+ figure | Low | ✅ Fixed |
| services/page.tsx line 54 — hardcoded non-www OG url | Medium | ✅ Fixed |
| gallery/page.tsx line 59 — hardcoded non-www OG url | Medium | ✅ Fixed |
| /locations/\[city\] breadcrumbs 404 (no /locations page) | Medium | ✅ Fixed |
| llms.txt had 9 non-www internal URLs | Low | ✅ Fixed |
| 18.8 MB original video unreferenced but deployed to CDN | Medium | ✅ Fixed |
| CSP header still absent from next.config.ts | Medium | Open |
| `aggregateRating.reviewCount: 120` not synced to live GBP | Medium | Open (owner) |
| No per-service or per-city OG images | Low | Open |
| No blog / article content for long-tail keywords | Medium | Open |

---

## Overall SEO Health Score: 82 / 100 (pre-launch baseline)

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 84 | 18.5 |
| Content Quality | 23% | 79 | 18.2 |
| On-Page SEO | 20% | 90 | 18.0 |
| Schema / Structured Data | 10% | 91 | 9.1 |
| Performance (CWV) | 10% | 62 | 6.2 |
| AI Search Readiness | 10% | 90 | 9.0 |
| Images | 5% | 76 | 3.8 |
| **TOTAL** | **100%** | | **82.8** |

**Business type detected:** Local Service — Automotive Detailing (brick-and-mortar studio, Oakland Park FL)

---

## Executive Summary

Sunflo Detailing's website entered this audit with a solid technical foundation (Next.js App Router, correct schema type, per-page metadata) but with 17 confirmed bugs and gaps that collectively suppressed local ranking potential. This pass resolved all Critical and High priority issues in code and produced a launch-ready site.

**Top 5 issues resolved:**
1. `next/image` optimization globally disabled — LCP degraded on every page
2. Mobile detailing contradiction across hero, LocationMap, FAQ, and llms.txt
3. No /about page — major E-E-A-T gap for a 9-year-old shop with a named owner
4. Sitemap hand-maintained with static dates — 5 of 9 URLs were stale
5. ContactForm duplicate service options — confusing UX + messy form submissions

**Top 5 remaining quick wins (owner side):**
1. Verify GBP primary category = "Car detailing service"
2. Submit sitemap to Google Search Console + Bing Webmaster Tools after deploy
3. Get real Maps embed CID to developer (replaces placeholder in code)
4. Drive 4–5 new Google reviews in the next 30 days
5. Sync aggregateRating.reviewCount in layout.tsx with live GBP count

---

## Section 1: Technical SEO

**Score: 84 / 100**

### Resolved this pass

| # | Issue | Fix Applied |
|---|---|---|
| 1 | `images.unoptimized: true` globally disabled Next.js image optimization | Removed from `next.config.ts` — all `next/image` components now emit optimized WebP via Next.js built-in optimizer |
| 2 | Hand-maintained sitemap with static `lastModified: 2026-04-18` | `src/app/sitemap.ts` now derives entries from `servicePages` + `cityPages` data arrays and uses `new Date()` |
| 3 | Non-standard `host:` directive in robots.ts | Removed — `host` is not a robots.txt standard; major crawlers ignore it |
| 4 | AI crawlers not explicitly allowed | Added explicit `allow: "/"` rules for GPTBot, Claude-Web, anthropic-ai, CCBot, GoogleExtended, PerplexityBot in `robots.ts` |
| 5 | Missing HSTS header | Added `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` in `next.config.ts` |
| 6 | Missing X-XSS-Protection header | Added `X-XSS-Protection: 1; mode=block` in `next.config.ts` |
| 7 | Root layout canonical `alternates: { canonical: "/" }` | Removed — was creating inheritance risk where child pages could inherit a `/` canonical |
| 8 | `LocationMapWrapper` rendered on every page globally | Removed from `src/app/layout.tsx` — LocationMap now renders only on homepage (`src/app/page.tsx`) |

### Remaining / Owner-Dependent

| # | Issue | Status |
|---|---|---|
| 9 | Google Maps iframe uses placeholder CID (`0x0`) | Awaiting real Maps URL from owner — TODO comment added in `LocationMap.tsx` |
| 10 | `cinematic-reel.mp4` is 18.8 MB | `poster` and `preload="metadata"` added; compression to <3 MB blocked on owner supplying a re-encoded file |
| 11 | Live URL ECONNREFUSED — site not deployed | Owner must complete DNS/Vercel attach; LAUNCH-CHECKLIST.md covers steps |

### Security Headers (current state)

| Header | Status |
|---|---|
| X-Frame-Options | ✅ SAMEORIGIN |
| X-Content-Type-Options | ✅ nosniff |
| Referrer-Policy | ✅ strict-origin-when-cross-origin |
| Permissions-Policy | ✅ geolocation=(), microphone=(), camera=() |
| Strict-Transport-Security | ✅ max-age=63072000 (added this pass) |
| X-XSS-Protection | ✅ 1; mode=block (added this pass) |
| Content-Security-Policy | ❌ Not yet set — medium priority, needs careful tuning for Next.js RSC + Framer Motion inline styles |

---

## Section 2: Content Quality

**Score: 79 / 100**

### Resolved this pass

| # | Issue | Fix Applied |
|---|---|---|
| 1 | Mobile detailing contradiction — hero claimed "mobile or in-house" while FAQ says no mobile | Hero subcopy changed to "performed at our Oakland Park, FL studio"; LocationMap card changed from "Mobile Service Available" to "Drop-Off Service" |
| 2 | Homepage body prose under 300 words — thin content for AI citations | `AboutPreview` expanded to ~120 words of locally-specific prose; two full paragraphs with Oakland Park, Fort Lauderdale, South Florida, Broward County mentions |
| 3 | No About page — major E-E-A-T gap | `/about` created with ~1,500 words of E-E-A-T copy: founder story, shop details, service explanations, 7-city area map, product brands |
| 4 | Gallery page thin prose (50 words intro) | Added 130-word gallery intro paragraph with Oakland Park, service types, and quality narrative |
| 5 | Hero image had empty alt (LCP element) | Changed to descriptive alt: "Ceramic-coated Porsche 911 at Sunflo Detailing in Oakland Park, FL" |
| 6 | FAQ had "7 years in business" (founded 2017) | Changed to "9 years" in `src/data/faq.ts` and `src/app/contact/page.tsx` |

### New content added this pass

- **`/about`** — 7 sections, ~1,500 words of founder-authored E-E-A-T copy, South Florida climate context, product brand rationale, 7-city service area
- **5 city landing pages** (`/locations/fort-lauderdale`, `/locations/wilton-manors`, `/locations/pompano-beach`, `/locations/deerfield-beach`, `/locations/lighthouse-point`) — each ~600 words, city-specific local context, 4 content sections per page
- **Service detail pages** — intro copy updated with Fort Lauderdale, Wilton Manors, Broward County geo-terms in ceramic-coating and window-tinting pages

### Remaining gaps

| Gap | Priority |
|---|---|
| No blog / article content — long-tail keyword opportunity | Medium |
| Jason's last name not provided — weakens Person entity disambiguation | Medium (owner) |
| No written case studies from clients | Medium (owner) |
| Homepage hero prose still relatively short (415 words incl. AboutPreview) | Low |

---

## Section 3: On-Page SEO

**Score: 90 / 100**

### Resolved this pass

| # | Issue | Fix Applied |
|---|---|---|
| 1 | Footer service links all pointed to `/services` | Changed to `/services/${slug}` — all 4 service landing pages now receive direct internal link juice from footer on every page |
| 2 | No click-to-call in Navbar | Added Phone icon + number to Navbar — visible on all screen sizes, fully linked to `tel:+19542356882` |
| 3 | ContactForm had duplicate service options | Removed hardcoded ppf/tint/wrap duplicates from `ContactForm.tsx` |
| 4 | Missing ceramic-coating slug in `services.ts` | Added `slug: "ceramic-coating"` entry so `/services` cards can deep-link to the detail page |
| 5 | NAP phone format drift (`954-235-6882` vs `(954) 235-6882`) | Normalized to `(954) 235-6882` in `contact.ts` as single source of truth; API route updated to reference `contact.phone` |
| 6 | `src/app/api/contact/route.ts` hardcoded phone string | Changed to `${contact.phone}` template literal — single source of truth |
| 7 | Services page meta description lacked price anchor | Added "Packages from $120" to `/services` page description |
| 8 | No About link in navigation | Added "About" to `src/data/navigation.ts` nav and footer |

### Internal linking map (current state)

- **Homepage** → Services, Services/[slug], Gallery, Contact, About (via footer + navbar)
- **Footer** → All navlinks, all 4 service slugs, all 5 city pages (Service Area column added), contact info
- **About page** → Contact (CTA), implied link to Services
- **City pages** → All 4 service detail pages (service cards grid)
- **Service detail pages** → Related services, Contact, CTABanner

---

## Section 4: Schema / Structured Data

**Score: 91 / 100**

### Current schema inventory

| Page | Schema Types |
|---|---|
| All pages (layout.tsx) | WebSite, AutomotiveBusiness, Person (Jason) |
| Homepage (page.tsx) | (inherits sitewide) |
| /about | AboutPage, Person (expanded), BreadcrumbList |
| /services | (inherits sitewide) |
| /services/[slug] | Service, FAQPage, BreadcrumbList |
| /gallery | ItemList (ImageObjects for each gallery image), BreadcrumbList |
| /faq | FAQPage, BreadcrumbList |
| /contact | BreadcrumbList |
| /locations/[city] | Service (city-specific), BreadcrumbList |

### Resolved this pass

| # | Issue | Fix Applied |
|---|---|---|
| 1 | `aggregateRating.reviewCount` was string "120" | Changed to number `120` + TODO comment to sync monthly |
| 2 | `share.google` URL in `sameAs` array | Removed — short-links are not stable entity URLs; kept kgmid URL |
| 3 | No `employee` link from AutomotiveBusiness to Person | Added `employee: { "@id": "#jason" }` to LocalBusiness schema |
| 4 | No `Person` schema for Jason | Added `ownerJsonLd` block in `layout.tsx` with knowsAbout, jobTitle, worksFor |
| 5 | Gallery had no ImageObject schema | Added `ItemList` of `ImageObject` nodes in `/gallery/page.tsx` |
| 6 | No `Service` schema on service detail pages | Added `serviceType` and `offers.priceSpecification` to each |
| 7 | No AboutPage schema | Added to `/about/page.tsx` linking `mainEntity` → business and `about` → Jason |

### Remaining

| # | Issue | Status |
|---|---|---|
| 8 | `aggregateRating.ratingValue` and `reviewCount` hardcoded at 5.0/120 | Owner must supply current GBP rating + count; TODO comment in layout.tsx |
| 9 | Jason's last name missing from Person schema | TODO comment in layout.tsx + about/page.tsx |
| 10 | No Yelp/Apple Maps URL in AutomotiveBusiness `sameAs` | Awaiting owner to claim listings; will add then |
| 11 | No CSP `nonce` on JSON-LD scripts | Low risk — JSON-LD is safe; CSP header not yet configured |

---

## Section 5: Performance (Core Web Vitals)

**Score: 62 / 100**  
*Lab estimates only — site not deployed, no field CWV (CrUX) data available*

### Critical

| Issue | Impact | Fix Applied | Remaining |
|---|---|---|---|
| `next/image` disabled | LCP: devastating (unoptimized 900KB gallery JPEGs served raw) | ✅ Fixed — removed `unoptimized: true` | Verify WebP conversion in build output |
| `cinematic-reel.mp4` 18.8 MB | Blocks first paint on any page rendering the video | ✅ Partial — `preload="metadata"`, `poster` added | Owner must supply a re-encoded <3 MB file; intersection-observer lazy-mount recommended |

### Remaining Performance Issues

| Issue | Impact | Recommended Fix |
|---|---|---|
| No `next/font` display swap for Big_Shoulders | FOUT flash | Already set `display: "swap"` in layout — ✅ |
| Framer Motion bundle size | ~30 KB gzipped for animation lib | Acceptable for current use — optimize if Lighthouse flags |
| No `<link rel="preload">` on hero image | LCP hint | Add `priority` prop to hero Image — ✅ already done |
| Gallery images 300–900 KB JPEGs | Gallery LCP | Next.js optimizer will now handle WebP conversion on first request |

---

## Section 6: Images

**Score: 76 / 100**

### Resolved this pass

| # | Issue | Fix Applied |
|---|---|---|
| 1 | Hero image alt was empty string | Changed to descriptive alt with make/model/location |
| 2 | Gallery video missing poster + preload | Added `poster` and `preload="metadata"` to `<video>` element |
| 3 | `next/image` disabled — no optimization | Re-enabled — all `next/image` components will now auto-optimize |

### Remaining

| # | Issue | Priority |
|---|---|---|
| 4 | Gallery JPEGs 300–900 KB — `optimize-images.mjs` (sharp) not yet run | High — run `node scripts/optimize-images.mjs` before first deploy |
| 5 | Service pages have no OG image — fallback to hero Porsche 911 | Medium — create per-service OG images for social sharing |
| 6 | About founder image is only art-directed (no size specified in metadata) | Low |

---

## Section 7: AI Search Readiness (GEO)

**Score: 90 / 100**

### Current state

| Signal | Status |
|---|---|
| `public/llms.txt` present | ✅ 77 lines, rich service + NAP + FAQ content |
| AI crawlers allowed in robots.ts | ✅ GPTBot, Claude-Web, anthropic-ai, CCBot, GoogleExtended, PerplexityBot explicitly allowed |
| Passage-level citable content | ✅ /about, /services/[slug], /faq, /locations/[city] all have dense factual passages |
| Structured data for entity disambiguation | ✅ AutomotiveBusiness + Person + Service + FAQPage |
| E-E-A-T signals on /about | ✅ First-person founder voice, shop address, specific brands, years in business |
| NAP consistent across llms.txt | ✅ Phone normalized to `(954) 235-6882` in contact.ts and llms.txt |

### Gaps

| Gap | Impact |
|---|---|
| Jason has no public social presence linked from llms.txt | Low — add Instagram/LinkedIn if exists |
| No blog content for long-tail AI query pickup | Medium — highest-yield future investment |

---

## Section 8: Local SEO

**Score: 80 / 100** (code-level factors only; off-site factors are owner-dependent)

### Code-level local signals

| Signal | Status |
|---|---|
| Consistent NAP in schema + footer + contact.ts | ✅ |
| `areaServed` 7 cities in AutomotiveBusiness schema | ✅ |
| 5 city landing pages with `areaServed` Service schema | ✅ New this pass |
| Oakland Park in H1 and meta title on homepage and key service pages | ✅ |
| GeoCoordinates in LocalBusiness schema | ✅ lat 26.17250, lon -80.13500 |
| Google Maps embed on homepage | ✅ (placeholder CID — awaiting owner) |
| Click-to-call in Navbar | ✅ New this pass |

### Off-site factors (owner-dependent — see `docs/seo-owner-actions.md`)

| Factor | Status |
|---|---|
| GBP primary category = "Car detailing service" | ❓ Unverified |
| GBP verification status | ❓ Unverified |
| Yelp, Apple Maps, Bing Places claimed | ❌ Not yet |
| Review velocity (4+ new/month) | ❓ Unknown |
| GBP photo cadence (5–10 photos/month) | ❓ Unknown |

---

## Bug Registry — Confirmed and Resolved

| # | Bug | File(s) | Pass | Fixed |
|---|---|---|---|---|
| 1 | Mobile detailing contradiction | HeroSection.tsx:116, LocationMap.tsx | Pre-launch | ✅ |
| 2 | `next/image` optimization globally disabled | next.config.ts:13 | Pre-launch | ✅ |
| 3 | 18.8 MB video — no poster/preload + unreferenced original | GalleryGrid.tsx, public/videos/ | Pre-launch + Live | ✅ Original deleted |
| 4 | `aggregateRating.reviewCount` hardcoded string "120" | layout.tsx | Pre-launch | ✅ Number + TODO |
| 5 | Sitemap hand-maintained with static dates | sitemap.ts | Pre-launch | ✅ |
| 6 | ContactForm duplicate service options | ContactForm.tsx | Pre-launch | ✅ |
| 7 | Google Maps iframe placeholder CID | LocationMap.tsx, contact/page.tsx | Pre-launch + Live | ✅ Real CID in both |
| 8 | LocationMap rendered on every page globally | layout.tsx, LocationMapWrapper.tsx | Pre-launch | ✅ |
| 9 | Footer service links all went to `/services` | Footer.tsx | Pre-launch | ✅ |
| 10 | `ceramic-coating` slug gap in services.ts | services.ts | Pre-launch | ✅ |
| 11 | Homepage prose under 300 words | AboutPreview.tsx | Pre-launch | ✅ |
| 12 | No About page | — | Pre-launch | ✅ Created |
| 13 | Gallery had no ImageObject schema | gallery/page.tsx | Pre-launch | ✅ |
| 14 | NAP phone format drift | contact.ts, api/contact/route.ts | Pre-launch | ✅ |
| 15 | No click-to-call in Navbar | Navbar.tsx | Pre-launch | ✅ |
| 16 | Root layout canonical inheritance risk | layout.tsx | Pre-launch | ✅ |
| 17 | Hero image empty alt (LCP element) | HeroSection.tsx | Pre-launch | ✅ |
| 18 | www/non-www canonical mismatch (SITE_URL non-www in 10 files) | 10 page files | **Live** | ✅ |
| 19 | GeoCoordinates 1.4 km off actual place_id pin | layout.tsx | **Live** | ✅ |
| 20 | Review schema rating types (strings instead of numbers) | layout.tsx | **Live** | ✅ |
| 21 | Phone hidden on mobile (`hidden sm:inline`) | Navbar.tsx | **Live** | ✅ |
| 22 | Jason surname missing from /about body copy | about/page.tsx | **Live** | ✅ |
| 23 | Hardcoded non-www OG urls in services + gallery pages | services/page.tsx:54, gallery/page.tsx:59 | **Live** | ✅ |
| 24 | /locations/\[city\] breadcrumbs 404 (no index page) | — | **Live** | ✅ Created |
| 25 | FAQ #9 missing CashApp (inconsistent with llms.txt) | faq.ts | **Live** | ✅ |
| 26 | FAQ #18 "hundreds" inconsistent with 2,000+ site-wide | faq.ts | **Live** | ✅ |
| 27 | llms.txt had 9 non-www internal URLs | public/llms.txt | **Live** | ✅ |

---

## Pages Audited

| Route | Status | Notes |
|---|---|---|
| `/` | ✅ | Hero, AboutPreview, ServicesPreview, Testimonials, LocationMap, CTABanner |
| `/services` | ✅ | Full service grid with deep links |
| `/services/ceramic-coating` | ✅ | Service + FAQPage + BreadcrumbList schema |
| `/services/paint-correction` | ✅ | Service + FAQPage + BreadcrumbList schema |
| `/services/paint-protection-film` | ✅ | Service + FAQPage + BreadcrumbList schema |
| `/services/window-tinting` | ✅ | Service + FAQPage + BreadcrumbList schema |
| `/about` | ✅ New | AboutPage + Person + BreadcrumbList schema |
| `/gallery` | ✅ | ImageObject ItemList schema |
| `/faq` | ✅ | FAQPage + BreadcrumbList schema |
| `/contact` | ✅ | Contact form, Maps embed (CID TODO) |
| `/locations/fort-lauderdale` | ✅ New | Service + BreadcrumbList |
| `/locations/wilton-manors` | ✅ New | Service + BreadcrumbList |
| `/locations/pompano-beach` | ✅ New | Service + BreadcrumbList |
| `/locations/deerfield-beach` | ✅ New | Service + BreadcrumbList |
| `/locations/lighthouse-point` | ✅ New | Service + BreadcrumbList |
| `/sitemap.xml` | ✅ Dynamic | 15 URLs total, live lastModified |
| `/robots.txt` | ✅ | AI crawlers explicitly allowed |
| `public/llms.txt` | ✅ | 77 lines, NAP corrected |

---

*Report prepared by Matthew Kass on 2026-04-21.*  
*Technical fixes are in the codebase on branch `main`.*  
*Owner actions are documented in `docs/seo-owner-actions.md`.*
