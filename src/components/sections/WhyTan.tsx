import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyTan } from "@/lib/about";

// Same order as the points in lib/about.ts
const icons: React.ReactNode[] = [
  // Built Around Your Goals
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </>,
  // Modern User Experience
  <>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </>,
  // Performance Focused
  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />,
  // Scalable Solutions
  <>
    <path d="M16 7h6v6" />
    <path d="m22 7-8.5 8.5-5-5L2 17" />
  </>,
  // Reliable Communication
  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  // Support Beyond Launch
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="m4.93 4.93 4.24 4.24" />
    <path d="m14.83 9.17 4.24-4.24" />
    <path d="m14.83 14.83 4.24 4.24" />
    <path d="m9.17 14.83-4.24 4.24" />
    <circle cx="12" cy="12" r="4" />
  </>,
];

export function WhyTan() {
  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="scroll-mt-20 bg-navy py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="why-title"
          tone="dark"
          eyebrow={whyTan.eyebrow}
          title={whyTan.title}
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {whyTan.points.map((point, i) => (
            <li
              key={point.title}
              className="lift flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-light">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[i]}
                </svg>
              </span>
              <h3 className="text-lg font-bold text-white">{point.title}</h3>
              <p className="text-pretty text-white/70">{point.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}