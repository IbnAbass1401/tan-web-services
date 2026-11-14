import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessPlayer } from "./ProcessPlayer";

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-title"
      className="scroll-mt-20 bg-white py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="how-title"
          eyebrow="See How It Works"
          title="From idea to launch, in 20 seconds."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <ProcessPlayer />
        </div>
      </Container>
    </section>
  );
}