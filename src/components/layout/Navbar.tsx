"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navCta, navItems } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname === href;
  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-mist transition-shadow duration-200",
        scrolled
          ? "border-mist-soft shadow-[0_8px_24px_-16px_rgba(11,42,54,0.35)]"
          : "border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          onClick={close}
          className="flex shrink-0 items-center rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ocean"
        >
          <Image
            src="/logo/logo.svg"
            alt={siteConfig.name}
            width={150}
            height={37}
            priority
            unoptimized
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors hover:bg-mist-soft hover:text-ocean focus-visible:outline-2 focus-visible:outline-ocean",
                isActive(item.href) ? "text-ocean" : "text-navy"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button href={navCta.href}>{navCta.label}</Button>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-full text-navy transition-colors hover:bg-mist-soft focus-visible:outline-2 focus-visible:outline-ocean lg:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-mist-soft bg-white shadow-[0_20px_30px_-20px_rgba(11,42,54,0.35)] lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={close}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center rounded-xl px-4 text-base font-semibold transition-colors hover:bg-mist focus-visible:outline-2 focus-visible:outline-ocean",
                  isActive(item.href) ? "bg-mist text-ocean" : "text-navy"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href={navCta.href} onClick={close} className="w-full">
                {navCta.label}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}