import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary-50 text-primary-700",
        accent: "bg-accent-100 text-accent-700",
        muted: "bg-secondary-100 text-secondary-700",
        outline: "border border-border text-secondary-700",
        success: "bg-emerald-50 text-emerald-700",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
