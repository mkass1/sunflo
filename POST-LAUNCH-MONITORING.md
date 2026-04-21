# Sunflo Detailing — Post-Launch Monitoring Cadence

**Started:** 2026-04-21 (site went live)  
**Maintained by:** Matthew Kass

This document defines what to check and when, so ranking gains are tracked and regressions are caught early.

---

## Weekly (Every Monday — 15 min)

### 1. Google Search Console — Search Performance
- Go to GSC → Search Results → last 7 days
- Check for new queries appearing in impressions (new ranking opportunities)
- Watch CTR for any page below 2% — this signals a title/description rewrite opportunity
- Flag any page that had impressions last week but zero this week (possible deindex)

### 2. Google Search Console — Coverage
- GSC → Pages → check for new "Error" or "Excluded" entries
- Any new 404s? Any pages "Discovered but not indexed"?
- New 404s → fix redirect in Next.js middleware or `next.config.ts`

### 3. GBP Activity
- Check for new reviews — respond within 48 hours
- Check for new Q&A — answer any public questions
- Check for any "Suggested edits" on your profile from users — approve or reject

### 4. Vercel Analytics (Speed Insights)
- Open Vercel dashboard → Speed Insights
- Check if LCP, INP, CLS are in "Good" range for homepage and `/services/ceramic-coating`
- Any new "Needs Improvement" readings? Log them for the next code session.

---

## Monthly (1st of each month — 30 min)

### 5. Sync aggregateRating with live GBP
1. Open Google Maps → "Sunflo Detailing Oakland Park" → note review count and average rating
2. Message Matthew: "GBP: [count] reviews, [X.X] stars"
3. Matthew updates `src/app/layout.tsx` `aggregateRating` block and redeploys
   - File: `src/app/layout.tsx` lines 154–159
   - Change both `ratingValue` and `reviewCount`

### 6. GSC — Monthly keyword movement
- Filter Search Results by last 28 days vs prior 28 days
- Note which keywords moved up/down in average position
- Priority terms to track:
  - "car detailing oakland park"
  - "ceramic coating fort lauderdale"
  - "paint correction broward county"
  - "ppf oakland park fl"
  - "auto detailing near me" (hyperlocal)

### 7. GBP — Photo upload
- Upload 5–10 new photos to GBP (before/after from recent jobs)
- Name files before uploading: `2026-MM-DD_make-model_treatment.jpg`
- Google rewards active photo management

### 8. GBP — Post
- Publish 2 GBP posts this month (minimum)
- Format: before/after photo + 150 words describing the job + city name + service name + CTA
- Include the service area city in the post ("completed in Fort Lauderdale")

### 9. Review velocity check
- Total new reviews this month?
- Goal: 4+ per month
- If under 4: remind Jason to hand out review QR code at every pickup
- If someone left a 1–3 star review: respond professionally within 24 hours, offer to resolve

### 10. Citation audit spot-check
- Google "Sunflo Detailing Oakland Park" and check the top 5 directory listings that appear
- Confirm NAP is `Sunflo Detailing` / `4708 NE 11th Ave, Oakland Park, FL 33334` / `(954) 235-6882` / `https://www.sunflodetailing.com`
- Fix any inconsistency immediately — NAP drift suppresses local rankings

---

## Quarterly (Every 3 Months — 1–2 hours)

### 11. Full citation scan
- Use [Whitespark Local Citation Finder](https://whitespark.ca/local-citation-finder/) (free tier)
- Scan for every directory listing and flag NAP mismatches
- Fix in order of directory domain authority (Yelp → BBB → Apple Maps → others)

### 12. Schema validation re-check
- Run each key URL through Google's Rich Results Test:
  - https://www.sunflodetailing.com/
  - https://www.sunflodetailing.com/services/ceramic-coating
  - https://www.sunflodetailing.com/about
  - https://www.sunflodetailing.com/faq
- Expect 0 errors, 0 warnings. Fix anything that flags.

### 13. Lighthouse re-audit
- Run Lighthouse (Chrome DevTools or PageSpeed Insights) on homepage + `/services/ceramic-coating`
- Target: Performance ≥ 85, SEO = 100, Best Practices ≥ 95, Accessibility ≥ 90
- Log scores to track trend over time

### 14. Backlink check
- Search Google for `link:sunflodetailing.com` (approximate) or use free Moz Link Explorer
- Note any new referring domains
- If any local business or directory has mentioned Sunflo, reach out to formalize the link

### 15. Competitive snapshot
- Google "car detailing Oakland Park FL" — who's in the map pack?
- Google "ceramic coating Fort Lauderdale" — any new competitors?
- If a competitor jumped into the top 3, check their GBP: review count, photo count, post frequency
- Adjust review acquisition and posting cadence to match or exceed

---

## Key Metrics Dashboard (update monthly)

| Metric | Baseline (Apr 2026) | Month 1 | Month 2 | Month 3 |
|---|---|---|---|---|
| GBP reviews (total) | 120 | | | |
| GBP avg star rating | 5.0 | | | |
| GBP profile views / month | — (set baseline) | | | |
| GBP direction requests / month | — | | | |
| GSC impressions / week | — (first data after indexing) | | | |
| GSC clicks / week | — | | | |
| Map pack position: "car detailing oakland park" | estimated 4–8 | | | |
| Map pack position: "ceramic coating fort lauderdale" | not ranking | | | |
| Vercel Analytics: homepage LCP | — | | | |
| Site pages indexed (GSC) | 0 (just launched) | | | |

---

## Alert Triggers (investigate immediately if any of these occur)

- Site returns non-200 for any URL in sitemap
- Any GSC coverage error that didn't exist before
- GBP listing shows incorrect address, phone, or hours
- Review count drops (indicates a review removed by Google)
- A 1–2 star review posted without a response within 24 hours
- Vercel deployment fails (check deployment logs)
- Contact form stops delivering emails (check Resend dashboard)

---

*Monitoring plan prepared by Matthew Kass, 2026-04-21.*  
*Review cadence with Jason quarterly or whenever a metric moves significantly.*
