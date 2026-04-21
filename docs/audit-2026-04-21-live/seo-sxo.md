# SXO Audit — Sunflo Detailing
**Date:** 2026-04-21
**Site:** https://sunflodetailing.com
**Analyst:** SXO Agent (Claude Sonnet 4.6)
**Business:** Sunflo Detailing — premium auto detailing studio + mobile, Oakland Park FL, owner Jason Girasol, est. 2017

---

## Methodology & Limitations

Live SERP fetches and page fetches were not available in this session (WebSearch and WebFetch tools blocked). All SERP analysis below is derived from:

1. Established SERP composition patterns for local auto-care / detailing service keywords in competitive South Florida markets (knowledge cutoff August 2025)
2. Published Google documentation on local pack eligibility, E-E-A-T, and intent classification for service-area businesses
3. Full static code analysis of the Sunflo codebase — every data file, every page template, every schema block, every meta tag, and every CTA path was read directly

SERP composition patterns for this category are highly stable. The findings below should be validated against a live SERP snapshot using a tool like BrightEdge, SEMrush, or a manual incognito search from the Oakland Park area before implementation.

---

## Executive Summary

Sunflo Detailing has a well-structured site with strong technical foundations, solid schema implementation, and high-quality content. The site's primary SXO problem is not technical — it is **page type coverage**. Five of the six target keywords have a clear primary SERP intent that the site's current page inventory cannot fully serve from a single, focused URL. The `ceramic coating Fort Lauderdale` term is the most commercially valuable gap: the SERP rewards a locally geo-targeted service page for Fort Lauderdale specifically, and the closest Sunflo page targets Oakland Park. A secondary pattern problem is the **absence of a geo-qualified page for the primary service city in the conversion path** for the highest-value keyword.

**SXO Gap Score: 52 / 100** (see Section 6 for full breakdown)

---

## Primary Customer Persona

**"Fort Lauderdale Ceramic Shopper"**

A Fort Lauderdale vehicle owner — 30-55, earns $100K+, owns a BMW, Mercedes, or similar — who has noticed swirl marks or dull paint. They have heard of ceramic coating but do not fully understand what they are buying. They open Google on mobile, search "ceramic coating Fort Lauderdale," and scan the local pack results first. They then open 2-4 organic pages in tabs. Their decision criteria, in order:

1. Is this shop actually in or near Fort Lauderdale? (Proximity trust)
2. What exactly do I get and what does it cost? (No vague "call for quote" — they want at least a range)
3. Does the shop look like they know what they are doing? (Gallery photos, brand names, process description)
4. Can I see real reviews? (Want to see review count and quotes, not just stars)
5. Is it easy to reach them right now? (Phone number visible without scrolling)

This persona is in the consideration-to-decision stage. They are not researching what ceramic coating is — they already decided they want it. They are choosing the shop.

---

## Keyword-by-Keyword Analysis

---

### 1. "car detailing Oakland Park FL"

**Target keyword intent:** Transactional / Local. Searcher wants a detailing shop physically in or right next to Oakland Park.

**SERP composition (established pattern for this query type):**
- Position 1–3: Google Local Pack (3-pack map results, dominated by GBP listings with strong review counts and correct category)
- Positions 4–6: Aggregator directories (Yelp, Thumbtack, Angi, sometimes DetailXPerts franchise pages)
- Positions 7–10: Local shop websites with geo-specific service pages or homepages with Oakland Park in the title/H1

**Dominant page type:** Local pack + directory listings + geo-optimized local service pages

**Sunflo's current targeting page:** Homepage (https://sunflodetailing.com/)

**Page-type alignment assessment:**

The homepage H1 is "Passionate Professional Detailing." — a brand statement headline, not a geo-targeted service claim. The meta title is "Auto Detailing, Ceramic Coatings & Paint Correction — Oakland Park & Fort Lauderdale, FL" which is geo-targeted and contains the keyword. However, the page body does not contain a section specifically written for the query "car detailing Oakland Park FL." The above-the-fold eyebrow ("Oakland Park, FL · Est. 2017") is a positive signal but is small-text and not crawlable as a heading.

**Mismatch severity: MEDIUM**

The homepage is structurally appropriate for this keyword and the meta title is correct. The gap is that:
- There is no `/services/auto-detailing` page with an H1 of "Auto Detailing in Oakland Park, FL" that could rank as a dedicated service page below the local pack
- The homepage H1 does not contain the keyword or any geographic qualifier
- The local pack result (GBP) is the primary conversion surface for this query — the website is secondary; GBP optimization (photos, review velocity, Q&A) matters more than the page itself for this term

**Intent signals visible in SERP:**
- Transactional: "near me," "Oakland Park" = immediacy + location specificity
- People Also Ask typical for this query: "How much does car detailing cost in Florida?", "Is it worth getting your car professionally detailed?", "How often should you get a car detailed?"
- The PAA cost question is not answered above the fold on the Sunflo homepage

**What's missing from the Sunflo page vs. competitors:**
- An H1 or H2 that contains "car detailing Oakland Park FL" or "auto detailing in Oakland Park"
- Pricing visible on the homepage for basic detailing (the SERP winners for this term almost always show entry-level pricing prominently)
- A direct answer to "how much does detailing cost" within the page body — the homepage does not mention the $200/$250/$400 auto detail pricing at all
- The homepage currently shows 5 testimonials in a carousel but does not surface the review count prominently (the 5.0 / 120 reviews stat is in the hero section, which is good, but it is small)

---

### 2. "ceramic coating Fort Lauderdale" (highest-value term)

**Target keyword intent:** Commercial Investigation / Transactional. Searcher has high purchase intent and is geo-qualifying for Fort Lauderdale proximity.

**SERP composition (established pattern):**
- Local pack: Shops with GBP category "Auto Detailing" or "Ceramic Coating" with Fort Lauderdale in the listing area — Oakland Park shops appear here because the pack draws from a radius around the searcher's location
- Organic positions 4–7: Dedicated service pages with "Ceramic Coating Fort Lauderdale" or "Ceramic Coating [City] FL" in the H1 and meta title
- Positions 8–10: Angi / Yelp aggregator pages for Fort Lauderdale ceramic coating

**Dominant page type:** Local-pack + dedicated geo-service page (city + service in H1)

**Sunflo's current targeting page:** /services/ceramic-coating

**Page-type alignment assessment:**

The ceramic coating page H1 is "Ceramic Coating in Oakland Park, FL." The meta title is "Ceramic Coating in Oakland Park, FL | Sunflo Detailing." Fort Lauderdale is mentioned twice in the body (once in the South Florida section, once in the related services section) but is not in the H1, meta title, or any H2 heading.

For a searcher typing "ceramic coating Fort Lauderdale," this page sends a weaker geo-relevance signal than a page whose H1 is "Ceramic Coating in Fort Lauderdale, FL." The site does have a `/locations/fort-lauderdale` page but that page is a general location landing page — it does not have a dedicated H1 or focused keyword for "ceramic coating Fort Lauderdale." The page H1 is "Auto Detailing in Fort Lauderdale, FL" and the first section heading is "Why Fort Lauderdale Vehicles Need Ceramic Coating," which is substantive but the page is competing for "auto detailing Fort Lauderdale," not "ceramic coating Fort Lauderdale."

**Mismatch severity: HIGH**

This is the single most commercially valuable keyword in the target set (ceramic coating tickets run $800–$3,000). The current page architecture cannot produce a single URL with both "ceramic coating" and "Fort Lauderdale" as primary signal elements unless a new page is created.

**Intent signals visible in SERP:**
- Commercial: searcher is comparing shops, not learning what ceramic coating is
- PAA typical questions: "How much does ceramic coating cost in Fort Lauderdale?", "How long does ceramic coating last in Florida?", "Is ceramic coating worth it in South Florida?", "What is the best ceramic coating shop in Fort Lauderdale?"
- The pricing question is answered on /services/ceramic-coating (starting at $800, tiered pricing visible) — this is a strength
- The durability in Florida question is answered in the "Ceramic Coating in South Florida: What's Different" section — another strength
- The "worth it" objection is partially addressed but not in a clear, scannable format

**What's missing from the Sunflo ceramic coating page vs. SERP winners:**
- "Fort Lauderdale" not in H1 or meta title — the highest-relevance signal for this query
- No comparison table or side-by-side showing ceramic vs. wax vs. PPF (SERP competitors who rank for this term often include a comparison element because it matches the "comparing shops" intent)
- No before/after photo section above the fold (the page is text-only above the CTA; gallery is separate at /gallery)
- No visible review pull-quotes on the page itself (reviews are on /faq, not on the ceramic coating page)
- The CTA section ("Ready to book?") appears below three long sections of body text — a user comparing shops on mobile will see the text blocks before they see a phone number

**Above-the-fold experience on /services/ceramic-coating:**

The page opens with a hero section (`pt-40 pb-16`) containing the H1, eyebrow ("Paint Protection"), and an intro paragraph. There are no images, no phone number, no pricing, and no "Book Now" button above the fold. A Fort Lauderdale searcher clicking from a SERP result arrives to a text block with no immediate visual proof (photos), no pricing confirmation, and no frictionless contact option. The navbar does show the phone number (`(954) 235-6882`) and a "Book Now" button at the top, but this depends on the user noticing the fixed nav — it is not embedded in the page content itself until the inline CTA section much lower on the page.

---

### 3. "paint correction Broward County"

**Target keyword intent:** Commercial Investigation. Searcher knows they want paint correction but is using a county-level geo-qualifier, indicating they are casting a wider net before committing to a specific city.

**SERP composition (established pattern):**
- Local pack: GBP listings within the Broward County radius
- Organic: Pages with "Broward County" or specific Broward city names in the H1/title targeting paint correction
- Some informational content ("what is paint correction") may appear for this query depending on Google's current interpretation, but for "Broward County" it skews commercial

**Dominant page type:** Dedicated service page with county geo-qualifier OR city-specific page for dominant Broward city (Fort Lauderdale)

**Sunflo's current targeting page:** /services/paint-correction

**Page-type alignment assessment:**

The paint correction page H1 is "Paint Correction in Oakland Park, FL." The meta description mentions "serving Fort Lauderdale and all of Broward County." The word "Broward County" appears in the meta description and in the intro paragraph ("serving Fort Lauderdale, Wilton Manors, and all of Broward County") but does not appear in any H1 or H2 heading on the page.

**Mismatch severity: MEDIUM**

The page is structurally correct (dedicated service page) but the heading hierarchy underserves the Broward County qualifier. The meta description mention is useful but Google's primary relevance signal is the H1 and H2s, not the meta description.

**What's missing:**
- "Broward County" does not appear in any heading — adding it to an H2 such as "Multi-Stage Paint Correction Serving All of Broward County" would strengthen the signal significantly
- The intro paragraph mentions Broward County but is not crawlable as a heading
- No pricing in the meta description (the meta says "Prices from $2,000" — this is good, keep it)
- No before/after imagery on the page

---

### 4. "PPF Fort Lauderdale"

**Target keyword intent:** Commercial / Transactional. High purchase intent, geo-qualified.

**SERP composition (established pattern):**
- Local pack: PPF installers within Fort Lauderdale / Broward radius
- Organic: PPF service pages with "Fort Lauderdale" in H1/title, XPEL dealer pages, and sometimes manufacturer dealer-finder pages
- The XPEL authorized dealer locator is a common competitor here — manufacturer pages rank well for PPF terms

**Dominant page type:** Dedicated PPF service page with Fort Lauderdale geo-qualifier, and/or XPEL authorized dealer pages

**Sunflo's current targeting page:** /services/paint-protection-film

**Page-type alignment assessment:**

The PPF page H1 is "Paint Protection Film (PPF) in Oakland Park, FL." Fort Lauderdale appears three times in the body (in the Fort Lauderdale section discussing convertibles and exotics) but not in any H1 or H2. The meta description does not contain "Fort Lauderdale."

The site is not currently positioned as an XPEL authorized dealer in any structured way — the About page and PPF page both mention XPEL Ultimate Plus specifically, but there is no "Authorized XPEL Installer" badge, structured data, or XPEL dealer landing page. XPEL's own dealer locator often ranks on page 1 for "[city] PPF" queries and sends leads to listed installers.

**Mismatch severity: HIGH** for the Fort Lauderdale geo-qualifier specifically.

**What's missing:**
- "Fort Lauderdale" not in H1 or any heading
- No XPEL authorized installer language / badge (Sunflo does use XPEL but the page does not claim XPEL certification — if Jason has any installer relationship with XPEL, this should be prominently displayed)
- No pricing guidance on the PPF page (the FAQ answers "how much does PPF cost" with a $1,500–$3,500 range for front-clip — this is good, but this information is buried in the FAQ accordion, not visible to a scanner)
- No before/after gallery section

---

### 5. "window tinting Oakland Park FL"

**Target keyword intent:** Transactional / Local. Very specific geo — searcher wants a shop in Oakland Park.

**SERP composition (established pattern):**
- Local pack heavily dominant for this query (window tinting is same-day / few-hour service, so proximity intent is high)
- Organic: Local shop pages with "window tinting Oakland Park" in H1/title
- Yelp and other directories also appear
- Florida-specific content about legal VLT percentages may appear in PAA

**Dominant page type:** Local pack + geo-specific service page

**Sunflo's current targeting page:** /services/window-tinting

**Page-type alignment assessment:**

The window tinting page H1 is "Window Tinting in Oakland Park, FL." This is a direct keyword match to "window tinting Oakland Park FL." The meta title is "Window Tinting in Oakland Park, FL | Sunflo Detailing" — also a direct match.

The page also addresses the Florida VLT legal compliance question directly (28% VLT requirement) and has a "Florida Window Tint Laws" section — this matches the informational PAA content that typically appears in the SERP for this term.

**Mismatch severity: ALIGNED**

This is the best-aligned page in the target keyword set. The H1, meta title, geographic qualifier, and Florida-specific content all match SERP expectations.

**What could be improved:**
- Pricing is "custom quoted" only — competitors who show pricing ranges for standard sedan/SUV/truck convert better because the searcher can self-qualify without a phone call
- No before/after visual section
- "Same-day service" is not mentioned on the page but is a common decision factor for tinting (searchers often need it done quickly)

---

### 6. "auto detailing near me" (geo-intent, Oakland Park context)

**Target keyword intent:** Transactional with strong proximity intent. Google interprets this query as a signal to surface the local pack almost exclusively.

**SERP composition (established pattern):**
- Positions 1–3: Google Local Pack 3-pack. This is the primary and usually only meaningful SERP feature for "near me" queries
- Organic listings are present but receive dramatically lower CTR when the local pack dominates
- Google Maps results are the conversion surface, not the website

**Dominant page type:** GBP profile, not website

**Sunflo's current targeting page:** N/A — this query is won at the GBP level, not the website level

**Mismatch severity: N/A — this is a GBP optimization problem, not a page problem**

For "auto detailing near me" (anchored to Oakland Park), the website's primary role is to serve as a trust-building destination after the searcher clicks through from the local pack. The conversion path is:
1. Searcher sees local pack result
2. Clicks on GBP card (not necessarily the website link)
3. Sees photos, reviews, calls/gets directions from the GBP card directly

**Website's role:** Increase trust for searchers who do click through. The homepage accomplishes this reasonably well (stats, testimonials, service overview) but the above-the-fold section prioritizes aesthetics over conversion signals. A searcher coming from "near me" wants to see: shop address, phone number, service list, and reviews. The homepage shows a large hero with an artistic headline first.

**What would improve performance for this query:**
- GBP photo optimization (regular uploads of before/after work, shop exterior, team photos)
- Active review response from Jason
- GBP posts highlighting services and promotions
- Homepage above-the-fold should show the phone number more prominently (currently in the navbar, small)

---

## Page-Type Mismatch Table

| Keyword | SERP Dominant Type | Sunflo Current Page | Current H1 | Has Geo Match | Mismatch Severity |
|---------|-------------------|---------------------|------------|---------------|-------------------|
| car detailing Oakland Park FL | Local pack + geo service page | Homepage | "Passionate Professional Detailing." | Partial (meta title only) | MEDIUM |
| ceramic coating Fort Lauderdale | Local pack + dedicated city+service page | /services/ceramic-coating | "Ceramic Coating in Oakland Park, FL" | No — wrong city | HIGH |
| paint correction Broward County | Dedicated service page + county qualifier | /services/paint-correction | "Paint Correction in Oakland Park, FL" | Partial (meta desc only) | MEDIUM |
| PPF Fort Lauderdale | Dedicated service page + city qualifier | /services/paint-protection-film | "Paint Protection Film (PPF) in Oakland Park, FL" | No — wrong city | HIGH |
| window tinting Oakland Park FL | Local pack + geo service page | /services/window-tinting | "Window Tinting in Oakland Park, FL" | Yes | ALIGNED |
| auto detailing near me (Oakland Park) | Local pack / GBP profile | Homepage (secondary) | "Passionate Professional Detailing." | N/A — GBP query | N/A |

---

## Ceramic Coating Page Deep-Dive: Above-the-Fold Experience

**URL:** https://sunflodetailing.com/services/ceramic-coating
**Persona performing this test:** Fort Lauderdale car owner, mobile device, searched "ceramic coating Fort Lauderdale"

### What the searcher sees above the fold

The page opens with the fixed navbar (contains the phone number and "Book Now" button — positive), followed by a `pt-40` hero section containing:
- Eyebrow: "Paint Protection" (not geo-targeted)
- H1: "Ceramic Coating in Oakland Park, FL"
- Intro paragraph: 2 sentences explaining what ceramic coating does and that Sunflo uses professional formulas

**No image, no pricing, no review pull-quote, no "Book Now" button, no before/after visual.**

### Against persona decision criteria

| Persona Question | On Page? | Where? | Assessment |
|-----------------|---------|--------|------------|
| Is this shop near Fort Lauderdale? | Weakly | Body text mentions Fort Lauderdale 2x | The H1 says "Oakland Park" — creates doubt for a Fort Lauderdale searcher |
| What do I get and what does it cost? | Yes | Section 3 and FAQ | Pricing is clear ($800/$1,600/$2,000) but buried below two sections of process text |
| Does the shop know what they're doing? | Yes | Process description is strong | But no photos on this page — gallery is /gallery |
| Can I see real reviews? | No | Reviews are on /faq | Not on this page at all |
| Can I contact them easily? | Partially | Phone in navbar + inline CTA section | No phone/CTA visible without scrolling past the hero and three content sections |

### PAA objection coverage

PAA questions for "ceramic coating Fort Lauderdale" that the /services/ceramic-coating page covers:

| PAA Question | Covered? | Section |
|-------------|---------|---------|
| How much does ceramic coating cost? | Yes | Package section + FAQ |
| How long does ceramic coating last in Florida? | Yes | "How Long Does It Last" section |
| Is ceramic coating worth it? | Partially | South Florida section addresses the "why" but not a direct objection-handle |
| What's the difference between ceramic coating and wax? | Yes | FAQ item 1 |
| Does ceramic coating prevent rock chips? | Yes | FAQ item 4 |
| How long does application take? | Yes | FAQ item 2 |

Coverage is strong — the FAQ addresses the key objections. The problem is discoverability: a mobile user who is comparing 3 shops quickly will likely not scroll to the FAQ. The objection answers need to be closer to the fold.

### Conversion path assessment

**Current path:**
1. Land on page (hero with H1 + intro text)
2. Scroll through "What Is a Ceramic Coating" section (long body text)
3. Scroll through "Our Ceramic Coating Process" section (long)
4. Scroll through package description + pricing (first conversion opportunity)
5. Scroll through "How Long Does It Last" and "South Florida" sections
6. Reach FAQ section
7. Reach inline CTA ("Ready to book?" box with phone and "Request a Quote" button)
8. CTABanner at bottom

**Problem:** The first embedded CTA is step 7 of an 8-step scroll. The phone number is in the navbar but no in-content phone/CTA appears until far down the page. A comparison shopper who decides "this looks good" after seeing the pricing in step 4 has to scroll past 2 more content sections to reach a CTA.

**Recommended conversion path:**
1. Land on page (hero with: H1 "Ceramic Coating Serving Fort Lauderdale & Oakland Park, FL", package tier summary with prices, "Request a Quote" CTA, phone number, one review quote)
2. Process / what's included (educational for undecided users)
3. FAQ (objection resolution)
4. Before/after photos or gallery teaser
5. Final CTA

---

## User Story: Primary Persona

**Journey stage:** Consideration → Decision

"I own a BMW 5 Series in Fort Lauderdale. I've been getting it washed regularly but it looks dull in direct sunlight. A colleague mentioned ceramic coating and now I've spent 20 minutes on Reddit learning that it's a real thing. I search 'ceramic coating Fort Lauderdale' on my phone during lunch. I see a local pack with 3 shops — I click the first two and look at the website links. The first shop's page shows before/after photos of a dark car that looks exactly like mine, pricing right at the top, and a phone number I can tap. The second shop (Sunflo) shows me an Oakland Park H1, then three paragraphs of technical text before I find the $1,600 price. I go back to the first shop."

**Signal this story derives from:** SERP local pack prominence for "ceramic coating Fort Lauderdale" + mobile-first composition of local service SERPs + comparison behavior documented in Google's own shopping journey research

**The fix this story demands:** A page targeting "ceramic coating Fort Lauderdale" with immediate above-the-fold proof (photo + pricing + contact) rather than a text-first educational layout.

---

## Persona Scoring

**Methodology:** Each persona is scored across 4 dimensions (Relevance, Clarity, Trust, Action — 25 pts each = 100 total). Sorted weakest score first.

---

### Persona 1: "Ceramic Shopper — Fort Lauderdale" (PRIMARY)
**Profile:** 35-50, Fort Lauderdale resident, high-value car, ready to buy ceramic coating, comparing 3 local shops

| Dimension | Score | Evidence |
|-----------|-------|----------|
| Relevance (Does the page speak to this person's situation?) | 14/25 | The page is about ceramic coating, which is correct. But H1 says "Oakland Park" and Fort Lauderdale is not prominent. The intro is educational, not consultative. A searcher who already knows what ceramic coating is finds the "What Is a Ceramic Coating" section irrelevant. |
| Clarity (Does the page answer the questions they have?) | 17/25 | Pricing is present (strong). Package comparison is clear (strong). Process is well-described. Weak points: no side-by-side comparison of packages, no FAQ anchors visible before scrolling, no "how long does it take" callout above fold. |
| Trust (Does the page build confidence in Sunflo?) | 12/25 | Brand names (CarPro) mentioned but not prominently. No reviews on page. No before/after photos on page. No "9 years / 2,000+ vehicles" stats on page (they are on the homepage and about page, not here). No certification badges. |
| Action (Is it easy to take the next step?) | 10/25 | First CTA is step 7 of scroll. Phone in navbar only. No sticky CTA on mobile. No "Get a free quote in 24 hours" mechanism. |
| **TOTAL** | **53/100** | |

**Improvement priority:** Trust signals on page (reviews, before/after, years in business stats) + CTA visibility + Fort Lauderdale geo-relevance in H1

---

### Persona 2: "PPF Researcher — Fort Lauderdale Exotic Owner"
**Profile:** 40-60, owns a Porsche/Ferrari/high-end vehicle, Fort Lauderdale, knows they want PPF but wants to verify the shop can handle exotic cars

| Dimension | Score | Evidence |
|-----------|-------|----------|
| Relevance | 13/25 | PPF page H1 says Oakland Park. Fort Lauderdale not in any heading. XPEL is mentioned (correct) but not prominently as an authorized installer claim. The exotic car context (McLaren, Ferrari mentioned on the About page) is not on the PPF page. |
| Clarity | 16/25 | Coverage zones are well-explained. Self-healing technology section is strong. Pricing FAQ gives a range ($1,500–$3,500 front clip). Weak: no specific mention of exotic car experience, no computer-cut templates detail prominent enough. |
| Trust | 11/25 | No reviews on page. No XPEL badge. No certification claim. No exotic car photos visible on PPF page. The About page has strong brand mentions (XPEL Ultimate Plus, precision plotters) but these are not surfaced on /services/paint-protection-film. |
| Action | 10/25 | Same CTA-depth problem as ceramic page. Phone/quote not visible early. |
| **TOTAL** | **50/100** | |

**Improvement priority:** XPEL installer certification claim (or explicit "Authorized XPEL Installer" language if applicable), Fort Lauderdale geo-signal, exotic car gallery reference, earlier CTA

---

### Persona 3: "Paint Correction Decision-Maker — Broward Daily Driver"
**Profile:** 30-45, drives a dark-colored car, noticed swirl marks, searches "paint correction Broward County"

| Dimension | Score | Evidence |
|-----------|-------|----------|
| Relevance | 16/25 | Page is specifically about paint correction. Broward County mentioned in meta and intro. Process description is detailed and credible. Pricing by vehicle size is clear. |
| Clarity | 18/25 | Strong: multi-stage vs. single-stage explanation, pricing tiers, timeline, "when should you get paint correction" section directly matches this persona's question. Weak: no visual comparison of before/after paint state. |
| Trust | 13/25 | Paint gauge measurement process mentioned (strong credibility signal). No reviews on page. No photos. |
| Action | 12/25 | CTA depth same issue. But this persona is likely more research-oriented and will scroll deeper before deciding. |
| **TOTAL** | **59/100** | |

---

### Persona 4: "Window Tint — Oakland Park Quick Shopper"
**Profile:** Any age, wants tinting done, searching specifically in Oakland Park, probably wants it this week

| Dimension | Score | Evidence |
|-----------|-------|----------|
| Relevance | 22/25 | H1 exact-match to search query. Florida VLT laws covered (answers likely PAA questions). Oakland Park proximity makes this persona feel correctly targeted. |
| Clarity | 18/25 | Film type comparison (dyed vs. carbon vs. ceramic) is well done. Heat rejection numbers are concrete. Curing instructions addressed. Weak: pricing is "contact for quote" — a shopper wanting a quick decision prefers to see a price range upfront. |
| Trust | 14/25 | Florida legal guarantee is a strong trust signal. 3M brand named. No reviews. No timing guarantee ("same day available"). |
| Action | 15/25 | Still has CTA-depth problem but this persona is more likely to call directly since they want fast service. Navbar phone number visible. |
| **TOTAL** | **69/100** | |

---

### Persona 5: "New GBP Visitor — First-Time Auto Detailing Buyer"
**Profile:** 25-35, new to South Florida or first time considering professional detailing, finds Sunflo via "car detailing Oakland Park" local pack click

| Dimension | Score | Evidence |
|-----------|-------|----------|
| Relevance | 17/25 | Homepage communicates premium positioning clearly. Stats (9 years, 2K+ vehicles, 5.0 stars) are above the fold. Eyebrow and hero text establish Oakland Park location. Weak: H1 is brand-aspirational ("Passionate Professional Detailing.") not service-descriptive. |
| Clarity | 15/25 | Services overview is visible in FeaturedServices section but requires scrolling. No pricing is shown on the homepage for basic detailing ($200–$400 packages). |
| Trust | 18/25 | Best trust score of all personas — stats section and testimonials are strong. Brand logos strip present. Long testimonials with dates. |
| Action | 14/25 | "Book Your Service" CTA in hero and "Get a Custom Quote" in services section are well-placed. No phone number visible as an inline element (only in navbar). |
| **TOTAL** | **64/100** | |

---

## SXO Gap Score: 52 / 100

| Dimension | Points Available | Score | Rationale |
|-----------|-----------------|-------|-----------|
| Page Type Alignment | 15 | 7 | 1/6 keywords (window tinting) fully aligned. 2/6 HIGH severity mismatches (ceramic coating FTL, PPF FTL). 2/6 MEDIUM. 1/6 N/A. |
| Content Depth | 15 | 11 | Service page body content is genuinely strong — well above typical local service page depth. Sections are substantive. FAQ answers are thorough. Penalty for no visual content on service pages and no comparison tables. |
| UX Signals | 15 | 7 | Fixed navbar with phone/CTA is correct. Hero CTAs functional. Major penalty: first in-content CTA is step 7+ on every service page. No sticky mobile CTA. No phone visible without header. |
| Schema | 15 | 13 | Strong: AutomotiveBusiness with aggregateRating, Service schema per page, FAQPage schema per service page, BreadcrumbList, Person schema, WebSite. Minor: Service @type "Offer" uses PriceSpecification with text rather than exact prices — misses the structured price display opportunity. |
| Media | 15 | 4 | No images on any service detail page. Gallery is siloed at /gallery. Before/after content exists in service descriptions (text) but no photos on the pages that searchers land on from the SERP. |
| Authority | 15 | 9 | 120 5-star Google reviews are excellent. 9-year history. Specific brand partnerships (XPEL, CarPro, 3M, ShineSupply) named on About page. Penalty: authority signals are concentrated on About page and not propagated to service pages where they are needed at decision time. |
| Freshness | 10 | 4 | No blog, no content calendar, no news section, no dated case studies. Sitemap `lastmod` is set to build time (all URLs show the same date per the sitemap audit). No visible content with a publish/update date. Site appears static to Google. |
| **TOTAL** | **100** | **55** | |

---

## Intent Mismatch Findings (Summary)

### CRITICAL/HIGH Severity

**Finding 1: Ceramic coating page targets Oakland Park, highest-value query is Fort Lauderdale**

- Query: "ceramic coating Fort Lauderdale"
- SERP expectation: Page with "ceramic coating Fort Lauderdale" or "Fort Lauderdale" in H1 and title
- Sunflo page: H1 "Ceramic Coating in Oakland Park, FL"
- Business impact: For a $1,600–$3,000 ticket service, this misalignment likely costs multiple conversions per month
- Recommended fix: Create `/services/ceramic-coating-fort-lauderdale` OR update `/locations/fort-lauderdale` to be a service-specific page, OR add a new page at `/locations/fort-lauderdale/ceramic-coating` targeting "ceramic coating Fort Lauderdale" explicitly

**Finding 2: PPF page targets Oakland Park, SERP queries PPF with Fort Lauderdale geo**

- Query: "PPF Fort Lauderdale"
- Sunflo page: H1 "Paint Protection Film (PPF) in Oakland Park, FL"
- Recommended fix: Same pattern as ceramic coating — either a city+service intersection page or an updated Fort Lauderdale location page with PPF focus

### MEDIUM Severity

**Finding 3: Homepage H1 is brand-aspirational, not geo-keyword-aligned**

- Query: "car detailing Oakland Park FL"
- H1: "Passionate Professional Detailing." — descriptive but contains no keyword signal
- The meta title does contain the correct geo + service terms, which partially mitigates this
- Risk: If Google rewrites the title tag to match the H1 (which it does in some cases), the SERP title for the homepage would lose the geo signal

**Finding 4: Paint correction page does not surface Broward County in any heading**

- "Broward County" appears in the intro paragraph body text and in the meta description, but zero headings contain it
- Recommendation: Add an H2 such as "Multi-Stage Paint Correction Across Broward County"

### ALIGNED

**Finding 5: Window tinting page is correctly targeted**

- H1 "Window Tinting in Oakland Park, FL" = direct keyword match to "window tinting Oakland Park FL"
- Florida VLT law FAQ matches expected PAA questions
- This is the template the other service pages should follow for local geo alignment

---

## Specific Content Gaps vs. SERP

The following are content elements that top-ranking local detailing / ceramic coating pages in competitive South Florida markets consistently include but Sunflo service pages currently lack:

| Gap | Affected Pages | Competitive Context |
|-----|---------------|---------------------|
| Before/after photo section embedded on service page | All service pages | Shops ranking for "ceramic coating [city]" almost universally show photos on the service page, not just in a separate gallery |
| Review/testimonial pull-quote on service page | All service pages | Decision-stage searchers want social proof on the page they are evaluating, not on a separate /faq page |
| "9 years / 2,000+ vehicles" trust stats on service pages | All service pages | These stats are on the homepage and about page but not on service pages where the purchase decision is made |
| Brand/certification badges above the fold | Ceramic, PPF pages | XPEL, CarPro CQuartz, 3M — visual badges increase trust for product-aware searchers |
| Sticky mobile CTA (phone or "Book Now") | All service pages | The fixed navbar provides this partially, but a dedicated sticky bottom bar on mobile for service pages would significantly improve mobile conversion |
| Pricing table / tier comparison visual | Ceramic coating page | The three-tier pricing is described in text. A simple visual table (Gloss $800 vs Enhancement $1,600 vs Correction $2,000) would match comparison-shopper behavior |
| "Service area" callout on service pages | Ceramic, PPF pages | A small section like "Serving Fort Lauderdale, Oakland Park, Pompano Beach, and all of Broward County" with links to city pages would strengthen geo-relevance |
| FAQ schema visible as jump links | All service pages | The FAQ exists and has schema markup, but there are no anchor links or visible "jump to FAQ" affordance — searchers who want quick answers have to scroll |
| Estimated timeline callout in hero or near pricing | Ceramic, PPF, correction pages | "Appointment takes 1-3 days" near the price is a common decision-stage question; currently this is in the FAQ |

---

## Cross-Skill Recommendations

- **E-E-A-T gaps detected:** The About page is strong for E-E-A-T but the authority signals (owner expertise, years in business, brand certifications) are not propagated to service pages where purchase decisions occur. Recommend `/seo content` skill for a full E-E-A-T content strategy pass on the ceramic coating and PPF pages.

- **Schema:** Service @type `Offer` uses `PriceSpecification` with a text description rather than exact numeric prices, which means Google cannot display price snippets in SERPs. Recommend `/seo schema` skill to update `Offer` nodes with `priceRange` or individual `Offer` entries with `price` and `priceCurrency` for packages that have fixed prices.

- **Local intent in SERP:** "auto detailing near me" and "car detailing Oakland Park" both fire local pack results, where the GBP is the primary conversion surface. Recommend `/seo local` skill for GBP optimization: photo cadence, Q&A seeding, service categories verification, and review response strategy.

- **Thin content on service pages re: media:** Service pages have zero images. This is a meaningful gap for a visual service. Recommend `/seo page` skill for a per-page media strategy — specifically: which photos to add, how to name image files for SEO, and where to place them in the page template.

---

## Priority Action Plan

Listed in order of estimated business impact (highest first):

1. **[HIGH - Revenue] Create a "Ceramic Coating Fort Lauderdale" landing page.** Options in order of preference:
   - Best: New page at `/locations/fort-lauderdale/ceramic-coating` with H1 "Ceramic Coating in Fort Lauderdale, FL" targeting "ceramic coating Fort Lauderdale." Reuse the existing ceramic coating content structure but make Fort Lauderdale the primary geo signal, include the studio address and drive time, and cross-link to `/services/ceramic-coating` for the full process detail.
   - Acceptable: Expand `/locations/fort-lauderdale` to have a service-specific H1 and deeper ceramic coating content. Currently that page's H1 is "Auto Detailing in Fort Lauderdale, FL" which dilutes the ceramic-specific signal.

2. **[HIGH - Revenue] Apply same pattern for PPF Fort Lauderdale.** Create `/locations/fort-lauderdale/paint-protection-film` or similar, targeting "PPF Fort Lauderdale."

3. **[HIGH - Conversion] Add a visible CTA within the first screenful of every service page.** The inline "Ready to book?" CTA box is good — move it up. On the ceramic coating page, place a compact version (phone number + "Request a Quote" button) below the intro paragraph, before the first body section. This applies to all four service detail pages.

4. **[MEDIUM - Trust] Add 2–3 review pull-quotes to each service page.** Pull quotes from the five testimonials in `testimonials.ts` and from GBP reviews where clients specifically mention the service. The Ben Poelcher ceramic coating review is perfect for the ceramic page.

5. **[MEDIUM - Trust] Add the "9+ years / 2,000+ vehicles / 5.0 / 120 reviews" stats block to service pages.** This currently lives only on the homepage hero. It should appear on every service page — the 120 5-star reviews are a genuine differentiator in this market.

6. **[MEDIUM - Ranking] Add "Broward County" to a heading on the paint correction page.** Low implementation effort, directly addresses the Broward County keyword geo signal.

7. **[MEDIUM - Visual] Add before/after photo blocks to ceramic coating and paint correction pages.** These are the two highest-ticket services. Even 2–3 photo pairs embedded in the page body (not requiring a visit to /gallery) would dramatically change the trust and visual experience for decision-stage searchers.

8. **[LOW - Schema] Update Service `Offer` schema to use exact numeric prices where available.** The gloss enhancement ($800), paint enhancement ($1,600), and paint correction ($2,000) packages all have fixed starting prices. These should be represented as `Offer` schema with `price: "800"` rather than a text description.

9. **[LOW - Freshness] Add publication/update dates to service pages and create a mechanism to update `lastmod` accurately.** Even adding a "Last updated: [date]" line below the H1 and using that date in the sitemap provides a freshness signal. See the sitemap audit for detail.

10. **[LOW - Coverage] Add "Lauderdale-by-the-Sea" to the location pages, or remove it from `areaServed` JSON-LD.** This closes the schema-to-content gap noted in the sitemap audit.

---

*Report ends. Generate a PDF version? Use `/seo google report`.*
