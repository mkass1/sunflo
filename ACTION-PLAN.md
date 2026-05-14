# Sunflo Detailing — Post-Move Action Plan

**Updated:** 2026-05-14
**Driver:** Oakland Park → Fort Lauderdale studio move (2026-05-13)
**Pairs with:** `FULL-AUDIT-REPORT.md`

---

## Critical (do before deploying the move)

### 1. Fix duplicated brand in title tags — 13 URLs

`src/data/city-pages.ts` and `src/data/service-pages.ts` end every `metaTitle` with `| Sunflo Detailing`, and `src/app/layout.tsx` already appends it via `title.template`. Result: `"X | Sunflo Detailing | Sunflo Detailing"`.

**Cheapest fix:** strip ` | Sunflo Detailing` from every `metaTitle` field in both data files. The layout template will add it back exactly once.

**Files:** `src/data/city-pages.ts` (9 entries), `src/data/service-pages.ts` (4 entries). One sed sweep.

### 2. Verify and pin the JSON-LD geo coordinates

`src/app/layout.tsx` currently has `latitude: 26.1382, longitude: -80.1546` as an approximation. Open the address in Google Maps, right-click → copy decimal lat/long → paste in. Off-by-100m coordinates undermine the address signal.

---

## High (within 1 week of deploy)

### 3. Update Google Business Profile (owner action)

In the GBP dashboard:
- Address: `837 NW 8th Ave, Fort Lauderdale, FL 33311`
- Service area: keep Broward cities (Fort Lauderdale, Oakland Park, Wilton Manors, Pompano Beach, Pembroke Pines, Weston, Davie, Cooper City, Hollywood, Plantation)
- Re-verify the pin location (Google may ask for a postcard or video verification at the new address)
- Update business hours if anything changed
- Add at least 3 new photos taken at the new studio (exterior, interior bay, signage)
- Post a Google Update announcing the move (Google "Posts" feature)

### 4. Citation sweep — fix NAP everywhere

Update the address on each of these (use the exact string `837 NW 8th Ave, Fort Lauderdale, FL 33311` — no abbreviation drift):

- [ ] Yelp
- [ ] Apple Maps Connect
- [ ] Bing Places for Business
- [ ] Facebook Page → About → Address
- [ ] Instagram bio location (link to Google Maps)
- [ ] BBB profile (if listed)
- [ ] Foursquare / Tripadvisor (if listed)
- [ ] Local chambers / directories the owner is a member of

Use a tool like Whitespark or Moz Local for a one-time scan to find listings the owner forgot about.

### 5. Re-submit sitemap in Google Search Console

After production deploy: GSC → Sitemaps → re-submit `https://www.sunflodetailing.com/sitemap.xml`. Forces recrawl of the updated city pages.

### 6. Push 5+ new Google reviews under the new location

Move-period reviews mentioning "Fort Lauderdale" help Google associate the GBP with the new address signal. Owner should text repeat clients with a Google review link and a brief "we moved" mention.

---

## Medium (within 1 month)

### 7. Update drive-time copy on city pages

`src/data/city-pages.ts` — review each city eyebrow and intro/section body for stale "20–25 min from Oakland Park"-era estimates. Likely revisions:
- Davie: 20-25 → 15-20 min
- Cooper City: 25-30 → 20-25 min
- Plantation: 20-25 → 15-20 min

Body copy in each section that references specific minutes should also be sanity-checked against Google Maps from 837 NW 8th Ave.

### 8. Add `hasMap` to LocalBusiness schema

In `src/app/layout.tsx`, alongside `geo`:

```ts
hasMap: contact.mapsUrl,
```

### 9. Announce the move with an indexable artifact

Add either a short blog post or a press-release-style page at `/news/we-moved` (or similar). Gives Google a dated, indexable record of the move and a natural target for backlinks.

### 10. Update OG image (optional)

The current `/images/og/sunflo-og.jpg` is brand-only — no city text, so it doesn't require regen. If the owner wants a move-specific share card for social ("New Fort Lauderdale studio — 837 NW 8th Ave"), that's a one-off design task.

---

## Low / Backlog

### 11. Verify Knowledge Graph kgmid after Google re-indexes

The `sameAs` entry in `layout.tsx` points to `kgmid=/g/11j37x7gnx`. Once Google updates the listing's KG node to the new address, confirm the kgmid still resolves and the cid (`10210086538245009620`) still points to the same business entity. If the kgmid changes after the move (rare but possible), update both `sameAs` entries.

### 12. Bump `aggregateRating.reviewCount`

`layout.tsx` says 120 reviews, last verified 2026-04-21. Set a recurring monthly reminder to read the count off the live GBP and update the value. After the move + a review push (action #6), this will likely climb.

### 13. Consider Maps Platform embed for `LocationMap.tsx`

Once GBP is updated, switch the home + contact map iframes from the unauthenticated `maps.google.com/maps?q=...&output=embed` URL to the official "Embed map" URL from the GBP "Share" panel — gives a verified pin instead of a query-resolved one.

---

## Already done (this PR)

- ✅ Single source of truth in `src/data/contact.ts` (new fields: `addressStreet`, `addressCity`, `addressState`, `addressZip`, `mapsUrl`).
- ✅ Address swept across 26 files (app pages, components, data, llms.txt).
- ✅ JSON-LD `address` and `geo` updated in `layout.tsx` and `locations/[city]/page.tsx`.
- ✅ `areaServed` reordered (Fort Lauderdale first, Oakland Park kept as served city).
- ✅ `/locations/fort-lauderdale` rewritten as home-base page with "Visit the Studio" section and template branching.
- ✅ `/locations/oakland-park` 301 → `/locations/fort-lauderdale`.
- ✅ "We've moved" popup with versioned localStorage dismissal (`sunflo:moved-banner-dismissed:v1`).
- ✅ Footer `(home base)` pill moved to Fort Lauderdale, inline next to the city link.
- ✅ Sitemap auto-bumps `lastModified` at build.
- ✅ Pompano Beach drive time updated (further from new origin).
- ✅ Contact-page Google Maps iframe re-targeted to new address; home page LocationMap iframe re-targeted.
- ✅ CSP `frame-src` extended to allow `maps.google.com` (for new iframe pattern).
