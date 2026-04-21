# Local SEO Audit — Sunflo Detailing
**Date:** 2026-04-21
**Auditor:** Claude (Local SEO Agent, claude-sonnet-4-6)
**Site:** https://sunflodetailing.com
**Business:** Sunflo Detailing — 4708 NE 11th Ave, Oakland Park, FL 33334 — (954) 235-6882

---

## Local SEO Score: 76 / 100

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|---------|
| GBP Signals | 25% | 72/100 | 18.0 |
| Reviews & Reputation | 20% | 82/100 | 16.4 |
| Local On-Page SEO | 20% | 80/100 | 16.0 |
| NAP Consistency & Citations | 15% | 87/100 | 13.1 |
| Local Schema Markup | 10% | 78/100 | 7.8 |
| Local Link & Authority Signals | 10% | 48/100 | 4.8 |
| **TOTAL** | | | **76.1 / 100** |

---

## Business Type

**Hybrid** — Sunflo operates a brick-and-mortar studio at a verified street address (4708 NE 11th Ave, Oakland Park, FL 33334) AND explicitly offers mobile service throughout South Florida. Both dimensions are surfaced consistently across the site: the address appears in the footer, About section, contact page, and all city location pages; mobile service is disclosed in the hero copy, location pages, and the llms.txt FAQ.

**Industry Vertical:** Automotive — Auto Detailing. Signals confirmed: ceramic coating, paint correction, PPF, window tinting, vehicle wraps, marine detailing, XPEL/3M product references, pricing by vehicle size, studio/mobile model.

---

## NAP Consistency Audit

The canonical NAP for this business is:
- **Name:** Sunflo Detailing
- **Address:** 4708 NE 11th Ave, Oakland Park, FL 33334
- **Phone:** (954) 235-6882

### Source Comparison Table

| Source | Business Name | Address | Phone | Status |
|--------|--------------|---------|-------|--------|
| `src/data/contact.ts` | — | 4708 NE 11th Ave, Oakland Park, FL 33334 | (954) 235-6882 | PASS |
| Schema JSON-LD (`layout.tsx`) | Sunflo Detailing | streetAddress: "4708 NE 11th Ave", addressLocality: "Oakland Park", addressRegion: "FL", postalCode: "33334" | Derived from `contact.phoneHref` → +1-954-235-6882 | PASS |
| Footer (`Footer.tsx`) | "Sunflo Detailing" (logo + copyright) | Rendered via `{contact.address}` | Rendered via `{contact.phone}` | PASS |
| Contact page (`contact/page.tsx`) | — | "4708 NE 11th Ave\nOakland Park, FL 33334" (hardcoded in JSX, line 102) | Rendered via `{contact.phone}` | PASS — address hardcoded exactly matches canonical |
| `public/llms.txt` | Sunflo Detailing | 4708 NE 11th Ave, Oakland Park, FL 33334 | (954) 235-6882 | PASS |
| `alternateName` in schema | "Sunflo Car Detailing" | — | — | NOTE — see flag below |
| Google Knowledge Panel | Unable to verify live (network access not available in audit environment) | — | — | UNVERIFIED |

### Flags

**FLAG 1 — Contact page Maps embed uses placeholder CID.**
The iframe on `/contact` (line 175) has `pb=...!1s0x88d9097db9bcaef3%3A0x0` — the CID portion is `0x0`, which is a null/placeholder ID. This means the embed does not reference the verified GBP listing. The homepage `LocationMap.tsx` embed is correct: it uses `0x88d9a7071fb518fb%3A0x8db1839c761770d4`, which resolves to the "Sunflo Detailing" listing. The contact page embed will show a generic pin on the address rather than the verified GBP card with reviews and hours.

**FLAG 2 — `alternateName: "Sunflo Car Detailing"` in schema.**
The schema includes an alternate name "Sunflo Car Detailing". This is acceptable practice (it matches how some clients and the schema `sameAs` GBP reference spell it), but ensure this alternate name is actually how the listing appears on GBP; if the GBP primary name is "Sunflo Detailing", this alternate name could cause minor consistency noise in aggregators.

**FLAG 3 — GBP `kgmid` and `cid` in `sameAs`.**
`sameAs` includes both `https://www.google.com/search?kgmid=/g/11j37x7gnx` and `https://www.google.com/maps?cid=10210086538245009620`. These must match the same listing. Could not verify live, but both values being present is correct practice. Owner should confirm both resolve to the same active GBP listing.

**NAP consistency verdict: PASS across all code surfaces.** Address format is consistent (no "Ave." vs "Ave" variation, no missing zip). Phone is consistent. The single actionable discrepancy is the contact page Maps embed CID.

---

## Google Business Profile (GBP) Signals Audit

*Note: Live GBP was not directly accessible during this audit. Assessment is based on on-page signals, embedded URLs, schema `sameAs` references, and hero copy claims. Owner must verify live GBP data.*

### Detected GBP Signals

| Signal | Present | Location | Notes |
|--------|---------|----------|-------|
| Verified Maps embed (GBP listing) | YES | `LocationMap.tsx` (homepage) | Correct `place_id`/CID in embed URL — `0x8db1839c761770d4` — pulls "Sunflo Detailing" listing |
| Maps embed on contact page | PARTIAL | `contact/page.tsx` | Embed present but uses placeholder CID `0x0` — does not pull GBP card |
| `sameAs` GBP CID in schema | YES | `layout.tsx` line 150–151 | Both `kgmid` and `cid` referenced |
| Directions link | YES | `LocationMap.tsx`, `contact/page.tsx`, all city location pages | Links to `maps.google.com/?q=4708+NE+11th+Ave...` |
| Review count claim on homepage | YES | `HeroSection.tsx` hero stat: "5.0★ — 120 Google reviews" | Must be kept current |
| `aggregateRating` in schema | YES | `layout.tsx` — ratingValue: 5.0, reviewCount: 120 | Comment says "Verified 2026-04-21" |
| Click-to-call in navbar | YES | `Navbar.tsx` — Phone icon + `{contact.phone}` as `href={contact.phoneHref}` | Phone number visible on all pages (hidden on mobile below sm breakpoint — see flag) |
| Review widget / embedded reviews | NO | On-page testimonials exist but are static/hardcoded — no live GBP review widget | Opportunity missed |
| GBP posts indicators | UNVERIFIED | Cannot assess from codebase | Owner must check GBP dashboard |
| Photo evidence | NO explicit GBP gallery widget | Site has its own photo gallery but no GBP photo pull | |
| Q&A section | UNVERIFIED | Cannot assess from codebase | Check GBP for unanswered Q&A |

### Primary Category Assessment

The schema uses `@type: "AutomotiveBusiness"` — this is the Schema.org type. For GBP, the **primary category must be "Car detailing service"** (not "Auto repair shop"). This is the single most important GBP ranking factor (Whitespark 2026 score: 193). Using the wrong primary category is the #1 negative factor (score: 176). Cannot verify live from codebase, but the `sameAs` GBP CID reference gives the owner the direct link to confirm.

**Action required:** Owner must verify GBP primary category is "Car detailing service" and not a generic automotive category.

### GBP Click-to-Call Flag

In `Navbar.tsx`, the phone number text (`contact.phone`) has `className="hidden sm:inline"` — meaning the number text is **hidden on mobile screens below the `sm` breakpoint (640px)**. The phone icon and the `<a href={contact.phoneHref}>` wrapper remain visible at all screen sizes, so tap-to-call still works. However, the number is not visually displayed on mobile navbars. For a service business where the phone call is a primary conversion event, displaying the number (even in a smaller font) on all screen sizes is recommended.

---

## Review Health Snapshot

| Metric | Value | Source | Status |
|--------|-------|--------|--------|
| Average Rating | 5.0 | Schema `aggregateRating` + hero stat | Excellent |
| Review Count (schema) | 120 | `layout.tsx` — comment says verified 2026-04-21 | Good |
| On-page testimonials | 5 reviews | `src/data/testimonials.ts` | All 5-star, dated 2025-04 to 2025-05 |
| Response rate | UNVERIFIED | Cannot assess from codebase | Owner must check GBP |
| Review velocity (18-day rule) | UNVERIFIED | Cannot assess from GBP | Critical — see note below |

### Review Velocity Warning

Sterling Sky's 18-day rule states that GBP rankings show a measurable cliff if the listing receives no new reviews for 3 consecutive weeks. With 120 reviews and a 5.0 average, the volume baseline is healthy. The risk is complacency — if the business has periods where review requests go unsent. With 5 testimonials all dated 2025-04 / 2025-05, there is no evidence from the codebase whether reviews are flowing regularly in 2026. Owner should verify the live GBP review timestamp for the most recent review and implement a systematic post-service review request process if not already in place.

### Review Quality Assessment (from testimonials.ts)

All 5 on-site testimonials are genuine, detailed, and mention specific services (ceramic coating, truck/SUV work, Audi detailing, marine detail). Three reviewers identify as long-term clients (2017, 2018, 1.5 years). The review content is high-signal for local SEO: mentions "Jason", "Sunflo Car Detailing", "ceramic coating", "South Florida", and specific vehicle types. The reviews in the schema `review` array are mapped from `testimonials.ts`, meaning only 5 reviews are included in the structured data even though the GBP count is 120. This is acceptable — Google does not penalize for having fewer `review` entries in schema than the `reviewCount`, but having only 5 in the rich result is a minor missed opportunity.

---

## Local Schema Markup Validation

### AutomotiveBusiness Schema (layout.tsx)

| Property | Required | Present | Value | Status |
|----------|----------|---------|-------|--------|
| `@type` | Yes | Yes | `AutomotiveBusiness` | PASS — correct subtype (not generic `LocalBusiness`) |
| `@id` | Recommended | Yes | `https://sunflodetailing.com#business` | PASS |
| `name` | Yes | Yes | "Sunflo Detailing" | PASS |
| `address` | Yes | Yes | Full `PostalAddress` with all fields | PASS |
| `telephone` | Recommended | Yes | Derived from `contact.phoneHref` → `+19542356882` | PASS |
| `url` | Recommended | Yes | `https://sunflodetailing.com` | PASS |
| `geo` (GeoCoordinates) | Recommended | YES | latitude: 26.17250, longitude: -80.13500 | PARTIAL — see precision flag |
| `openingHoursSpecification` | Recommended | YES | Mon–Fri 08:00–18:00 | PARTIAL — weekend hours missing |
| `aggregateRating` | Recommended | YES | 5.0 / 120 | PASS — needs monthly maintenance |
| `priceRange` | Optional | YES | "$$-$$$" | PASS |
| `areaServed` | Recommended | YES | 7 cities + South Florida AdministrativeArea | PASS |
| `sameAs` | Recommended | YES | Instagram, Facebook, GBP kgmid, GBP CID | PASS |
| `foundingDate` | Optional | YES | "2017" | PASS |
| `logo` | Recommended | YES | `/images/sunflo-logo.png` | PASS |
| `image` | Recommended | YES | Hero image URL | PASS |
| `email` | Optional | YES | `sunflodetailing@gmail.com` | PASS |
| `employee` | Optional | YES | Jason Girasol via `@id` reference | PASS |
| `review` | Optional | YES | 5 reviews mapped from testimonials | PASS (minimal) |

### Schema Flag 1 — GeoCoordinates Precision

The schema has:
```
latitude: 26.17250,
longitude: -80.13500,
```

These are 4-decimal-place values (26.1725 / -80.135). The recommended precision per local SEO best practice is **5 decimal places** to ensure accurate pin placement. Additionally, the coordinates may not be precisely accurate: the homepage `LocationMap.tsx` embed decodes to approximately `26.185207, -80.135131` — a latitude that is ~0.013 degrees (~1.4 km) north of what is in the schema. The contact page embed uses `26.1725, -80.1350` which matches the schema. One of these coordinates is wrong. The owner needs to verify the exact coordinates of 4708 NE 11th Ave, Oakland Park, FL 33334 using Google Maps and update both the schema and ensure both embeds agree.

**To verify:** Search "4708 NE 11th Ave Oakland Park FL" in Google Maps, right-click the pin, and copy the exact coordinates. Update `layout.tsx` geo block with 5-decimal precision.

### Schema Flag 2 — Opening Hours (Weekend Not Addressed)

The `openingHoursSpecification` only covers Monday–Friday. If Saturday or Sunday service is ever available (even by appointment), it should be added. If truly closed on weekends, a `closes: "00:00"` on Sat/Sun or simply the absence of those days is acceptable — but the GBP listing's hours must match the schema exactly. Any mismatch between schema hours and GBP hours is a consistency signal Google treats negatively.

### Schema Flag 3 — `AutomotiveBusiness` vs `AutoDealer`

`AutomotiveBusiness` is the correct Schema.org parent type for a detailing shop. More specific subtypes that could apply: there is no official Schema.org type for "car detailing service" specifically — `AutomotiveBusiness` is the most accurate available type and is what Google recommends for GBP categories like "Car detailing service". This is correctly implemented.

### City Location Pages — Service Schema

Each `/locations/[city]` page emits a `Service` schema with:
- `name`: "Auto Detailing in [City], FL"
- `areaServed`: `{"@type": "City", "name": "[City]"}` — correctly city-specific per page
- `provider`: references `#business` via `@id`
- `BreadcrumbList` schema: present and correct

This is solid. The `serviceType: "Automotive Detailing"` is consistent across all location pages.

### Service Detail Pages — Schema

Each `/services/[slug]` page emits:
- `Service` schema with `areaServed` covering all 7 cities
- `FAQPage` schema with structured Q&A
- `BreadcrumbList` schema

The FAQPage schema on service pages is a strong positive signal — it enables FAQ rich results in Google Search and AI Overview citations.

---

## Local On-Page SEO Assessment

### Homepage

| Factor | Status | Detail |
|--------|--------|--------|
| Title tag geo-modified | PASS | "Auto Detailing, Ceramic Coatings & Paint Correction — Oakland Park & Fort Lauderdale, FL" |
| Meta description geo-modified | PASS | Mentions "Oakland Park, FL" and "South Florida" |
| H1 geo-modified | N/A | Homepage H1 is "Passionate / Professional / Detailing." — brand headline, not keyword-targeted. Acceptable for homepage. |
| Address visible in page body | PASS | `AboutPreview.tsx` signature block shows `{contact.address}` |
| Address in footer | PASS | Footer renders `{contact.address}` on every page |
| Google Maps embed | PASS | `LocationMap.tsx` — full verified GBP embed on homepage |
| Click-to-call | PASS (desktop) / PARTIAL (mobile) | Number hidden on mobile below 640px — icon only |
| Review signals on-page | PASS | 5 testimonials + "5.0★ 120 Google reviews" hero stat |
| Service keywords geo-modified | PASS | "ceramic coating Oakland Park", "paint correction Oakland Park", "auto detailing Oakland Park, FL" all present in service page titles/intros |

### Service Pages (/services/[slug])

| Page | H1 | Meta Title | Geo-modified Keywords | Status |
|------|----|-----------|----------------------|--------|
| /services/ceramic-coating | "Ceramic Coating in Oakland Park, FL" | "Ceramic Coating in Oakland Park, FL \| Sunflo Detailing" | "Oakland Park", "Fort Lauderdale", "Wilton Manors", "Pompano Beach" in body | PASS |
| /services/paint-correction | "Paint Correction in Oakland Park, FL" | "Paint Correction in Oakland Park, FL \| Sunflo Detailing" | "Oakland Park, FL", "Fort Lauderdale", "Broward County" | PASS |
| /services/paint-protection-film | "Paint Protection Film (PPF) in Oakland Park, FL" | "Paint Protection Film (PPF) in Oakland Park, FL \| Sunflo Detailing" | "Oakland Park, FL", "South Florida" | PASS |
| /services/window-tinting | "Window Tinting in Oakland Park, FL" | "Window Tinting in Oakland Park, FL \| Fort Lauderdale, FL \| Sunflo Detailing" | "Oakland Park", "Fort Lauderdale" | PASS |

### Contact Page

| Factor | Status | Detail |
|--------|--------|--------|
| H1 | PASS | "Book Your Service" — acceptable for contact page |
| Address visible | PASS | "4708 NE 11th Ave / Oakland Park, FL 33334" hardcoded in JSX |
| Phone visible and linked | PASS | `{contact.phone}` as `href={contact.phoneHref}` |
| Hours visible | PASS | "Mon – Fri: 8:00 AM – 6:00 PM (By appointment only)" |
| Maps embed | PARTIAL | Embed present but uses placeholder CID `0x0` — does not pull GBP card |
| Meta title geo-modified | PASS | "Book Auto Detailing in Oakland Park, FL" |

---

## Location Pages Quality Assessment (5 City Pages)

All 5 city pages are generated from `src/data/city-pages.ts` via a single dynamic route `src/app/locations/[city]/page.tsx`.

### Content Uniqueness Test

| City | H1 | Intro Unique? | Section Headings Unique? | Doorway Page Risk? |
|------|----|--------------|--------------------------|---------------------|
| Fort Lauderdale | "Auto Detailing in Fort Lauderdale, FL" | YES — unique narrative: I-95 commuters, Intracoastal salt, exotic vehicles, Las Olas proximity | YES — "Why Fort Lauderdale Vehicles Need Ceramic Coating", "Paint Correction for I-95 Commuters", "PPF for Convertibles and Exotics", "Drop Off on Your Way to Work" | LOW |
| Wilton Manors | "Auto Detailing in Wilton Manors, FL" | YES — neighborhood proximity angle, referral culture, community network | YES — "Detailing in Wilton Manors", "The Difference Between a Pro Detail and a Drive-Through Wash", "Interior Refreshes for Daily Commuters", "Ceramic Coating for Long-Term Value" | LOW |
| Pompano Beach | "Auto Detailing in Pompano Beach, FL" | YES — marina community, working waterfront, trucks/SUVs, Sample Road | YES — "Marine-Adjacent Detailing Challenges", "Paint Correction for Road-Weary Trucks and SUVs", "Window Tinting in Pompano Beach", "Ceramic Coating for Coastal Vehicles" | LOW |
| Deerfield Beach | "Auto Detailing in Deerfield Beach, FL" | YES — northern service corridor, retirement demo, Hillsboro Beach pier, oxidation focus | YES — "Why Coastal Vehicles in Deerfield Beach Oxidize Faster", "Paint Decontamination Before Any Coating", "Window Tinting in Deerfield Beach", "How Long Does Ceramic Coating Last in a Coastal Climate?" | LOW |
| Lighthouse Point | "Auto Detailing in Lighthouse Point, FL" | YES — affluent waterfront, exotics/collectibles, canal exposure, high-expectation angle | YES — "High-Expectation Detailing for Lighthouse Point", "XPEL PPF for Exotics and Collectibles", "Marine Environment and Paint Protection", "Ceramic Coating for Cars That Sit Near the Water" | LOW |

**Verdict: All 5 pages pass the doorway page test.** Content is substantively unique — the section headings are not name-swapped copies, and each city narrative addresses city-specific geography, demographics, road conditions, and vehicle profiles. Body content runs approximately 600–900 words per page with no duplicated paragraphs.

### Location Page Schema Assessment

| Factor | Status | Detail |
|--------|--------|--------|
| `Service` schema emitted | PASS | Each page emits `Service` schema |
| `areaServed` is city-specific | PASS | `{"@type": "City", "name": "[CityName]"}` — one city per page |
| `provider` links to `#business` | PASS | Via `@id` reference |
| `BreadcrumbList` schema | PASS | Home > Locations > [City] Auto Detailing |
| City in H1 | PASS | All 5 H1s include city name + "Auto Detailing" |
| Meta title unique per city | PASS | All 5 meta titles follow "Auto Detailing in [City], FL \| Sunflo Detailing" |
| City canonical URL | PASS | `alternates.canonical` set to `/locations/[slug]` on each |
| Internal links depth | PASS | Footer links to all 5 city pages; location pages link to 4 service pages each; CTAs link back to `/contact` |

### Location Page Gap

The 5 city pages do **not** include a dedicated Google Maps embed showing the studio location relative to that city. Each page has a directions CTA linking to `maps.google.com/?q=4708+NE+11th+Ave...` but no embedded iframe. Adding the same GBP iframe (from `LocationMap.tsx`) to each city page would reinforce the Maps signal on those pages.

---

## Citation Presence (Tier 1 Directories)

*Note: Live directory verification was not possible in this audit environment. The following reflects what could be inferred from schema `sameAs`, on-page links, and standard citation expectations for an auto detailing business in Florida.*

| Directory | Status | Evidence |
|-----------|--------|----------|
| Google Business Profile | VERIFIED IN SCHEMA | `sameAs` includes GBP CID and kgmid; homepage embed pulls "Sunflo Detailing" listing |
| Facebook | VERIFIED IN SCHEMA | `sameAs` links to `facebook.com/Sunflodetailing/`; footer and contact page link |
| Instagram | VERIFIED IN SCHEMA | `sameAs` links to `instagram.com/sunflodetailing`; footer and contact page link |
| Yelp | UNVERIFIED | No `sameAs` reference to Yelp. Not linked from site. Yelp presence not confirmed. |
| Better Business Bureau (BBB) | UNVERIFIED | No `sameAs` reference to BBB. Not linked from site. |
| Bing Places | UNVERIFIED | Cannot verify from codebase. |
| Apple Maps | UNVERIFIED | Cannot verify from codebase. |
| Angi / HomeAdvisor | UNVERIFIED | No reference. Applicable for home services crossover (mobile detailing). |
| CarGurus / detailing-specific directories | UNVERIFIED | No reference. |

**Recommendation:** Owner should audit citations manually via Whitespark Local Citation Finder or BrightLocal. For an auto detailing business in South Florida, priority Tier 1 citations are: Google, Facebook, Yelp, Bing Places, Apple Maps, BBB, and Foursquare. Missing or inconsistent citations on any of these are a negative local ranking signal. The 3 of the top 5 AI visibility factors being citation-related (Whitespark 2026) makes this a high-priority item.

---

## Local Link & Authority Signals

| Signal | Status | Notes |
|--------|--------|-------|
| Internal linking from homepage to service pages | PASS | `FeaturedServices` component links to service pages; navbar links cover main sections |
| Internal linking from city pages to service pages | PASS | Each city page renders a 4-card service grid linking to ceramic coating, paint correction, PPF, tinting |
| Internal linking from service pages to city pages | GAP | Service pages do not link to city location pages. Adding a "Serving [City]" cross-link section would help. |
| External local links (inbound) | UNVERIFIED | Cannot assess from codebase. No way to audit backlink profile without paid tools. |
| XPEL/3M brand mentions | YES | Referenced in copy. Opportunity: get listed on XPEL and 3M installer directory pages for inbound citation links. |
| Social signals | PARTIAL | Instagram and Facebook linked; no embedded social feed or UGC pull |
| Local sponsorships / citations | UNVERIFIED | No evidence from codebase |

---

## Top 10 Prioritized Actions

### Critical

**1. Fix the Google Maps embed on the contact page.**
File: `/Users/matthewkass/Desktop/sunflo/src/app/contact/page.tsx`, line 175.
The iframe `src` uses a placeholder CID (`0x0`). Replace with the same verified embed URL used in `LocationMap.tsx` — `pb=!1m18...!1s0x88d9a7071fb518fb%3A0x8db1839c761770d4!2sSunflo%20Detailing!5e0...`. This is the highest-traffic page for local conversion intent and the embed should display the actual GBP card with reviews, hours, and the verified pin.

**2. Verify and correct GeoCoordinates in schema.**
File: `/Users/matthewkass/Desktop/sunflo/src/app/layout.tsx`, lines 125–126.
Schema has `latitude: 26.17250, longitude: -80.13500`. The homepage Maps embed decodes to `26.185207, -80.135131` — approximately 1.4 km north. Verify the exact coordinates of 4708 NE 11th Ave, Oakland Park, FL 33334 in Google Maps (right-click > "What's here?") and update the schema to 5-decimal precision. Also ensure the contact page embed and the homepage embed use the same resolved coordinates.

**3. Verify GBP primary category is "Car detailing service".**
Cannot verify from codebase. This is the #1 local pack ranking factor (Whitespark 2026 score: 193). Log into Google Business Profile and confirm the primary category is "Car detailing service" — not "Automotive detailing service", "Auto detailing", "Auto repair shop", or any variation. Any other category as primary is the #1 negative ranking factor.

### High Priority

**4. Audit and build Tier 1 citations.**
Yelp, Bing Places, Apple Maps, and BBB are not confirmed in the codebase. Run a citation audit (Whitespark, BrightLocal, or Moz Local) and ensure NAP is consistent across all directories. With 3 of the top 5 AI visibility factors being citation-related, this is a high-leverage, one-time effort. When citations are confirmed, add them to the `sameAs` array in `layout.tsx`.

**5. Implement a systematic post-service review request process.**
The 5.0 / 120 review profile is excellent. The risk is the 18-day velocity cliff. After every job completion, send the client a direct link to the GBP review form. A simple text message with the short GBP review URL is sufficient. The goal is at least 2–4 new reviews per month to maintain ranking velocity. Monitor the most recent review date in GBP at least monthly.

**6. Make click-to-call visible on mobile at all screen sizes.**
File: `/Users/matthewkass/Desktop/sunflo/src/components/layout/Navbar.tsx`, line 63.
`className="hidden sm:inline"` hides the phone number below 640px. For a service business, the phone number is a primary mobile conversion. Change to `"text-sm font-medium tracking-wide"` (remove the `hidden sm:inline`) or use a smaller text size that fits at all widths. The tap-to-call link already works — this is about visual prominence.

### Medium Priority

**7. Add a Google Maps embed to each city location page.**
Files: `/Users/matthewkass/Desktop/sunflo/src/app/locations/[city]/page.tsx` and `/Users/matthewkass/Desktop/sunflo/src/data/city-pages.ts`.
City pages have a directions CTA but no embedded map. Embedding the same GBP iframe on each location page reinforces the Maps signal for that URL and gives users an immediate visual anchor for studio location. A single shared embed component (reuse `LocationMap`'s iframe block) can be dropped into the "Drive Time + Contact" section on each city page.

**8. Add cross-links from service pages to relevant city pages.**
File: `/Users/matthewkass/Desktop/sunflo/src/app/services/[slug]/page.tsx`.
Service pages currently link to related services but not to city location pages. Adding a small "Service area" or "Serving South Florida" link block pointing to the 5 city pages improves internal link depth from service pages to location pages and reinforces topical/geographic relevance. A simple rendered list of `cityPages` links below the FAQ section would accomplish this.

**9. Update `aggregateRating.reviewCount` on a monthly schedule.**
File: `/Users/matthewkass/Desktop/sunflo/src/app/layout.tsx`, line 157.
The comment on line 99 and 153 already calls this out correctly. The current value of 120 is marked as verified 2026-04-21. If Google's live GBP count diverges significantly from the schema value (e.g., GBP shows 135 and schema shows 120), it creates a data inconsistency that can affect rich results. Set a monthly calendar reminder to update this value.

**10. Add XPEL and 3M installer directory listings.**
XPEL maintains a dealer/installer locator at `xpel.com/find-a-dealer`. 3M has a similar Pro Shop directory. Getting listed on manufacturer installer directories provides a high-authority inbound citation (these are niche-relevant, not just general business directories) and surfaces the business to customers who start their research on the product brand's site. This also strengthens the brand signal in schema (`makesOffer` or brand partnerships could be added to schema once listings are live).

---

## Limitations Disclaimer

The following could not be assessed without paid/live tools or platform access:

- **Live GBP data:** Primary category, current review count, unanswered Q&A, photos count, posts activity, completeness score, and "Popular times" data were not accessible. Assessment is based on schema `sameAs` references and on-page signals only.
- **Google Knowledge Panel:** Could not fetch the live SERP to verify Knowledge Panel appearance, address display, or phone number as shown by Google.
- **Citation audit:** Yelp, BBB, Bing Places, Apple Maps, Foursquare, and niche directories were not verified. WebFetch and Bash network access were not available in this audit session.
- **Live local pack rankings:** Could not run `google_local_pack_serp` queries to assess current local pack position for target keywords (e.g., "car detailing Oakland Park", "ceramic coating Fort Lauderdale"). DataForSEO MCP tools were not available.
- **Backlink profile:** Domain authority, inbound local links, and competitor link gap analysis require Ahrefs, Moz, or Semrush and were not performed.
- **Review response rate:** Cannot assess from codebase. Owner should verify in GBP dashboard that all reviews have been responded to — response rate is a local ranking signal.
- **Proximity factor:** 55.2% of local pack ranking variance is explained by proximity to the searcher (Search Atlas ML study). This cannot be optimized through on-page or schema work and is noted for completeness.
- **Core Web Vitals / Page Experience:** Not assessed in this audit. Vercel Analytics and Speed Insights are installed and active — owner should review those dashboards for LCP/CLS/INP scores.
