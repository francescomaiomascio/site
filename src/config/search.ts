import { NAV_PRIMARY, type NavItem } from "@/config/nav";

export type SearchEntry = {
  id: string;
  label: string;
  href: string;
  section: string;
  description: string;
  keywords: string[];
  external: boolean;
};

function toEntry(item: NavItem, section: string): SearchEntry | null {
  if (!item.href) return null;
  return {
    id: item.id,
    label: item.label,
    href: item.href,
    section,
    description: item.description ?? "",
    keywords: item.keywords ?? [],
    external: Boolean(item.external),
  };
}

function flattenNav(items: NavItem[]): SearchEntry[] {
  const result: SearchEntry[] = [];

  for (const item of items) {
    if (item.href) {
      const top = toEntry(item, "Top");
      if (top) result.push(top);
    }

    if (item.children?.length) {
      for (const child of item.children) {
        const sub = toEntry(child, item.label);
        if (sub) result.push(sub);
      }
    }
  }

  return result;
}

export const SEARCH_INDEX: SearchEntry[] = flattenNav(NAV_PRIMARY);
