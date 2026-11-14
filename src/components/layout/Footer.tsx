import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/nav";
import { emailLink, siteConfig, whatsappLink } from "@/lib/site";

const linkClass =
  "inline-flex min-h-11 items-center rounded text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light";

export function Footer() {
  const wa = whatsappLink("Hello TAN Web Services, I would like to ask about a project.");
  const mail = emailLink();

  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/logo/logo-white.svg"
            alt={siteConfig.name}
            width={220}
            height={55}
            unoptimized
            className="h-auto w-48"
          />
          <p className="max-w-xs text-pretty text-white/70">
            Websites, school systems and learning platforms for businesses and
            institutions.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-2 text-sm font-bold text-teal-light">Explore</h2>
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-2 text-sm font-bold text-teal-light">Contact</h2>
          <ul className="flex flex-col">
            {wa && (
              <li>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            )}
            {mail && (
              <li>
                <a href={mail} className={linkClass}>
                  {siteConfig.email}
                </a>
              </li>
            )}
            {siteConfig.socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}