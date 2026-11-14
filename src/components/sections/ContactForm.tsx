"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { plans } from "@/lib/pricing";
import { whatsappLink } from "@/lib/site";

const options = [
  ...plans.map((p) => p.name),
  "Custom software",
  "Not sure yet",
];

const fieldClass =
  "min-h-12 w-full rounded-xl border border-mist-soft bg-white px-4 text-base text-navy placeholder:text-navy/40 focus:border-ocean focus:outline-2 focus:outline-offset-0 focus:outline-ocean/30";

export function ContactForm() {
  const [fallbackLink, setFallbackLink] = useState<string | null>(null);
  const available = whatsappLink() !== null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const org = String(data.get("org") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    const lines = [`Hello TAN Web Services, my name is ${name}.`];
    if (org) lines.push(`Business or school: ${org}.`);
    lines.push(`I'm interested in: ${service}.`);
    if (details) lines.push("", details);

    const link = whatsappLink(lines.join("\n"));
    if (!link) return;

    setFallbackLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  if (!available) {
    return (
      <p className="rounded-xl bg-mist p-4 text-sm text-navy/70">
        The contact form is not connected yet. Please check back soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-bold">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="e.g. Aisha Bello"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="org" className="text-sm font-bold">
          Business or school name{" "}
          <span className="font-normal text-navy/50">(optional)</span>
        </label>
        <input
          id="org"
          name="org"
          type="text"
          autoComplete="organization"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-bold">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Choose one
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="details" className="text-sm font-bold">
          Tell us about your project
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={4}
          placeholder="What do you want to build, and who is it for?"
          className={`${fieldClass} min-h-32 py-3`}
        />
      </div>

      <Button type="submit" size="lg" arrow className="w-full">
        Send on WhatsApp
      </Button>

      <p className="text-center text-sm text-navy/60" aria-live="polite">
        {fallbackLink ? (
          <>
            WhatsApp should have opened with your message.{" "}
            <a
              href={fallbackLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-ocean underline underline-offset-2"
            >
              Tap here if it did not
            </a>
            .
          </>
        ) : (
          "This opens WhatsApp with your message ready to send."
        )}
      </p>
    </form>
  );
}