import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-ocean"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const GraduationCap = () => (
  <IconWrap>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </IconWrap>
);

const Cart = () => (
  <IconWrap>
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </IconWrap>
);

const Bot = () => (
  <IconWrap>
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
  </IconWrap>
);

function FloatingChip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-10 flex items-center gap-2 rounded-full border border-mist-soft bg-white px-3 py-2 text-xs font-bold text-navy shadow-[0_12px_32px_-10px_rgba(31,111,139,0.55)] sm:px-4 sm:py-2.5 sm:text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-x-clip"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 42%, rgba(111,177,196,0.30), transparent 70%), radial-gradient(45% 40% at 8% 0%, rgba(207,229,236,0.95), transparent 70%)",
        }}
      />

      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-6 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <Chip tone="soft" dot>
            Build. Grow. Scale.
          </Chip>

          <h1
            id="hero-title"
            className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl"
          >
            We Build Digital Experiences That Move Businesses{" "}
            <span className="bg-gradient-to-r from-ocean to-[#3d9ab8] bg-clip-text text-transparent">
              Forward.
            </span>
          </h1>

          <p className="max-w-xl text-pretty text-base text-navy/75 sm:text-lg">
            From business websites to intelligent educational platforms, we turn
            ideas into powerful digital solutions.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="/#contact" size="lg" arrow>
              Get Started
            </Button>
            <Button href="/#works" size="lg" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          {/* Soft glow behind the laptop (gradient, no blur filter) */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[90%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(closest-side, rgba(111,177,196,0.5), rgba(111,177,196,0))",
            }}
          />
          {/* Soft ground shadow under the laptop */}
          <div
            aria-hidden="true"
            className="absolute bottom-[2%] left-[6%] right-[6%] -z-10 h-[9%]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(11,42,54,0.3), rgba(11,42,54,0))",
            }}
          />

          <div className="float">
            <Image
              src="/images/laptop-hero.webp"
              alt="TAN Web Services website shown on a laptop screen"
              width={1457}
              height={955}
              preload
              fetchPriority="high"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>

          <FloatingChip className="float-slow left-0 top-[6%] sm:left-2">
            <GraduationCap />
            School Systems
          </FloatingChip>
          <FloatingChip className="float-delay right-0 top-[38%] sm:right-2">
            <Cart />
            E-commerce
          </FloatingChip>
          <FloatingChip className="float bottom-[8%] left-[6%] sm:left-[10%]">
            <Bot />
            AI-Powered LMS
          </FloatingChip>
        </div>
      </Container>
    </section>
  );
}