# GBP Audit — Sunflo Detailing
**Date:** 2026-04-21 | **Score: 60 / 100**
**Address:** 4708 NE 11th Ave, Oakland Park, FL 33334
**GBP CID:** 10210086538245009620 | **kgmid:** /g/11j37x7gnx

---

## Scorecard

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| GBP Profile Completeness | 30% | 52 | Secondary categories, description, and posts unset |
| Review Health | 30% | 72 | 5.0 / 120 — strong rating, response rate unknown |
| Cross-Platform Presence | 20% | 45 | Only Google + Instagram + Facebook confirmed |
| Competitor Position | 10% | 55 | Competitive review count; no map pack data |
| Schema & AI Readiness | 10% | 78 | Strong schema; geo coordinates need correction |
| **TOTAL** | **100%** | **60/100** | Tier 0 audit — live GBP fields unverified |

---

## Owner Action Items

Items are ordered by impact. Work top to bottom.

---

### CRITICAL — Fix First

**1. Correct the schema geo coordinates in the codebase**
File: `/Users/matthewkass/Desktop/sunflo/src/app/layout.tsx` lines 125–126

The `geo` field in the LocalBusiness JSON-LD has wrong coordinates. The map embed (which is pinned to the actual GBP Place ID) shows the correct location at lat 26.185207, lng -80.135131. The schema currently says 26.17250 / -80.13500 — roughly 1.4 km off. This discrepancy can confuse Google's entity reconciliation.

Change to:
```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": 26.185207,
  "longitude": -80.135131
}
```

**2. Add secondary GBP categories**
Log into Google Business Profile > Edit Profile > Category > Add more categories.

Recommended secondary categories to add (add all that accurately apply):
- Car wash
- Window tinting service
- Auto body shop
- Coating service

Do NOT add categories for services you don't offer. Adding irrelevant categories can trigger a suspension review.

---

### HIGH PRIORITY — This Week

**3. Write and publish a GBP business description**
Go to GBP dashboard > Edit profile > Business description. You have 750 characters. Use this (517 characters):

> Sunflo Detailing is a professional auto detailing studio in Oakland Park, FL, serving South Florida since 2017. Specializing in ceramic coatings, paint correction, paint protection film (PPF), vinyl wraps, window tinting, and mobile detailing. Our shop at 4708 NE 11th Ave serves Fort Lauderdale, Wilton Manors, Pompano Beach, and all of Broward County. Owner Jason Girasol brings 7+ years of experience and a meticulous approach to every vehicle.

**4. Add all 19+ services to the GBP Services section**
GBP > Edit profile > Services. Add each of the following with a short description:

Core detailing: Level 1 Auto Detailing, Level 2 Auto Detailing, Level 3 Auto Detailing, Mini Interior Refresh, Complete Interior Detailing

Paint work: Ceramic Coating, Gloss Enhancement Package, Paint Enhancement Package, Paint Correction

Specialty: Lease Return Package, New Vehicle Protection, Boat and RV Detailing, Mobile Detailing

A la carte: Paint Protection Film (PPF), Window Tinting, Vinyl Wraps, Headlight Restoration, Engine Bay Detail, Leather Reconditioning, Convertible Top Care, Odor Removal / Ozone Treatment

**5. Set key attributes**
GBP > Edit profile > Attributes. Enable:
- "Appointment required" — you don't take walk-ins for detailing
- "LGBTQ+ friendly" — Wilton Manors is in your service area; this is high-value for that community
- All payment methods you accept (cash, card, Venmo, Zelle — confirm and list)
- "Online estimates" if your website contact form qualifies

**6. Confirm and add Saturday hours**
If you work Saturdays (even by appointment only), add Saturday hours to GBP. Saturday is the highest-volume search day for car detailing. Even "Saturday: by appointment, 8am–3pm" captures that traffic.

---

### HIGH PRIORITY — This Month

**7. Add products for your ceramic coating tiers**
GBP > Edit profile > Products. Create listings for:
- Gloss Enhancement Package — from $800 — upload bmw-hood-ceramic-reflection photo
- Paint Enhancement Package — from $1,600 — upload ferrari-red-process photo
- Paint Correction + Ceramic Coating — from $2,000 — upload bmw-hood-mirror-finish photo
- Level 1 Auto Detailing — from $200 — upload corvette-silver-front photo
- Level 3 Auto Detailing — from $400 — upload porsche-blue-full-rear photo

Products appear directly in your GBP panel and can show in shopping/product searches.

**8. Audit and respond to all existing reviews**
Go to GBP > Reviews. Respond to every review that doesn't already have a response. For 5-star reviews, a brief personal thank-you (mentioning the customer's name and vehicle/service) is ideal. Going forward, respond within 48 hours. Target: 100% response rate.

**9. Check and populate the Q&A section**
GBP > Q&A. Check for any unanswered questions. Then add pre-populated Q&A by asking (and answering) these questions yourself from your personal Google account:

- How long does ceramic coating take at Sunflo Detailing?
- Do you offer mobile detailing?
- What is the price range for auto detailing?
- Do you detail boats or RVs?
- How do I book an appointment?
- What areas do you serve?
- Do you require an appointment or do you take walk-ins?
- How long does paint correction take?

**10. Upload 20+ photos across these categories**
GBP > Photos. Target:
- Logo (sunflo-logo.png)
- Cover photo (Porsche 911 or strongest before/after)
- At least 5 exterior before/after shots
- At least 5 interior before/after shots
- At least 3 ceramic coating close-ups
- Shop exterior / street view of the studio
- Owner/team working photo (Jason)
- At least 1 exotic vehicle (Ferrari, Porsche, or Rolls-Royce)
- 1–2 boat detailing shots
- 1 window tinting shot

Photos updated in last 90 days signal active management to Google.

---

### MEDIUM PRIORITY — Next 30–60 Days

**11. Start posting to GBP — target 2 posts per month**
GBP > Add update. Post types to use:
- "What's new" — share a completed job with before/after photo and 150-word description
- "Offer" — run a seasonal offer (e.g., "Summer ceramic coating package — schedule before June 30")
- "Event" — if you do any local events or car shows

Post format that works: photo + 2–3 sentences describing the job + service name + city + call to action ("Call to schedule yours").

**12. Claim and optimize Bing Places**
Go to bingplaces.com. Import your GBP listing. This takes under 10 minutes and captures Bing/Edge searches and Siri (which uses Bing for business lookups on some queries). NAP must match GBP exactly.

**13. Claim Apple Maps listing**
Go to mapsconnect.apple.com. iPhone users (significant portion of South Florida market) use Apple Maps. Claim and verify the listing. Ensure address, phone, hours, and website match GBP exactly.

**14. Create a Yelp listing**
Despite declining relevance, Yelp listings still appear in "car detailing near me" voice searches and are referenced by AI models citing local businesses. Create a free listing at biz.yelp.com. NAP must match GBP exactly.

**15. Add the Bing Places and Apple Maps URLs to sameAs in layout.tsx**
Once Bing and Apple listings are live, add their URLs to the `sameAs` array in the LocalBusiness schema. This strengthens the entity graph across platforms.

---

### LOW PRIORITY — Ongoing

**16. Update reviewCount in layout.tsx monthly**
The `aggregateRating.reviewCount` in the schema (currently 120) must match the live GBP count. Mismatched schema data is flagged by Google as low quality. Update it on the 1st of each month.

**17. Send post-service review requests via text**
After every completed job, send the customer a short SMS:
> "Hi [name] — thanks for choosing Sunflo Detailing! If you're happy with how your [vehicle] turned out, a quick Google review would mean a lot: [short.link to GBP review page]. — Jason"

Even 2–3 new reviews per month is 24–36 new reviews per year. Over 12 months that's a major competitive advantage.

**18. Add a Nextdoor business listing**
Nextdoor is neighborhood-based and highly effective for mobile service businesses in South Florida. Free listing at business.nextdoor.com. Residents in Oakland Park, Wilton Manors, and Fort Lauderdale actively recommend local services there.

---

## Cross-Reference Notes

- The iframe embed in `LocationMap.tsx` uses Place ID `0x88d9a7071fb518fb:0x8db1839c761770d4` — this is the correct GBP listing. No change needed.
- The kgmid `/g/11j37x7gnx` and CID `10210086538245009620` in `sameAs` are correctly formatted.
- NAP is consistent across all local codebase sources.
- No duplicate GBP listings detected from available data.

## Further Audits Recommended

- `/seo local sunflodetailing.com` — on-page local SEO signals (title tags, headings, internal linking)
- `/seo schema sunflodetailing.com` — full schema validation including FAQ schema on service pages
- `/seo geo sunflodetailing.com` — AI visibility (ChatGPT, Perplexity, Google AI Overviews)

---

*GBP Audit — Sunflo Detailing | Maps Intelligence Agent | 2026-04-21*
*Full detail report: `/Users/matthewkass/Desktop/sunflo/docs/audit-2026-04-21-live/seo-maps.md`*
