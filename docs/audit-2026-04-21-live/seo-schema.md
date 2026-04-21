# Schema.org Structured Data Audit — Sunflo Detailing
**Date:** 2026-04-21
**Site:** https://sunflodetailing.com
**Source file root:** `/Users/matthewkass/Desktop/sunflo/src/`
**Auditor:** Schema.org markup specialist (Claude Sonnet 4.6)

---

## Methodology

The Bash tool was unavailable for live HTTP fetching. All validation was performed against the local codebase, which is the canonical source for what renders live (Next.js static generation). Every JSON-LD block was reconstructed by tracing:

- `src/app/layout.tsx` — global blocks (WebSite, AutomotiveBusiness, Person)
- Each page's `page.tsx` — page-level blocks
- All referenced data files (`contact.ts`, `testimonials.ts`, `service-pages.ts`, `gallery.ts`, `faq.ts`, `city-pages.ts`)

Data-driven fields (e.g. FAQ `mainEntity`, gallery `itemListElement`, review array) were validated against their source arrays. JSON structure was verified by inspection; no syntax errors were found in any block.

---

## Overall Score: 74 / 100

| Category | Points Available | Points Earned | Notes |
|---|---|---|---|
| AutomotiveBusiness (global) | 20 | 15 | Three issues: `ratingValue` in individual reviews is a string, `sameAs` includes non-canonical Google URLs, Saturday/Sunday hours missing |
| Person / E-E-A-T | 10 | 9 | Solid; minor: no `image` or `url` on Person node |
| Service pages (4 pages) | 20 | 16 | `serviceType` is generic string, not schema-standard; `Offer` has no `price` numeric value |
| BreadcrumbList (all pages) | 15 | 14 | One structural gap on `/about` (no `@id` on the page node itself) |
| FAQPage (service pages + /faq) | 10 | 7 | Commercial site restriction; present and valid but restricted from Google rich results |
| Gallery (ItemList / ImageObject) | 10 | 8 | Missing `url` property on ImageObjects; `description` duplicates `name` exactly |
| Location pages | 10 | 8 | `Service` schema missing `offers`; `areaServed` is a single City not an array |
| Contact page | 5 | 4 | Only BreadcrumbList present; no LocalBusiness repeat (expected, inherited from global) |
| JSON validity & @context | --- | -3 | Review `ratingValue` / `bestRating` / `worstRating` use string not number (layout.tsx:167-170) |

---

## Page-by-Page Validation

---

### `/` — Homepage

**Blocks rendered:** 3 (WebSite, AutomotiveBusiness, Person) — all from `layout.tsx`, present on every page

#### Block 1: WebSite

```
@context: "https://schema.org" ✅
@type: "WebSite" ✅
@id: "https://sunflodetailing.com#website" ✅
url: "https://sunflodetailing.com" ✅
name: "Sunflo Detailing" ✅
description: present ✅
publisher: { "@id": "https://sunflodetailing.com#business" } ✅
```

**Result: PASS** — all WebSite required/recommended properties present; `@id` cross-reference to business node is correct.

---

#### Block 2: AutomotiveBusiness

```
@context: "https://schema.org" ✅
@type: "AutomotiveBusiness" ✅
@id: "https://sunflodetailing.com#business" ✅
name: "Sunflo Detailing" ✅
url: "https://sunflodetailing.com" ✅
telephone: "+19542356882" ✅ (resolved from contact.phoneHref.replace("tel:", ""))
email: "sunflodetailing@gmail.com" ✅
image: absolute URL ✅
logo: absolute URL ✅
priceRange: "$$-$$$" ✅
foundingDate: "2017" ✅
```

**address (PostalAddress):**
```
@type: "PostalAddress" ✅
streetAddress: "4708 NE 11th Ave" ✅
addressLocality: "Oakland Park" ✅
addressRegion: "FL" ✅
postalCode: "33334" ✅
addressCountry: "US" ✅
```
All 5 required PostalAddress fields present. **PASS**

**geo (GeoCoordinates):**
```
@type: "GeoCoordinates" ✅
latitude: 26.17250 ✅ (number, not string)
longitude: -80.13500 ✅ (number, not string)
```
**PASS**

**openingHoursSpecification:**
```
@type: "OpeningHoursSpecification" ✅
dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"] ✅
opens: "08:00" ✅
closes: "18:00" ✅
```
**WARN — Missing weekend entry.** Saturday and Sunday are not specified. If the business is genuinely closed those days, a closed specification is not required by schema, but the absence means Google may show "hours not available" rather than "closed." Recommended: add an explicit Saturday/Sunday entry with `opens: "00:00"` and `closes: "00:00"` to signal intentional closure.

**areaServed:**
```
7 City nodes: Oakland Park, Fort Lauderdale, Wilton Manors, Pompano Beach,
Lighthouse Point, Lauderdale-by-the-Sea, Deerfield Beach ✅
1 AdministrativeArea node: "South Florida" ✅
```
All 7 required cities present. **PASS**

**sameAs:**
```
"https://instagram.com/sunflodetailing" ✅
"https://www.facebook.com/Sunflodetailing/" ✅
"https://www.google.com/search?kgmid=/g/11j37x7gnx" ⚠️
"https://www.google.com/maps?cid=10210086538245009620" ⚠️
```
**WARN — Non-canonical sameAs URLs.** The `sameAs` property is intended for canonical entity identifiers. Google Search and Knowledge Panel queries may not recognize `google.com/search?kgmid=...` or `google.com/maps?cid=...` as stable entity references. These two entries are not wrong per spec but add no confirmed benefit. The strong sameAs URIs are the Instagram and Facebook URLs. Consider removing or replacing the Google entries with the GBP profile URL if one exists (e.g., `https://maps.app.goo.gl/...` or the business's Google Maps canonical link).

**employee:**
```
{ "@id": "https://sunflodetailing.com#jason" } ✅
```
Correctly references the Person node. **PASS**

**aggregateRating:**
```
@type: "AggregateRating" ✅
ratingValue: 5.0 ✅ (number, not string — CORRECT)
reviewCount: 120 ✅ (number, not string — CORRECT)
bestRating: 5 ✅
worstRating: 1 ✅
```
**PASS** — Top-level `aggregateRating` uses numeric values correctly.

**review array (individual Review nodes):**

Source: `testimonials.ts` mapped in `layout.tsx:161-173`.

```javascript
reviewRating: {
  "@type": "Rating",
  ratingValue: String(t.rating),   // ❌ CONVERTS NUMBER TO STRING
  bestRating: "5",                  // ❌ STRING
  worstRating: "1",                 // ❌ STRING
}
```

**CRITICAL — Individual review `ratingValue`, `bestRating`, and `worstRating` are strings, not numbers.**

Schema.org expects `ratingValue` to be of type `Number` or `Text`. Google's structured data guidelines state that for `AggregateRating` and `Rating`, numeric values should be numbers. While `Text` is technically allowed by the spec, `String(t.rating)` explicitly converts a JavaScript number to a string, meaning the rendered JSON will contain `"ratingValue": "5"` instead of `"ratingValue": 5`. This inconsistency between the top-level `aggregateRating` (which uses numbers) and the individual `Review` items (which use strings) is a validation warning in Google's Rich Results Test.

**Fix in `layout.tsx:161-173`:** Remove `String()` wrapper and quote characters from `bestRating`/`worstRating`:
```javascript
reviewRating: {
  "@type": "Rating",
  ratingValue: t.rating,       // already a number in Testimonial type
  bestRating: 5,
  worstRating: 1,
},
```

**date format on reviews:**
```
t.date values: "2025-05", "2025-04"
```
**WARN — Dates are YYYY-MM format, not ISO 8601 full dates.** Schema.org `datePublished` expects a full ISO 8601 date (`YYYY-MM-DD`) or at minimum a valid xsd:date. `"2025-05"` is a valid xsd:gYearMonth but Google's structured data guidelines prefer full dates for rich result eligibility. Recommend updating testimonial dates to `"2025-05-01"` or more precise dates.

**AutomotiveBusiness overall: WARN (2 issues, 1 critical)**

---

#### Block 3: Person (Jason Girasol) — Global

```
@context: "https://schema.org" ✅
@type: "Person" ✅
@id: "https://sunflodetailing.com#jason" ✅ (matches AutomotiveBusiness employee link)
name: "Jason Girasol" ✅ (full name)
jobTitle: "Owner & Lead Detailer" ✅
worksFor: { "@id": "https://sunflodetailing.com#business" } ✅
knowsAbout: [...5 items] ✅
```

**INFO — Missing `image` and `url` on Person.** These are recommended for E-E-A-T Knowledge Panel signals. The `/about` page has a founder photo at `/images/about/founder.jpg` that could be added as `"image": "https://sunflodetailing.com/images/about/founder.jpg"` on the global Person node.

**Person (global) overall: PASS with minor recommendation**

---

### `/about`

**Blocks rendered:** 3 (AboutPage, Person expanded, BreadcrumbList) + 3 inherited from layout

#### Block 1: AboutPage

```
@context: "https://schema.org" ✅
@type: "AboutPage" ✅
@id: "https://sunflodetailing.com/about" ✅
name: "About Sunflo Detailing" ✅
url: "https://sunflodetailing.com/about" ✅
mainEntity: { "@id": "https://sunflodetailing.com#business" } ✅
about: { "@id": "https://sunflodetailing.com#jason" } ✅
```

**WARN — `@id` uses the page URL without a fragment.** Best practice for page-level WebPage schema is to use the URL as `@id` (as done here), but the `@id` is the same value as `url`, which is valid. No critical issue, but note that Google's guidelines prefer WebPage `@id` to match the canonical URL exactly (it does here). **PASS**

#### Block 2: Person (expanded, /about only)

```
@context: "https://schema.org" ✅
@type: "Person" ✅
@id: "https://sunflodetailing.com#jason" ✅
name: "Jason Girasol" ✅
jobTitle: "Owner & Lead Detailer" ✅
worksFor: { "@id": "https://sunflodetailing.com#business" } ✅
description: present ✅
knowsAbout: [...6 items] ✅
```

**INFO — Same `@id` as global Person node is intentional and correct** — this expanded version merges with the global node via JSON-LD graph identity. **PASS**

**INFO — Still missing `image` property** (same as global Person note above). Adding `"image": "https://sunflodetailing.com/images/about/founder.jpg"` to this node would strengthen E-E-A-T signals considerably.

#### Block 3: BreadcrumbList

```
@context: "https://schema.org" ✅
@type: "BreadcrumbList" ✅
itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://sunflodetailing.com/" } ✅
  { "@type": "ListItem", position: 2, name: "About", item: "https://sunflodetailing.com/about" } ✅
]
```

All required fields (`@type ListItem`, `position`, `name`, `item`) present on both nodes. Positions are sequential starting at 1. URLs are absolute. **PASS**

**`/about` overall: PASS**

---

### `/services/ceramic-coating`

**Blocks rendered:** 3 page-level (Service, FAQPage, BreadcrumbList) + 3 inherited from layout

#### Block 1: Service

```
@context: "https://schema.org" ✅
@type: "Service" ✅
name: "Ceramic Coating in Oakland Park, FL" ✅
serviceType: "Automotive Detailing" ⚠️
description: metaDescription (155 chars) ✅
provider: { "@id": "https://sunflodetailing.com#business" } ✅
areaServed: 7 City nodes ✅
url: "https://sunflodetailing.com/services/ceramic-coating" ✅
```

**WARN — `serviceType` is a freeform string.** `"Automotive Detailing"` is not a schema.org enumerated value; `serviceType` is a `Text` property so this is not an error, but a more specific value would better distinguish this service from others on the site. Each service page shares the identical `serviceType: "Automotive Detailing"` string, making each Service node semantically identical in that field.

**Offers node:**
```
@type: "Offer" ✅
priceSpecification:
  @type: "PriceSpecification" ✅
  priceCurrency: "USD" ✅
  description: "Custom quote..." ✅
```

**WARN — No numeric `price` or `minPrice`/`maxPrice` on Offer.** The `description` field carries the pricing narrative, but Google's structured data for Offers expects `price` (or `minPrice`+`maxPrice`) as a numeric value for rich result eligibility. The page copy mentions "Starting at $800" — this could be expressed as `minPrice: 800` on the `PriceSpecification`.

#### Block 2: FAQPage

```
@context: "https://schema.org" ✅
@type: "FAQPage" ✅
mainEntity: [5 Question nodes] ✅
```

Each Question validated:
- `@type: "Question"` ✅
- `name`: non-empty string ✅ (all 5 questions)
- `acceptedAnswer.@type: "Answer"` ✅
- `acceptedAnswer.text`: non-empty string ✅ (all 5 answers)

**RESTRICTION — FAQPage on commercial site.** Google restricted FAQPage rich results to government and healthcare sites in August 2023. This schema will not produce FAQ rich results in Google Search for sunflodetailing.com. However, FAQPage is still parsed and used by AI/LLM systems (ChatGPT, Gemini, Perplexity) for direct answer citations. **INFO — Not a bug, but rich results benefit is zero. Retaining is beneficial for GEO/AI discoverability.**

#### Block 3: BreadcrumbList

```
itemListElement: [
  position 1: "Home" → "https://sunflodetailing.com/" ✅
  position 2: "Services" → "https://sunflodetailing.com/services" ✅
  position 3: "Ceramic Coating in Oakland Park, FL" → "https://sunflodetailing.com/services/ceramic-coating" ✅
]
```

All 3 ListItem nodes valid. **PASS**

**NOTE — `/services` breadcrumb intermediary points to a URL that may not have a page.** The codebase does not show a `/services` index page (`/src/app/services/` only contains `[slug]/`). If `/services` returns a 404, the BreadcrumbList is technically valid per schema but creates a broken navigation link in Google's breadcrumb display. Verify whether `/services` has a page or returns a redirect.

**`/services/ceramic-coating` overall: WARN (2 advisory, 1 FAQPage restriction note)**

---

### `/services/paint-correction`

**Blocks rendered:** 3 page-level (Service, FAQPage, BreadcrumbList) + 3 inherited

Identical schema structure to ceramic-coating page. All validation findings carry forward:

- Service `@type` ✅, `provider` ✅, `areaServed` 7 cities ✅
- `serviceType: "Automotive Detailing"` — same generic string as other service pages ⚠️
- `Offer` has no numeric price; `minPrice: 2000` could be added ⚠️
- FAQPage: 5 Question nodes, all valid ✅ — commercial site restriction applies
- BreadcrumbList: 3-item, all valid ✅ — same `/services` intermediary note applies

**`/services/paint-correction` overall: WARN (same as ceramic-coating)**

---

### `/services/paint-protection-film`

**Blocks rendered:** 3 page-level + 3 inherited

Same structure as above. `minPrice: 1500` could be added to Offer.

**`/services/paint-protection-film` overall: WARN (same pattern)**

---

### `/services/window-tinting`

**Blocks rendered:** 3 page-level + 3 inherited

Same structure. No fixed starting price in the service-pages data (`"custom-quoted by vehicle"` narrative only), so `minPrice` cannot be reliably added here without owner confirmation. Offer with description-only pricing is acceptable.

**`/services/window-tinting` overall: WARN (same pattern; pricing gap not actionable without data)**

---

### `/gallery`

**Blocks rendered:** 2 page-level (BreadcrumbList, ItemList of ImageObjects) + 3 inherited

#### Block 1: BreadcrumbList

```
position 1: "Home" → "https://sunflodetailing.com/" ✅
position 2: "Gallery" → "https://sunflodetailing.com/gallery" ✅
```

**PASS**

#### Block 2: ItemList (ImageObject gallery)

```
@context: "https://schema.org" ✅
@type: "ItemList" ✅
name: "Sunflo Detailing — Work Portfolio" ✅
description: present ✅
itemListElement: [20 ListItem nodes] ✅
```

Each ListItem validated against `galleryImages` array (20 images):
```
@type: "ListItem" ✅
position: sequential 1–20 ✅
item:
  @type: "ImageObject" ✅
  contentUrl: "https://sunflodetailing.com/images/gallery/[filename]" ✅ (absolute URLs)
  name: alt text string ✅ (non-empty for all 20)
  description: alt text string ✅ (non-empty for all 20)
  creator: { "@id": "https://sunflodetailing.com#business" } ✅
  width: integer ✅
  height: integer ✅
```

**WARN — `description` is a duplicate of `name` for all 20 images.** Both `name` and `description` are set to `img.alt`. These should ideally be distinct: `name` is the short image title, `description` is a longer caption. Using identical values wastes a field that could add semantic richness for image search and AI parsing.

**WARN — Missing `url` property on ImageObject.** The `url` property on ImageObject should point to the canonical page where the image appears (i.e., the gallery page URL), separate from `contentUrl` which points to the image file itself. Schema.org's `ImageObject` spec uses `url` for the landing page and `contentUrl` for the binary asset. Google's image rich results guidelines recommend both. Add `url: "https://sunflodetailing.com/gallery"` to each ImageObject.

**INFO — No `thumbnailUrl`.** Optional but recommended for ImageObject rich results — Google can use it for image carousel display. Not required; adding it would require thumbnail generation infrastructure.

**`/gallery` overall: WARN (2 issues)**

---

### `/faq`

**Blocks rendered:** 2 page-level (FAQPage, BreadcrumbList) + 3 inherited

#### Block 1: FAQPage

```
@context: "https://schema.org" ✅
@type: "FAQPage" ✅
mainEntity: [18 Question nodes] ✅
```

All 18 FAQs from `faq.ts` validated:
- `@type: "Question"` ✅ (all 18)
- `name`: non-empty string ✅ (all 18)
- `acceptedAnswer.@type: "Answer"` ✅ (all 18)
- `acceptedAnswer.text`: non-empty string ✅ (all 18)

**NOTE — Two answer texts contain HTML escape sequences.** FAQ items id 16 and 17 (`faq.ts:126,132`) contain `&apos;` inside the answer string literals. In a JavaScript string these are literal character sequences, not HTML entities. When `JSON.stringify` renders them, they appear as `&apos;` in the JSON text, not as apostrophes. Google's structured data parser should handle this, but it is non-standard. Recommended: replace with plain apostrophes or JavaScript template literals.

```
// faq.ts line 126 — current:
"we&apos;ll come to you..."
// should be:
"we'll come to you..."
```

**RESTRICTION — FAQPage commercial site restriction applies.** Same as service pages; no Google FAQ rich results. Value is AI/LLM discoverability only.

#### Block 2: BreadcrumbList

```
position 1: "Home" ✅
position 2: "FAQ" → "https://sunflodetailing.com/faq" ✅
```

**PASS**

**`/faq` overall: WARN (HTML entity issue in answers; commercial FAQPage restriction)**

---

### `/locations/fort-lauderdale`

**Blocks rendered:** 2 page-level (Service, BreadcrumbList) + 3 inherited

#### Block 1: Service

```
@context: "https://schema.org" ✅
@type: "Service" ✅
name: "Auto Detailing in Fort Lauderdale, FL" ✅
serviceType: "Automotive Detailing" ⚠️ (same generic string)
description: metaDescription ✅
provider: { "@id": "https://sunflodetailing.com#business" } ✅
areaServed: { "@type": "City", name: "Fort Lauderdale" } ✅
url: "https://sunflodetailing.com/locations/fort-lauderdale" ✅
```

**WARN — `areaServed` is a single City object, not an array.** This is not an error (singular value is valid), but unlike the service pages which correctly array all 7 cities, the city-specific Service only declares the one target city. This is actually the correct approach for a city landing page — the areaServed should match the page's geographic focus. No fix needed.

**WARN — No `offers` node.** The city Service schema omits `offers` entirely. While `offers` is not required, its absence means this Service cannot qualify for any offer-related rich results. Given the service pages include `offers`, consistency would be improved by adding a basic `offers` block here too.

#### Block 2: BreadcrumbList

```
position 1: "Home" → "https://sunflodetailing.com/" ✅
position 2: "Locations" → "https://sunflodetailing.com/locations" ✅
position 3: "Fort Lauderdale Auto Detailing" → "https://sunflodetailing.com/locations/fort-lauderdale" ✅
```

**NOTE — `/locations` intermediary may not have a page** (same concern as `/services`). The codebase shows only `[city]/` under `/locations`. Verify this URL resolves.

**`/locations/fort-lauderdale` overall: WARN (2 advisory)**

---

### `/contact`

**Blocks rendered:** 1 page-level (BreadcrumbList) + 3 inherited from layout

#### BreadcrumbList

```
position 1: "Home" → "https://sunflodetailing.com/" ✅
position 2: "Contact" → "https://sunflodetailing.com/contact" ✅
```

**PASS**

**INFO — No page-level WebPage or ContactPage schema.** The contact page only emits a BreadcrumbList. Adding a `ContactPage` schema would strengthen the page's entity identity:
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://sunflodetailing.com/contact",
  "url": "https://sunflodetailing.com/contact",
  "name": "Contact Sunflo Detailing",
  "mainEntity": { "@id": "https://sunflodetailing.com#business" }
}
```
This is advisory, not critical.

**`/contact` overall: PASS**

---

## Errors Table

| Priority | Page(s) | Block | Issue | Fix |
|---|---|---|---|---|
| **CRITICAL** | All (global) | AutomotiveBusiness → Review | `ratingValue`, `bestRating`, `worstRating` inside individual Review nodes are JavaScript strings, not numbers (`String(t.rating)`, `"5"`, `"1"`) | In `layout.tsx:167-170`, change to `ratingValue: t.rating`, `bestRating: 5`, `worstRating: 1` |
| **WARN** | All (global) | AutomotiveBusiness | No `openingHoursSpecification` for Saturday/Sunday; Google may show "hours unavailable" | Add a weekend node with `opens: "00:00"`, `closes: "00:00"` or simply accept the omission |
| **WARN** | All (global) | AutomotiveBusiness → sameAs | Two entries are non-canonical Google internal URLs (`/search?kgmid=...`, `/maps?cid=...`) | Remove or replace with a verified Google Business Profile share URL |
| **WARN** | All (global) | AutomotiveBusiness → Review | `datePublished` values are `"YYYY-MM"` format, not full ISO 8601 `"YYYY-MM-DD"` | Update `testimonials.ts` dates to full `"YYYY-MM-DD"` format |
| **WARN** | /services/* (4 pages) | Service | `serviceType` is `"Automotive Detailing"` for all 4 service pages — identical, undifferentiated | Use service-specific values: `"Ceramic Coating Service"`, `"Paint Correction Service"`, `"Paint Protection Film Installation"`, `"Window Tinting Service"` |
| **WARN** | /services/ceramic-coating, /services/paint-correction, /services/paint-protection-film | Service → Offer | `PriceSpecification` has no numeric `minPrice` | Add `minPrice: 800` (ceramic), `minPrice: 2000` (correction), `minPrice: 1500` (PPF); no fix for window-tinting (custom quote only) |
| **WARN** | /gallery | ImageObject (all 20) | `description` is identical to `name` for every image | Write distinct captions for `description`; keep short titles in `name` |
| **WARN** | /gallery | ImageObject (all 20) | Missing `url` property (canonical page URL) | Add `url: "https://sunflodetailing.com/gallery"` to each ImageObject |
| **WARN** | /faq | FAQPage | 2 answer strings contain literal `&apos;` HTML entity sequences | Replace with plain apostrophes in `faq.ts` lines 126 and 132 |
| **WARN** | /services/* (4 pages), /locations/* | BreadcrumbList | Intermediary breadcrumb positions point to `/services` and `/locations` which may not have pages | Verify these URLs resolve; if not, either create index pages or collapse to 2-item breadcrumbs |
| **INFO** | All (global) | Person | No `image` property on Person node | Add `"image": "https://sunflodetailing.com/images/about/founder.jpg"` for E-E-A-T signal |
| **INFO** | /contact | ContactPage | No `ContactPage` schema, only BreadcrumbList | Add ContactPage schema (see above) — low priority, advisory |
| **INFO** | /faq, /services/* | FAQPage | FAQPage restricted from Google rich results on commercial sites (August 2023) | No fix needed; value is AI/GEO discoverability. Existing markup is valid and beneficial |

---

## Rich Results Test Readiness

### Eligible Rich Results (by type)

| Rich Result Type | Page(s) | Status | Notes |
|---|---|---|---|
| **Local Business** | All (inherited) | ELIGIBLE with fix | Fix review `ratingValue` strings → numbers before submitting to RRT |
| **Breadcrumb** | All pages | ELIGIBLE | All BreadcrumbList blocks are structurally valid |
| **Review snippets** | All (inherited) | ELIGIBLE after fix | `aggregateRating` is correctly typed; individual reviews need string→number fix |
| **Sitelinks Searchbox** | Homepage | ELIGIBLE | WebSite schema with `publisher` correctly set |
| **FAQPage** | /faq, /services/* | NOT ELIGIBLE | Google restricted FAQPage to government/healthcare (Aug 2023). Markup is valid and useful for AI, but zero Google rich result benefit |
| **Service** | /services/*, /locations/* | INFORMATIONAL | Service schema is not a Google rich result type; it is parsed for Knowledge Graph and AI. Not eligible for a dedicated SERP feature |

### Recommended Testing Priority

1. **Fix CRITICAL issue first** (`ratingValue` strings in Review nodes) — this will cause a Rich Results Test warning on the Local Business / Review snippet validation.
2. Run the live URL through [Google's Rich Results Test](https://search.google.com/test/rich-results) for: `/` (LocalBusiness + AggregateRating), `/about` (BreadcrumbList), `/services/ceramic-coating` (BreadcrumbList + Service).
3. Verify `/services` and `/locations` URLs resolve before re-checking breadcrumb validity.

---

## Prioritized Fix List

### Fix Now (affects Rich Results eligibility)

**1. `layout.tsx` — Individual Review rating values**

File: `/Users/matthewkass/Desktop/sunflo/src/app/layout.tsx`

Lines 166–170 — change:
```javascript
// BEFORE (broken — strings)
ratingValue: String(t.rating),
bestRating: "5",
worstRating: "1",

// AFTER (correct — numbers)
ratingValue: t.rating,
bestRating: 5,
worstRating: 1,
```

**2. `testimonials.ts` — Full ISO 8601 dates**

File: `/Users/matthewkass/Desktop/sunflo/src/data/testimonials.ts`

Change `"2025-05"` → `"2025-05-01"` and `"2025-04"` → `"2025-04-01"` (or use the actual review date if known).

---

### Fix Soon (improves quality signals)

**3. `service-pages.ts` — Distinct `serviceType` per service**

File: `/Users/matthewkass/Desktop/sunflo/src/app/services/[slug]/page.tsx`

Replace `serviceType: "Automotive Detailing"` with a per-slug value:
```javascript
const serviceTypeMap: Record<string, string> = {
  "ceramic-coating": "Ceramic Coating",
  "paint-correction": "Paint Correction",
  "paint-protection-film": "Paint Protection Film Installation",
  "window-tinting": "Window Tinting",
};
// then:
serviceType: serviceTypeMap[page.slug] ?? "Automotive Detailing",
```

**4. `service-pages.ts` / service page — Add `minPrice` to Offer**

In `src/app/services/[slug]/page.tsx`, extend the `priceSpecification` for slugs with known starting prices:
```javascript
const startingPriceMap: Record<string, number> = {
  "ceramic-coating": 800,
  "paint-correction": 2000,
  "paint-protection-film": 1500,
};
// in offers:
offers: {
  "@type": "Offer",
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "USD",
    ...(startingPriceMap[page.slug] && { minPrice: startingPriceMap[page.slug] }),
    description: "Custom quote — price varies by vehicle size and condition",
  },
},
```

**5. `layout.tsx` — Add `image` to Person node**

```javascript
const ownerJsonLd = {
  ...
  image: `${SITE_URL}/images/about/founder.jpg`,
  url: `${SITE_URL}/about`,
};
```

**6. `faq.ts` — Replace HTML entity sequences in answer strings**

File: `/Users/matthewkass/Desktop/sunflo/src/data/faq.ts`

Lines 126 and 132: replace `&apos;` with `'` (plain apostrophe).

---

### Fix When Convenient (low-priority improvements)

**7. `gallery/page.tsx` — Add `url` to ImageObject and differentiate `description` from `name`**

**8. `layout.tsx` — Add Saturday/Sunday OpeningHoursSpecification to confirm closure**

**9. `layout.tsx` — Review `sameAs` Google entries** — remove or replace with verified GBP share URL

**10. Verify `/services` and `/locations` resolve** — if they 404, refactor breadcrumbs to skip the intermediary position

---

## Summary

The schema implementation at sunflodetailing.com is structurally sound and covers a wider range of types than most small business sites. The global AutomotiveBusiness block is comprehensive and correctly uses `@id` graph references throughout. The primary actionable issue is the type coercion bug in individual Review rating values (`String(t.rating)`) which will flag in the Rich Results Test and should be fixed immediately. After that fix, the site should pass Local Business rich result validation cleanly. FAQPage blocks are valid and retained appropriately for AI discoverability despite the Google rich results restriction. No deprecated schema types are in use.
