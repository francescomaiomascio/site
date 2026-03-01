// src/app/layout.tsx
import type { Metadata } from "next";
import { SiteLayout } from "../components/layout/SiteLayout";

// 1) Base + reset + tokens (foundation)
import "@/styles/theme/index.css";
import "@/styles/theme/tokens/themes/theme-yai.css";

// 2) App-level defaults
import "@/styles/globals.css";

// 3) Component styles (shared)
import "@/styles/components/navigation.css";
import "@/styles/components/footer.css";

// 4) Feature/page styles (scoped)
import "@/styles/features/hero.css";
import "@/styles/features/projects.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yai.foundation"),
  title: {
    default: "YAI Labs",
    template: "%s — YAI Labs",
  },
  description:
    "Governed AI execution for production systems: fail-closed enforcement, auditable evidence, deterministic verification.",
  applicationName: "YAI Labs",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/favicon.jpg" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "YAI Labs",
    title: "YAI Labs",
    description:
      "Governed AI execution for production systems: fail-closed enforcement, auditable evidence, deterministic verification.",
    url: "https://yai.foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "YAI Labs",
    description:
      "Governed AI execution for production systems: fail-closed enforcement, auditable evidence, deterministic verification.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}