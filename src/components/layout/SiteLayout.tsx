// src/components/layout/SiteLayout.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { TopBar } from "./TopBar";
import { PageBack } from "./PageBack";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // Lightweight background parallax (optional sugar, not "app behavior")
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY || 0;
      root.style.setProperty("--bg-y", `${-y * 0.12}px`);
      root.style.setProperty("--bg-y-strong", `${-y * 0.2}px`);

      const atEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      root.classList.toggle("is-at-end", atEnd);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  // On route change, ensure we land at top (site behavior)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div ref={rootRef} className="app-surface">
      <TopBar />

      <main className="site-main" role="main">
        <PageBack />
        {children}
      </main>
    </div>
  );
}