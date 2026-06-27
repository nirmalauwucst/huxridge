"use client";

import * as React from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export type Sector = {
  slug: string;
  icon: IconName;
  title: string;
  intro: string;
  services: string[];
  getInTouchText: string;
  getInTouchHref: string;
};

export type SectorGroup = {
  label: string;
  colorScheme: "teal" | "blue";
  sectors: Sector[];
};

function SectorCard({
  sector,
  isOpen,
  onToggle,
}: {
  sector: Sector;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-background border-border shadow-card overflow-hidden rounded-xl border">
      {/* Header row — always visible */}
      <div className="flex items-center gap-4 p-5">
        <div className="bg-accent-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
          <Icon name={sector.icon} size={22} className="text-accent-700" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-primary-900 text-base leading-snug font-semibold">
            {sector.title}
          </p>
          <p className="text-muted-foreground mt-0.5 text-sm leading-relaxed">
            {sector.intro}
          </p>
        </div>

        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="border-primary-900 text-primary-900 hover:bg-primary-50 shrink-0 rounded-md border px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors"
        >
          {isOpen ? "Hide services −" : "See services +"}
        </button>
      </div>

      {/* Expandable panel */}
      <div
        style={{
          maxHeight: isOpen ? "520px" : "0",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.25s ease, opacity 0.2s ease",
          overflow: "hidden",
        }}
      >
        <div className="px-5 pb-5">
          <div className="border-border border-t pt-4">
            <ul className="mb-5 grid grid-cols-2 gap-x-6 gap-y-2">
              {sector.services.map((service) => (
                <li
                  key={service}
                  className="text-secondary-700 flex items-start gap-2 text-sm"
                >
                  <span className="bg-accent-500 mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full" />
                  {service}
                </li>
              ))}
            </ul>

            <div className="border-border flex items-center justify-between gap-4 border-t pt-3">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/who-we-help/${sector.slug}`}
                  className="text-primary-700 text-sm font-medium hover:underline"
                >
                  Learn more →
                </Link>
                <Link
                  href={sector.getInTouchHref}
                  className="text-accent-700 text-sm font-medium hover:underline"
                >
                  {sector.getInTouchText}
                </Link>
              </div>
              <button
                onClick={onToggle}
                className="text-muted-foreground hover:text-primary-900 shrink-0 text-sm transition-colors"
              >
                Close ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectorGroups({ groups }: { groups: SectorGroup[] }) {
  const [openSlug, setOpenSlug] = React.useState<string | null>(null);

  function handleToggle(slug: string) {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  }

  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div key={group.label}>
          {/* Group heading badge */}
          <div className="mb-5">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium tracking-wide",
                group.colorScheme === "teal"
                  ? "bg-teal-50 text-teal-700"
                  : "bg-primary-50 text-primary-700",
              )}
            >
              {group.label}
            </span>
          </div>

          {/* Sector cards */}
          <div className="space-y-3">
            {group.sectors.map((sector) => (
              <SectorCard
                key={sector.slug}
                sector={sector}
                isOpen={openSlug === sector.slug}
                onToggle={() => handleToggle(sector.slug)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
