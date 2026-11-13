import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice, startingPrice } from "@/lib/pricing";
import { services } from "@/lib/services";
import { works } from "@/lib/works";

export default function Home() {
  return (
    <main>
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Test page"
            title="Data files are working"
            description={`Websites from ${formatPrice(startingPrice.NGN, "NGN")} (${formatPrice(startingPrice.USD, "USD")})`}
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li
                key={s.id}
                className="rounded-2xl border border-mist-soft bg-white p-5 font-semibold"
              >
                {s.title}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-navy/70">
            Works: {works.map((w) => w.name).join(", ")}
          </p>
        </Container>
      </section>
      <section className="h-[120vh] bg-mist-soft py-16">
        <Container>
          <p className="text-center font-semibold">
            Scroll down: the navbar should stay on top and get a soft shadow.
          </p>
        </Container>
      </section>
    </main>
  );
}