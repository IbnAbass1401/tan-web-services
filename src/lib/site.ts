export const siteConfig = {
  name: "TAN Web Services",
  tagline: "Build. Grow. Scale.",
  description:
    "Websites, school systems and learning platforms for businesses and institutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  // Digits only, with country code and no "+", e.g. 2348012345678
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
    /\D/g,
    ""
  ),
  // Add real profiles only. Empty means nothing is shown.
  socials: [] as { label: string; href: string }[],
};

/** Returns null until a real number is set, so no fake link ever shows. */
export function whatsappLink(message?: string): string | null {
  if (!siteConfig.whatsappNumber) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${siteConfig.whatsappNumber}${text}`;
}

/** Returns null until a real email is set. */
export function emailLink(): string | null {
  return siteConfig.email ? `mailto:${siteConfig.email}` : null;
}