import { highlights } from "@/lib/highlights";
import { cn } from "@/lib/utils";

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {highlights.map((item) => (
        <li
          key={item.label}
          className={cn(
            "inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-semibold",
            item.kind === "get"
              ? "border border-mist-soft bg-mist text-navy/80"
              : "bg-mist-soft text-navy"
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              item.kind === "get" ? "bg-teal-light" : "bg-ocean"
            )}
          />
          {item.label}
        </li>
      ))}
    </ul>
  );
}

export function HighlightStrip() {
  return (
    <section
      aria-label="What we build and who we build it for"
      className="border-y border-mist-soft bg-white py-5"
    >
      <div className="marquee">
        <div className="marquee-track">
          <Group />
          <Group hidden />
        </div>
      </div>
    </section>
  );
}