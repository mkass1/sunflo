import type { MetadataRoute } from "next";

const SITE_URL = "https://sunflodetailing.com";

const AI_CRAWLERS = ["GPTBot", "Claude-Web", "anthropic-ai", "CCBot", "GoogleExtended", "PerplexityBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
