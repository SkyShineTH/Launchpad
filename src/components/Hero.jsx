export default function Hero() {
  return (
    <section className="border-b border-black/[0.06] bg-canvas-elevated px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-canvas px-3 py-1 text-xs font-medium text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
            Open for freelance scope · Remote OK
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Web apps, dashboards,
            <br />
            <span className="text-brand">and bots</span>
            <br />
            built and deployed for you.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            I&apos;m{" "}
            <strong className="font-semibold text-ink">Fasai Utawan</strong> (
            <a
              href="https://github.com/skyshineth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-hover"
            >
              @skyshineth
            </a>
            ): I lean toward <strong className="font-semibold text-ink">DevOps and production delivery</strong>
            — CI/CD, containers, cloud, and full-stack pieces when the job needs them. On the side I&apos;m
            studying <strong className="font-semibold text-ink">ML engineering</strong> (optimization,
            fine-tuning) to go deeper over time; it&apos;s not my main billable focus yet, but it informs how
            I think about data and pipelines.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:fasai.utawan@gmail.com?subject=Project%20inquiry"
              className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition hover:bg-brand-hover"
            >
              Start a conversation
            </a>
            <a
              href="https://skyshine.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover"
            >
              Full portfolio · CV
              <span aria-hidden>→</span>
            </a>
          </div>
          <p className="mt-8 text-sm text-ink-subtle">
            <a
              href="https://skyshine.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink-muted underline-offset-2 hover:underline"
            >
              skyshine.online
            </a>
            {" · "}
            Data science, software innovation &amp; production operations
          </p>
        </div>
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-brand-muted/80 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-canvas shadow-card">
            <div className="border-b border-black/[0.06] bg-canvas-elevated px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                <span className="ml-3 text-xs text-ink-subtle">build → ship · pipeline preview</span>
              </div>
            </div>
            <div className="grid gap-4 p-5 sm:p-6">
              <div className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-canvas-elevated p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-brand">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">Your product · staging → production</p>
                  <p className="mt-1 text-xs text-ink-subtle">
                    CI/CD · Docker/K8s · AWS/GCP — patterns from shipped portfolio work
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium leading-none text-emerald-800">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                  Live
                </span>
              </div>
              <div className="rounded-xl border border-dashed border-black/[0.1] bg-canvas p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-subtle">Typical scope</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-brand">✓</span>
                    React / Next.js web app / admin dashboard
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-brand">✓</span>
                    Backend APIs, bots &amp; automation hooks
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-brand-foreground">
                <span className="text-xs font-mono text-white/90">git push → build → deploy</span>
                <span className="text-xs text-white/60">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
