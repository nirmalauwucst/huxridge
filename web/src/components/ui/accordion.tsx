"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItem[] | AccordionItem[];
  className?: string;
  /** Allow multiple items open at once (default: true) */
  type?: "single" | "multiple";
};

export function Accordion({ items, className, type = "multiple" }: AccordionProps) {
  if (type === "single") {
    return (
      <AccordionPrimitive.Root type="single" collapsible className={cn("space-y-2", className)}>
        {items.map((item, i) => (
          <AccordionPrimitive.Item
            key={i}
            value={`item-${i}`}
            className="border-border rounded-lg border bg-white"
          >
            <AccordionPrimitive.Header asChild>
              <AccordionPrimitive.Trigger className="text-primary-900 flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-base font-medium transition-colors hover:bg-neutral-50 [&[data-state=open]>svg]:rotate-180">
                <span>{item.question}</span>
                <ChevronDown
                  className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
              <p className="text-muted-foreground px-5 pb-5 pt-1 text-sm leading-relaxed">
                {item.answer}
              </p>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    );
  }

  return (
    <AccordionPrimitive.Root type="multiple" className={cn("space-y-2", className)}>
      {items.map((item, i) => (
        <AccordionPrimitive.Item
          key={i}
          value={`item-${i}`}
          className="border-border rounded-lg border bg-white"
        >
          <AccordionPrimitive.Header asChild>
            <AccordionPrimitive.Trigger className="text-primary-900 flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-base font-medium transition-colors hover:bg-neutral-50 [&[data-state=open]>svg]:rotate-180">
              <span>{item.question}</span>
              <ChevronDown
                className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0 transition-transform duration-200"
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
            <p className="text-muted-foreground px-5 pb-5 pt-1 text-sm leading-relaxed">
              {item.answer}
            </p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
