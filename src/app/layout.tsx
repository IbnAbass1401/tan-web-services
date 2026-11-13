import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TAN Web Services | Build. Grow. Scale.",
    template: "%s | TAN Web Services",
  },
  description:
    "TAN Web Services builds websites, e-commerce stores, school management systems and learning platforms for businesses in Nigeria and beyond.",
  openGraph: {
    title: "TAN Web Services | Build. Grow. Scale.",
    description:
      "Websites, e-commerce, school management systems and LMS platforms built for growing businesses.",
    type: "website",
    locale: "en_NG",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F9FB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}