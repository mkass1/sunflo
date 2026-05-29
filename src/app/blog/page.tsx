import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PostCard from "@/components/blog/PostCard";
import CTABanner from "@/components/layout/CTABanner";

const SITE_URL = "https://www.sunflodetailing.com";

export const metadata: Metadata = {
  title: "Blog | Sunflo Detailing — Fort Lauderdale",
  description:
    "News, updates, and detailing insight from Sunflo Detailing in Fort Lauderdale — paint correction, ceramic coating, and the South Florida car scene.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Sunflo Detailing — Fort Lauderdale",
    description:
      "News, updates, and detailing insight from Sunflo Detailing in Fort Lauderdale.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-dark-muted border-b border-dark-border">
        <Container>
          <SectionHeading
            as="h1"
            label="Blog"
            title="News & Detailing Insight"
            subtitle="Updates from the studio and what we're learning on the paint of South Florida's cars."
          />
        </Container>
      </section>

      {/* Posts */}
      <section className="py-20 bg-dark">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
