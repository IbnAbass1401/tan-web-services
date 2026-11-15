import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export function Testimonials() {
  // No real reviews yet means no section. Nothing fake is ever shown.
  if (testimonials.length === 0) return null;

  const single = testimonials.length === 1;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="scroll-mt-20 bg-white py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="reviews-title"
          eyebrow="Testimonials"
          title="What Our Clients Say"
        />

        <ul
          className={cn(
            "mt-12 grid gap-5",
            single ? "mx-auto max-w-2xl" : "sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {testimonials.map((t) => (
            <li key={`${t.name}-${t.quote.slice(0, 24)}`}>
              <figure className="flex h-full flex-col gap-5 rounded-3xl border border-mist-soft bg-mist p-6 sm:p-8">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-teal-light"
                  fill="currentColor"
                >
                  <path d="M9.5 5C6.46 5 4 7.46 4 10.5V19h6.5v-6.5H7.2c.2-1.9 1.1-2.9 2.3-3.4V5Zm10 0C16.46 5 14 7.46 14 10.5V19h6.5v-6.5h-3.3c.2-1.9 1.1-2.9 2.3-3.4V5Z" />
                </svg>

                <blockquote className="flex-1">
                  <p className="text-pretty text-lg font-medium leading-relaxed text-navy">
                    {t.quote}
                  </p>
                </blockquote>

                <figcaption className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean text-sm font-bold text-white"
                  >
                    {initials(t.name)}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-bold">{t.name}</span>
                    <span className="text-sm text-navy/60">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}