export type DomainAccent = "violet" | "azure" | "teal" | "slate";

export type DomainArtTemplate = "trace" | "gate" | "custody";
export type DomainCardVariant = "hero" | "tall" | "wide" | "std";

export type DomainCard = {
  slug: string;
  featured: boolean;
  kicker?: string;
  title: string;
  descriptionLead: string;
  emphasis: string;
  descriptionTail: string;
  bullets?: string[];
  accent: DomainAccent;
  variant: DomainCardVariant;
  artTemplate: DomainArtTemplate;
  href: string;
};

export const DOMAINS: DomainCard[] = [
  {
    slug: "physical-actuators",
    featured: true,
    kicker: "PHYSICAL",
    title: "Devices and actuators",
    descriptionLead: "Execute actuator commands inside fail-closed",
    emphasis: "constraints",
    descriptionTail: "with deterministic enforcement.",
    bullets: ["Gate checks", "Policy windows", "Proof records"],
    accent: "teal",
    variant: "hero",
    artTemplate: "gate",
    href: "/domains/physical-actuators",
  },
  {
    slug: "digital-egress",
    featured: true,
    kicker: "DIGITAL",
    title: "Data egress and pipelines",
    descriptionLead: "Constrain outbound effects and preserve",
    emphasis: "proof",
    descriptionTail: "across pipeline execution.",
    accent: "azure",
    variant: "std",
    artTemplate: "trace",
    href: "/domains/digital-egress",
  },
  {
    slug: "economic-transactions",
    featured: true,
    kicker: "ECONOMIC",
    title: "Transactions and approvals",
    descriptionLead: "Bind payment side-effects to bounded",
    emphasis: "proof",
    descriptionTail: "before commit.",
    accent: "azure",
    variant: "std",
    artTemplate: "trace",
    href: "/domains/economic-transactions",
  },
  {
    slug: "institutional-authority",
    featured: true,
    kicker: "INSTITUTIONAL",
    title: "Procedures and authority",
    descriptionLead: "Map approvals into runtime policy with durable",
    emphasis: "audit",
    descriptionTail: "evidence.",
    accent: "slate",
    variant: "std",
    artTemplate: "gate",
    href: "/domains/institutional-authority",
  },
  {
    slug: "biological-custody",
    featured: true,
    kicker: "BIOLOGICAL",
    title: "Chain of custody",
    descriptionLead: "Track procedural provenance with cryptographic",
    emphasis: "trace",
    descriptionTail: "end to end.",
    accent: "violet",
    variant: "tall",
    artTemplate: "custody",
    href: "/domains/biological-custody",
  },
  {
    slug: "operational-response",
    featured: true,
    kicker: "OPERATIONAL",
    title: "Incidents and response",
    descriptionLead: "Contain incidents rapidly with explicit",
    emphasis: "quarantine",
    descriptionTail: "and verified recovery steps.",
    accent: "teal",
    variant: "wide",
    artTemplate: "trace",
    href: "/domains/operational-response",
  },
  {
    slug: "cognitive-publishing",
    featured: false,
    kicker: "COGNITIVE",
    title: "Publishing and content",
    descriptionLead: "Apply release controls to knowledge workflows with durable",
    emphasis: "trace",
    descriptionTail: "integrity.",
    accent: "slate",
    variant: "std",
    artTemplate: "custody",
    href: "/domains/cognitive-publishing",
  },
  {
    slug: "scientific-reproducibility",
    featured: true,
    kicker: "SCIENTIFIC",
    title: "Reproducibility locks",
    descriptionLead: "Protect parameters and outputs with replayable",
    emphasis: "constraints",
    descriptionTail: "for reproducible runs.",
    accent: "violet",
    variant: "std",
    artTemplate: "gate",
    href: "/domains/scientific-reproducibility",
  },
  {
    slug: "environmental-telemetry",
    featured: false,
    kicker: "ENVIRONMENTAL",
    title: "Telemetry integrity",
    descriptionLead: "Bind monitoring streams to trusted signals with continuous",
    emphasis: "audit",
    descriptionTail: "assurance.",
    accent: "azure",
    variant: "std",
    artTemplate: "custody",
    href: "/domains/environmental-telemetry",
  },
];
