"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SEARCH_INDEX } from "@/config/search";
import { SearchIcon } from "@/components/nav/icons";

type SearchControlProps = {
  mobileMode?: boolean;
  onRequestMobileSearch?: () => void;
};

export function SearchControl({ mobileMode = false, onRequestMobileSearch }: SearchControlProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return SEARCH_INDEX.slice(0, 6);
    return SEARCH_INDEX.filter((entry) => {
      const inLabel = entry.label.toLowerCase().includes(query);
      const inDesc = entry.description.toLowerCase().includes(query);
      const inKeys = entry.keywords.some((k) => k.toLowerCase().includes(query));
      return inLabel || inDesc || inKeys;
    }).slice(0, 6);
  }, [q]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (mobileMode) {
    return (
      <button
        type="button"
        className="topbar-icon-btn topbar-icon-btn--bare"
        aria-label="Search"
        onClick={() => onRequestMobileSearch?.()}
      >
        <SearchIcon />
      </button>
    );
  }

  return (
    <div className="topbar-search-wrap" ref={panelRef}>
      <button
        type="button"
        className="topbar-icon-btn topbar-icon-btn--bare"
        aria-label="Search"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <SearchIcon />
      </button>

      {open ? (
        <div className="topbar-search-pop" role="dialog" aria-label="Search navigation">
          <input
            ref={inputRef}
            className="topbar-search-input"
            placeholder="Search docs, pricing, domains..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <div className="topbar-search-results">
            {results.length === 0 ? (
              <p className="topbar-search-empty">No results</p>
            ) : (
              results.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  className="topbar-search-item"
                  onClick={() => {
                    setOpen(false);
                    if (entry.external) {
                      window.open(entry.href, "_blank", "noopener,noreferrer");
                    } else {
                      router.push(entry.href);
                    }
                  }}
                >
                  <span className="topbar-search-item-label">{entry.label}</span>
                  <span className="topbar-search-item-meta">{entry.section}</span>
                </button>
              ))
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
