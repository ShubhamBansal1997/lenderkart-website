import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const SITE_URL = "https://lenderkart.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LenderKart — Where leads find their way",
    template: "%s · LenderKart",
  },
  description:
    "LenderKart is the decision engine for lending and debt-advice funnels. It scores every enquiry, calls your lender panel in priority order and routes each lead to the offer most likely to convert — in under a second.",
  keywords: [
    "decision engine",
    "lead routing",
    "lender panel",
    "debt consolidation software",
    "fintech lead distribution",
    "loan offer matching",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "LenderKart",
    title: "LenderKart — Where leads find their way",
    description:
      "Score, match and route every lending enquiry in under a second. The decision engine behind leading UK debt-advice funnels.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LenderKart — Where leads find their way",
    description:
      "Score, match and route every lending enquiry in under a second.",
  },
  icons: {
    icon: "/lenderkart-logo-icon.svg",
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#150029",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lime focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-plum-deep"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}
