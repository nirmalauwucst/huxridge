import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  background?: "default" | "muted" | "primary" | "accent";
  padding?: "sm" | "md" | "lg";
  as?: "section" | "div" | "article";
};

const backgroundClass: Record<
  NonNullable<SectionProps["background"]>,
  string
> = {
  default: "bg-background",
  muted: "bg-muted",
  primary: "bg-primary-900 text-white",
  accent: "bg-accent-50",
};

const paddingClass: Record<NonNullable<SectionProps["padding"]>, string> = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
};

export function Section({
  className,
  background = "default",
  padding = "md",
  as: Tag = "section",
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        backgroundClass[background],
        paddingClass[padding],
        className,
      )}
      {...props}
    />
  );
}
