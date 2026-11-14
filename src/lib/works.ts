export type Work = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  tech: string[];
  liveUrl: string;
  note?: string;
  image: string;
  imageAlt: string;
};

// All three are live. Each is labelled "Live demo" on the site.
export const works: Work[] = [
  {
    id: "ember",
    name: "Ember",
    tagline: "Dress sharp. Own the room.",
    category: "E-commerce",
    description:
      "A full-stack men's fashion store: browse, pick a size, check out and pay, with an admin area to run it.",
    tech: ["Next.js", "Express", "MongoDB", "Paystack", "Cloudinary"],
    liveUrl: "https://ember-menswear.vercel.app",
    note: "Payments run in Paystack test mode.",
    image: "/images/works/ember.webp",
    imageAlt: "Ember men's fashion store home page",
  },
  {
    id: "schoolbridge",
    name: "SchoolBridge",
    tagline: "Pay school fees abroad, from Nigeria.",
    category: "Payments web app",
    description:
      "A parent pays in naira and gets a ticket code. The child verifies it with their own account and receives a receipt.",
    tech: ["Next.js", "TypeScript", "Express", "MongoDB"],
    liveUrl: "https://schoolbridge-vit.vercel.app",
    note: "Uses a clearly labelled demo payment provider. No real money moves.",
    image: "/images/works/schoolbridge.webp",
    imageAlt: "SchoolBridge landing page with a quick fee quote form",
  },
  {
    id: "car-haven",
    name: "Car Haven",
    tagline: "Browse, list and manage cars.",
    category: "Listings web app",
    description:
      "A dark-themed car listings app. Browse featured cars, open a full listing, add a car with a photo, edit it or delete it.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router"],
    liveUrl: "https://car-haven-sandy.vercel.app",
    note: "Demo data. No login.",
    image: "/images/works/car-haven.webp",
    imageAlt: "Car Haven home page with a featured sports car",
  },
];

export const workStatusLabel = "Live demo";