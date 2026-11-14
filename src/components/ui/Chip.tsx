import { cn } from "@/lib/utils";

type ChipProps = {
  children: React.ReactNode;
  tone?: "soft" | "white" | "dark" | "onDark";
  dot?: boolean;
  className?: string;
};

const tones = {
  soft: "bg-mist-soft text-navy",
  white:
    "border border-mist-soft bg-white text-navy shadow-[0_8px_24px_-12px_rgba(31,111,139,0.35)]",
  dark: "bg-navy text-white",
  onDark: "border border-white/15 bg-white/10 text-white",
};

export function Chip({
  children,
  tone = "soft",
  dot = false,
  className,
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold",
        tones[tone],
        className
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-ocean shadow-[0_0_8px_rgba(31,111,139,0.7)]"
        />
      )}
      {children}
    </span>
  );
}