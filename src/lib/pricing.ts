export type Currency = "NGN" | "USD";

export type Plan = {
  id: string;
  name: string;
  audience: string;
  price: Record<Currency, number>;
  features: string[];
  tag?: string;
  maintenance?: { price: Record<Currency, number>; label: string };
  ctaLabel: string;
};

// USD prices use roughly N1,350 per $1. Update both together if it changes.
export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter Business Website",
    audience: "For small businesses and professionals.",
    price: { NGN: 200000, USD: 150 },
    features: [
      "3-5 pages, responsive design",
      "Contact form, SEO basics",
      "7 days post-launch support",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "business-pro",
    name: "Business Pro",
    audience: "For growing businesses that need more.",
    price: { NGN: 350000, USD: 260 },
    features: [
      "Everything in Starter",
      "Blog or CMS, booking or payments",
      "Analytics integration",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "ecommerce",
    name: "E-commerce Store",
    audience: "For brands selling online.",
    price: { NGN: 450000, USD: 335 },
    features: [
      "Catalogue, cart, Paystack checkout",
      "Orders and admin dashboard",
      "Inventory management",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "school",
    name: "School Website + Portal",
    audience: "For schools and madrasahs.",
    price: { NGN: 450000, USD: 335 },
    tag: "Schools and madrasahs",
    maintenance: { price: { NGN: 40000, USD: 30 }, label: "per term maintenance" },
    features: [
      "Admin, teacher and parent logins",
      "Attendance and announcements",
      "Results and fees (scope agreed upfront)",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "lms",
    name: "LMS Platform",
    audience: "For trainers, schools and academies.",
    price: { NGN: 800000, USD: 600 },
    features: [
      "Courses, lessons and quizzes",
      "Progress tracking, certificates",
      "Payments",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "ai-lms",
    name: "AI-Powered LMS",
    audience: "For institutions ready for AI-assisted learning.",
    price: { NGN: 1300000, USD: 1000 },
    features: [
      "Everything in LMS Platform",
      "AI assistant and generated quizzes",
      "Personalised study plans",
    ],
    ctaLabel: "Contact Us",
  },
];

export const pricingTerms = {
  payment: "50% upfront, 50% on delivery.",
  separate: "Hosting, domain and AI usage are billed separately.",
  custom: "Need something different? Custom software is quoted per project.",
};

export function formatPrice(amount: number, currency: Currency): string {
  const symbol = currency === "NGN" ? "₦" : "$";
  return `${symbol}${amount.toLocaleString("en-US")}`;
}

export const startingPrice = plans[0].price;