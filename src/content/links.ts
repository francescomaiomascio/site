export type ExternalLink = {
  id: string;
  label: string;
  href: string;
};

export const siteLinks = {
  home: "/",
  proof: "/proof",
  services: "/services",
  docs: "/docs",
  security: "/security",
  status: "/status",
  pilot: "/pilot",
  company: "/company",
  archive: "/archive",

  canonical: "https://www.maiomascio.dev",

  githubOrg: "https://github.com/yai-labs",
  githubRepo: "https://github.com/yai-labs/yai",
  docsRepo: "https://github.com/yai-labs/yai/tree/main/docs",
  releaseSc102: "https://github.com/yai-labs/yai/releases/tag/sc102-wave1-launch-v1.0.0",
  securityPolicy: "https://github.com/yai-labs/yai/blob/main/SECURITY.md",
  statusPage: "/status",
  sc102Report:
    "https://github.com/yai-labs/yai/blob/main/docs/70-reports/sc102/SC102-REPORT-v0.1.0-draft.md",
  commercialPack:
    "https://github.com/yai-labs/yai/tree/main/docs/80-commercial",

  pilotMailto:
    "mailto:pilot@yai.foundation?subject=Book%20Pilot%20-%20YAI%2014-Day",
} as const;

export const primaryExternalLinks: ExternalLink[] = [
  { id: "github-org", label: "GitHub Org", href: siteLinks.githubOrg },
  { id: "github-repo", label: "YAI Repo", href: siteLinks.githubRepo },
  { id: "docs", label: "Docs", href: siteLinks.docsRepo },
  { id: "security", label: "Security Policy", href: siteLinks.securityPolicy },
  { id: "release", label: "SC102 Launch Release", href: siteLinks.releaseSc102 },
];
