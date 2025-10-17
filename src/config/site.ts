import { NavItem } from "@/types/nav";

const mainNav = [
  {
    title: "home",
    href: "/",
    disabled: false,
  },
  {
    title: "about",
    href: "/#about",
    disabled: false,
  },
  {
    title: "experience",
    href: "/#experience",
    disabled: false,
  },
  {
    title: "projects",
    href: "/#projects",
    disabled: false,
  },
  {
    title: "skills",
    href: "/#skills",
    disabled: false,
  },
  {
    title: "contact",
    href: "/#contact",
    disabled: false,
  },
] as const satisfies NavItem[];

export const siteConfig = {
  name: "portfolio",
  description: "my portfolio website.",
  mainNav,
  links: {
    linkedin: "https://www.linkedin.com/in/amanuel-assefa-2b4574177",
    github: "https://github.com/amanuel1271",
  },
} satisfies Record<string, any>;

export type SiteConfig = typeof siteConfig;
