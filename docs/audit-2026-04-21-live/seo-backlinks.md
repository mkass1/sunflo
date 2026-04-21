# Sunflo Detailing — Backlink Profile Analysis

**Audit date:** 2026-04-21
**Site:** https://sunflodetailing.com
**Analyst:** claude-seo backlinks agent (claude-sonnet-4-6)
**Tier:** 0 (no API credentials confirmed — Bash tool access denied; `backlinks_auth.py` could not execute)

---

## Data Source Availability

| Source | Status | Confidence | Notes |
|--------|--------|------------|-------|
| Common Crawl domain graph | NOT EXECUTED | — | `commoncrawl_graph.py` could not run (Bash denied) |
| Common Crawl columnar index | NOT EXECUTED | — | curl check could not run |
| Moz API | NOT EXECUTED | — | `backlinks_auth.py` check could not run; credentials unknown |
| Bing Webmaster Tools | NOT EXECUTED | — | credentials unknown |
| DataForSEO | NOT AVAILABLE | — | Extension not installed |
| Citation directory checks | NOT EXECUTED | — | curl checks could not run |
| Social profile verification | NOT EXECUTED | — | curl checks could not run |
| Codebase inspection | COMPLETE | 0.95 | Direct read of all source files |

**IMPORTANT:** Because no external data source could be queried, fewer than 4 of the 7 scoring factors have any data. Per protocol, a numeric Backlink Health Score is NOT reported. Reporting INSUFFICIENT DATA — see section below.

---

## What Is Deterministically Known (Codebase-Derived)

These facts come from direct inspection of the codebase and are labeled "Parsed (0.95)".

### Business Identity & NAP

| Field | Value | Source |
|-------|-------|--------|
| Business name | Sunflo Detailing | Parsed (0.95) — `contact.ts`, `layout.tsx` |
| Address | 4708 NE 11th Ave, Oakland Park, FL 33334 | Parsed (0.95) — `contact.ts` |
| Phone | (954) 235-6882 | Parsed (0.95) — `contact.ts` |
| Email | sunflodetailing@gmail.com | Parsed (0.95) — `contact.ts` |
| Website | https://sunflodetailing.com | Parsed (0.95) — `layout.tsx` |
| Founded | 2017 | Parsed (0.95) — `layout.tsx` JSON-LD |
| Owner | Jason Girasol | Parsed (0.95) — `layout.tsx` Person schema |

### Social Profiles in `sameAs` Schema (Confirmed Linked, Not Verified Live)

| Platform | URL | Schema Status |
|----------|-----|---------------|
| Instagram | https://instagram.com/sunflodetailing | In `sameAs` — Parsed (0.95) |
| Facebook | https://www.facebook.com/Sunflodetailing/ | In `sameAs` — Parsed (0.95) |
| Google Knowledge Graph | https://www.google.com/search?kgmid=/g/11j37x7gnx | In `sameAs` — Parsed (0.95) |
| Google Maps CID | https://www.google.com/maps?cid=10210086538245009620 | In `sameAs` — Parsed (0.95) |

Note: These URLs are declared in schema markup. Whether the social profiles are live and whether Google has processed the KG entry cannot be confirmed without external checks.

### Site Structure (Pages That Could Earn Inbound Links)

| Page | URL | Link-Earning Potential |
|------|-----|----------------------|
| Home | / | High — brand anchor target |
| Services | /services | Medium — aggregator citation |
| Service: Ceramic Coating | /services/ceramic-coating | High — product-specific |
| Service: Paint Correction | /services/paint-correction | High — product-specific |
| Service: PPF | /services/paint-protection-film | High — product-specific |
| Service: Window Tinting | /services/window-tinting | High — product-specific |
| Service: Vehicle Wraps | /services/vehicle-wraps | Medium |
| Gallery | /gallery | Low — not a citation target |
| FAQ | /faq | Medium — may earn forum/AI citations |
| Contact | /contact | Medium — citation target for NAP |
| About | /about | Medium — owner entity signal |
| Location: Fort Lauderdale | /locations/fort-lauderdale | High — geo anchor |
| Location: Wilton Manors | /locations/wilton-manors | Medium |
| Location: Pompano Beach | /locations/pompano-beach | Medium |
| Location: Deerfield Beach | /locations/deerfield-beach | Medium |
| Location: Lighthouse Point | /locations/lighthouse-point | Medium |

Source: Parsed (0.95) — `src/app/**/page.tsx` file tree.

---

## Current Backlink Profile Assessment

### Scoring Verdict: INSUFFICIENT DATA

A numeric score cannot be responsibly produced. Of the 7 weighted scoring factors, zero have confirmed data from any backlink data source:

| Factor | Weight | Data Available? | Status |
|--------|--------|-----------------|--------|
| Referring domain count | 20% | No | SKIP |
| Domain quality distribution | 20% | No | SKIP |
| Anchor text naturalness | 15% | No | SKIP |
| Toxic link ratio | 20% | No | SKIP |
| Link velocity trend | 10% | No | SKIP |
| Follow/nofollow ratio | 5% | No | SKIP |
| Geographic relevance | 10% | No | SKIP |

**Why no score is better than a guessed score:** sunflodetailing.com launched as a new domain within the past week. Any estimated score would be fabricated. A false numeric score could misguide link acquisition prioritization.

### Reasonable Inferences (Labeled as Inferences, NOT Facts)

The following are informed inferences based on domain age, business type, and industry norms. They are NOT sourced data.

- **Referring domain count (inference):** Almost certainly in the range 0–5. New domains with no prior organic promotion rarely appear in Moz, Ahrefs, or CC graph data within the first month. The social profiles (Instagram, Facebook) create 2 social-signal links; the Google Maps CID creates a GBP link. That likely accounts for 2–3 distinct referring domains.

- **Domain Authority (inference):** Moz DA is likely 1 (new domain default). This is expected and not a problem — DA accrues with time and citations.

- **Toxic link risk (inference):** Very low. New domain with no prior SEO campaigns, no purchased links, no PBN exposure evident in the codebase or business history. This is one of the few factors where the domain's youth is an advantage.

- **Anchor text naturalness (inference):** Not applicable yet. No link profile exists to have unnatural anchor text.

- **Citation coverage (inference):** Yelp, BBB, Apple Maps, Bing Places are all listed as unclaimed in `docs/seo-owner-actions.md` (item 5–7). These are the highest-value free citation sources and none are confirmed active. Facebook is confirmed linked. Instagram is confirmed linked.

---

## Competitive Benchmark: Local Detailing Shops

The following benchmarks are based on industry norms for established local auto detailing businesses (2–5 years operating, South Florida market). Source: industry pattern knowledge — not live competitor data for this specific market.

| Metric | New Site (Sunflo Now) | Established Local Competitor (Typical) | Category Leader |
|--------|-----------------------|----------------------------------------|-----------------|
| Referring domains | 0–5 | 15–60 | 80–200 |
| Moz DA | 1 | 12–22 | 25–40 |
| Citation directories claimed | 2–3 (social only) | 8–15 | 20–30 |
| Industry directories | 0 | 1–3 | 5–10 |
| Local editorial links | 0 | 1–5 | 10–25 |
| Toxic link ratio | ~0% | 2–8% | <5% |
| GBP reviews | 120 (strong) | 40–150 | 200–500 |

Sunflo's review count (120 at 5.0 stars) is already at or above the "established competitor" band. This is a meaningful asymmetry — the GBP signal is strong; the link signal needs to be built.

---

## Link Acquisition Roadmap

### Prioritization Logic

For a new local business in auto detailing, the correct sequencing is:

1. **Citation NAP consistency first** — Google's local algorithm cannot confidently match your entity without consistent Name/Address/Phone across directories. Every mismatched citation hurts.
2. **High-DA free citations second** — These are fast, free, and have the highest authority-to-effort ratio.
3. **Industry niche directories third** — These signal topical authority and product-line credibility.
4. **Local relationship links fourth** — Highest trust signals but require time to develop.
5. **Content/earned links last** — These take the longest to produce but have the highest ceiling.

---

### Tier 1 — Citation Directories (Do Within 30 Days)

Priority ordered by DA and local SEO impact. NAP format to use on every platform:
- **Name:** Sunflo Detailing
- **Address:** 4708 NE 11th Ave, Oakland Park, FL 33334
- **Phone:** (954) 235-6882
- **Website:** https://sunflodetailing.com

| Target | DA (est.) | Why It Matters | Cost | Time to Index |
|--------|-----------|---------------|------|---------------|
| **Yelp** | ~93 | Feeds Apple Maps + Siri. #1 citation for auto services in South Florida. Shown in "Local Finder" results. | Free | 2–4 weeks |
| **BBB (Better Business Bureau)** | ~91 | High-DA trust signal. Citation aggregators copy BBB data. | Free | 2–4 weeks |
| **Apple Maps Connect** | ~95 (Apple domain) | Siri and Apple Maps results. Separate database from Google — must claim independently. | Free | 2–6 weeks |
| **Bing Places for Business** | ~94 | Feeds Bing Copilot AI results. Already recommended in `seo-owner-actions.md`. | Free | 1–2 weeks |
| **Nextdoor Business** | ~82 | Hyper-local for Oakland Park / Fort Lauderdale neighborhoods. High conversion intent. | Free | 1–2 weeks |
| **Angi (formerly Angie's List)** | ~86 | High-intent homeowner traffic for automotive services. | Free basic |  2–3 weeks |
| **HomeAdvisor / Thumbtack** | ~83 | Service-category directories with strong Broward County presence. | Free listing | 2–3 weeks |
| **Foursquare / Factual** | ~79 | Powers citations on 100+ downstream platforms. Single submission multiplies. | Free | 4–8 weeks |
| **MapQuest** | ~76 | Still used by navigation aggregators and citation scrapers. | Free | 2–4 weeks |
| **Citysearch / CitySquares** | ~70 | Older but still crawled by aggregators for entity validation. | Free | 4–6 weeks |

**Action for all Tier 1:** Claim listings manually. Do not use automated citation services (Yext, BrightLocal distribution) yet — clean up manual citations first to avoid locking in errors.

---

### Tier 2 — Industry / Product Directories (30–90 Days)

These links are valuable because they are topically authoritative. A link from an XPEL installer directory to a PPF shop is far more valuable per-DA than a generic directory link.

| Target | Relevance | Opportunity | Notes |
|--------|-----------|-------------|-------|
| **XPEL Installer Directory** | PPF | If Jason installs XPEL film, apply at xpel.com/dealer-locator. Links to installer pages. | Requires XPEL dealer status |
| **Ceramic Pro Installer Network** | Ceramic coating | ceramicpro.com lists certified installers with dofollow links. | Requires product purchase / certification |
| **Gyeon Pro Detailer Directory** | Ceramic coating | gyeon.com maintains a "find a detailer" map. Strong topical signal. | Apply via Gyeon distributor |
| **CarPro CQuartz Detailer List** | Ceramic coating | carprocquartz.com lists certified applicators. | Requires CQuartz certification |
| **IDA (International Detailing Assoc.)** | All services | ida.org member directory — high topical authority. | Annual membership fee (~$200) |
| **Detail King Directory** | All services | detailking.com supplier; maintains an installer/shop directory. | Free listing for customers |
| **Chemical Guys Pro Detailer** | All services | chemicalguys.com lists affiliated shops. Broad audience. | Product purchase relationship |
| **SEMA Trade Network** | All services | sema.org — automotive aftermarket trade org. Listing in member directory. | Annual membership |

**Priority pick:** IDA membership + any ceramic coating brand certification (Gyeon, CarPro, or Ceramic Pro). These two moves together provide 3–4 high-DA industry links and add a trust signal that competitors often lack.

---

### Tier 3 — Local Relationship Links (60–120 Days)

These require outreach and relationship-building but produce the highest local relevance signals.

| Target | Link Type | Pitch | Notes |
|--------|-----------|-------|-------|
| **Porsche Club of America — Miami Region** (pca-miami.org) | Sponsor/partner | Offer to detail a member's car for a club raffle; request a "Preferred Detailer" mention on their vendor page | High-DA enthusiast audience perfectly matched to Jason's work |
| **South Florida Ferrari / Lamborghini Club** | Sponsor/partner | Same as above — offer event sponsorship or prize detail | Premium brand signal |
| **Local car meet organizers** (Instagram-based South FL car meets) | Editorial / resource | Offer to sponsor an event, request website credit | Many car meet sites have low DA but strong local relevance |
| **Broward County new car dealerships** | Referral partner | "Send us your new delivery customers for a coat; we'll refer your lot for trades" — ask for a "detailing partner" mention | Fort Lauderdale / Oakland Park dealer cluster is dense |
| **Auto body shops in Oakland Park / Fort Lauderdale** | Referral reciprocal | "You send collision-repair referrals to us for post-repair detail; we send you door dings" | Natural referral relationship; link is genuinely editorial |
| **Local auto insurance agents** | Resource link | "Protective coatings preserve resale value" — provide a 1-paragraph educational blurb they can add to their website with a link | Agents with content blogs often accept this |
| **Broward Magazine / SunSentinel local biz features** | Editorial | Pitch a "before/after ceramic coating" feature story. Local media links carry very high authority. | Time-intensive; higher ceiling |
| **Nextdoor Neighborhoods (Oakland Park, Wilton Manors)** | Social/indirect | Engage as a business owner; respond to "who do you recommend for detailing" posts | Not a direct link but feeds GBP citation signals |

---

### Tier 4 — Content / Earned Editorial Links (90–180 Days)

These are the highest-ceiling links but require content investment. They compound over time and are the most sustainable link source.

| Content Asset | Target Linking Audience | Target Platforms | Notes |
|---------------|------------------------|-----------------|-------|
| "How to maintain a ceramic coating in South Florida's heat and humidity" | Detailing forums, Reddit r/AutoDetailing, car club blogs | r/AutoDetailing, DetailingWorld, CorvetteForum | Hyper-specific to Florida climate — differentiator from generic guides |
| "Florida tint laws 2026: what's actually legal, by vehicle type" | Car owner searches, Florida driving blogs | Local auto blogs, NextDoor posts | Legal / informational content earns links from law-adjacent local sites |
| "PPF vs. Ceramic Coating for a leased vehicle in Florida" | Finance/lease forums, car buyer communities | Reddit r/cars, leasehackr forums | High search volume comparison; often cited by car forums |
| "South Florida car detailing price guide" | Deal-seekers, local media | Local blogs, Reddit r/FortLauderdale | Price comparison content earns local directory and forum links |
| "Before/after: 2024 [Make/Model] full paint correction + Gyeon ceramic" | Car-specific forums, enthusiast communities | [MarqueForums].net, DetailingWorld | Model-specific case studies are almost always linked by enthusiast communities |
| Visual content: dramatic before/after reels for Instagram/TikTok | Social shares that drive profile traffic | Instagram, TikTok, Facebook groups | Social links are nofollow but drive link-worthy visibility |

**Highest-ROI single content move:** A detailed Florida-climate ceramic coating maintenance guide (1,500+ words, real photos from Sunflo jobs) posted on the site's blog and cross-posted to r/AutoDetailing. This type of post consistently earns 10–30 organic links from forums and regional blogs over 6–12 months.

---

## Priority Action Matrix

| Action | Tier | Effort | Impact | Timeline |
|--------|------|--------|--------|----------|
| Claim Yelp listing (complete profile) | 1 | Low | Critical | This week |
| Claim Apple Maps Connect | 1 | Low | Critical | This week |
| Claim Bing Places (import from GBP) | 1 | Low | High | This week |
| Claim BBB listing | 1 | Low | High | Week 2 |
| Claim Nextdoor Business | 1 | Low | High | Week 2 |
| Claim Angi / Thumbtack / Foursquare | 1 | Low | Medium | Week 2–3 |
| Apply to IDA membership + directory | 2 | Medium | High | Month 1–2 |
| Apply to 1 ceramic coating brand installer program | 2 | Medium | High | Month 1–2 |
| Apply to XPEL installer directory (if applicable) | 2 | Low | High | Month 1 |
| Outreach: Porsche Club of America Miami | 3 | Medium | High | Month 2–3 |
| Outreach: 3 local body shops / dealers | 3 | Medium | High | Month 2–3 |
| Publish Florida ceramic coating maintenance guide | 4 | High | High (long-term) | Month 3+ |
| Publish Florida tint law explainer | 4 | Medium | Medium (long-term) | Month 3+ |

---

## Toxic Link Risk Assessment

**Current risk: Very Low (inference, not sourced data)**

Rationale:
- Domain is newly launched under a clean domain name
- No prior SEO campaigns visible in the codebase
- No purchased link infrastructure present
- No thin-affiliate or PBN signals in the URL structure
- The business has operated since 2017 but under a different, basic website — the domain `sunflodetailing.com` carries no historical penalty indicators observable in the codebase

Ongoing risk to monitor: Once citation-building begins, watch for duplicate listings with variant NAP (e.g., "Sunflo Car Detailing" vs. "Sunflo Detailing") — these are not toxic but they fragment entity authority and should be consolidated.

---

## Schema / On-Site Link Signals Already In Place

The following have been confirmed in the codebase and are relevant to backlink-adjacent signals:

| Signal | Status | File |
|--------|--------|------|
| `sameAs` with Instagram + Facebook | PRESENT | `layout.tsx` |
| `sameAs` with Google KG ID + Maps CID | PRESENT | `layout.tsx` |
| NAP in PostalAddress schema | PRESENT | `layout.tsx` |
| GeoCoordinates (5 decimal precision) | PRESENT | `layout.tsx` |
| `AutomotiveBusiness` type | CORRECT | `layout.tsx` |
| `foundingDate: "2017"` | PRESENT | `layout.tsx` |
| Owner Person entity (`#jason`) | PRESENT | `layout.tsx` |
| WebSite schema with publisher | PRESENT | `layout.tsx` |
| AggregateRating (120 reviews, 5.0) | PRESENT | `layout.tsx` |
| City landing pages (5 cities) | PRESENT | `src/app/locations/[city]/page.tsx` |
| Service-specific landing pages | PRESENT | `src/app/services/[slug]/page.tsx` |

These on-site signals prime Google's entity graph to accept and associate incoming citation links faster. The schema work completed in prior audit passes directly accelerates the value of new backlinks.

---

## Recommended Next Audit Trigger

Re-run this backlink analysis once:
1. Moz API credentials are configured (`scripts/backlinks_auth.py --check` returns Tier 1 or higher), OR
2. 30 days have elapsed and citation claiming from Tier 1 above is complete

At that point, Common Crawl may have crawled the domain, Moz will show initial DA + referring domain data, and a numeric Backlink Health Score can be responsibly produced.

To unlock Tier 1 analysis: add Moz API credentials per the `backlinks_auth.py` setup instructions, then run `/seo backlinks sunflodetailing.com`.

---

## What to Tell Jason (Plain Language)

The site is technically well-positioned to receive links — the schema is correct, the NAP is consistent, and the pages that would earn links (service pages, city pages, FAQ) all exist. What is missing is the links themselves, which is expected for a brand-new domain.

The single most impactful week-one action is claiming Yelp. Yelp feeds Apple Maps, Siri, and dozens of citation aggregators from one claim. It is free, takes under an hour, and the authority signal is immediate.

The second most impactful near-term action is joining IDA (International Detailing Association) and applying to one ceramic coating installer network (Gyeon or CarPro). These links signal to Google that Sunflo is a real, credentialed professional — exactly the same trust signal that 120 five-star reviews provides, but in link form.

---

*Backlink analysis performed 2026-04-21. External data sources (Common Crawl, Moz, Bing Webmaster Tools) could not be queried in this environment — Bash tool access was denied. All numeric data labeled as inference. Re-run with API credentials for sourced metrics.*

*For E-E-A-T and content authority signals, see `/seo content sunflodetailing.com`.*
*For crawlability and technical link equity signals, see `docs/seo-audit.md`.*
