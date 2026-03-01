import { siteLinks } from "@/content/links";

export type ProofEntry = {
  id: string;
  launchId: string;
  title: string;
  description: string;
  tags: string[];
  releaseUrl: string;
  repoUrl: string;
  verify: string[];
  thumbnail: string;
  videoUrl?: string;
  bundleContents: string[];
};

export const proofLibrary: ProofEntry[] = [
  {
    id: "sc102-wave1-launch",
    launchId: "SC102-WAVE1-LAUNCH",
    title: "SC102 Wave 1 Launch Proof",
    description:
      "D1 + D8 governed deny/allow outcomes on the same workflow with deterministic verify PASS.",
    tags: ["Launch", "Evidence", "Verification"],
    releaseUrl: siteLinks.releaseSc102,
    repoUrl: siteLinks.githubRepo,
    verify: [
      "cd docs/40-qualification/WAVES/SC102-WAVE1-LAUNCH",
      "./verify.sh",
    ],
    thumbnail: "/proof/sc102-wave1-thumb.png",
    videoUrl: "",
    bundleContents: [
      "MANIFEST.json",
      "INDEX.md",
      "POLICY",
      "RUNS",
      "verify.sh",
    ],
  },
];
