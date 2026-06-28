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
import { BookOpen } from "lucide-react";
import { mockResources } from "@/lib/mock-data";

const categories = [
  "All",
  "Making Tax Digital",
  "Corporation Tax",
  "Annual Accounts",
  "VAT",
  "Personal Tax",
  "Business Structure",
  "Governance",
];

export function ResourcesFilter() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? mockResources
      : mockResources.filter((r) => r.category === active);

  return (
    <>
      {/* ── Category Filter ── */}
      <Section background="muted" padding="sm">
        <Container>
          <div className="flex flex-wrap gap-2" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
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
        </Container>
      </Section>

      {/* ── Resources Grid ── */}
      <Section background="default">
        <Container>
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((resource) => (
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
    </>
  );
}
