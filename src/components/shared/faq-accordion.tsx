"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs as defaultFaqs, type FAQItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items?: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
};

export default function FaqAccordion({
  items = defaultFaqs,
  allowMultiple = false,
  className,
}: FaqAccordionProps) {
  // First item open by default for clear affordance
  const [openIds, setOpenIds] = useState<string[]>(() =>
    items.length > 0 ? [items[0].id] : [],
  );

  function toggleItem(id: string) {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  }

  return (
    <div className={cn("space-y-3 sm:space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-xl border bg-surface transition-colors duration-200",
              isOpen
                ? "border-primary/40 shadow-xs"
                : "border-border hover:border-border-strong",
            )}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left font-medium text-heading transition-colors sm:p-5 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                <span className="text-base sm:text-lg">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-200 motion-reduce:transition-none",
                    isOpen && "rotate-180 bg-primary-subtle",
                  )}
                >
                  <ChevronDown className="size-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-250 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border/70 px-4 pb-5 pt-3 sm:px-5">
                  <p className="text-sm leading-relaxed text-body sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
