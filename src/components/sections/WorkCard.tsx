import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { type Work, workStatusLabel } from "@/lib/works";

export function WorkCard({ work }: { work: Work }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-3xl border border-mist-soft bg-white shadow-[0_10px_30px_-22px_rgba(31,111,139,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-22px_rgba(31,111,139,0.5)]">
      <a
        href={work.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="relative block overflow-hidden bg-navy"
      >
        <Image
          src={work.image}
          alt=""
          width={1200}
          height={571}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-navy shadow-[0_8px_20px_-8px_rgba(11,42,54,0.5)]">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          />
          {workStatusLabel}
        </span>
      </a>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-bold uppercase tracking-wider text-ocean">
            {work.category}
          </p>
          <h3 className="text-xl font-extrabold tracking-tight">{work.name}</h3>
          <p className="text-sm font-semibold text-navy/60">{work.tagline}</p>
        </div>

        <p className="text-pretty text-navy/75">{work.description}</p>

        <ul className="flex flex-wrap gap-2">
          {work.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy/70"
            >
              {t}
            </li>
          ))}
        </ul>

        {work.note && (
          <p className="flex gap-2 text-xs text-navy/60">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="mt-0.5 h-4 w-4 shrink-0 text-teal-light"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            {work.note}
          </p>
        )}

        <div className="mt-auto pt-2">
          <Button href={work.liveUrl} arrow className="w-full sm:w-auto">
            Visit live demo
            <span className="sr-only"> (opens in a new tab)</span>
          </Button>
        </div>
      </div>
    </li>
  );
}