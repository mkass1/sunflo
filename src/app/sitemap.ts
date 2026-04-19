import type { MetadataRoute } from "next";

const SITE_URL = "https://sunflodetailing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date("2026-04-18"), changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: new Date("2026-04-18"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/ceramic-coating`, lastModified: new Date("2026-04-18"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/services/paint-correction`, lastModified: new Date("2026-04-18"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/services/paint-protection-film`, lastModified: new Date("2026-04-18"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/services/window-tinting`, lastModified: new Date("2026-04-18"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/gallery`, lastModified: new Date("2026-04-18"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/faq`, lastModified: new Date("2026-04-18"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: new Date("2026-04-18"), changeFrequency: "yearly", priority: 0.7 },
  ];
}
