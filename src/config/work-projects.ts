interface WorkProject {
  period: string;
  duration: string;
  project: string;
  summary?: string;
  description?: string[];
  descriptionCount: number;
}

const workProjects: WorkProject[] = [
  {
    period: "September 2022 - September 2025",
    duration: "3 years",
    project: "lims",
    descriptionCount: 3,
  },
  {
    period: "September 2022 - September 2025",
    duration: "3 years",
    project: "cogthera_backend",
    descriptionCount: 7,
  },
  {
    period: "September 2022 - September 2025",
    duration: "3 years",
    project: "mobile_app",
    descriptionCount: 3,
  },
];

export default workProjects;
