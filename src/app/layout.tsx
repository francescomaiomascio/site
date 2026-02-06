import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/components/navigation.css";
import "@/styles/components/footer.css";
import "@/styles/features/projects.css";
import "@/styles/features/hero.css";
import { SiteLayout } from "../components/layout/SiteLayout";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maiomascio.dev"),
  title: {
    default: "Francesco Maiomascio — Runtime architect & cognitive systems",
    template: "%s — Francesco Maiomascio",
  },
  description:
    "Design and engineer runtime-centric cognitive systems and AI execution architectures. Projects, writing, and system notes.",
  alternates: {
    canonical: "https://www.maiomascio.dev/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.maiomascio.dev/",
    title: "Francesco Maiomascio — Runtime architect & cognitive systems",
    description:
      "Design and engineer runtime-centric cognitive systems and AI execution architectures. Projects, writing, and system notes.",
    siteName: "maiomascio.dev",
    // images: [{ url: "/og.png", width: 1200, height: 630, alt: "Francesco Maiomascio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Francesco Maiomascio — Runtime architect & cognitive systems",
    description:
      "Design and engineer runtime-centric cognitive systems and AI execution architectures. Projects, writing, and system notes.",
    // images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="preload">
      <body>
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
            if (document && document.documentElement) { document.documentElement.classList.add('preload'); document.documentElement.scrollTop = 0; }
            window.addEventListener('DOMContentLoaded', () => {
              const main = document.getElementById('scroll-root');
              if (main) { main.scrollTop = 0; }
            }, { once: true });
            window.addEventListener('pageshow', () => {
              const main = document.getElementById('scroll-root');
              if (main) { main.scrollTop = 0; }
              if (document && document.documentElement) { document.documentElement.scrollTop = 0; }
            });`}
        </Script>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
