# Sunflo Detailing — SEO Audit Report

**Audit date:** 2026-04-18  
**Site:** https://sunflodetailing.com  
**Stack:** Next.js 16.2.4, React 19, Tailwind v4, App Router  
**Pages audited:** `/`, `/services`, `/gallery`, `/faq`, `/contact`

---

## Executive Summary

| Category | Before | After |
|---|---|---|
| Technical SEO score | 72 / 100 | ~88 / 100 (estimated) |
| Local SEO score | 62 / 100 | ~74 / 100 (estimated) |
| Pages with metadata | 4 / 5 | 5 / 5 |
| Pages with canonical URL | 1 / 5 | 5 / 5 |
| Pages with OpenGraph | 1 / 5 | 5 / 5 |
| Pages with H1 | 3 / 5 | 5 / 5 |
| Schema errors | 4 | 0 |

**Top 5 wins from this pass:**
1. FAQ page converted from client-only to server component — now exports full metadata, canonical, and OG tags, and JSON-LD is in the initial HTML payload.
2. Schema type fixed from `AutoRepair` → `AutomotiveBusiness`; `logo` corrected to actual brand logo.
3. Per-page canonical + OpenGraph added across all 5 pages.
4. FAQ expanded from 8 → 18 questions across 4 categories — substantially increases topical coverage for AI citations and voice search.
5. Security headers added (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy).

---

## Per-Page Findings

### `/` Home Page

| Signal | Before | After |
|---|---|---|
| Title | ✅ Keyword-rich with geo | ✅ (unchanged) |
| Meta description | ✅ Good length, service list + geo | ✅ (unchanged) |
| Canonical | ✅ `/` | ✅ (unchanged) |
| OpenGraph | ⚠️ Inherited from layout (no per-page URL) | ✅ Explicit OG with URL |
| H1 | ✅ Present (HeroSection) | ✅ (unchanged) |
| JSON-LD | ⚠️ LocalBusiness type was `AutoRepair` | ✅ Fixed to `AutomotiveBusiness` |
| WebSite schema | ❌ Missing | ✅ Added with publisher reference |

**Changes:** `src/app/page.tsx` (OG), `src/app/layout.tsx` (schema type, logo, WebSite schema, Deerfield Beach added to areaServed)

---

### `/services` Services Page

| Signal | Before | After |
|---|---|---|
| Title | ⚠️ "Services & Pricing" — no geo | ✅ "Auto Detailing Services & Pricing in Oakland Park, FL" |
| Meta description | ✅ Good | ✅ (unchanged) |
| Canonical | ❌ Missing | ✅ `/services` |
| OpenGraph | ❌ Missing | ✅ Added |
| H1 | ✅ Present (ServicesHero) | ✅ (unchanged) |
| Service schema | ⚠️ Used `AggregateOffer` (wrong for Service type) | ✅ Fixed to array of `Offer` objects |

**Changes:** `src/app/services/page.tsx`

---

### `/gallery` Gallery Page

| Signal | Before | After |
|---|---|---|
| Title | ⚠️ "Gallery" — generic | ✅ "Auto Detailing Gallery — Oakland Park, FL" |
| Meta description | ✅ Adequate | ✅ (unchanged) |
| Canonical | ❌ Missing | ✅ `/gallery` |
| OpenGraph | ❌ Missing | ✅ Added |
| H1 | ❌ Missing (SectionHeading emitted H2) | ✅ Added via `as="h1"` prop |
| BreadcrumbList | ✅ Present | ✅ (unchanged) |

**Changes:** `src/app/gallery/page.tsx`, `src/components/ui/SectionHeading.tsx` (added `as` prop)

---

### `/faq` FAQ Page

| Signal | Before | After |
|---|---|---|
| Title | ❌ None (client component, no metadata export) | ✅ "Auto Detailing FAQ — Ceramic Coatings, PPF & Pricing in Oakland Park, FL" |
| Meta description | ❌ None | ✅ Added |
| Canonical | ❌ None | ✅ `/faq` |
| OpenGraph | ❌ None | ✅ Added |
| H1 | ❌ None (no explicit H1) | ✅ "Auto Detailing FAQ: Oakland Park, FL" |
| FAQPage schema | ⚠️ Client-rendered (unreliable for Googlebot) | ✅ Server-rendered in initial HTML |
| FAQ content | ⚠️ 8 questions, basic | ✅ 18 questions across 4 categories |
| UI | Basic flat accordion | ✅ Search + category filter + two-column desktop |

**Changes:** Full rewrite — `src/app/faq/page.tsx`, new `src/components/faq/FAQExperience.tsx`, `src/data/faq.ts`, `src/types/index.ts`

---

### `/contact` Contact Page

| Signal | Before | After |
|---|---|---|
| Title | ⚠️ "Contact & Book" — no geo | ✅ "Contact & Book" (description includes geo + address) |
| Meta description | ✅ Includes address | ✅ Updated with hours |
| Canonical | ❌ Missing | ✅ `/contact` |
| OpenGraph | ❌ Missing | ✅ Added |
| H1 | ❌ Missing (SectionHeading emitted H2) | ✅ "Book Your Service" |
| Phone visible | ❌ Hidden — "By appointment only" text only | ✅ Clickable tel: link |
| Address ZIP | ❌ "Oakland Park, FL" (no ZIP visible) | ✅ "Oakland Park, FL 33334" |

**Changes:** `src/app/contact/page.tsx`

---

## Global / Schema Fixes

| Issue | File | Fix |
|---|---|---|
| Schema `@type: "AutoRepair"` | `layout.tsx` | Changed to `AutomotiveBusiness` |
| `logo` → car photo | `layout.tsx` | Changed to `/images/sunflo-logo.png` |
| Geo precision 4 decimal places | `layout.tsx` | 5 decimal places |
| `Service` schema used `AggregateOffer` | `services/page.tsx` | Array of `Offer` objects |
| Review dates non-ISO ("May 2025") | `testimonials.ts` | ISO year-month format ("2025-05") |
| `SectionHeading` only emitted H2 | `SectionHeading.tsx` | Added optional `as="h1"` prop |
| No `WebSite` schema | `layout.tsx` | Added with `publisher` reference to LocalBusiness |
| No security headers | `next.config.ts` | Added X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy |

---

## Files Modified

```
src/app/layout.tsx               — Schema type, logo, geo, WebSite schema, Deerfield Beach
src/app/page.tsx                 — OpenGraph override
src/app/services/page.tsx        — Title, canonical, OG, Offer schema fix
src/app/gallery/page.tsx         — Title, canonical, OG, H1
src/app/contact/page.tsx         — Canonical, OG, H1, phone, ZIP
src/app/faq/page.tsx             — Full rewrite (server component)
src/components/ui/SectionHeading.tsx   — Added as="h1" prop
src/components/faq/FAQExperience.tsx   — NEW: search + filter + accordion client island
src/components/faq/AccordionItem.tsx   — DELETED (replaced by FAQExperience)
src/data/faq.ts                  — Expanded to 18 Q&As with categories
src/data/testimonials.ts         — ISO date format (YYYY-MM)
src/types/index.ts               — FaqCategory type + category field on FAQ
next.config.ts                   — Security headers
docs/seo-audit.md                — This file
```

---

## Remaining Owner Actions (Cannot Be Done in Code)

### Critical / Do First

1. **Verify GBP primary category is "Car detailing service"** — not "Auto repair shop." This is the single highest local ranking factor. Log in to Google Business Profile and confirm the primary category. Recommended stack: Primary = Car detailing service; Secondary = Auto body shop, Window tinting service, Car wash.

2. **Keep `aggregateRating.reviewCount` current** — The value `"120"` in `src/app/layout.tsx` reflects the GBP review count at build time. Update this number manually each month to match your live GBP rating count. The comment in `layout.tsx` marks where to update.

3. **Submit sitemap to Google Search Console** — Go to https://search.google.com/search-console, add the property, and submit https://sunflodetailing.com/sitemap.xml. This is free and dramatically speeds up indexing.

4. **Claim Yelp listing** — Yelp is the most impactful unclaimed citation for auto services in South Florida. A complete Yelp profile feeds Apple Maps, Siri, and citation aggregators. After claiming, add the Yelp URL to the `sameAs` array in `src/app/layout.tsx`.

### High Priority

5. **Build a review acquisition system** — With 120 reviews and a 5.0 rating the foundation is strong, but the "18-day rule" means a gap of >3 weeks without new reviews can cost map pack position. Print a QR-code card pointing to your Google review link and hand it to clients at pickup. Target 2–4 new reviews per month.

6. **Upload real photos to GBP** — Before/after work photos on your GBP profile (not just the website gallery) are one of the top local ranking signals. Upload 5–10 photos monthly showing finished jobs, the shop exterior, and team.

7. **Claim Bing Places / Apple Maps Connect** — Claim your business on Bing Places (free) and request a listing on Apple Maps Connect. These feed Siri local results and Bing Copilot.

8. **Claim Nextdoor business page** — High-value hyper-local for Oakland Park/Fort Lauderdale neighborhoods. Free.

### Medium Priority

9. **Replace gallery placeholder images** — 6 of the gallery items use `picsum.photos` random images. Replace these with real work photos (before/afters, coatings, corrections). Real photos increase conversion, improve image SEO, and allow adding `ImageObject` schema in the future.

10. **Add dedicated service landing pages** — Individual pages for Ceramic Coating, Paint Correction, Paint Protection Film, and Window Tinting (e.g., `/services/ceramic-coating`) with geo-modified content are the top organic growth opportunity. Each page captures service-specific searches ("ceramic coating Fort Lauderdale") that the current single `/services` page cannot rank for.

11. **Wire up the contact form** — The contact form currently simulates submission (1-second delay, no API call). Wire it to a real endpoint (Formspree, Resend, or a Next.js API route) before launch. A non-functional contact form is a conversion loss.

12. **Add last-modified dates to sitemap** — `src/app/sitemap.ts` stamps all URLs with `new Date()` (runtime). This tells Google every page changed every deploy. Replace with static dates per route for more accurate crawl prioritization.

13. **Create an `llms.txt` file** — A simple `public/llms.txt` listing your services, prices, and location in plain text makes it easier for AI models (ChatGPT, Perplexity) to cite your business in responses. Example at https://llmstxt.org.

---

## AI / GEO Readiness

The 18-question FAQPage schema (now server-rendered) significantly improves AI Overview and AI citation eligibility. Each FAQ answer follows the "direct answer first, detail after" format that AI systems prefer for passage extraction. Categories also help AI systems understand the topical structure.

Additional GEO improvement: the contact page now has the phone number as plain text and the address with ZIP — both aid AI systems that parse structured business data from HTML.

---

*Audit performed using claude-seo plugin specialist agents (technical, schema, local SEO) on 2026-04-18.*

---

**Owner Action Plan:** See `docs/seo-owner-actions.md` for the non-code side — GBP, citations, reviews, backlinks, and content that only the business owner can execute.
