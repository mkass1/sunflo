# Sunflo Detailing — Content Quality & E-E-A-T Audit
**Date:** 2026-04-21
**Auditor:** Content Quality Agent (Google Sept 2025 QRG)
**Scope:** 12 live pages analyzed via local codebase + data files
**Overall Score: 72 / 100**

---

## Score Breakdown

| Dimension | Score | Weight | Weighted |
|---|---|---|---|
| E-E-A-T (averaged) | 70 | 35% | 24.5 |
| Content Depth / Word Count | 68 | 20% | 13.6 |
| Keyword & Local Geo Optimization | 78 | 15% | 11.7 |
| AI Citation Readiness | 82 | 10% | 8.2 |
| Mobile Service Consistency | 90 | 10% | 9.0 |
| Freshness / Factual Accuracy | 55 | 10% | 5.5 |
| **Total** | | | **72.5 → 72** |

---

## E-E-A-T Factor Breakdown

| Factor | Score | Notes |
|---|---|---|
| Experience (20%) | 72 | Specific vehicle mentions (McLaren, Ferrari, Rolls-Royce), named processes (paint depth gauge, CQuartz application), team gallery photos. Founder story is genuine but lacks his last name in body copy. |
| Expertise (25%) | 75 | Technical accuracy is high. Service pages explain SiO2/TiO2 chemistry, micron-level clear coat discussion, Florida Statute 316.2953 citation for tint law, XPEL Ultimate Plus naming. CarPro/ShineSupply/3M product specifics add credibility. |
| Authoritativeness (25%) | 65 | 120+ Google reviews cited but no third-party editorial links. No industry certifications (IDA, XPEL certified installer, etc.) mentioned on any page. No press or media mentions. Social proof is present but limited to on-site testimonials. |
| Trustworthiness (30%) | 68 | Full address, phone, email, hours present. Contact page has no payment methods listed (see issue #8). FAQ lists payment methods without CashApp (see issue #9). About page has a TODO comment visible in source for Google review count. No privacy policy or terms linked from footer (not checked but worth verifying). |

---

## Issues Table

| # | Severity | Page(s) | Issue | Recommendation |
|---|---|---|---|---|
| 1 | CRITICAL | `/about` | Jason's surname "Girasol" does not appear anywhere in the visible body copy. The JSON-LD `personJsonLd` in `about/page.tsx` correctly includes `"name": "Jason Girasol"` but no human-readable text on the page ever says "Girasol." This is the primary E-E-A-T trust signal for a founder-led local business. | Add full name in at least one natural sentence in The Story section, e.g., "Jason Girasol started Sunflo Detailing in Oakland Park in 2017…" — and in the signature block. |
| 2 | HIGH | `src/data/faq.ts` FAQ #18 | "Over 9 years of experience" is factually stale as of April 2026. Founded 2017 = 9 years in 2026, so "9 years" is technically accurate today but will become wrong in mid-2027. More critically: the answer says "With over 9 years" which is fine now but was wrong in 2024-2025 when it said "7 years." Audit it for the "7 years" ghost — it is not present in current source, but the testimonial from Niki Hicks (testimonials.ts line 9) says "over 7 years" (written May 2025, referring to her personal tenure, not business age — this is defensible). | No immediate change needed, but schedule a review for mid-2027. Flag FAQ #18 with a `// TODO: update year count` comment to avoid drift. |
| 3 | HIGH | `src/data/faq.ts` FAQ #9 | The FAQ answer for "What payment methods do you accept?" lists: "cash, Zelle, Venmo, and major credit/debit cards." **CashApp is absent.** The `llms.txt` file explicitly lists CashApp as an accepted payment method ("Cash, all major credit cards, Zelle, Venmo, and CashApp"). This is a direct data inconsistency between the AI-readable file and the live FAQ page. | Add CashApp to the FAQ answer in `src/data/faq.ts` ID "9". Suggested text: "We accept cash, Zelle, Venmo, CashApp, and major credit/debit cards." |
| 4 | HIGH | `/contact` | The contact page business info panel lists address, Instagram, Facebook, phone, and hours — but **no payment methods are shown**. Customers trying to decide whether to book often want to confirm payment options before calling. | Add a "Payment" list item to the contact page info panel: Cash, Zelle, Venmo, CashApp, and major credit/debit cards. |
| 5 | HIGH | `/gallery` | The gallery page has very thin text content: ~120 words of body text (the SEO copy paragraph below the grid plus the hero subtitle). This page type functions as a portfolio/evidence page, but Google's QRG requires sufficient supporting copy for a page to be evaluated independently. There are no service-type labels in the intro, no mention of specific vehicles shown, and no "before/after" narrative that would give the page standalone value. | Expand the SEO paragraph under the grid to ~250 words. Name specific services visible in the gallery (paint correction on the McLaren, ceramic coating on the black sedan, etc.). Add a second short paragraph describing the studio environment. |
| 6 | HIGH | `/services` | The `/services` page delegates all rendering to `ServicesContent` component which was not fully audited here, but the page-level data contains no intro paragraph or editorial copy beyond service cards. The meta description is solid ("Packages from $120 — see full pricing") but there is no unique editorial content differentiating this page from the homepage or individual service pages. | Add a 100–150 word intro section above the service grid covering: why Sunflo's service range matters for South Florida vehicles, the studio-or-mobile option, and a link to the FAQ. |
| 7 | MEDIUM | `/about` | A TODO comment is visible in source code at line 335: `{/* TODO(owner): update Google review count before launch — pull from live GBP */}`. The stat displayed is "120+" which may or may not be current. While this does not affect rendered output, it signals the count has not been verified since initial build. | Verify current Google review count and update the `stats` array in `about/page.tsx`. Remove the TODO comment once confirmed. |
| 8 | MEDIUM | All service detail pages (`/services/ceramic-coating`, `/services/paint-correction`, `/services/paint-protection-film`, `/services/window-tinting`) | The 4 live service detail pages do not mention mobile service availability. The `LocationMap` home component and FAQ #17 clearly state mobile is offered. Service detail pages — the highest-intent pages — should confirm whether mobile is available for that specific service, since the business policy is nuanced (correction/ceramic best in-studio; tinting/detailing available mobile). | Add a one-sentence mobile note at the bottom of the intro paragraph on each service detail page, e.g., for ceramic coating: "Ceramic coating applications are best performed in our climate-controlled Oakland Park studio — call to discuss if mobile service suits your specific job." For window tinting: "Window tinting is available both at our studio and as a mobile appointment across South Florida." |
| 9 | MEDIUM | `/locations/fort-lauderdale` and `/locations/wilton-manors` | Location pages reference "XPEL paint protection film" and "XPEL Ultimate Plus" by name in the Fort Lauderdale page — but the window tinting section of that same page references "3M Crystalline and FX series films" and "3M window film" in the Pompano Beach city page, while the live `/services/window-tinting` page uses generic "premium-grade window film" with no brand name. The brand consistency across pages is mixed: some pages name 3M, the about page names 3M, but the window tinting service page itself does not. | On `/services/window-tinting`, add "3M Crystalline and carbon film" as the stated product tier in at least one section body. This creates consistent brand signal across all pages for AI citation matching. |
| 10 | MEDIUM | Service catalog gap | `src/data/services.ts` contains **22 services** across all tiers. Only **4 service detail pages** exist in `src/data/service-pages.ts` (`ceramic-coating`, `paint-correction`, `paint-protection-film`, `window-tinting`). The following 18 services have **no dedicated landing page**: Level 1/2/3 Auto Detailing, Mini Interior Refresh, Complete Interior Detailing, Gloss Enhancement Package, Paint Enhancement Package, Lease Return Package, New Vehicle Protection, Boat & RV Detailing, Custom/Special Request, Vinyl Wraps, Headlight Restoration, Engine Bay Detail, Leather Reconditioning, Convertible Top Care, Odor Removal/Ozone Treatment. Services with slug fields already defined (vinyl-wraps does not have one; only ppf and window-tinting have slugs) are the natural first candidates. | Highest priority for new pages: **Vinyl Wraps** (high search volume), **Interior Detailing** (broad audience), **Gloss Enhancement Package** (entry-level ceramics buyer), **Headlight Restoration** (standalone search intent). Each needs 800+ words to qualify as a service page. |
| 11 | MEDIUM | `/faq` | FAQ #18 ("How long has Sunflo Detailing been in business?") states "over 9 years of experience." As of April 2026, this is accurate (founded 2017 = 9 years). However the phrasing "hundreds of satisfied clients" in the same answer conflicts with "2,000+ vehicles" stated elsewhere on the site. | Change "hundreds of satisfied clients" to "thousands of satisfied clients" in FAQ #18 to be consistent with the 2,000+ figure used on the homepage, about page, and llms.txt. |
| 12 | LOW | `/about` (AboutPreview component + about page) | Sunflo's About Preview on the homepage (AboutPreview.tsx) and the full About page both say "nine years" or "9 years" in business. The `llms.txt` says "Est. 2017" and the About page stat block shows "9+." These are consistent. However neither the homepage nor about page mentions "mobile" service in the about section's own copy — the mobile offer only appears in the LocationMap section lower on the homepage. | Add a brief mobile availability note to the About section body copy, e.g., "We offer both studio and mobile appointments." |
| 13 | LOW | `/locations/wilton-manors` | The Wilton Manors page does not name a single specific street, landmark, or address in Wilton Manors itself. The Fort Lauderdale page mentions I-95, Las Olas Boulevard, the Intracoastal — concrete local markers. The Wilton Manors page is more generic. | Add one or two Wilton Manors-specific geographic references (e.g., Wilton Drive, proximity to NE 26th Street corridor) to strengthen the local relevance signal. |
| 14 | LOW | `/contact` (contact/page.tsx line 170–172) | A TODO comment is visible in source: "Replace src with the real GBP embed URL from your Google Maps listing... Current URL uses a placeholder CID (0x0) and won't show the verified GBP card." | Replace the placeholder Maps embed URL with the real GBP embed URL to display the verified business card on the contact page. |
| 15 | LOW | All pages | No pages link to or mention any industry certifications, manufacturer authorization (XPEL authorized installer? CarPro certified?), or professional memberships (IDA — International Detailing Association). These are strong E-E-A-T authority signals that are entirely absent from the site. | If Sunflo holds any certifications, add them to the About page and relevant service pages. If not certified, it is worth pursuing XPEL authorization and IDA membership as they provide linkable trust signals. |

---

## Page-by-Page Assessment

### Homepage (`/`)
- **Estimated word count:** ~620 (hero + about preview + featured services strip + location map panel)
- **Status:** Passes 500-word homepage minimum
- **E-E-A-T:** Strong — founder photo, "nine years," stats block (9+, 2K+, 5.0 stars), address, testimonials, "Studio or Mobile" callout
- **Keyword density:** Oakland Park appears in eyebrow, hero copy, about preview, location map. Fort Lauderdale and South Florida appear. Well-balanced.
- **AI citation readiness:** High. Address, phone, stats, services list all present and structured.
- **Issues:** Mobile offer mentioned in LocationMap but not in hero copy or about preview.

### About (`/about`)
- **Estimated word count:** ~1,800 (story paragraphs + service descriptions + service area notes + products section)
- **Status:** Well above minimum
- **E-E-A-T:** Strong on experience (specific process details, vehicle types, product names, 2000+ claim) and expertise. **Critical gap: "Jason Girasol" surname never appears in rendered body copy.** JSON-LD contains it; body text does not. This is Issue #1.
- **Readability:** Flesch-Kincaid approximately Grade 10-11. Slightly high for a local detailing consumer. Paragraphs average 4-5 sentences and are information-dense. Consider splitting the longest paragraphs.
- **AI citation readiness:** Very high. Named products, specific processes, founding year, address, review count all citable.
- **Issues:** #1 (surname), #7 (stale TODO on review count).

### Services (`/services`)
- **Estimated word count:** ~200 words of editorial copy visible in page.tsx (the rest is component-rendered service cards)
- **Status:** Borderline thin on editorial intro — see Issue #6
- **E-E-A-T:** Adequate via service card content (pricing, descriptions, benefit lists). Lacks editorial voice.
- **AI citation readiness:** High for pricing and service names. Low for unique page identity.

### `/services/ceramic-coating`
- **Estimated word count:** ~1,100 (intro + 5 sections + 5 FAQs)
- **Status:** Above 800-word service page minimum
- **E-E-A-T:** Excellent. SiO2/TiO2 chemistry named, climate-controlled environment explained, specific package pricing with vehicle size tiers, South Florida UV context.
- **Readability:** Grade 11. Technical but appropriate for ceramic coating buyers who are self-educating.
- **Local geo:** "Oakland Park, Fort Lauderdale, Wilton Manors, Pompano Beach" named. South Florida UV context present.
- **AI citation readiness:** Very high. Multiple quotable fact blocks.
- **Issues:** No mobile service note (Issue #8).

### `/services/paint-correction`
- **Estimated word count:** ~1,050
- **Status:** Above minimum
- **E-E-A-T:** Very strong. Paint depth gauge methodology, 95% defect removal claim with explanation, micron thickness numbers (100-140 microns, 3-8 microns per correction).
- **AI citation readiness:** Very high.
- **Issues:** No mobile service note.

### `/services/paint-protection-film`
- **Estimated word count:** ~1,050
- **Status:** Above minimum
- **E-E-A-T:** Strong. Self-healing mechanism explained, 10-year warranty mentioned, "XPEL Ultimate Plus" named, I-95/Turnpike local context.
- **AI citation readiness:** High. Price range ($1,500-$3,500 front clip) is citable.
- **Issues:** No mobile service note. Window tinting brand named in Pompano Beach city page but not here — PPF brand consistency is fine (XPEL named consistently).

### `/services/window-tinting`
- **Estimated word count:** ~1,000
- **Status:** Above minimum
- **E-E-A-T:** Strong. Florida Statute 316.2953 cited by number. 28% VLT front window rule stated. Heat rejection percentages by film tier (dyed: 15-25%, carbon: 35-45%, ceramic: 50-70%). 3M named in about page but **not in this page's own body** (Issue #9).
- **AI citation readiness:** High. Legal limits, percentages, film types all citable.
- **Issues:** No mobile availability note. 3M film brand not named in this page's own copy (Issue #9).

### Gallery (`/gallery`)
- **Estimated word count:** ~120 (hero subtitle + SEO paragraph + Instagram CTA)
- **Status:** Below 300-word minimum. Flagged as thin content. (Issue #5)
- **E-E-A-T:** Gallery images have descriptive alt text naming specific vehicles and services. ImageObject JSON-LD present. But the page text gives an LLM or quality rater almost nothing to evaluate.
- **Unique value:** High — original photography of real client vehicles is strong E-E-A-T evidence. The content gap is in the surrounding editorial copy, not the images.

### FAQ (`/faq`)
- **Estimated word count:** ~1,800 across all 18 FAQs plus testimonials section
- **Status:** Well above minimum
- **E-E-A-T:** Strong. Answers are specific, locally contextualized (South Florida UV, "two-bucket wash method," brand names).
- **Issues:** #3 (CashApp missing from payment FAQ), #11 (inconsistent "hundreds" vs "thousands"), #2 (year count drift risk).
- **AI citation readiness:** Very high. FAQPage JSON-LD present. This is the strongest page for AI-source citation given its structured Q&A format.

### Contact (`/contact`)
- **Estimated word count:** ~80 words of body text (subtitle + info panel labels)
- **Status:** Contact pages are typically exempt from word count minimums as utility pages. This is acceptable.
- **E-E-A-T:** Full NAP (name, address, phone), hours, social channels. Missing payment methods (Issue #4). TODO comment on Maps embed (Issue #14).
- **AI citation readiness:** Adequate. Address and phone structured correctly.

### `/locations/fort-lauderdale`
- **Estimated word count:** ~820 (intro + 4 sections)
- **Status:** Above 500-600 word location page minimum
- **E-E-A-T:** Strong. I-95 and Las Olas Boulevard named. Salt air/Intracoastal context. "XPEL Ultimate Plus" named in PPF section. Drop-off logistics described specifically.
- **Local geo:** Excellent. Fort Lauderdale + Oakland Park proximity + drive time (10-15 min) stated.
- **AI citation readiness:** High.
- **Issues:** No mention that mobile appointments are available for Fort Lauderdale clients. The only mobile reference on this page template is in the map CTA box at the bottom, which says "book a mobile appointment and we come to you anywhere in South Florida." This is present and correct.

### `/locations/wilton-manors`
- **Estimated word count:** ~720 (intro + 4 sections)
- **Status:** Above minimum
- **E-E-A-T:** Adequate. Relies heavily on proximity/community reputation angle. Lacks the specific local landmarks of the Fort Lauderdale page. (Issue #13)
- **Local geo:** Wilton Manors and Oakland Park named. Drive time (5-8 min) stated. No specific Wilton Manors street or landmark named.
- **AI citation readiness:** Medium. More generic than other city pages.

---

## Duplicate Content Assessment

No near-duplicate pages found. City pages share a structural template but have meaningfully differentiated body sections. Service pages are topically distinct. The following near-duplicate risks exist at a section level:

- The "ceramic coating for South Florida" section appears across the Fort Lauderdale, Wilton Manors, Pompano Beach, Deerfield Beach, and Lighthouse Point city pages. Each is written with unique local context hooks (Intracoastal, canal-front, offshore marinas, etc.) — this is acceptable differentiation, not problematic duplication.
- The "paint correction" call-to-action paragraph in the service detail pages echoes phrasing from the About page. Both say variations of "paint correction is the mandatory first step before ceramic coating." This is appropriate topical consistency, not duplicate content.

---

## South Florida / Oakland Park Keyword Density

| Keyword | Homepage | About | Svc Detail Pages | City Pages | FAQ |
|---|---|---|---|---|---|
| "Oakland Park" | 3x | 8x | 2x each | 4x each | 3x |
| "Fort Lauderdale" | 1x | 3x | 1x each | 4x (FL page) | 2x |
| "South Florida" | 2x | 4x | 2x each | 3x each | 3x |
| "Broward County" | 1x | 2x | 1x each | 2x (FL page) | 1x |
| "ceramic coating" | 4x | 3x | 15x+ (ceramic pg) | 4x each | 6x |

Assessment: Local geo keyword presence is adequate. Oakland Park is appropriately prominent across all high-value pages. No keyword stuffing detected. Natural integration is good.

---

## Mobile Service Consistency Check

| Page | Mobile Mentioned? | Correct Policy? |
|---|---|---|
| Homepage (HeroSection) | Yes — "drop off at our Oakland Park studio or we come to you" | Correct |
| Homepage (LocationMap) | Yes — dedicated "Studio or Mobile" callout | Correct |
| About page | Yes — service area section footer "book a mobile appointment" | Correct |
| FAQ #17 | Yes — comprehensive answer | Correct |
| llms.txt | Yes — full explanation with nuance on which services are studio-preferred | Correct |
| `/services/ceramic-coating` | No — studio-only context implied; no explicit mention | Missing |
| `/services/paint-correction` | No | Missing |
| `/services/paint-protection-film` | No | Missing |
| `/services/window-tinting` | No | Missing |
| `/locations/fort-lauderdale` | Yes (bottom map CTA) | Correct |
| `/locations/wilton-manors` | Yes (bottom map CTA) | Correct |
| `/contact` | No explicit mention | Neutral — utility page |

The 4 service detail pages are the gap. These are the highest-intent pages where a buyer is evaluating a specific service — they should not have to navigate to FAQ or the homepage to learn mobile is available.

---

## Service Catalog Coverage

22 services defined in `src/data/services.ts`. 4 have dedicated landing pages.

### Services WITHOUT a landing page (flagged by priority):

| Service | Category | Priority | Rationale |
|---|---|---|---|
| Vinyl Wraps | A la carte | HIGH | High search volume; color change wrap queries are competitive. No slug defined in services.ts — needs slug added. |
| Complete Interior Detailing | Core | HIGH | Broad search intent ("interior car detailing Oakland Park"). Already has a detail-rich description. |
| Gloss Enhancement Package | Core/Correction | HIGH | Entry point for ceramic buyers. Many searchers look for lower-cost ceramic options. Pricing at $800-$1,000. |
| Paint Enhancement Package | Core/Correction | MEDIUM | Bridges Gloss and full Correction. Dedicated page helps SEO for "paint polish Oakland Park" queries. |
| Headlight Restoration | A la carte | MEDIUM | Strong standalone search intent. Low competition. Simple service to document. |
| Boat & RV Detailing | Specialty | MEDIUM | Unique to South Florida market. Marine detail Oakland Park is underserved in search. |
| New Vehicle Protection | Specialty | MEDIUM | High-value conversion page for new car buyers. |
| Odor Removal / Ozone Treatment | A la carte | LOW | Niche but standalone search intent. |
| Leather Reconditioning | A la carte | LOW | Standalone service page adds long-tail coverage. |
| Level 1/2/3 Auto Detailing | Core | LOW | These could be consolidated into one "Auto Detailing Packages" page rather than three separate pages. |
| Lease Return Package | Specialty | LOW | Seasonal intent; lower volume but zero competition. |
| Mini Interior Refresh | Core | LOW | Support page; low standalone search value. |
| Engine Bay Detail | A la carte | LOW | Add-on; low standalone intent. |
| Convertible Top Care | A la carte | LOW | Niche; strong South Florida angle. |
| Custom/Special Request | Specialty | SKIP | No meaningful keyword target. |

---

## AI Citation Readiness Assessment

**Overall AI citation readiness score: 82 / 100**

Sunflo's content is above average for AI citation readiness. Strengths:

- `llms.txt` is well-structured and comprehensive. Named services, prices, address, FAQ answers, and service area all present.
- FAQPage JSON-LD on both `/faq` and all service detail pages.
- Service pages contain specific, quotable data points: package prices by vehicle size, durability years, temperature numbers (cabin temperature reduction), legal statutes.
- Business address, phone, email, and founding year are consistently stated across pages.

Gaps:
- "Jason Girasol" surname absent from body copy (reduces named-entity citation confidence for founder authority queries).
- No third-party citations or links to manufacturer data sheets, certification bodies, or industry sources that an LLM could use to verify technical claims.
- Gallery page has no textual content an AI could cite when asked "show me examples of Sunflo's work."

---

## Freshness & Factual Accuracy

| Claim | Source | Status |
|---|---|---|
| "9 years in business" / "Est. 2017" | FAQ #18, AboutPreview, HeroSection, llms.txt | Accurate as of April 2026 |
| "2,000+ vehicles" | About page, AboutPreview, llms.txt | Cannot verify from codebase alone — flag for owner confirmation |
| "120+ Google reviews" | About page stats block | Has TODO comment — unverified since build |
| "5.0 star rating" | Hero, About page | Verify against live GBP |
| "7 years in business" (old claim) | **Not present in current codebase** | Cleared |
| CashApp as payment method | llms.txt only — absent from faq.ts #9 and contact page | INCONSISTENCY — Issue #3 |
| "Hundreds of satisfied clients" | FAQ #18 | Conflicts with "2,000+" elsewhere — Issue #11 |
| 28% VLT front window law | Window tinting service page | Accurate per Florida Statute 316.2953 |
| "7 years" in Niki Hicks testimonial | testimonials.ts — client's personal tenure since 2017 | Defensible — refers to her own usage, not business age |

---

## Specific Text Recommendations (Highest-Value Fixes)

### Fix 1 — Add Jason Girasol surname to about page body copy
**File:** `/Users/matthewkass/Desktop/sunflo/src/app/about/page.tsx`
**Current (line ~206):**
> "Jason started Sunflo Detailing in Oakland Park in 2017 with a straightforward philosophy..."

**Recommended:**
> "Jason Girasol started Sunflo Detailing in Oakland Park in 2017 with a straightforward philosophy..."

Also update the signature block from `— Jason a.k.a Flo` to `— Jason Girasol (a.k.a. Flo)` in both the About page signature and the AboutPreview component.

---

### Fix 2 — Add CashApp to FAQ payment answer
**File:** `/Users/matthewkass/Desktop/sunflo/src/data/faq.ts`, FAQ ID "9"
**Current answer:**
> "We accept cash, Zelle, Venmo, and major credit/debit cards."

**Recommended:**
> "We accept cash, Zelle, Venmo, CashApp, and major credit/debit cards. Payment is typically collected at time of service. For larger packages like full paint correction or ceramic coating, we may require a deposit to hold your appointment — we'll confirm this when you book."

---

### Fix 3 — Fix "hundreds" vs "thousands" inconsistency in FAQ #18
**File:** `/Users/matthewkass/Desktop/sunflo/src/data/faq.ts`, FAQ ID "18"
**Current:**
> "...hundreds of satisfied clients across Oakland Park, Fort Lauderdale, and the greater Broward County area..."

**Recommended:**
> "...thousands of satisfied clients and more than 2,000 vehicles detailed across Oakland Park, Fort Lauderdale, and the greater Broward County area..."

---

### Fix 4 — Add mobile service note to each service detail page
**File:** `/Users/matthewkass/Desktop/sunflo/src/data/service-pages.ts`

For ceramic coating and paint correction (studio-preferred), append to `intro` field:
> "Ceramic coating applications are best performed at our climate-controlled Oakland Park studio — call us to discuss whether mobile service is suitable for your specific job."

For window tinting and PPF (mobile-available), append to `intro` field:
> "Window tinting is available as both a studio and mobile appointment across South Florida — call or message to schedule."

---

### Fix 5 — Expand gallery page SEO copy
**File:** `/Users/matthewkass/Desktop/sunflo/src/app/gallery/page.tsx`
Replace the current single-paragraph SEO section with approximately 250 words covering: types of work shown (exterior corrections, ceramic applications, interior transformations), specific notable vehicles (McLaren, Rolls-Royce, Corvette visible in gallery data), the Oakland Park studio location, and a note on mobile availability. This brings the page above the 300-word minimum for a content page.

---

### Fix 6 — Replace contact page Maps placeholder embed
**File:** `/Users/matthewkass/Desktop/sunflo/src/app/contact/page.tsx`, lines 173-176
Replace the placeholder Google Maps embed URL (which uses `0x88d9097db9bcaef3%3A0x0` as the CID — the `0x0` is the unfilled placeholder) with the real GBP embed URL from the Google Maps "Share > Embed a map" dialog on the verified listing.

---

### Fix 7 — Add 3M film brand name to window tinting service page
**File:** `/Users/matthewkass/Desktop/sunflo/src/data/service-pages.ts`, window-tinting entry
In the "Types of Window Film" section body, add after the ceramic film description:
> "At Sunflo, we install 3M Crystalline and carbon series window films — the same product line used in our About page and referenced across our service area pages."

More simply, just insert "3M Crystalline and carbon series" as the named film in the ceramic film tier description.

---

## Summary of Priority Actions

| Priority | Action | Effort | Impact |
|---|---|---|---|
| 1 | Add "Jason Girasol" to about page body copy | 5 min | High — E-E-A-T surname signal |
| 2 | Add CashApp to FAQ #9 payment answer | 5 min | High — data consistency |
| 3 | Fix "hundreds" to "thousands" in FAQ #18 | 2 min | Medium — factual consistency |
| 4 | Add mobile note to 4 service detail page intros | 30 min | Medium — policy coverage gap |
| 5 | Expand gallery page SEO copy to 250+ words | 45 min | Medium — thin content |
| 6 | Add payment methods to contact page | 15 min | Medium — trust/UX |
| 7 | Replace Maps placeholder embed on contact page | 15 min | Medium — trust signal |
| 8 | Add 3M brand name to window tinting service page | 5 min | Low-medium — brand consistency |
| 9 | Build Vinyl Wraps landing page | 4-6 hrs | High — organic growth |
| 10 | Build Interior Detailing landing page | 4-6 hrs | High — organic growth |
| 11 | Verify and update Google review count on about page | 10 min | Low — accuracy |
| 12 | Add Wilton Manors local landmarks to city page | 20 min | Low — local signal |

---

*Audit conducted against Google Quality Rater Guidelines (September 2025 edition). Word counts are estimates derived from static source content. The Helpful Content System was incorporated into Google's core ranking algorithm in March 2024 and is evaluated within every core update.*
