import Image from "next/image";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { aboutCopy } from "@/lib/about";
import { techStack } from "@/lib/tech";

const audiences = [
  "Businesses",
  "Educational institutions",
  "Startups and organisations",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <Chip>{aboutCopy.eyebrow}</Chip>
          <h2
            id="about-title"
            className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {aboutCopy.title}
          </h2>
          {aboutCopy.paragraphs.map((p) => (
            <p key={p} className="text-pretty text-base text-navy/75 sm:text-lg">
              {p}
            </p>
          ))}

          <div className="mt-2 w-full border-t border-mist-soft pt-5">
            <p className="mb-3 text-sm font-bold text-navy">Tools we use</p>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-mist-soft bg-white px-3 py-1 text-xs font-semibold text-navy/70"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-navy to-[#12485c] p-7 text-white shadow-[0_30px_60px_-30px_rgba(11,42,54,0.8)] sm:p-9">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 -z-10 h-56 w-56 rounded-full bg-teal-light/25 blur-3xl"
          />
          <Image
            src="/logo/logo-white.svg"
            alt="TAN Web Services"
            width={260}
            height={65}
            unoptimized
            className="h-auto w-52 sm:w-64"
          />
          <p className="mt-8 text-sm font-semibold text-teal-light">
            We work with
          </p>
          <ul className="mt-3 flex flex-col gap-3">
            {audiences.map((a) => (
              <li key={a} className="flex items-center gap-3 font-semibold">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-teal-light"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}