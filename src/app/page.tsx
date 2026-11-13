import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main>
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Digital Solutions"
            description="From websites to intelligent learning platforms, we've got you covered."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Chip dot>Build. Grow. Scale.</Chip>
            <Chip tone="white">School Systems</Chip>
            <Chip tone="dark">AI-Powered LMS</Chip>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="#top" arrow size="lg">
              Get Started
            </Button>
            <Button href="#top" variant="secondary" size="lg">
              Explore Our Work
            </Button>
            <Button variant="dark">Dark button</Button>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20">
        <Container>
          <SectionHeading
            tone="dark"
            align="left"
            eyebrow="Dark section"
            title="Built to look right on navy too"
            description="Checking the dark variants of the heading and buttons."
          />
          <div className="mt-8">
            <Button href="#top" variant="light" arrow size="lg">
              Start a Project
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}