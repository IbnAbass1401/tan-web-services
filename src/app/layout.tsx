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

const homeTitle = "TAN Web Services | Web Agency in Ilorin, Nigeria";
const homeDescription =
  "Web agency in Ilorin, Nigeria. We build websites, online stores, school management systems and learning platforms for businesses and schools.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: homeTitle,
    template: "%s | TAN Web Services",
  },
  description: homeDescription,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_NG",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
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