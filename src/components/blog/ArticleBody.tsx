import { Fragment } from "react";
import Link from "next/link";
import type { BlogSection } from "@/types";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders a paragraph string, converting inline [text](/path) markdown-style
 * links into Next <Link> elements. Plain text passes through untouched.
 */
function renderInline(text: string) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }
    const [, label, href] = match;
    nodes.push(
      <Link
        key={key++}
        href={href}
        className="text-brand-400 underline underline-offset-2 hover:text-brand-300 transition-colors"
      >
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }
  return nodes;
}

export default function ArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="max-w-3xl mx-auto space-y-14">
      {sections.map((section) => (
        <div key={section.heading}>
          <h2
            className="text-2xl font-bold text-white mb-4 leading-snug"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {section.heading}
          </h2>
          <div className="space-y-4">
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-400 text-sm leading-relaxed">
                {renderInline(p)}
              </p>
            ))}
          </div>
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {section.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span>{renderInline(b)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
