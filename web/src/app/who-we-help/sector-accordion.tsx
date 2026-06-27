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
    <div className="bg-background rounded-xl border border-border shadow-card overflow-hidden">
      {/* Header row — always visible */}
      <div className="flex items-center gap-4 p-5">
        <div className="shrink-0 h-11 w-11 bg-accent-50 rounded-lg flex items-center justify-center">
          <Icon name={sector.icon} size={22} className="text-accent-700" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-base font-semibold text-primary-900 leading-snug">
            {sector.title}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
            {sector.intro}
          </p>
        </div>

        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="shrink-0 text-sm font-medium border border-primary-900 text-primary-900 rounded-md px-3 py-1.5 hover:bg-primary-50 transition-colors whitespace-nowrap"
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
          <div className="border-t border-border pt-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-5">
              {sector.services.map((service) => (
                <li key={service} className="flex items-start gap-2 text-sm text-secondary-700">
                  <span className="mt-[5px] shrink-0 h-1.5 w-1.5 rounded-full bg-accent-500" />
                  {service}
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href={`/who-we-help/${sector.slug}`}
                  className="text-primary-700 text-sm font-medium hover:underline"
                >
                  Learn more →
                </Link>
                <Link
                  href={sector.getInTouchHref}
                  className="text-sm font-medium text-accent-700 hover:underline"
                >
                  {sector.getInTouchText}
                </Link>
              </div>
              <button
                onClick={onToggle}
                className="text-sm text-muted-foreground hover:text-primary-900 transition-colors shrink-0"
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
