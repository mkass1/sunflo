"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

interface AccordionItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({ faq, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className={cn(
        "border border-dark-border rounded-sm overflow-hidden transition-colors duration-200",
        isOpen ? "border-brand-500/40 bg-dark-card" : "bg-dark-card hover:border-dark-elevated"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className={cn("font-semibold text-base transition-colors", isOpen ? "text-white" : "text-gray-200")}>
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-brand-400 transition-transform duration-300",
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
