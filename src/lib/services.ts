export type ServiceIcon = "globe" | "cart" | "design" | "school" | "book" | "bot";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  featured?: boolean;
  features?: string[];
};

export const services: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Corporate, business and portfolio websites, landing pages and custom web apps.",
    icon: "globe",
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description:
      "Online stores with product and order management, carts, secure payments and inventory.",
    icon: "cart",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Website and dashboard interfaces, wireframes, prototypes and UX improvements.",
    icon: "design",
  },
  {
    id: "school-management",
    title: "School Management Systems",
    description:
      "One system for your school or madrasah, with separate logins for admins, teachers and parents.",
    icon: "school",
    featured: true,
    features: [
      "Student portal and registration",
      "Attendance tracking and parent dashboards",
      "Results, fee payments, timetables and staff dashboards",
    ],
  },
  {
    id: "lms",
    title: "Learning Management Systems",
    description:
      "Course platforms with student and instructor dashboards, quizzes, progress tracking and certificates.",
    icon: "book",
  },
  {
    id: "ai-lms",
    title: "AI-Powered LMS",
    description:
      "A learning platform with an AI assistant built in, so every student gets help when they need it.",
    icon: "bot",
    featured: true,
    features: [
      "AI learning assistant and tutoring support",
      "AI-generated quizzes",
      "Personalised learning recommendations",
      "Student performance analytics",
    ],
  },
];