import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

type CTABannerProps = {
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CTABanner({
  title,
  subtitle,
  primary = { label: "Book a Free Consultation", href: "/book" },
  secondary,
}: CTABannerProps) {
  return (
    <Section background="primary" padding="md">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="text-primary-100 mt-3 text-lg">{subtitle}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary" size="lg">
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            {secondary && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
