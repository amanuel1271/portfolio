import { Experience } from "@/types/experience";

const experiences: Experience[] = [
  {
    title: "company.title",
    company: "company.name",
    companyUrl: "https://www.probit.com",
    companyMeta: {
      intro: "company.intro",
      location: "company.location",
      industry: "company.industry",
    },
    startDate: "2022-09-01",
    endDate: "2025-09-30",
    companyLogo: "/probit_logo.png",
    skills: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "WebSockets",
      "Microservices",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Jest",
    ],
  },
];

export default experiences;
