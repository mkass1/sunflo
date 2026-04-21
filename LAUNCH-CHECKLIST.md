# Sunflo Detailing — Launch Checklist

**Prepared:** 2026-04-21  
**Use when:** DNS is ready to point at Vercel — work through these steps before announcing the site.

---

## Phase 1: Before Going Live (DNS not yet switched)

### 1.1 Environment Variables (Vercel Dashboard)

Go to Vercel → Project → Settings → Environment Variables. Add:

| Variable | Value | Required For |
|---|---|---|
| `RESEND_API_KEY` | (from resend.com API Keys) | Contact form email delivery |
| `CONTACT_FORM_TO_EMAIL` | `sunflodetailing@gmail.com` | Contact form recipient |

### 1.2 Resend Domain Verification

1. Create account at [resend.com](https://resend.com)
2. Go to Domains → Add Domain → enter `sunflodetailing.com`
3. Add the 3 DNS records Resend provides (typically: 1 SPF TXT + 1 DKIM TXT + 1 MX or CNAME)
4. Wait for Resend to show "Verified" (usually under 30 minutes)
5. Copy the API key → add to Vercel env as `RESEND_API_KEY`

### 1.3 Code fixes pending owner input (do these now if owner has responded)

- [ ] **Maps CID:** Owner supplies full Google Maps browser URL → update `src/components/home/LocationMap.tsx` (marked with TODO comment)
- [ ] **Review count:** Owner confirms current GBP review count → update `src/app/layout.tsx` line ~152 (`reviewCount` value)
- [ ] **Jason's last name:** Update both Person schema nodes: `src/app/layout.tsx` (ownerJsonLd) and `src/app/about/page.tsx` (personJsonLd)

### 1.4 Final build check

```bash
npm run build
```
Expect zero errors and the following routes in the output:
- `/` (static)
- `/services` (static)
- `/services/ceramic-coating` (static)
- `/services/paint-correction` (static)
- `/services/paint-protection-film` (static)
- `/services/window-tinting` (static)
- `/about` (static)
- `/gallery` (static)
- `/faq` (static)
- `/contact` (static)
- `/locations/fort-lauderdale` (static)
- `/locations/wilton-manors` (static)
- `/locations/pompano-beach` (static)
- `/locations/deerfield-beach` (static)
- `/locations/lighthouse-point` (static)
- `/sitemap.xml` (dynamic)
- `/robots.txt` (dynamic)
- `/api/contact` (API route)

### 1.5 Pre-deploy TypeScript check

```bash
npx tsc --noEmit
```
Must return with zero output (no errors).

---

## Phase 2: DNS Switch

### 2.1 Point domain to Vercel

In your domain registrar (GoDaddy, Namecheap, etc.) or Cloudflare:

1. Add a CNAME record: `@` → `cname.vercel-dns.com` (or Vercel A records if @ CNAME is not supported)
2. Add a CNAME record: `www` → `cname.vercel-dns.com`
3. In Vercel → Project → Settings → Domains → Add `sunflodetailing.com` and `www.sunflodetailing.com`
4. Vercel will automatically provision the TLS certificate via Let's Encrypt (takes 5–30 minutes after DNS propagation)

### 2.2 Verify HTTPS

```bash
curl -I https://sunflodetailing.com/
```

Confirm:
- HTTP status: `200 OK`
- Header: `strict-transport-security: max-age=63072000; includeSubDomains; preload`
- Header: `x-frame-options: SAMEORIGIN`

If you get a redirect to www or non-www, configure the preferred canonical redirect in Vercel.

### 2.3 Verify sitemap and robots

```bash
curl https://sunflodetailing.com/sitemap.xml | head -50
curl https://sunflodetailing.com/robots.txt
```

The sitemap should list 15 URLs. The robots.txt should show `Allow: /` for both `*` and all AI crawlers.

---

## Phase 3: Google Search Console Setup

### 3.1 Add property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property → **Domain** (not URL prefix) → enter `sunflodetailing.com`
3. Verify via DNS TXT record: add the provided TXT record to your DNS
4. Hit Verify — GSC confirms ownership within minutes

### 3.2 Submit sitemap

1. Left sidebar → Sitemaps
2. Add sitemap URL: `https://sunflodetailing.com/sitemap.xml`
3. Submit
4. Confirm status shows "Success" (may take a few minutes)

### 3.3 Request indexing for key pages

In GSC → URL Inspection → test each URL → Request Indexing:
- `https://sunflodetailing.com/`
- `https://sunflodetailing.com/services/ceramic-coating`
- `https://sunflodetailing.com/services/paint-correction`
- `https://sunflodetailing.com/about`

The remaining pages will be crawled from the sitemap within a few days.

---

## Phase 4: Bing Webmaster Tools Setup

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in with a Microsoft account
3. Add site → **Import from Google Search Console** (easiest path — use your GSC account)
4. After import, go to Sitemaps → Submit `https://sunflodetailing.com/sitemap.xml`

Bing feeds Bing Copilot (AI search). Takes 10 minutes.

---

## Phase 5: Functional Testing

Work through each test in order. Any failure = fix before announcing.

### 5.1 Contact form

1. Go to `https://sunflodetailing.com/contact`
2. Fill out the form with a real email address and submit
3. Confirm:
   - You receive the submission at `sunflodetailing@gmail.com`
   - The page shows a success message (not an error)
   - No console errors in browser devtools

If the form fails, check Vercel env variables (RESEND_API_KEY set?) and the Resend dashboard for error logs.

### 5.2 Phone CTA

On mobile (or mobile emulation in devtools):
- Tap the phone number in the Navbar → confirm it initiates a phone call
- Tap the phone CTA in the CTABanner → confirm it dials

### 5.3 Google Maps embed

On `/contact` and `/` homepage:
- Confirm the map loads and shows the correct location (4708 NE 11th Ave, Oakland Park)
- If the map shows a blank area or the wrong location, the Maps CID needs updating (see Phase 1.3)

### 5.4 Navigation links

Click every link in the Navbar and Footer on desktop and mobile:
- All 6 nav links → correct pages
- All 5 service links in Footer → `/services/[slug]` pages (not just `/services`)
- All 5 city links in Footer → `/locations/[slug]` pages
- Social links (Instagram, Facebook) → open correct profiles in new tab

### 5.5 Lighthouse (live URL)

Run Lighthouse in Chrome DevTools or via `npx lighthouse https://sunflodetailing.com`:

Target scores:
| Category | Target |
|---|---|
| Performance | ≥ 85 |
| SEO | 100 |
| Best Practices | ≥ 95 |
| Accessibility | ≥ 90 |

If SEO is below 100, check the Lighthouse SEO report for specific issues.

---

## Phase 6: Google Business Profile

### 6.1 Link website to GBP

1. Log into [Google Business Profile](https://business.google.com)
2. Info → Website URL → set to `https://sunflodetailing.com`
3. Confirm phone matches `(954) 235-6882` exactly (no dashes, no +1)
4. Confirm address: `4708 NE 11th Ave, Oakland Park, FL 33334`

### 6.2 Generate review QR code

1. In GBP, find your "Leave a review" link (or generate from the kgmid URL)
2. Go to any QR code generator → paste the link → download as PNG
3. Print and place at customer pickup/dropoff desk

### 6.3 Upload 10+ launch-day photos

Upload to GBP before announcing the site:
- Shop exterior (1–2 photos)
- Interior bay with vehicle in service (2–3 photos)
- Before/after transformation (3–5 photos)
- Owner photo (1 photo)

Name the files before uploading: `ceramic-coating-oaklandpark-FL-sunflo.jpg`, etc.

---

## Phase 7: Announce

Once all Phase 1–6 items are ✅:

1. Post to Instagram: "The new website is live — check out [sunflodetailing.com](https://sunflodetailing.com)"
2. Post to Facebook Business Page (same)
3. Share in any local Oakland Park / car community groups you're in
4. Text or email any regulars who've been waiting

---

## Owner-Side Items That Are Still Pending

These are not launch blockers but should happen within 2 weeks of launch:

| Item | Owner Docs Section |
|---|---|
| GBP primary category = "Car detailing service" | docs/seo-owner-actions.md §1 |
| Claim Yelp listing | docs/seo-owner-actions.md §5 |
| Claim Apple Maps Connect | docs/seo-owner-actions.md §6 |
| Claim Bing Places | docs/seo-owner-actions.md §7 |
| Claim Nextdoor Business | docs/seo-owner-actions.md §8 |
| Review QR card in use at pickup | docs/seo-owner-actions.md §11 |

---

*Checklist prepared by Matthew Kass, 2026-04-21.*
