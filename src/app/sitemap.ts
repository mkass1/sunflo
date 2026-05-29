import type { MetadataRoute } from "next";
import { servicePages } from "@/data/service-pages";
import { cityPages } from "@/data/city-pages";
import { blogPosts } from "@/data/blog-posts";

const SITE_URL = "https://www.sunflodetailing.com";
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceDetailEntries: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${SITE_URL}/services/${page.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const cityPageEntries: MetadataRoute.Sitemap = cityPages.map((page) => ({
    url: `${SITE_URL}/locations/${page.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishDate}T00:00:00`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: `${SITE_URL}/`, lastModified: NOW, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    ...serviceDetailEntries,
    ...cityPageEntries,
    { url: `${SITE_URL}/about`, lastModified: NOW, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
    ...blogEntries,
    { url: `${SITE_URL}/gallery`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/faq`, lastModified: NOW, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: NOW, changeFrequency: "yearly", priority: 0.7 },
  ];
}
