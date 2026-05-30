import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-accent-600 mb-3 text-sm font-semibold tracking-widest uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      {children && (
        <div
          className={cn(
            "mt-6 flex flex-wrap gap-3",
            align === "center" && "justify-center",
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
