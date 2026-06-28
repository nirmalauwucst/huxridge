import Link from "next/link";
import { Calculator } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { CalculatorMeta } from "@/lib/tax-calculators";

type CalculatorCardProps = {
  calculator: CalculatorMeta;
  compact?: boolean;
};

export function CalculatorCard({ calculator, compact = false }: CalculatorCardProps) {
  const href = `/resources/tax-calculators/${calculator.slug}`;

  if (compact) {
    return (
      <div className="border-border bg-background flex items-start gap-4 rounded-xl border p-4">
        <div className="bg-accent-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
          <Calculator className="text-accent-700 h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-primary-900 text-sm font-semibold">{calculator.shortTitle}</p>
          <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">{calculator.shortDescription}</p>
        </div>
        <Button asChild variant="ghost" size="sm" className="shrink-0 text-xs">
          <Link href={href}>Use tool →</Link>
        </Button>
      </div>
    );
  }

  return (
    <Card variant="outline" className="group hover:border-primary-300 hover:shadow-card flex flex-col transition-all">
      <CardHeader>
        <div className="bg-accent-50 mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg">
          <Calculator className="text-accent-700 h-6 w-6" aria-hidden="true" />
        </div>
        <Badge variant="accent" className="mb-2 self-start text-xs">
          {calculator.category}
        </Badge>
        <CardTitle>{calculator.title}</CardTitle>
      </CardHeader>
      <CardDescription className="flex-1">{calculator.shortDescription}</CardDescription>
      <CardFooter className="mt-4">
        <Button asChild variant="primary" size="sm">
          <Link href={href}>Use Calculator</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
