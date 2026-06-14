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

export const projects: Project[] = [
  {
    slug: "cantante",
    name: "Cantante",
    description:
      "A practice tool for timba singers. See musical figures and their connections, learn from a built-in dictionary, and add your own songs with real-time figure tracking.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Prettier"],
    status: "completed",
    image: "/projects/cantante.jpg",
    link: "https://cantante.didyou.fyi",
  },
  {
    slug: "rev-trade",
    name: "RevTrade",
    description:
      "A high-risk trading application using Deriv for martingale strategies on indices. Live charts, position management, and full trade control.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Redis",
      "Postgres",
      "Prisma",
      "Rust",
      "WebSockets",
    ],
    status: "completed",
    image: "/projects/rev-trade.jpg",
    link: "https://simple.didyou.fyi",
  },
  {
    slug: "properties",
    name: "Properties",
    description:
      "A real estate platform where users browse listings, apply to rent, and manage their profiles. Admins handle applications, respond to tenants, and publish new properties.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Redis", "Postgres", "Prisma"],
    status: "completed",
    image: "/projects/properties.jpg",
    link: "https://properties.didyou.fyi",
  },
];

export const availableProjects = projects.filter(
  (p) => p.status === "available",
);
export const workingProjects = projects.filter(
  (p) => p.status === "inProgress",
);
export const completedProjects = projects.filter(
  (p) => p.status === "completed",
);
