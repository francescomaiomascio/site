export type NavItem = {
  id: string;
  label: string;
  href?: string;
  description?: string;
  keywords?: string[];
  external?: boolean;
  badge?: string;
  children?: NavItem[];
};

export type NavAction = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  variant: "primary" | "secondary" | "link";
};

const DOCS_URL = "https://github.com/yai-labs/yai/tree/main/docs";
const PILOT_MAILTO = "mailto:pilot@yai.foundation?subject=Book%20Pilot%20-%20YAI%2014-Day";

export const NAV_GROUPS: Record<string, NavItem[]> = {
  products: [
    {
      id: "domains",
      label: "Domains",
      href: "/#domains",
      description: "Execution surfaces by real-world domain.",
      keywords: ["digital", "physical", "institutional", "domains"],
    },
    {
      id: "proof-surfaces",
      label: "Proof surfaces",
      href: "/#proof",
      description: "Decision records, timeline, metrics and evidence index.",
      keywords: ["evidence", "timeline", "proof", "audit"],
    },
    {
      id: "pilot-delivery",
      label: "Pilot delivery",
      href: "/#services",
      description: "Design-partner workflow with verifiable outcomes.",
      keywords: ["pilot", "delivery", "services"],
    },
  ],
  resources: [
    {
      id: "docs",
      label: "Docs",
      href: DOCS_URL,
      external: true,
      description: "Official documentation and setup guides.",
      keywords: ["docs", "reference", "guides"],
    },
    {
      id: "writing",
      label: "Writing",
      href: "/writing",
      description: "Technical posts and product updates.",
      keywords: ["blog", "articles", "updates"],
    },
    {
      id: "status",
      label: "Status",
      href: "/status",
      description: "Release and operations status.",
      keywords: ["status", "releases", "news"],
    },
    {
      id: "sdk",
      label: "SDK",
      href: "/docs/sdk",
      description: "SDK integration entry point.",
      keywords: ["sdk", "embedded", "c", "rust"],
    },
    {
      id: "deploy-guide",
      label: "Deploy guide",
      href: "/docs/deploy",
      description: "On-prem and air-gapped deployment guidance.",
      keywords: ["deploy", "air-gapped", "on-prem"],
    },
    {
      id: "patterns",
      label: "Patterns",
      href: "/docs/patterns",
      description: "Reference patterns for sidecar and gateway.",
      keywords: ["patterns", "sidecar", "gateway"],
    },
  ],
};

export const NAV_PRIMARY: NavItem[] = [
  {
    id: "products",
    label: "Products",
    children: NAV_GROUPS.products,
    keywords: ["products", "domains", "proof"],
  },
  {
    id: "resources",
    label: "Resources",
    children: NAV_GROUPS.resources,
    keywords: ["resources", "docs", "writing"],
  },
  {
    id: "pricing",
    label: "Pricing",
    href: "/#pricing",
    description: "Plans and pilot structure.",
    keywords: ["pricing", "plans", "pilot"],
  },
  {
    id: "docs-top",
    label: "Docs",
    href: DOCS_URL,
    external: true,
    description: "Official documentation.",
    keywords: ["docs", "reference"],
  },
];

export const NAV_ACTIONS: NavAction[] = [
  {
    id: "book-pilot",
    label: "Book pilot",
    href: PILOT_MAILTO,
    variant: "link",
  },
  {
    id: "try-yai",
    label: "Try YAI",
    href: DOCS_URL,
    external: true,
    variant: "primary",
  },
];
