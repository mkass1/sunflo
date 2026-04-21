# Sunflo Detailing — Owner Action Plan

**Last updated:** 2026-04-21 (second full audit pass — all Phase 2 code fixes applied)  
**Original:** 2026-04-18  
**Complements:** `FULL-AUDIT-REPORT.md` and `ACTION-PLAN.md`

The code side is done. Every technical SEO issue from both audit passes has been fixed — metadata, schemas, FAQ, service landing pages, contact form, llms.txt, security headers, About page, and 5 city landing pages are all in place. The work below is where your **remaining 80% of local search gains** live. None of it requires a developer.

---

## This Week — Critical (1–2 hours total)

### 0. Send your real Google Maps URL to the developer

Open Google Maps in your browser, search for your GBP listing ("Sunflo Detailing Oakland Park"), click on it, and copy the full URL from the browser address bar — it should look like `https://www.google.com/maps/place/Sunflo+Detailing/@26.17...`. Send that URL to Matthew.

This unlocks two things: the Maps embed on the website will show the correct pin (currently a placeholder), and you'll get a one-tap "Leave us a review" link for your QR code cards.

---

### 1. Verify and fix your Google Business Profile category

Log in to [Google Business Profile](https://business.google.com) → Info → Edit Categories.

**Required setup:**
- Primary: **Car detailing service** ← most important local ranking signal
- Secondary: Auto body shop, Window tinting service, Car wash

If your primary category is "Auto repair shop" or anything else, change it to "Car detailing service" immediately. This is the single highest-impact action you can take for map pack ranking.

---

### 2. Submit your sitemap to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property → Domain → enter `sunflodetailing.com`
3. Verify ownership (DNS TXT record — your host or Vercel will show where to add this)
4. Left sidebar → Sitemaps → Add `https://sunflodetailing.com/sitemap.xml`
5. Hit Submit

This tells Google exactly what pages exist and how often they change. It dramatically speeds up indexing of the new service landing pages.

---

### 3. Submit to Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in with Microsoft account
3. Add your site → Import from Google Search Console (easiest)
4. Submit sitemap: `https://sunflodetailing.com/sitemap.xml`

Bing feeds Bing Copilot (AI) search. Takes 10 minutes.

---

### 4. Set up the contact form (Resend)

The contact form is now wired to a real API route. To activate it:

1. Create a free account at [resend.com](https://resend.com)
2. Go to Domains → Add Domain → enter `sunflodetailing.com`
3. Add the DNS records Resend provides (typically 3 TXT records — your host supports this)
4. Once domain is verified, go to API Keys → Create API Key → copy it
5. In your Vercel dashboard → Project → Settings → Environment Variables:
   - Add `RESEND_API_KEY` = (your key)
   - Add `CONTACT_FORM_TO_EMAIL` = `sunflodetailing@gmail.com`
6. Redeploy the site

After setup, every contact form submission will arrive in your Gmail inbox. The free Resend plan covers 3,000 emails/month.

---

## Within 30 Days — High Impact (3–5 hours total)

### 5. Claim your Yelp listing

Yelp is the most impactful unclaimed citation for auto detailing in South Florida. It feeds Apple Maps, Siri, and major citation aggregators.

1. Search [biz.yelp.com](https://biz.yelp.com) for "Sunflo Detailing Oakland Park"
2. Claim the existing listing (it likely already exists from a customer)
3. Complete: business name, address, phone, hours, website URL, 10 photos, service descriptions
4. **NAP must match exactly:** `Sunflo Detailing` / `4708 NE 11th Ave, Oakland Park, FL 33334` / `(954) 235-6882`
5. Once claimed, send me your Yelp URL and I'll add it to the site's schema in 2 minutes

---

### 6. Claim Apple Maps Connect

Apple Maps and Siri pull location data from Apple Maps Connect — it has its own database, not just copying Google.

1. Go to [mapsconnect.apple.com](https://mapsconnect.apple.com)
2. Sign in with Apple ID
3. Add your business or claim the existing listing
4. Fill in all details (same NAP as everywhere else)
5. Verify by phone call or postcard

---

### 7. Claim Bing Places for Business

Bing Places feeds Bing Copilot and Windows Maps.

1. Go to [bingplaces.com](https://www.bingplaces.com)
2. Search for your business
3. Claim and complete the listing
4. Fastest path: import from Google Business Profile using your GBP email

---

### 8. Claim Nextdoor Business Page

Nextdoor is hyper-local — Oakland Park and surrounding neighborhoods. Free, and residents actively recommend local businesses.

1. Go to [nextdoor.com/business](https://nextdoor.com/business)
2. Claim or create a business page
3. Fill in NAP, services, hours
4. Respond to any existing recommendations from neighbors

---

### 9. Claim your BBB listing

BBB is a high-authority citation (Domain Authority ~91) that citation aggregators pick up.

1. Go to [bbb.org/business](https://www.bbb.org/business)
2. Search for your business
3. Claim the listing → fill in all details
4. No fee required for basic listing

---

### 10. Audit your Facebook Business Page NAP

Go to your Facebook Business Page settings and confirm these match your website exactly:
- Business name: **Sunflo Detailing** (not "Sunflo Car Detailing" or any variation)
- Address: **4708 NE 11th Ave, Oakland Park, FL 33334**
- Phone: **(954) 235-6882**
- Website: **https://sunflodetailing.com**
- Category: **Automotive Detailing Service**
- Hours: Monday–Friday 8:00 AM – 6:00 PM

NAP inconsistency across platforms is one of the most common local SEO ranking suppressors.

---

## Monthly / Per-Job — Ongoing

### 11. Review acquisition: the 18-day rule

The "18-day rule" (observed across hundreds of local businesses): going more than 18 days without a new review can cause your map pack position to drop. The algorithm rewards recency and velocity, not just total count.

**What to do:**
- Print a QR code card with your Google review link (generate at [QR Code Generator](https://www.qr-code-generator.com/))
- Hand it to every client at vehicle pickup
- Say: "If you're happy with the work, a quick Google review makes a huge difference for us"
- Target: **2–4 new reviews per month**

**Your review link:** Log into [Google Business Profile](https://business.google.com) → Home → "Get more reviews" → Copy link. It will look like `https://g.page/r/C.../review`. That's the link to put in a QR code and hand to every client at pickup.

---

### 12. Google Business Profile Posts — weekly

GBP Posts appear in your Knowledge Panel and signal to Google that you're an active business.

**Post weekly:**
- Before/after photos of completed jobs (most engaging)
- Seasonal promotions (Florida summer heat → UV protection push)
- Tips (safe washing after ceramic coating, etc.)
- New service announcements

Keep posts 150–300 words. Include your service area city name ("ceramic coating in Oakland Park") at least once.

---

### 13. GBP Photos — 5 to 10 per month

Photo uploads to your GBP profile are one of the highest-impact local signals — more than your website gallery.

**What to upload:**
- Before/after shots from finished jobs (show the transformation)
- Interior shots of your shop and equipment
- Team photos (builds trust)
- Exterior of the building (helps clients find you)
- Vehicles in various stages of service

**Technical:** Photos should be at least 720×720px. Name files descriptively before uploading — e.g., `bmw-m4-ceramic-coating-oakland-park.jpg`. Google can read the filename.

---

### 14. Update review count monthly in the code

The schema on your site shows `120` Google reviews. Keep this accurate:

1. Check your GBP dashboard for the current review count and average star rating
2. Message Matthew with both numbers (e.g. "143 reviews, 4.9 stars")
3. He'll update `src/app/layout.tsx` in 2 minutes and redeploy

Do this once a month. Stale review counts in schema look bad to Google.

---

## Quarterly

### 15. Citation audit for NAP consistency

Use [Whitespark Local Citation Finder](https://whitespark.ca/local-citation-finder/) (free tier) to scan major directories for your business listing. Look for:
- Wrong address format (abbreviations, missing suite)
- Wrong phone number
- Different business name variations
- No website URL

Fix every mismatch. NAP inconsistency confuses Google's entity graph and suppresses local ranking.

---

### 16. Local backlink outreach

Links from local businesses are among the highest-value signals for local SEO.

**Low-effort targets:**
- The auto body shop or mechanic next door — "We'll send customers your way for collision repair; you send us ceramic coating clients"
- Detailing product suppliers (Gyeon, CarPro, Rupes) — many maintain installer directories
- Local car clubs: South Florida Ferrari Club, Porsche Club of America (Miami), local car meet organizers — sponsor or donate a detail service for a raffle
- Broward County new car dealerships — dealership service advisors often refer clients for detailing

**What to ask for:** a mention on their website ("Our recommended detailing shop: Sunflo Detailing") with a link to `sunflodetailing.com`. No money needs to change hands — reciprocal referrals are the pitch.

---

### 17. Gallery refresh

The website currently shows 6 real photos. Target 12–20 for a more convincing portfolio.

**Send me:**
- Any before/after shots from recent jobs (phone camera is fine — bright Florida daylight is your best lighting)
- Close-ups of paint correction results, ceramic coating water beading, PPF installations
- Interior transformations
- Boat/RV details if you've done them

I'll optimize the images, write keyword-rich alt text, and update the gallery page and its schema.

---

## Owner-Supplied Content That Unlocks Future Code Work

### 18. ✅ About page — DONE

The `/about` page is live in the codebase. If you want to refine the copy (especially Jason's last name or any certifications), message Matthew and he'll update it in minutes.

**One item still needed:** Jason's full last name, so we can strengthen Google's entity record for the business. Even first + last is enough — it helps Google know Jason at Sunflo is a distinct, real person, not just a first name.

---

### 19. Blog / content articles

A `/blog` section with 4–6 in-depth articles would capture long-tail searches. Topics with clear demand:

- "How to maintain a ceramic coating in South Florida"
- "Do I need PPF on a leased car in Florida?"
- "How to choose between ceramic coating and wax"
- "Florida tint laws: what's actually legal on your windows"
- "What to expect when getting paint correction"
- "How often should I wash my car with a ceramic coating?"

Just approve the topics and Matthew will write the full articles.

---

### 20. Monthly photography drop

The website gallery and GBP both benefit from consistent fresh photos. Each month, send a folder of images using this naming format:

```
YYYY-MM-DD_make-model_treatment.jpg
```

Examples:
- `2026-05-03_bmw-m4_ceramic-coating.jpg`
- `2026-05-07_ram-trx_paint-correction.jpg`

Matthew will optimize, add keyword-rich alt text, and update the gallery. Target: 5–10 photos per month.

---

### 21. Three written case studies

These are the single most powerful E-E-A-T signal a detailing shop can have online. Each case study is:

- **Vehicle:** Make, model, year, color
- **Problem:** What the customer came in with (swirls, oxidation, new car delivery, etc.)
- **Solution:** What was done and why
- **Result:** Client outcome (photos + their words if they'll share)
- **Permission:** Customer name (first name + last initial is fine) or just "Fort Lauderdale client"

Matthew will turn these into published blog posts or a dedicated "Work" section with `Review` schema. Google treats detailed case studies as strong authority signals.

---

### 22. City landing pages — already live

Five city-specific pages are already on the website (linked from the footer):
- `/locations/fort-lauderdale`
- `/locations/wilton-manors`
- `/locations/pompano-beach`
- `/locations/deerfield-beach`
- `/locations/lighthouse-point`

If you have a photo that's specific to work done for a client from one of these cities, send it — we can add it to the relevant city page to make it even more locally relevant.

---

## 3-Month Goal: Top-3 Oakland Park Map Pack

**Baseline (estimated April 2026):** ranking 4–8 for "car detailing Oakland Park," not in map pack for most service keywords.

**Target:** Top 3 in map pack for "car detailing near me" (Oakland Park) by July 2026.

**Leading indicators to watch monthly:**
- GBP profile views (Goal: +20% month-over-month)
- GBP direction requests and call clicks (Goal: +2 calls/month increase)
- New Google reviews (Goal: 4+ per month)
- Search Console impressions for service keywords

---

*Owner action plan prepared by Matthew Kass for Sunflo Detailing on 2026-04-18.*  
*Technical SEO changes are documented in `docs/seo-audit.md`.*
