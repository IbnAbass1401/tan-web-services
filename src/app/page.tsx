import { Hero } from "@/components/sections/Hero";
import { HighlightStrip } from "@/components/sections/HighlightStrip";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <HighlightStrip />
      <Services />
    </main>
  );
}