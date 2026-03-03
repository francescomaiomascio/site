"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DesktopNav } from "@/components/nav/DesktopNav";
import { MobileDrawer } from "@/components/nav/MobileDrawer";
import { MobileNav } from "@/components/nav/MobileNav";
import { SearchControl } from "@/components/nav/SearchControl";
import { NAV_ACTIONS, NAV_PRIMARY } from "@/config/nav";

export function Topbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [focusSearchInDrawer, setFocusSearchInDrawer] = useState(false);

  const bookPilot = NAV_ACTIONS.find((x) => x.id === "book-pilot");
  const tryYai = NAV_ACTIONS.find((x) => x.id === "try-yai");

  const openDrawer = (focusSearch = false) => {
    setFocusSearchInDrawer(focusSearch);
    setDrawerOpen(true);
  };

  return (
    <header className="topbar" role="banner">
      <nav className="topbar-inner yai-container" aria-label="Main navigation">
        <Link href="/" className="topbar-brand" aria-label="YAI Labs home">
          <Image src="/yai.png" alt="YAI" width={24} height={24} className="topbar-brand-icon" />
          <span className="topbar-brand-mark">YAI</span>
          <span className="topbar-brand-sub">Labs</span>
        </Link>

        <div className="topbar-desktop-shell">
          <DesktopNav items={NAV_PRIMARY} />
        </div>

        <div className="topbar-actions" aria-label="Actions">
          <div className="topbar-desktop-search">
            <SearchControl />
          </div>

          {bookPilot ? (
            <a className="topbar-action-link topbar-desktop-only" href={bookPilot.href}>
              {bookPilot.label}
            </a>
          ) : null}

          {tryYai ? (
            <a
              className="button button--primary topbar-cta topbar-desktop-only"
              href={tryYai.href}
              target={tryYai.external ? "_blank" : undefined}
              rel={tryYai.external ? "noreferrer" : undefined}
            >
              {tryYai.label}
            </a>
          ) : null}

          <MobileNav onOpenDrawer={openDrawer} />
        </div>
      </nav>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        focusSearch={focusSearchInDrawer}
        items={NAV_PRIMARY}
        actions={NAV_ACTIONS}
      />
    </header>
  );
}
