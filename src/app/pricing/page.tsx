import type { Metadata } from "next";
import { Faq } from "@/components/sections/Faq";
import { PricingGrid } from "@/components/sections/PricingGrid";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { pricingTerms } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear package prices for websites, e-commerce stores, school portals and learning platforms, in naira and dollars.",
  alternates: { canonical: "/pricing" },
};

const terms = [
  {
    title: "Payment",
    text: pricingTerms.payment,
    icon: (
      <>
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
  },
  {
    title: "Billed separately",
    text: pricingTerms.separate,
    icon: (
      <>
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 6h.01M6 18h.01" />
      </>
    ),
  },
  {
    title: "Custom projects",
    text: pricingTerms.custom,
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
    ),
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="relative isolate overflow-x-clip pb-6 pt-14 sm:pt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 60% at 80% 0%, rgba(111,177,196,0.28), transparent 70%), radial-gradient(45% 50% at 5% 0%, rgba(207,229,236,0.95), transparent 70%)",
          }}
        />
        <Container className="flex flex-col items-center gap-4 text-center">
          <Chip>Pricing</Chip>
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Simple, clear pricing
          </h1>
          <p className="max-w-2xl text-pretty text-base text-navy/75 sm:text-lg">
            Pick the package that fits, in naira or dollars. Need something
            different? We quote custom projects individually.
          </p>
        </Container>
      </section>

      <section aria-label="Packages" className="pb-16 pt-8 sm:pb-20">
        <Container>
          <PricingGrid />

          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {terms.map((t) => (
              <li
                key={t.title}
                className="flex flex-col gap-3 rounded-2xl border border-mist-soft bg-white p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mist-soft text-ocean">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {t.icon}
                  </svg>
                </span>
                <h2 className="font-bold">{t.title}</h2>
                <p className="text-sm text-navy/70">{t.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div className="bg-white">
        <Faq />
      </div>

      <section
        aria-labelledby="cta-title"
        className="bg-navy py-16 text-white sm:py-20"
      >
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2
            id="cta-title"
            className="max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Not sure which package fits?
          </h2>
          <p className="max-w-xl text-pretty text-white/70">
            Tell us about your business or school and we will point you to the
            right one.
          </p>
          <Button href="/#contact" variant="light" size="lg" arrow>
            Talk to us
          </Button>
        </Container>
      </section>
    </main>
  );
}