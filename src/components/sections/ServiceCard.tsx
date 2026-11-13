"use client";

import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  href: string;
  linkLabel: string;
  wide?: boolean;
  className?: string;
};

function Check({ dark }: { dark: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn("mt-0.5 h-5 w-5 shrink-0", dark ? "text-teal-light" : "text-ocean")}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ServiceCard({
  service,
  href,
  linkLabel,
  wide = false,
  className,
}: ServiceCardProps) {
  const dark = Boolean(service.featured);

  // Cursor-follow glow: mouse only, so touch screens are never affected.
  function handleMove(e: React.PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <li
      onPointerMove={handleMove}
      className={cn(
        "spotlight flex flex-col gap-6 rounded-3xl p-6 transition duration-300 hover:-translate-y-1 sm:p-7",
        dark
          ? "bg-linear-to-br from-navy to-[#12485c] text-white shadow-[0_20px_50px_-26px_rgba(11,42,54,0.85)] hover:shadow-[0_28px_60px_-24px_rgba(31,111,139,0.7)]"
          : "border border-mist-soft bg-white shadow-[0_10px_30px_-22px_rgba(31,111,139,0.4)] hover:shadow-[0_22px_44px_-20px_rgba(31,111,139,0.5)]",
        wide && "lg:flex-row lg:items-center lg:justify-between lg:gap-12",
        className
      )}
    >
      <div className="flex max-w-xl flex-col items-start gap-4">
        <span
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-2xl",
            dark ? "bg-white/10 text-teal-light" : "bg-mist-soft text-ocean"
          )}
        >
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>

        <h3 className="text-xl font-extrabold tracking-tight">
          {service.title}
        </h3>
        <p className={cn("text-pretty", dark ? "text-white/75" : "text-navy/70")}>
          {service.description}
        </p>

        <Link
          href={href}
          className={cn(
            "group inline-flex min-h-11 items-center gap-1.5 rounded text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-4",
            dark
              ? "text-white focus-visible:outline-teal-light"
              : "text-ocean focus-visible:outline-ocean"
          )}
        >
          {linkLabel}
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>

      {service.features && (
        <ul
          className={cn(
            "flex flex-col gap-3 text-sm font-semibold",
            wide ? "lg:max-w-md" : "border-t pt-5",
            dark ? "border-white/10 text-white/90" : "border-mist-soft text-navy"
          )}
        >
          {service.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <Check dark={dark} />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}