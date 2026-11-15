import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
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
    siteName: siteConfig.name,
    type: "website",
    locale: "en_NG",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAN Web Services | Build. Grow. Scale.",
    description:
      "Websites, e-commerce, school management systems and LMS platforms built for growing businesses.",
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
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}