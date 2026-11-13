export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Our Works", href: "/#works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/#contact" },
];

export const navCta: NavItem = { label: "Start a Project", href: "/#contact" };