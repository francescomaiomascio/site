import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICE — Intelligent Computing Environment",
  description:
    "ICE is an AI-native workspace and runtime for agents, orchestration, and local-first computation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <strong>ICE</strong>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <small>© {new Date().getFullYear()} ICE Studio</small>
        </footer>
      </body>
    </html>
  );
}
