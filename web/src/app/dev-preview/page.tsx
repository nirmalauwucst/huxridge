import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import { Icon, type IconName } from "@/components/ui/icon";
import { services, industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Design System Preview",
  robots: { index: false, follow: false },
};

const palette: { name: string; var: string; shades: number[] }[] = [
  {
    name: "Primary",
    var: "primary",
    shades: [50, 100, 300, 500, 700, 900, 950],
  },
  {
    name: "Secondary",
    var: "secondary",
    shades: [50, 100, 300, 500, 700, 900],
  },
  { name: "Accent", var: "accent", shades: [50, 100, 300, 500, 700, 900] },
  { name: "Neutral", var: "neutral", shades: [0, 50, 200, 400, 600, 800, 900] },
];

export default function DevPreviewPage() {
  return (
    <>
      <Section padding="md">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Design System Preview" },
            ]}
          />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Phase 1A"
              title="Design System Preview"
              subtitle="Token reference and reusable components. Internal page — not indexed."
            />
          </div>
        </Container>
      </Section>

      <Section background="muted" padding="sm">
        <Container>
          <h3 className="text-xl font-semibold">Colour palette</h3>
          <p className="text-muted-foreground mt-2 text-sm">
            Placeholder values — replace with client-supplied brand colours.
          </p>
          <div className="mt-8 space-y-6">
            {palette.map((group) => (
              <div key={group.name}>
                <div className="text-secondary-700 mb-2 text-sm font-medium">
                  {group.name}
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-7">
                  {group.shades.map((shade) => (
                    <div
                      key={shade}
                      className="border-border overflow-hidden rounded-md border"
                    >
                      <div
                        className="h-16 w-full"
                        style={{
                          backgroundColor: `var(--color-${group.var}-${shade})`,
                        }}
                      />
                      <div className="px-2 py-1.5 text-xs">
                        <div className="font-mono">
                          {group.var}-{shade}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="sm">
        <Container>
          <h3 className="text-xl font-semibold">Typography</h3>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">
                Display / Serif
              </p>
              <h1 className="mt-1 text-5xl">The quick brown fox</h1>
            </div>
            <div>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">
                H2 / Serif
              </p>
              <h2 className="mt-1 text-4xl">The quick brown fox</h2>
            </div>
            <div>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">
                H3 / Serif
              </p>
              <h3 className="mt-1 text-2xl">The quick brown fox</h3>
            </div>
            <div>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">
                Body / Sans
              </p>
              <p className="mt-1 text-base leading-relaxed">
                Modern, paperless accountancy and tax advisory for UK
                businesses, landlords, contractors and healthcare professionals.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="muted" padding="sm">
        <Container>
          <h3 className="text-xl font-semibold">Buttons</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Container>
      </Section>

      <Section padding="sm">
        <Container>
          <h3 className="text-xl font-semibold">Badges</h3>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="muted">Muted</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
          </div>
        </Container>
      </Section>

      <Section background="muted" padding="sm">
        <Container>
          <h3 className="text-xl font-semibold">Cards</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {(["default", "elevated", "outline"] as const).map((v) => (
              <Card key={v} variant={v}>
                <CardHeader>
                  <CardTitle>Card / {v}</CardTitle>
                  <CardDescription>
                    Used for services, testimonials, blog posts and team
                    members.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Realistic, premium feel with consistent radii and shadow
                  tokens.
                </CardContent>
                <CardFooter>
                  <Button asChild size="sm" variant="link">
                    <Link href="#">Learn more →</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="sm">
        <Container>
          <h3 className="text-xl font-semibold">Service & industry icons</h3>
          <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-7">
            {(
              [...services, ...industries] as { slug: string; title: string }[]
            ).map((item) => (
              <div
                key={item.slug}
                className="border-border flex flex-col items-center gap-2 rounded-lg border p-4 text-center"
              >
                <Icon
                  name={item.slug as IconName}
                  size={28}
                  className="text-primary-700"
                />
                <span className="text-secondary-700 text-xs">{item.title}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="muted" padding="sm">
        <Container>
          <h3 className="text-xl font-semibold">Breadcrumb</h3>
          <div className="mt-4">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Personal Tax" },
              ]}
            />
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Ready to get started?"
        subtitle="Book your free initial consultation today."
      />
    </>
  );
}
