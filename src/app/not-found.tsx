import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-5 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-ocean">
          Error 404
        </p>
        <h1 className="max-w-2xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
          This page could not be found
        </h1>
        <p className="max-w-md text-pretty text-navy/70">
          The link may be old or mistyped. Let&apos;s get you back on track.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Button href="/" arrow>
            Back to home
          </Button>
          <Button href="/pricing" variant="secondary">
            See pricing
          </Button>
        </div>
      </Container>
    </main>
  );
}