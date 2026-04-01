export default function ProblemSolution() {
  return (
    <section
      id="services"
      className="border-b border-black/[0.06] bg-canvas-elevated px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              The problem
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Teams need something that runs—not only slides. Fragile scripts, missing deploys, and dashboards
              nobody trusts waste time and money. Often one person who can connect UI, APIs, and production
              cuts that risk.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              How I help
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              I build <strong className="font-semibold text-ink">web apps</strong>,{" "}
              <strong className="font-semibold text-ink">dashboards</strong>, and{" "}
              <strong className="font-semibold text-ink">bots / automation</strong>, then wire
              hosting, pipelines, and observability so you can iterate after launch. See{" "}
              <a
                href="https://skyshine.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-hover"
              >
                skyshine.online
              </a>{" "}
              for project depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
