import { siteLinks } from "@/content/links";

export const siteIdentity = {
  name: "YAI Labs",
  tagline: "Governed execution infrastructure for production AI.",
  description:
    "Fail-closed policy enforcement with auditable evidence and deterministic verification for production AI systems.",
  canonicalUrl: siteLinks.canonical,
  primaryCta: {
    label: "Book Pilot",
    href: siteLinks.pilotMailto,
  },
} as const;
