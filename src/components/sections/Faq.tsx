import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/faq";

type FaqProps = {
  /** Show only the first N questions and a link to the full list */
  limit?: number;
};

export function Faq({ limit }: FaqProps) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  const hasMore = Boolean(limit) && faqs.length > (limit ?? 0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <Container className="max-w-3xl">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="mt-10 flex flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-mist-soft bg-white transition-shadow open:shadow-[0_14px_34px_-22px_rgba(31,111,139,0.5)]"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean [&::-webkit-details-marker]:hidden">
                {item.question}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-ocean transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-pretty text-navy/75">{item.answer}</p>
            </details>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <Button href="/pricing#faq" variant="secondary">
              See all questions
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}