import * as React from "react";
import {
  BookOpen,
  Calculator,
  FileText,
  ClipboardCheck,
  Building2,
  ShieldCheck,
  Smartphone,
  Receipt,
  Rocket,
  Briefcase,
  HeartPulse,
  Home,
  HardHat,
  Sparkles,
  Smile,
  HeartHandshake,
  Stethoscope,
  School,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  bookkeeping: BookOpen,
  "bookkeeping-management-accounts": BookOpen,
  "management-accounts": Calculator,
  "personal-tax": FileText,
  "annual-accounts": ClipboardCheck,
  "corporation-tax": Building2,
  "internal-audit": ShieldCheck,
  "making-tax-digital": Smartphone,
  "vat-services": Receipt,
  "company-formation": Rocket,
  "company-secretarial": Briefcase,
  "company-formation-secretarial": Rocket,
  healthcare: HeartPulse,
  landlords: Home,
  contractors: HardHat,
  startups: Sparkles,
  dentists: Smile,
  "care-homes": HeartHandshake,
  "nurses-clinicians": Stethoscope,
  nurseries: School,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const Component = iconMap[name];
  return (
    <Component
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...props}
    />
  );
}
