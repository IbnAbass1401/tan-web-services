"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { type Currency, formatPrice, plans } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const currencies: { id: Currency; label: string }[] = [
  { id: "NGN", label: "Naira (₦)" },
  { id: "USD", label: "Dollar ($)" },
];

function Check({ dark }: { dark: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn(
        "mt-0.5 h-5 w-5 shrink-0",
        dark ? "text-teal-light" : "text-ocean"
      )}
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

export function PricingGrid() {
  const [currency, setCurrency] = useState<Currency>("NGN");

  return (
    <>
      <div className="flex justify-center">
        <div
          role="group"
          aria-label="Choose currency"
          className="inline-flex rounded-full border border-mist-soft bg-white p-1 shadow-[0_8px_24px_-16px_rgba(31,111,139,0.5)]"
        >
          {currencies.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={currency === c.id}
              onClick={() => setCurrency(c.id)}
              className={cn(
                "min-h-11 touch-manipulation rounded-full px-5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean",
                currency === c.id
                  ? "bg-ocean text-white"
                  : "text-navy hover:bg-mist"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => {
          const dark = plan.id === "ai-lms";
          return (
            <li
              key={plan.id}
              id={plan.id}
              className={cn(
                "flex scroll-mt-24 flex-col gap-5 rounded-3xl p-6 transition duration-300 hover:-translate-y-1 target:ring-2 sm:p-7",
                dark
                  ? "bg-linear-to-br from-navy to-[#12485c] text-white shadow-[0_20px_50px_-26px_rgba(11,42,54,0.85)] target:ring-teal-light"
                  : "border border-mist-soft bg-white shadow-[0_10px_30px_-22px_rgba(31,111,139,0.4)] hover:shadow-[0_24px_48px_-22px_rgba(31,111,139,0.5)] target:ring-ocean"
              )}
            >
              <div className="flex flex-col gap-2">
                {plan.tag && (
                  <Chip
                    tone={dark ? "onDark" : "soft"}
                    className="self-start px-3 py-1 text-xs"
                  >
                    {plan.tag}
                  </Chip>
                )}
                <h3 className="text-xl font-extrabold tracking-tight">
                  {plan.name}
                </h3>
                <p className={cn("text-sm", dark ? "text-white/70" : "text-navy/65")}>
                  {plan.audience}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {formatPrice(plan.price[currency], currency)}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      dark ? "text-white/60" : "text-navy/55"
                    )}
                  >
                    per project
                  </span>
                </p>
                {plan.maintenance && (
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      dark ? "text-teal-light" : "text-ocean"
                    )}
                  >
                    + {formatPrice(plan.maintenance.price[currency], currency)}{" "}
                    {plan.maintenance.label}
                  </p>
                )}
              </div>

              <ul
                className={cn(
                  "flex flex-col gap-3 border-t pt-5 text-sm font-semibold",
                  dark ? "border-white/10 text-white/90" : "border-mist-soft"
                )}
              >
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check dark={dark} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2">
                <Button
                  href="/#contact"
                  variant={dark ? "light" : "primary"}
                  arrow
                  className="w-full"
                >
                  {plan.ctaLabel}
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}