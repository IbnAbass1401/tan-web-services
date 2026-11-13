import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/services";
import { ServiceCard } from "./ServiceCard";

// Each card links somewhere real. No dead "Learn more" links.
const links: Record<string, { href: string; label: string }> = {
  "website-development": { href: "/pricing#starter", label: "See pricing" },
  ecommerce: { href: "/pricing#ecommerce", label: "See pricing" },
  "ui-ux-design": { href: "/#contact", label: "Talk to us" },
  "school-management": { href: "/pricing#school", label: "See pricing" },
  lms: { href: "/pricing#lms", label: "See pricing" },
  "ai-lms": { href: "/pricing#ai-lms", label: "See pricing" },
};

// Bento layout. Order differs on phone, tablet and desktop so there are no holes.
const layout: Record<string, string> = {
  "website-development": "order-1 sm:order-2 lg:order-1",
  "school-management": "order-2 sm:order-1 sm:col-span-2 lg:order-2",
  ecommerce: "order-3",
  "ui-ux-design": "order-4",
  lms: "order-5",
  "ai-lms": "order-6 sm:col-span-2 lg:col-span-3",
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="Our Services"
          title="Comprehensive Digital Solutions"
          description="From websites to intelligent learning platforms, we've got you covered."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const link = links[service.id];
            return (
              <ServiceCard
                key={service.id}
                service={service}
                href={link.href}
                linkLabel={link.label}
                wide={service.id === "ai-lms"}
                className={layout[service.id]}
              />
            );
          })}
        </ul>
      </Container>
    </section>
  );
}