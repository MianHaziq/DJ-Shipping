"use client"; // needs useState for expand/collapse disclosure

import { useState } from "react";
import type { Faq } from "@/lib/data";

interface FaqAccordionProps {
  items: Faq[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card shadow-e1">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              id={`faq-q-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-a-${i}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface md:px-8"
            >
              <span className="flex items-center gap-4">
                <span className="mono text-xs text-brand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base font-bold text-ink md:text-lg">
                  {item.question}
                </span>
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-brand dark:text-brand-300 transition-transform duration-300 ${
                  isOpen ? "rotate-45 bg-brand text-white" : ""
                }`}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`grid transition-all duration-300 ease-out-quint ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pl-16 text-sm leading-relaxed text-muted md:px-8 md:pl-18">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
