export type Project = {
  id: string;
  name: string;
  description: string;
  href?: string;
  status?: "active" | "draft" | "planned";
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "yai",
    name: "YAI",
    description: "Runtime-centric intelligent systems with explicit authority and deterministic execution.",
    href: "https://github.com/francescomaiomascio/yai",
    status: "active",
    tags: ["runtime", "execution", "authority"],
  },
];
