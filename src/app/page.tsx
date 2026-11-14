import { Hero } from "@/components/sections/Hero";
import { HighlightStrip } from "@/components/sections/HighlightStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <HighlightStrip />
      <Services />
      <HowItWorks />
    </main>
  );
}