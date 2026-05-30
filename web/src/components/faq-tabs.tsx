"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Accordion } from "@/components/ui/accordion";
import { mockFaqs } from "@/lib/mock-data";

type Category = keyof typeof mockFaqs;
const categories = Object.keys(mockFaqs) as Category[];

export function FaqTabs() {
  const [active, setActive] = React.useState<Category>("Services");

  return (
    <div>
      {/* Category tab strip */}
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="FAQ categories"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            aria-controls={`faq-panel-${cat}`}
            id={`faq-tab-${cat}`}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-primary-900 bg-primary-900 text-white"
                : "border-border text-primary-700 hover:border-primary-900 hover:bg-primary-50",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ panel */}
      {categories.map((cat) => (
        <div
          key={cat}
          id={`faq-panel-${cat}`}
          role="tabpanel"
          aria-labelledby={`faq-tab-${cat}`}
          hidden={active !== cat}
        >
          <Accordion items={[...mockFaqs[cat]]} type="single" />
        </div>
      ))}
    </div>
  );
}
