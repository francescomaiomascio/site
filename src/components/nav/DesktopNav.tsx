"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/config/nav";
import { ChevronDownIcon } from "@/components/nav/icons";

type DesktopNavProps = {
  items: NavItem[];
};

export function DesktopNav({ items }: DesktopNavProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="topbar-desktop-nav" role="navigation" aria-label="Primary">
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        if (!hasChildren && item.href) {
          if (item.external) {
            return (
              <a key={item.id} href={item.href} target="_blank" rel="noreferrer" className="topbar-link">
                {item.label}
              </a>
            );
          }
          return (
            <Link key={item.id} href={item.href} className="topbar-link">
              {item.label}
            </Link>
          );
        }

        return (
          <div
            key={item.id}
            className={`topbar-dd ${openId === item.id ? "is-open" : ""}`}
            onMouseEnter={() => setOpenId(item.id)}
            onMouseLeave={() => setOpenId(null)}
          >
            <button
              type="button"
              className="topbar-link topbar-dd-trigger"
              aria-expanded={openId === item.id}
              onFocus={() => setOpenId(item.id)}
            >
              {item.label}
              <ChevronDownIcon className="topbar-caret" />
            </button>

            <div className="topbar-dd-menu" role="menu" aria-label={`${item.label} menu`}>
              {item.children?.map((child) => {
                const content = (
                  <>
                    <span className="topbar-dd-item-title">{child.label}</span>
                    {child.description ? <span className="topbar-dd-item-desc">{child.description}</span> : null}
                  </>
                );

                if (!child.href) return null;
                if (child.external) {
                  return (
                    <a
                      key={child.id}
                      href={child.href}
                      target="_blank"
                      rel="noreferrer"
                      className="topbar-dd-item"
                      role="menuitem"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <Link key={child.id} href={child.href} className="topbar-dd-item" role="menuitem">
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
