import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/components/navigation.css";
import "@/styles/components/footer.css";
import "@/styles/features/projects.css";
import "@/styles/features/hero.css";
import { SiteLayout } from "../components/layout/SiteLayout";

export const metadata: Metadata = {
  title: "Francesco Maiomascio",
  description: "Research and engineering of runtime-centric intelligent systems.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/favicon.jpg" },
    ],
    shortcut: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
