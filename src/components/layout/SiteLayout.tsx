"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { TopBar } from "./TopBar";
import { PageBack } from "./PageBack";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const snapEnabled = pathname !== "/about";
  const isAbout = pathname === "/about";

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        const y = main.scrollTop;
        main.style.setProperty("--bg-y", `${-y * 0.18}px`);
        main.style.setProperty("--bg-y-strong", `${-y * 0.32}px`);
        const atEnd =
          main.scrollTop + main.clientHeight >= main.scrollHeight - 4;
        main.classList.toggle("is-at-end", atEnd);
        ticking = false;
      });
    };

    onScroll();
    main.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      main.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const prevBehavior = main.style.scrollBehavior;
    main.style.scrollBehavior = "auto";
    main.scrollTo({ top: 0, left: 0, behavior: "auto" });
    main.style.scrollBehavior = prevBehavior;
    document.documentElement.classList.remove("preload");
  }, [pathname]);

  useEffect(() => {
    const main = mainRef.current;
    if (!main || !isAbout) return;

    main.classList.add("page-enter");
    const timeout = window.setTimeout(() => {
      main.classList.remove("page-enter");
    }, 620);

    return () => {
      window.clearTimeout(timeout);
      main.classList.remove("page-enter");
    };
  }, [isAbout, pathname]);

  return (
    <div className="app-surface">
      <TopBar />

      <main
        className={`site-main${snapEnabled ? " site-main--snap" : ""}`}
        role="main"
        ref={mainRef}
        id="scroll-root"
      >
        <PageBack />
        <div className="page-transition">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
