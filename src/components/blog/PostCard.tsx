import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-dark-border bg-dark-card transition-colors hover:border-brand-500/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em]">
          <span className="text-brand-500">{post.category}</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-500">{formatDate(post.publishDate)}</span>
        </div>
        <h2
          className="mb-3 text-lg font-bold leading-snug text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {post.title}
        </h2>
        <p className="mb-5 text-sm leading-relaxed text-gray-400">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400">
          Read more
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
