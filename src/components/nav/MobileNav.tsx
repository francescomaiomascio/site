"use client";

import { MenuIcon } from "@/components/nav/icons";
import { SearchControl } from "@/components/nav/SearchControl";

type MobileNavProps = {
  onOpenDrawer: (focusSearch?: boolean) => void;
};

export function MobileNav({ onOpenDrawer }: MobileNavProps) {
  return (
    <div className="topbar-mobile-actions" aria-label="Mobile actions">
      <SearchControl mobileMode onRequestMobileSearch={() => onOpenDrawer(true)} />
      <button
        type="button"
        className="topbar-icon-btn topbar-icon-btn--bare"
        aria-label="Open menu"
        onClick={() => onOpenDrawer(false)}
      >
        <MenuIcon />
      </button>
    </div>
  );
}
