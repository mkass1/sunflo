# Sunflo Detailing — Post-Move SEO Audit

**Date:** 2026-05-14
**Scope:** Verify the Oakland Park → Fort Lauderdale (837 NW 8th Ave, 33311) location migration; flag local-SEO follow-ups.
**Method:** Crawled localhost dev (home, about, contact, faq, gallery, services index + 4 detail pages, locations index + city pages, sitemap, robots, llms.txt). Parsed JSON-LD, checked redirects, compared NAP across pages and machine-readable surfaces.
**Business type:** Local Service (brick-and-mortar auto detailing studio).

---

## Health Score: **82 / 100**

| Category | Score | Weight | Notes |
|---|---|---|---|
| Technical SEO | 88 | 22% | Redirects clean. CSP, HSTS, X-Frame-Options present. Sitemap regenerates with current lastmod. |
| Content Quality | 85 | 23% | E-E-A-T strong (named founder, year est., review count). New FTL page reads naturally. |
| On-Page SEO | 70 | 20% | **Title-tag duplication bug across location/service pages** (see Critical). |
| Schema / Structured Data | 92 | 10% | LocalBusiness, Service, FAQ, Breadcrumb all valid. Address/locality/zip match across home, FTL, services, city pages. |
| Performance | n/a | 10% | Not measured (localhost dev — Turbopack dev build is not a perf signal). |
| AI Search Readiness | 90 | 10% | llms.txt updated, GPTBot/Claude-Web/Perplexity allowed in robots, page-level facts citable. |
| Images | 80 | 5% | OG image alt updated. Image regen not in scope. |

---

## Migration Verification — Pass ✅

| Check | Status | Evidence |
|---|---|---|
| Home `<title>` references Fort Lauderdale | ✅ | "Auto Detailing, Ceramic Coatings & Paint Correction — Fort Lauderdale, FL" |
| Home meta description references Fort Lauderdale | ✅ | "…in Fort Lauderdale, FL. Serving Pembroke Pines, Weston, Davie, Oakland Park…" |
| Canonical tags correct | ✅ | All point to www.sunflodetailing.com paths, no stale aliases |
| JSON-LD `AutomotiveBusiness.address` | ✅ | streetAddress=`837 NW 8th Ave`, addressLocality=`Fort Lauderdale`, postalCode=`33311` |
| JSON-LD `geo` coords | ⚠️ | `26.1382, -80.1546` — approximate; **verify against Google Maps pin before deploy** |
| JSON-LD `areaServed` | ✅ | Fort Lauderdale first, Oakland Park retained as served city, full Broward list |
| Service-page schema `areaServed` | ✅ | Fort Lauderdale first, full city list |
| Sitemap | ✅ | All 9 city pages + 4 service pages + core routes, lastmod auto-bumps |
| Sitemap doesn't reference old slug | ✅ | No `oakland-park` URL |
| `/locations/oakland-park` redirect | ✅ | 308 → `/locations/fort-lauderdale` |
| Pre-existing redirects intact | ✅ | `/about-us`, `/contact-us`, `/ceramic-coatings` still 308 |
| llms.txt accessible & updated | ✅ | HTTP 200, address = new, service area Fort Lauderdale first |
| OG image alt | ✅ | "Sunflo Detailing — Fort Lauderdale, FL" |
| Old address in rendered HTML | ⚠️ | Zero occurrences on `/`, `/contact`, FTL. ONE occurrence on `/about` (intentional historical reference to "our original NE 11th Ave shop") |
| Phone number consistency | ✅ | (954) 235-6882 unchanged — preserves existing phone-based citations |

---

## Critical Issues

### C1. Duplicated brand in title tags on **all** service + location pages

Every service and location page renders `<title>X | Sunflo Detailing | Sunflo Detailing</title>`.

```
/locations/fort-lauderdale  → "Auto Detailing in Fort Lauderdale, FL | Sunflo Detailing | Sunflo Detailing"
/locations/pompano-beach    → "Auto Detailing in Pompano Beach, FL | Sunflo Detailing | Sunflo Detailing"
/services/ceramic-coating   → "Ceramic Coating in Fort Lauderdale, FL | Sunflo Detailing | Sunflo Detailing"
/services/paint-correction  → "Paint Correction in Fort Lauderdale, FL | Sunflo Detailing | Sunflo Detailing"
```

**Cause:** `src/data/city-pages.ts` and `src/data/service-pages.ts` bake `| Sunflo Detailing` into `metaTitle`, while `src/app/layout.tsx` declares `title.template = "%s | Sunflo Detailing"` which appends it again.

**Impact:** Google often rewrites duplicated brand-suffix titles, and this also wastes pixel budget in the SERP — costing CTR. Affects 4 service pages + 9 city pages = **13 indexed URLs**.

**Pre-existing** — not caused by the move — but exposed by the audit.

### C2. Google Business Profile address is still Oakland Park (owner action)

Code-side NAP is consistent. The live GBP listing is not under our control — it must be updated by the listing owner via the Google Business Profile dashboard, otherwise the JSON-LD address and the Knowledge Graph will disagree, which suppresses local pack ranking.

---

## High-Priority Issues

### H1. Citation NAP across third-party directories

The website is one signal; the broader citation web carries equal weight for local pack:

- Yelp business page
- Apple Maps Connect
- Bing Places for Business
- BBB (if listed)
- Facebook Page → About → Address
- Foursquare / Tripadvisor (if listed)
- Local directories (Yellow Pages, Manta, Chamber of Commerce)
- Industry directories (DetailingWiki, AutoGeek shop locator, etc.)

Inconsistent NAP across these is the single biggest local-SEO risk after a move.

### H2. Geo coordinates in JSON-LD are approximate

`latitude: 26.1382, longitude: -80.1546` was derived from neighborhood reasoning, not a precise lookup. If these are off by 0.001° they put the pin >100 meters away. Google uses the coordinates to validate the address; a mismatch with the GBP pin weakens trust.

**Fix:** open the address in Google Maps, right-click the pin → "What's here?" → copy decimal coords → paste into `src/app/layout.tsx`.

### H3. Drive-time copy on city pages mostly anchored to old origin

Only Pompano Beach was adjusted (12-15 → 15-20 min). The rest still use Oakland Park-era estimates:

| City | Eyebrow | Likely from new origin |
|---|---|---|
| Wilton Manors | ~5–8 min | unchanged (still close) |
| Pompano Beach | ~15–20 min | ✅ updated |
| Pembroke Pines | ~25–30 min | unchanged (similar) |
| Weston | ~30–35 min | unchanged |
| Davie | ~20–25 min | ~15–20 min (closer now) |
| Cooper City | ~25–30 min | ~20–25 min (closer now) |
| Hollywood | ~15–20 min | unchanged (similar) |
| Plantation | ~20–25 min | ~15–20 min (closer now) |

Wrong drive times don't directly hurt rankings, but they create user trust problems (visitor arrives 5 minutes early, distrust). And the body copy in each city page still references "about 20–25 minutes" etc. — that prose should be skimmed and corrected wherever the estimate is now off.

---

## Medium-Priority Issues

### M1. Add `hasMap` to LocalBusiness schema

Schema.org supports `hasMap: "<google-maps-canonical-url>"` on LocalBusiness — gives Google a direct pointer to the new pin. Strengthens the "this address moved" signal.

```js
hasMap: "https://maps.google.com/?q=837+NW+8th+Ave+Fort+Lauderdale+FL+33311",
```

### M2. Submit updated sitemap to Google Search Console post-deploy

After deploy, in GSC → Sitemaps → re-submit `https://www.sunflodetailing.com/sitemap.xml`. Forces a recrawl of the city pages with their new content + lastmod.

### M3. Don't use the GSC "Change of Address" tool

Confirming this is not the right tool: COA is for **domain** changes, not physical-location changes. Mention only so the owner doesn't accidentally use it.

### M4. About page references historical address

`src/app/about/page.tsx:107` reads "We served Oakland Park clients for years out of our original NE 11th Ave shop." Intentional storytelling — keeps founding history visible. Leave as-is unless the owner wants a clean break. If they do, replace with "We served Oakland Park clients for years and they still account for a large share of our repeat business."

### M5. Aggregate rating reviewCount

`layout.tsx` has `reviewCount: 120` with a comment to update monthly. Last verified 2026-04-21 per comment. Bumping this aligns with the move-period review velocity if the owner pushes for new reviews under the new address.

### M6. Maps embed iframe trust

Both home (`LocationMap.tsx`) and contact use a `maps.google.com/maps?q=...&output=embed` URL. This is the unauthenticated embed pattern — works fine but lacks the precise pin/zoom of the Google Maps Platform iframe API. If the owner wants the embed to show the verified GBP pin specifically, generate an authenticated embed URL from the GBP listing's "Share → Embed map" once the listing is updated.

---

## Low-Priority / Backlog

- **L1.** OG image is brand-only — text on the image doesn't mention any city, so it stays evergreen across the move. No regen needed.
- **L2.** Add a `LocalBusiness sameAs` entry pointing to the new GBP listing URL once the Knowledge Graph kgmid is confirmed under the new address. Current entry is `kgmid=/g/11j37x7gnx` — verify this kgmid still resolves correctly after Google reindexes the move.
- **L3.** Consider adding a press-release-style blog post or news entry announcing the move — gives an indexable, dated artifact that Google can use to date the location change, and a natural backlink target.
- **L4.** Service-pages.ts still talks about "South Florida's subtropical climate" using neutral phrasing — fine, no city-specific updates needed in body copy beyond the title/meta sweep that already shipped.

---

## What's Working Well

- JSON-LD discipline is **above average** for the segment — `@id` cross-references between Person, AutomotiveBusiness, and WebSite are present and consistent. This is a strong signal for Knowledge Graph eligibility.
- The `/locations/fort-lauderdale` rewrite correctly distinguishes "home base" from the satellite city pages — template now branches on `slug === "fort-lauderdale"` to avoid the awkward "about in-town from Fort Lauderdale" copy that would otherwise have shipped.
- llms.txt is up to date and the AI crawler allowlist (GPTBot, Claude-Web, anthropic-ai, CCBot, GoogleExtended, PerplexityBot) is comprehensive.
- Single `<h1>` per page across all checked routes.
- The `(home base)` pill in the footer correctly moved with Fort Lauderdale; Oakland Park demoted to standard service-area entry.
- The "We've moved" popup uses a versioned localStorage key (`sunflo:moved-banner-dismissed:v1`), so the owner can re-show it later by bumping the version.
