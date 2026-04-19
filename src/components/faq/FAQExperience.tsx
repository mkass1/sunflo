"use client";

import { useState, useMemo } from "react";
import { Search, MessageCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import type { FAQ, FaqCategory } from "@/types";

interface FAQExperienceProps {
  faqs: FAQ[];
  categories: { id: FaqCategory; label: string }[];
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={cn(
        "rounded-sm overflow-hidden border transition-colors duration-200",
        isOpen ? "border-brand-500/40 bg-dark-card" : "border-dark-border bg-dark-card hover:border-dark-elevated"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className={cn(
            "font-semibold text-[0.9375rem] leading-snug transition-colors",
            isOpen ? "text-white" : "text-gray-200 group-hover:text-white"
          )}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={17}
          className={cn(
            "mt-0.5 shrink-0 text-brand-400 transition-transform duration-300 ease-in-out",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQExperience({ faqs, categories }: FAQExperienceProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "all">("all");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (q) {
      return faqs.filter(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      );
    }
    if (activeCategory === "all") return faqs;
    return faqs.filter((f) => f.category === activeCategory);
  }, [faqs, search, activeCategory]);

  const counts = useMemo(() => {
    const q = search.trim().toLowerCase();
    const pool = q
      ? faqs.filter((f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
      : faqs;
    const result: Record<string, number> = { all: pool.length };
    for (const cat of categories) {
      result[cat.id] = pool.filter((f) => f.category === cat.id).length;
    }
    return result;
  }, [faqs, categories, search]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allTabs = [{ id: "all" as const, label: "All" }, ...categories];

  return (
    <section className="py-20 bg-dark">
      <Container>
        <div className="lg:grid lg:grid-cols-[264px_1fr] lg:gap-12 xl:gap-16">

          {/* Desktop sidebar */}
          <aside className="hidden lg:flex flex-col gap-6">
            <div className="sticky top-28">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-4">
                Filter by topic
              </p>
              <nav className="flex flex-col gap-0.5">
                {allTabs.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveCategory(id as FaqCategory | "all")}
                    className={cn(
                      "flex items-center justify-between w-full px-4 py-2.5 rounded-sm text-sm font-medium text-left transition-all duration-150",
                      activeCategory === id
                        ? "bg-brand-500/10 text-brand-300 border border-brand-500/25"
                        : "text-gray-400 hover:text-gray-200 hover:bg-dark-card border border-transparent"
                    )}
                  >
                    <span>{label}</span>
                    <span
                      className={cn(
                        "text-xs font-mono tabular-nums px-1.5 py-0.5 rounded min-w-[1.5rem] text-center",
                        activeCategory === id
                          ? "text-brand-400 bg-brand-500/10"
                          : "text-gray-600 bg-dark-muted"
                      )}
                    >
                      {counts[id] ?? 0}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Contact nudge */}
              <div className="mt-6 bg-dark-card border border-dark-border rounded-sm p-5">
                <div className="w-8 h-8 rounded-sm bg-brand-500/10 flex items-center justify-center mb-3">
                  <MessageCircle size={15} className="text-brand-400" />
                </div>
                <p className="text-white text-sm font-semibold mb-1.5">Still have questions?</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Our team is happy to walk you through any service before you book.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1 text-brand-400 text-xs font-semibold hover:text-brand-300 transition-colors"
                >
                  Get in touch <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main area */}
          <div>
            {/* Search bar */}
            <div className="mb-5 bg-dark-card border border-dark-border rounded-sm flex items-center gap-3 px-4 py-3.5 focus-within:border-brand-500/40 transition-colors duration-150">
              <Search size={15} className="text-gray-500 shrink-0" />
              <input
                type="search"
                placeholder="Search questions…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-gray-200 text-sm placeholder:text-gray-600 outline-none"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="text-gray-500 hover:text-gray-300 text-xs font-medium transition-colors"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Mobile category chips */}
            <div
              className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-6"
              style={{ scrollbarWidth: "none" }}
            >
              {allTabs.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveCategory(id as FaqCategory | "all")}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap",
                    activeCategory === id
                      ? "bg-brand-600 text-white"
                      : "bg-dark-card border border-dark-border text-gray-400 hover:text-white"
                  )}
                >
                  {label}
                  <span className="ml-1.5 text-xs opacity-60">{counts[id] ?? 0}</span>
                </button>
              ))}
            </div>

            {/* FAQ accordion */}
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <Search size={30} className="mx-auto mb-4 text-gray-700" />
                  <p className="text-gray-200 font-semibold mb-2">No questions found</p>
                  <p className="text-gray-500 text-sm mb-6">
                    Try different keywords or browse all categories.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-brand-400 text-sm font-semibold hover:text-brand-300 transition-colors"
                  >
                    Ask us directly →
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col gap-3"
                >
                  {filtered.map((faq, i) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.32, delay: i * 0.04, ease: "easeOut" }}
                    >
                      <FAQItem
                        faq={faq}
                        isOpen={openIds.has(faq.id)}
                        onToggle={() => toggle(faq.id)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
