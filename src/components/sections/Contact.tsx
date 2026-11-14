import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingTerms } from "@/lib/pricing";
import { emailLink, siteConfig, whatsappLink } from "@/lib/site";
import { ContactForm } from "./ContactForm";

const nextSteps = [
  "You send your message. It opens in WhatsApp.",
  "We reply, ask the right questions and agree the scope and price.",
  `We start. ${pricingTerms.payment}`,
];

export function Contact() {
  const wa = whatsappLink(
    "Hello TAN Web Services, I would like to ask about a project."
  );
  const mail = emailLink();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-mist-soft/40 py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's build something that moves your business forward"
          description="Tell us what you need. We will get back to you on WhatsApp."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-7 rounded-3xl bg-gradient-to-br from-navy to-[#12485c] p-7 text-white shadow-[0_30px_60px_-30px_rgba(11,42,54,0.8)] sm:p-9 lg:col-span-2">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-extrabold">Talk to us directly</h3>

              {wa && (
                <Button href={wa} variant="light" arrow className="w-full">
                  Chat on WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </Button>
              )}

              {mail && (
                <a
                  href={mail}
                  className="inline-flex min-h-11 items-center gap-3 rounded font-semibold text-white/90 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 shrink-0 text-teal-light"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {siteConfig.email}
                </a>
              )}

              {siteConfig.socials.length > 0 && (
                <ul className="flex flex-wrap gap-3">
                  {siteConfig.socials.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-4 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="mb-4 text-sm font-bold text-teal-light">
                What happens next
              </h3>
              <ol className="flex flex-col gap-4">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-white/85">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-teal-light">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="rounded-3xl border border-mist-soft bg-white p-6 shadow-[0_20px_50px_-30px_rgba(31,111,139,0.5)] sm:p-9 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}