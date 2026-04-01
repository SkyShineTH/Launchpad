import { projects } from "../data/projects.js";

function sortedProjects() {
  return [...projects].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export default function ProjectShowcase() {
  const list = sortedProjects();

  return (
    <section
      id="work"
      className="border-b border-black/[0.06] bg-canvas-elevated px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Highlights from my portfolio—plus demos such as this landing and an upcoming finance dashboard.
            Expect a lean toward <strong className="font-medium text-ink">DevOps, deployable apps, and data-oriented
            UIs</strong>. Deeper case notes, CV, and the full project list sit on{" "}
            <a
              href="https://skyshine.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline-offset-2 hover:underline"
            >
              skyshine.online
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-ink-subtle">
            I add cards and links here as new work goes live—this grid is data-driven so it stays easy to refresh.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {list.map((p) => (
            <li
              key={`${p.order ?? 0}-${p.title}`}
              className="flex flex-col rounded-2xl border border-black/[0.06] bg-canvas p-1 shadow-sm transition hover:border-black/[0.1] hover:shadow-soft"
            >
              <div className="flex flex-1 flex-col rounded-[0.875rem] bg-canvas-elevated p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">{p.subtitle}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/[0.06] bg-canvas px-2.5 py-0.5 text-xs font-medium text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition hover:bg-brand-hover"
                    >
                      {p.liveLabel ??
                        (p.liveUrl.includes("github.com") ? "GitHub profile" : "Live demo")}
                    </a>
                  ) : null}
                  {p.repoUrl && p.liveUrl !== p.repoUrl ? (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-black/[0.12] bg-canvas px-4 py-2 text-sm font-semibold text-ink transition hover:border-black/[0.2]"
                    >
                      {p.repoLabel ?? "Repository"}
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
