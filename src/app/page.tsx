import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { HighlightStrip } from "@/components/sections/HighlightStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { Works } from "@/components/sections/Works";
import { WhyTan } from "@/components/sections/WhyTan";

export default function Home() {
  return (
    <main>
      <Hero />
      <HighlightStrip />
      <Services />
      <HowItWorks />
      <About />
      <WhyTan />
      <Works />
    </main>
  );
}