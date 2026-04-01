/**
 * Selected work — add sites, dashboards, bots, or other builds here.
 * - liveUrl: production or demo URL (optional)
 * - repoUrl: GitHub/GitLab (optional)
 * Leave a URL empty to hide that button on the card.
 * `order`: lower numbers appear first (optional, default 0).
 */
export const projects = [
  {
    order: 0,
    title: "Finance Dashboard",
    subtitle: "Demo — in progress",
    description:
      "Sample finance / operations dashboard: charts, KPIs, and a deployable front-end pattern. Live site and repository links will go here once the demo is published.",
    tags: ["React", "Dashboard", "Demo"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    order: 1,
    title: "Shipyard",
    subtitle: "GitOps platform",
    description:
      "Full-stack portfolio: React + Vite, Go microservices with PostgreSQL, Kubernetes with Helm and Argo CD. CI/CD closes the loop with GitHub Actions and image registry.",
    tags: ["React", "Go", "PostgreSQL", "Kubernetes", "Argo CD"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    order: 2,
    title: "PyCPBoost",
    subtitle: "Python ↔ C++ extension",
    description:
      "Performance study using the Python C API: heavy numerical work offloaded to C++ with benchmarking against pure Python.",
    tags: ["Python", "C++", "Python C API"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    order: 3,
    title: "FootyBrain",
    subtitle: "Football analytics platform",
    description:
      "Data warehouse style pipeline for match data, AI-assisted prediction, and reporting dashboards with containerised services.",
    tags: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Docker"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    order: 4,
    title: "More on skyshine.online",
    subtitle: "CV, case studies & full list",
    description:
      "Face recognition attendance, carbon credit marketplace, taxi booking with maps, and other builds—documented on the main portfolio site.",
    tags: ["Portfolio"],
    liveUrl: "https://skyshine.online/",
    liveLabel: "Portfolio site",
    repoUrl: "https://github.com/skyshineth",
    repoLabel: "GitHub",
  },
];
