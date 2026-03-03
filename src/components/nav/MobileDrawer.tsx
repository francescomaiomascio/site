"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { NavAction, NavItem } from "@/config/nav";
import { SEARCH_INDEX } from "@/config/search";
import { CloseIcon, ChevronDownIcon } from "@/components/nav/icons";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  focusSearch?: boolean;
  items: NavItem[];
  actions: NavAction[];
};

export function MobileDrawer({ open, onClose, focusSearch = false, items, actions }: MobileDrawerProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    products: false,
    resources: false,
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open && focusSearch) {
      window.setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open, focusSearch]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;

      if (!panelRef.current) return;
      const focusables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));

      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter((entry) => {
      return (
        entry.label.toLowerCase().includes(q) ||
        entry.description.toLowerCase().includes(q) ||
        entry.keywords.some((kw) => kw.toLowerCase().includes(q))
      );
    }).slice(0, 6);
  }, [query]);

  const directLinks = items.filter((item) => !item.children?.length);
  const groups = items.filter((item) => item.children?.length);

  return (
    <>
      <div className={`nav-drawer-overlay ${open ? "is-open" : ""}`} onClick={onClose} aria-hidden="true" />
      <aside
        ref={panelRef}
        className={`nav-drawer ${open ? "is-open" : ""}`}
        aria-label="Navigation drawer"
        role="dialog"
        aria-modal="true"
      >
        <div className="nav-drawer-head">
          <input
            ref={inputRef}
            className="nav-drawer-search"
            placeholder="Search docs, pricing, domains..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
          />
          <button type="button" className="topbar-icon-btn" aria-label="Close menu" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="nav-drawer-body">
          {query.trim() ? (
            <div className="nav-search-group">
              {searchResults.length ? (
                searchResults.map((entry) => (
                  <button
                    key={entry.id}
                    type="button"
                    className="nav-search-item"
                    onClick={() => {
                      onClose();
                      if (entry.external) {
                        window.open(entry.href, "_blank", "noopener,noreferrer");
                      } else {
                        router.push(entry.href);
                      }
                    }}
                  >
                    <span>{entry.label}</span>
                    <small>{entry.section}</small>
                  </button>
                ))
              ) : (
                <p className="nav-search-empty">No results</p>
              )}
            </div>
          ) : (
            <>
              {groups.map((group) => {
                const opened = Boolean(openAccordions[group.id]);
                return (
                  <section key={group.id} className="nav-acc">
                    <button
                      type="button"
                      className="nav-acc-trigger"
                      aria-expanded={opened}
                      onClick={() =>
                        setOpenAccordions((prev) => ({
                          ...prev,
                          [group.id]: !prev[group.id],
                        }))
                      }
                    >
                      <span>{group.label}</span>
                      <ChevronDownIcon className={`nav-acc-caret ${opened ? "is-open" : ""}`} />
                    </button>

                    <div className={`nav-acc-panel ${opened ? "is-open" : ""}`}>
                      {group.children?.map((child) =>
                        child.external ? (
                          <a
                            key={child.id}
                            href={child.href}
                            target="_blank"
                            rel="noreferrer"
                            className="nav-acc-link"
                            onClick={onClose}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link key={child.id} href={child.href ?? "#"} className="nav-acc-link" onClick={onClose}>
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  </section>
                );
              })}

              <nav className="nav-drawer-links" aria-label="Direct links">
                {directLinks.map((item) =>
                  item.external ? (
                    <a key={item.id} href={item.href} target="_blank" rel="noreferrer" className="nav-plain-link" onClick={onClose}>
                      {item.label}
                    </a>
                  ) : (
                    <Link key={item.id} href={item.href ?? "#"} className="nav-plain-link" onClick={onClose}>
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
            </>
          )}
        </div>

        <div className="nav-drawer-cta">
          {actions.map((action) => {
            if (action.variant === "primary") {
              return (
                <a
                  key={action.id}
                  className="button button--primary nav-drawer-btn"
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer" : undefined}
                  onClick={onClose}
                >
                  {action.label}
                </a>
              );
            }

            return (
              <a key={action.id} className="button button--ghost nav-drawer-btn" href={action.href} onClick={onClose}>
                {action.label}
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
}
