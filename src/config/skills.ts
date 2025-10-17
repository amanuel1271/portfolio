export const Skills = {
  Languages: {
    tools: ["JavaScript", "TypeScript", "Python", "C", "Scala", "Verilog"],
    description: "skills.categories.Languages.description",
  },
  Backend: {
    tools: ["Node.js", "NestJS", "PostgreSQL", "Redis", "gRPC", "REST APIs", "WebSockets"],
    description: "skills.categories.Backend.description",
  },
  Frontend: {
    tools: ["Next.js", "Tailwind CSS", "HTML"],
    description: "skills.categories.Frontend.description",
  },
  Infrastructure: {
    tools: ["Docker", "Kubernetes", "AWS", "GitLab CI/CD", "Grafana", "Datadog"],
    description: "skills.categories.Infrastructure.description",
  },
  Testing: {
    tools: ["Jest", "Unit Testing", "Integration Testing", "TDD"],
    description: "skills.categories.Testing.description",
  },
} satisfies Record<string, Record<string, string | string[]>>;

export const ToolIconsAndDescriptions = {
  Redis: {
    icon: "/logos/redis.svg",
    description: "skills.tools.Redis.description",
  },
  Node: {
    icon: "/logos/nodejs.svg",
    description: "skills.tools.Node.description",
  },
  PostgreSQL: {
    icon: "/logos/postgres.svg",
    description: "skills.tools.PostgreSQL.description",
  },
  Next: {
    icon: "/logos/nextjs.svg",
    description: "skills.tools.Next.description",
  },
  TailwindCSS: {
    icon: "/logos/tailwindcss.svg",
    description: "skills.tools.TailwindCSS.description",
  },
  HTML: {
    icon: "/logos/html.svg",
    description: "skills.tools.HTML.description",
  },
  CSS: {
    icon: "/logos/css.svg",
    description: "skills.tools.CSS.description",
  },
  Docker: {
    icon: "/logos/docker.svg",
    description: "skills.tools.Docker.description",
  },
  VSCode: {
    icon: "/logos/vscode.svg",
    description: "skills.tools.VSCode.description",
  },
} as const;
