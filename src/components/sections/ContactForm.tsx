"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { plans } from "@/lib/pricing";
import { siteConfig, whatsappLink } from "@/lib/site";

type Method = "whatsapp" | "email";
type Status = "idle" | "sending" | "sent" | "error";

const options = [
  ...plans.map((p) => p.name),
  "Custom software",
  "Not sure yet",
];

const fieldClass =
  "min-h-12 w-full rounded-xl border border-mist-soft bg-white px-4 text-base text-navy placeholder:text-navy/40 focus:border-ocean focus:outline-2 focus:outline-offset-0 focus:outline-ocean/30";

const iconProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ContactForm() {
  const hasWhatsApp = whatsappLink() !== null;
  const hasEmail = Boolean(siteConfig.email);

  const methods: { id: Method; label: string }[] = [
    ...(hasWhatsApp ? [{ id: "whatsapp" as const, label: "WhatsApp" }] : []),
    ...(hasEmail ? [{ id: "email" as const, label: "Email" }] : []),
  ];

  const [method, setMethod] = useState<Method>(
    hasWhatsApp ? "whatsapp" : "email"
  );
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fallbackLink, setFallbackLink] = useState<string | null>(null);

  if (methods.length === 0) {
    return (
      <p className="rounded-xl bg-mist p-4 text-sm text-navy/70">
        The contact form is not connected yet. Please check back soon.
      </p>
    );
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 py-8 text-center"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-mist-soft text-ocean">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="text-2xl font-extrabold tracking-tight">Message sent</h3>
        <p className="max-w-sm text-pretty text-navy/70">
          Thank you. We have your message and will reply to the email address
          you gave us.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const org = String(data.get("org") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const website = String(data.get("website") ?? "");

    if (method === "whatsapp") {
      const lines = [`Hello TAN Web Services, my name is ${name}.`];
      if (org) lines.push(`Business or school: ${org}.`);
      lines.push(`I'm interested in: ${service}.`);
      if (details) lines.push("", details);

      const link = whatsappLink(lines.join("\n"));
      if (!link) return;
      setFallbackLink(link);
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, org, service, details, email, website }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("We could not reach the server. Please check your connection.");
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {methods.length > 1 && (
        <fieldset className="flex flex-col">
          <legend className="mb-2 text-sm font-bold">
            How should we reply?
          </legend>
          <div className="grid grid-cols-2 gap-1 rounded-2xl bg-mist p-1">
            {methods.map((m) => (
              <label key={m.id} className="relative">
                <input
                  type="radio"
                  name="method"
                  value={m.id}
                  checked={method === m.id}
                  onChange={() => {
                    setMethod(m.id);
                    setStatus("idle");
                    setError("");
                  }}
                  className="peer sr-only"
                />
                <span className="flex min-h-11 cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-xl text-sm font-bold text-navy/65 transition-colors peer-checked:bg-white peer-checked:text-ocean peer-checked:shadow-[0_6px_18px_-8px_rgba(31,111,139,0.5)] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ocean">
                  {m.id === "whatsapp" ? (
                    <svg {...iconProps}>
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                  ) : (
                    <svg {...iconProps}>
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  )}
                  {m.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

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

      {method === "email" && (
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold">
            Your email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
      )}

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

      {/* Honeypot: hidden from people, bots fill it in */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        arrow
        disabled={sending}
        className="w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {method === "whatsapp"
          ? "Send on WhatsApp"
          : sending
            ? "Sending..."
            : "Send by email"}
      </Button>

      <p
        className={`text-center text-sm ${status === "error" ? "text-red-700" : "text-navy/60"}`}
        aria-live="polite"
      >
        {status === "error" ? (
          error
        ) : method === "whatsapp" ? (
          fallbackLink ? (
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
          )
        ) : (
          "We will reply to the email address you enter."
        )}
      </p>
    </form>
  );
}