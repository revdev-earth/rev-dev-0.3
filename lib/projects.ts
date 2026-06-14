export type ProjectStatus = "available" | "inProgress" | "completed";

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  image: string;
  link?: string;
};

// Static data for now. Move to a CMS later if non-devs need to edit it.
// NOTE: descriptions/stack below are DRAFTS, confirm with the team.
export const projects: Project[] = [
  {
    slug: "rev-trade",
    name: "RevTrade",
    description:
      "A trading platform to track markets, manage positions and act faster, built for clarity over noise.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Postgres"],
    status: "available",
    image: "/projects/rev-trade.jpg",
  },
  {
    slug: "properties",
    name: "Properties",
    description:
      "A real estate platform to list, search and manage properties, connecting owners and buyers in one place.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Postgres"],
    status: "available",
    image: "/projects/properties.jpg",
  },
];

export const availableProjects = projects.filter(
  (p) => p.status === "available",
);
export const workingProjects = projects.filter(
  (p) => p.status === "inProgress",
);
