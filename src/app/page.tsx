import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { HighlightStrip } from "@/components/sections/HighlightStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
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
      <Testimonials />
      <PricingTeaser />
      <Faq limit={5} />
      <Contact />
    </main>
  );
}