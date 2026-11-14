import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { formatPrice, startingPrice } from "@/lib/pricing";

export function PricingTeaser() {
  return (
    <section aria-labelledby="teaser-title" className="pb-16 sm:pb-24">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-mist-soft bg-linear-to-r from-mist-soft/70 to-white p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-2">
            <h2
              id="teaser-title"
              className="text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              Clear package prices
            </h2>
            <p className="text-pretty text-navy/75 sm:text-lg">
              Websites from {formatPrice(startingPrice.NGN, "NGN")} (
              {formatPrice(startingPrice.USD, "USD")}). Stores, school portals
              and learning platforms each have their own package.
            </p>
          </div>
          <Button href="/pricing" size="lg" arrow>
            See pricing
          </Button>
        </div>
      </Container>
    </section>
  );
}