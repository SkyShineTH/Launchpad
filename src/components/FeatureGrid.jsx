const features = [
  {
    title: "Web applications",
    body: "Customer-facing sites, internal tools, and SPAs—React, Vite, Next.js—with auth, forms, and APIs that match your workflow.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    ),
  },
  {
    title: "Dashboards & data",
    body: "Analytics views, admin panels, and ETL-friendly backends—Postgres, charts, and exports your team can rely on.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    title: "Bots & automation",
    body: "Integrations, webhooks, and task runners that connect chat, APIs, and your database—without fragile one-off scripts.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: "Deploy & DevOps",
    body: "Docker, Kubernetes, GitHub Actions/GitLab CI, Nginx, AWS/GCP—so releases are repeatable and environments match prod.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    ),
  },
];

export default function FeatureGrid() {
  return (
    <section
      className="border-b border-black/[0.06] bg-canvas px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What I build
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            DevOps and shipping first when that&apos;s what you need; web UI and dashboards when the scope calls for
            them—milestones stay clear, communication direct, and you keep the repository.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-2xl border border-black/[0.06] bg-canvas-elevated p-8 shadow-sm transition hover:border-black/[0.1] hover:shadow-soft"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-muted text-brand">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{f.body}</p>
              <a
                href="mailto:fasai.utawan@gmail.com?subject=Project%20inquiry"
                className="mt-4 inline-flex text-sm font-semibold text-brand hover:text-brand-hover"
              >
                Discuss this scope <span className="ml-1" aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
