import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  id,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <Chip tone={isDark ? "dark" : "soft"}>{eyebrow}</Chip>}
      <h2
        id={id}
        className={cn(
          "max-w-3xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base sm:text-lg",
            isDark ? "text-white/70" : "text-navy/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}