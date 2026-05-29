import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { contact } from "@/data/contact";
import Container from "@/components/ui/Container";
import ArticleBody from "@/components/blog/ArticleBody";
import CTABanner from "@/components/layout/CTABanner";

const SITE_URL = "https://www.sunflodetailing.com";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.publishDate,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.heroAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.heroImage}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: { "@type": "Organization", name: "Sunflo Detailing", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Sunflo Detailing",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/sunflo-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    url: postUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  const faqJsonLd = post.faqs &&
    post.faqs.length > 0 && {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
        />
      )}

      {/* Header */}
      <section className="pt-40 pb-12 bg-dark-muted border-b border-dark-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em]">
              <Link href="/blog" className="text-brand-500 hover:text-brand-400 transition-colors">
                {post.category}
              </Link>
              <span className="text-gray-600">·</span>
              <span className="text-gray-500">{formatDate(post.publishDate)}</span>
              <span className="text-gray-600">·</span>
              <span className="text-gray-500">{post.readMinutes} min read</span>
            </div>
            <h1
              className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-gray-400 leading-relaxed">{post.excerpt}</p>
          </div>
        </Container>
      </section>

      {/* Hero image */}
      <section className="bg-dark">
        <Container>
          <div className="max-w-4xl mx-auto -mt-px">
            <div className="relative aspect-[16/9] overflow-hidden rounded-b-sm border-x border-b border-dark-border">
              <Image
                src={post.heroImage}
                alt={post.heroAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 56rem"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-16 bg-dark">
        <Container>
          <ArticleBody sections={post.sections} />
        </Container>
      </section>

      {/* FAQ */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="py-20 bg-dark-muted border-t border-dark-border">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl font-bold text-white mb-10"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-dark-border pb-8 last:border-b-0 last:pb-0">
                    <h3 className="text-base font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Inline CTA */}
      <section className="py-16 bg-dark border-t border-dark-border">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto bg-dark-card border border-dark-border rounded-sm p-8">
            <div>
              <p
                className="text-xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to book?
              </p>
              <p className="text-gray-400 text-sm">
                Call us or send a message — we&apos;ll confirm availability and answer any questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 bg-dark-muted border border-dark-border text-white font-semibold px-5 py-3 rounded-sm hover:border-brand-500/40 transition-colors text-sm"
              >
                <Phone size={14} />
                {contact.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-5 py-3 rounded-sm hover:bg-brand-700 transition-colors text-sm"
              >
                Request a Quote
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Related services */}
      {post.related && post.related.length > 0 && (
        <section className="py-16 bg-dark-muted border-t border-dark-border">
          <Container>
            <div className="max-w-3xl mx-auto">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-6">
                Related Services
              </p>
              <div className="flex flex-wrap gap-3">
                {post.related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 bg-dark-card border border-dark-border text-gray-300 text-sm font-medium px-4 py-2 rounded-sm hover:border-brand-500/40 hover:text-white transition-colors"
                  >
                    {rel.label}
                    <ArrowRight size={12} className="text-brand-400" />
                  </Link>
                ))}
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 bg-dark-card border border-dark-border text-gray-500 text-sm font-medium px-4 py-2 rounded-sm hover:border-dark-elevated hover:text-gray-300 transition-colors"
                >
                  All Posts
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      <CTABanner />
    </>
  );
}
