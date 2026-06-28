"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, BookOpen } from "lucide-react";
import { mockResources } from "@/lib/mock-data";
import { taxCalculators } from "@/lib/tax-calculators";
import { TAX_YEAR_LABEL } from "@/lib/calculators/tax-year-config";
import { CalculatorCard } from "@/components/calculators/calculator-card";

const guideCategories = [
  "All",
  "Making Tax Digital",
  "Corporation Tax",
  "Annual Accounts",
  "VAT",
  "Personal Tax",
  "Business Structure",
  "Governance",
];

const calcCategories = [
  "All",
  ...Array.from(new Set(taxCalculators.map((c) => c.category))),
];

const howToUse = [
  {
    title: "Enter gross figures",
    body: "Always use gross (pre-tax) amounts. For employment income, use your gross salary before any deductions appear on your payslip.",
  },
  {
    title: "Verify the tax year",
    body: `These calculators use rates and thresholds for ${TAX_YEAR_LABEL}. Rates can change each April — check the tax year shown on each calculator.`,
  },
  {
    title: "Get professional advice",
    body: "These tools are starting points. Complex situations — multiple income sources, property portfolios, company structures — need a qualified accountant.",
  },
];

function FilterStrip({
  categories,
  active,
  onSelect,
  label,
}: {
  categories: string[];
  active: string;
  onSelect: (cat: string) => void;
  label: string;
}) {
  return (
    <div className="flex flex-wrap gap-2" aria-label={label}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={
            active === cat
              ? "bg-primary-900 rounded-full px-4 py-1.5 text-sm font-medium text-white"
              : "border-border text-primary-700 hover:border-primary-900 hover:bg-primary-50 rounded-full border px-4 py-1.5 text-sm font-medium"
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export function ResourcesFilter() {
  const [activeGuide, setActiveGuide] = useState("All");
  const [activeCalc, setActiveCalc] = useState("All");

  const filteredGuides =
    activeGuide === "All"
      ? mockResources
      : mockResources.filter((r) => r.category === activeGuide);

  const filteredCalcs =
    activeCalc === "All"
      ? taxCalculators
      : taxCalculators.filter((c) => c.category === activeCalc);

  return (
    <>
      {/* ─────────────────────────────────────────── */}
      {/* GUIDES SECTION                              */}
      {/* ─────────────────────────────────────────── */}

      <Section background="muted" padding="sm">
        <Container>
          <FilterStrip
            categories={guideCategories}
            active={activeGuide}
            onSelect={setActiveGuide}
            label="Filter guides by category"
          />
        </Container>
      </Section>

      <Section background="default">
        <Container>
          <SectionHeading
            eyebrow="Guides &amp; Articles"
            title="Free Guides &amp; Resources"
            subtitle="Practical reference articles to help you navigate tax and accountancy with confidence."
            className="mb-10"
          />

          {filteredGuides.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredGuides.map((resource) => (
                <Card
                  key={resource.title}
                  variant="default"
                  className="hover:shadow-elevated flex flex-col transition-all"
                >
                  <div className="bg-primary-50 mb-4 flex h-36 items-center justify-center rounded-lg">
                    <BookOpen
                      className="text-primary-300 h-12 w-12"
                      aria-hidden="true"
                    />
                  </div>
                  <Badge variant="muted" className="mb-3 self-start">
                    {resource.category}
                  </Badge>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="mt-2 flex-1">
                    {resource.description}
                  </CardDescription>
                  <CardFooter className="mt-5">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/resources/${resource.slug}`}>
                        <BookOpen
                          className="mr-1.5 h-4 w-4"
                          aria-hidden="true"
                        />
                        View Guide
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground py-12 text-center">
              No guides in this category yet.
            </p>
          )}

          <SectionHeading
            eyebrow="More Coming Soon"
            title="We are regularly adding new guides"
            subtitle="Sign up for our newsletter to be notified when new resources are published."
            align="center"
            className="mt-16 max-w-xl"
          />
        </Container>
      </Section>

      {/* ─────────────────────────────────────────── */}
      {/* TAX CALCULATORS SECTION                    */}
      {/* ─────────────────────────────────────────── */}

      <Section background="muted" padding="sm">
        <Container>
          <FilterStrip
            categories={calcCategories}
            active={activeCalc}
            onSelect={setActiveCalc}
            label="Filter calculators by category"
          />
        </Container>
      </Section>

      <Section background="default">
        <Container>
          <SectionHeading
            eyebrow="Free Tax Tools"
            title="Free UK Tax Calculators"
            subtitle={`Quick estimates for common UK tax questions using ${TAX_YEAR_LABEL} rates. Free to use — no sign-up required.`}
            className="mb-10"
          />

          {filteredCalcs.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCalcs.map((calc) => (
                <CalculatorCard key={calc.slug} calculator={calc} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground py-12 text-center">
              No calculators in this category yet.
            </p>
          )}

          {/* Disclaimer */}
          <div
            role="note"
            className="mt-10 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm"
          >
            <AlertTriangle
              className="mt-0.5 h-4 w-4 shrink-0 text-amber-600"
              aria-hidden="true"
            />
            <p className="text-amber-900">
              <strong>Estimates only — not tax advice.</strong> These
              calculators provide estimates based on {TAX_YEAR_LABEL} UK tax
              rates. Tax rules and personal circumstances vary. Always speak to
              a qualified accountant before acting on any estimate.
            </p>
          </div>

          {/* Guidance cards */}
          <SectionHeading
            eyebrow="Guidance"
            title="How to use these calculators"
            subtitle="A few things to keep in mind when using our tax estimation tools."
            className="mt-16 mb-8"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {howToUse.map((item) => (
              <div key={item.title} className="bg-muted rounded-xl p-5">
                <h3 className="text-primary-900 font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
