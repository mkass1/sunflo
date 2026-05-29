# Design: Blog system + first SEO article

**Date:** 2026-05-28
**Status:** Approved (pending spec review)

## Goal

Stand up a reusable blog on sunflodetailing.com and publish the first SEO article:
a hybrid news + keyword piece about Sunflo's relocation to a shared Fort Lauderdale
studio and its detailing partnership with PAID Motorsports.

Primary keyword: **exotic car detailing Fort Lauderdale** (supporting: paint
correction, ceramic coating, new studio, PAID Motorsports partnership).

## Hard constraint: no fabricated information

Every factual claim in the article must trace to a verified source below. Anything
not verified is omitted — no invented stats, dates, ratings, or capabilities.

### Verified facts (safe to use)
- Address: 837 NW 8th Ave, Fort Lauderdale, FL 33311 (source: project memory + PAID `lib/site.ts`)
- Relocated from Oakland Park (source: project memory)
- Established 2017 (source: project memory)
- Services offered: ceramic coatings, wraps, tints, PPF, detailing; packages = Complete
  Interior Detailing, Gloss Enhancement, Paint Enhancement, Paint Correction (source: memory + `src/data/services.ts`)
- PAID Motorsports is an exotic-car specialist at the same address; partnership exists,
  with Sunflo handling correction + coating for PAID's exotic clientele (source: PAID `lib/site.ts` "detailing" pillar)
- **"2,000+ vehicles corrected and coated since 2017"** — confirmed accurate by owner (2026-05-28)

### Explicitly excluded (accuracy, not SEO)
- Graphene coatings — Sunflo offers **ceramic only** (owner confirmed). No graphene mention.
- Review counts / star ratings — none provided by owner, so none used. Will add if real figures supplied.

### Topical overlap with service pages — allowed
The article may explain ceramic coating, paint correction, etc. where it serves the
"exotic car detailing Fort Lauderdale" keyword, and links out to `/services/*` for depth.
Distinct framing (exotic + studio + partnership angle) keeps it from cannibalizing those pages. (Owner-approved 2026-05-28.)

## Architecture

Mirrors the existing `src/app/services/[slug]` pattern: typed data file + dynamic
route + inline JSON-LD. No new dependencies.

| File | Change |
|---|---|
| `src/types/index.ts` | Add `BlogSection`, `BlogPost` interfaces |
| `src/data/blog-posts.ts` | New — typed content (this article; future posts appended) |
| `src/app/blog/page.tsx` | New — index listing post cards |
| `src/app/blog/[slug]/page.tsx` | New — article template (`generateStaticParams`, `generateMetadata`, JSON-LD) |
| `src/components/blog/PostCard.tsx` | New — index card |
| `src/data/navigation.ts` | Add `{ label: "Blog", href: "/blog" }` |
| `src/components/layout/Footer.tsx` | Add Blog link if footer lists nav |
| `src/app/sitemap.ts` | Add `/blog` + each post URL |

### Data model
```ts
interface BlogSection {
  heading: string;
  paragraphs: string[];   // each rendered as <p>; supports inline [text](/path) links
  bullets?: string[];
}
interface BlogPost {
  slug: string;
  title: string;          // H1
  metaTitle: string;
  metaDescription: string;
  excerpt: string;        // index card + meta fallback
  publishDate: string;    // ISO, e.g. "2026-05-28"
  heroImage: string;
  heroAlt: string;
  category: "News" | "Guide";
  readMinutes: number;
  sections: BlogSection[];
  faqs?: { question: string; answer: string }[];
  related?: { label: string; slug: string }[];  // internal links to /services/*
}
```

### Inline link rendering
A small helper parses `[text](/path)` markdown-style links inside `paragraphs` and
renders them as Next `<Link>`. Enables SEO-valuable internal links (ceramic-coating,
paint-correction, contact) without adding a markdown library. Plain text passes through
untouched.

### SEO / structured data
On the article page, inline JSON-LD (same `dangerouslySetInnerHTML` + `<` escaping
pattern as service pages):
- `BlogPosting` — headline, datePublished, image, author + publisher (Sunflo), mainEntityOfPage
- `BreadcrumbList` — Home > Blog > Post
- `FAQPage` — only if `faqs` present

`generateMetadata` sets title, description, `alternates.canonical: /blog/<slug>`, and
OpenGraph with the hero image.

## The article

- **Slug:** `exotic-car-detailing-fort-lauderdale`
- **Category:** News
- **Hero:** `/images/gallery/ftl-studio-interior.jpg` (real photo of the new studio — verified to exist)
- **Section outline:**
  1. **A new home in Fort Lauderdale** — relocation to 837 NW 8th Ave (NAP signal), the shared exotic studio
  2. **Partnering with PAID Motorsports** — who PAID is (exotic specialists), what the partnership covers (Sunflo = correction + coating arm)
  3. **What it means for exotic owners** — 2,000+ vehicles since 2017 of correction/coating experience now serving PAID's exotic clientele; links to [ceramic coating](/services/ceramic-coating) and [paint correction](/services/paint-correction) rather than re-explaining them
  4. **Bringing your car in** — area served (Fort Lauderdale + South Florida), contact CTA
- **FAQs (unique, non-duplicative):**
  - Where is Sunflo Detailing located now?
  - What is the Sunflo / PAID Motorsports partnership?
  - Do you detail exotic and high-performance cars?
- **Related:** Ceramic Coating, Paint Correction, Gallery, Contact

## Styling
Reuse existing primitives: `Container`, `SectionHeading`, `CTABanner`, dark theme
classes (`bg-dark`, `bg-dark-muted`, `border-dark-border`, `brand-*`,
`var(--font-heading)`), matching the service detail page layout.

## Future posts (backlog — not built now)
System supports easy additions. Candidate topics, all evergreen/keyword-driven:
- Ceramic coating cost in Fort Lauderdale
- Ceramic coating vs. PPF
- Protecting paint in the South Florida climate

## Out of scope
- CMS / markdown authoring (TS data file is sufficient and matches the codebase)
- Comments, tags/categories taxonomy beyond the single `category` field
- Author profiles
