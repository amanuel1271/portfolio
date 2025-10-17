export interface Tag {
  name: string;
  color: string;
}

export interface ProjectCardProps {
  title: string;
  summary: string;
  description: string[];
  tags: Tag[];
  site?: string;
  repo?: string;
  coverImage: Record<"dark" | "light", string>;
  descriptionUrl?: string;
  portfolio?: boolean;
}

export const projects: ProjectCardProps[] = [
  {
    title: "items.dex.title",
    tags: [
      {
        name: "Next.js",
        color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100",
      },
      {
        name: "Solidity",
        color:
          "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100",
      },
      {
        name: "TypeScript",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100",
      },
      {
        name: "zkSync",
        color: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-100",
      },
    ],
    summary: "items.dex.summary",
    description: [
      "items.dex.description.0",
      "items.dex.description.1",
      "items.dex.description.2",
      "items.dex.description.3",
    ],
    site: "https://sepolia.explorer.zksync.io/address/0xA5F6bde4C85379fd7339805071901F367F58a1F2",
    coverImage: {
      light: "/dex_cover.png",
      dark: "/dex_cover.png",
    },
  },
  {
    title: "items.portfolio.title",
    summary: "items.portfolio.summary",
    tags: [
      {
        name: "Next.js",
        color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100",
      },
      {
        name: "TypeScript",
        color:
          "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100",
      },
      {
        name: "Tailwind",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100",
      },
    ],
    description: [
      "items.portfolio.description.0",
      "items.portfolio.description.1",
    ],
    site: "https://amanuel-portfolio-q1t1u7fr3-amanuels-projects-d6df5227.vercel.app",
    repo: "https://github.com/amanuel1271/portfolio",
    coverImage: {
      light: "/portfolio_cover.png",
      dark: "/portfolio_cover.png",
    },
    portfolio: true,
  },
];
