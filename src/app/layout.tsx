// src/app/layout.tsx
import type { Metadata } from "next";
import { SiteLayout } from "../components/layout/SiteLayout";

// 1) Theme foundation (reset + tokens + base + components)
import "@/styles/theme/index.css";

// 2) App-level defaults (typography + global elements)
import "@/styles/globals.css";

// 3) Shared component styles
import "@/styles/components/navigation.css";
import "@/styles/components/footer.css";

// 4) Feature/page styles (scoped)
import "@/styles/features/home-hero.css";
import "@/styles/features/home-domains.css";
import "@/styles/features/home-domains-illustrations.css";
import "@/styles/features/home-sections.css";

import { Inter, Oswald } from "next/font/google";

/**
 * Two-font system:
 * - Inter: global UI/body (“Redis-like”)
 * - Oswald: display only (hero H1)
 */
const yaiSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const yaiDisplay = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yai.foundation"),
  title: {
    default: "YAI Labs",
    template: "%s | YAI Labs",
  },
  description:
    "Governed execution for systems that act. Constraints first. Proof preserved.",
  applicationName: "YAI Labs",
  icons: {
    icon: [
      { url: "/icon.png?v=2", type: "image/png" },
      { url: "/yai.png?v=2", type: "image/png" },
    ],
    shortcut: [{ url: "/icon.png?v=2", type: "image/png" }],
    apple: [{ url: "/apple-icon.png?v=2", type: "image/png" }],
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "YAI Labs",
    title: "YAI Labs",
    description:
      "Governed execution for systems that act. Constraints first. Proof preserved.",
    url: "https://yai.foundation",
    images: [{ url: "/hero/hero-site.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YAI Labs",
    description:
      "Governed execution for systems that act. Constraints first. Proof preserved.",
    images: ["/hero/hero-site.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${yaiSans.variable} ${yaiDisplay.variable}`}
    >
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
