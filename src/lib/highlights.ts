export type Highlight = { label: string; kind: "get" | "for" };

// Alternates "what you get" and "who it's for".
// Every "get" item matches something we can deliver.
export const highlights: Highlight[] = [
  { label: "Business websites", kind: "get" },
  { label: "For restaurants", kind: "for" },
  { label: "Online ordering pages", kind: "get" },
  { label: "For schools and madrasahs", kind: "for" },
  { label: "Online stores", kind: "get" },
  { label: "For hotels and event venues", kind: "for" },
  { label: "Secure Paystack payments", kind: "get" },
  { label: "For shops and online brands", kind: "for" },
  { label: "School and madrasah portals", kind: "get" },
  { label: "For trainers and academies", kind: "for" },
  { label: "Parent and teacher logins", kind: "get" },
  { label: "For startups", kind: "for" },
  { label: "Attendance tracking", kind: "get" },
  { label: "For growing businesses", kind: "for" },
  { label: "Learning platforms with certificates", kind: "get" },
  { label: "Mobile-friendly design", kind: "get" },
];