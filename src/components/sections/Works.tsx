import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { works } from "@/lib/works";
import { WorkCard } from "./WorkCard";

export function Works() {
  return (
    <section
      id="works"
      aria-labelledby="works-title"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="works-title"
          eyebrow="Our Works"
          title="Projects you can open and try"
          description="Real, working projects. They run on free hosting, so the first load can take up to a minute to wake up."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </ul>
      </Container>
    </section>
  );
}