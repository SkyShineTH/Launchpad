export default function DeepDive() {
  return (
    <section
      id="how"
      className="border-b border-black/[0.06] bg-canvas-band px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-content items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A delivery rhythm that fits remote collaboration
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Whether it&apos;s a greenfield build or hardening an existing app, I keep milestones
            small, demos frequent, and infrastructure boring—in a good way.
          </p>
          <ul className="mt-8 space-y-4 text-ink-muted">
            <li className="flex gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground">
                1
              </span>
              <span>
                <strong className="text-ink">Discover &amp; scope:</strong> goals, users,
                integrations, and success criteria—aligned before code.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground">
                2
              </span>
              <span>
                <strong className="text-ink">Build in slices:</strong> vertical features with
                staging URLs so you can review early and often.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground">
                3
              </span>
              <span>
                <strong className="text-ink">Ship &amp; hand off:</strong> deploy pipeline,
                env notes, and repo access—so you&apos;re not locked in.
              </span>
            </li>
          </ul>
          <a
            href="https://github.com/skyshineth"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:bg-brand-hover"
          >
            See code on GitHub
          </a>
        </div>
        <div className="rounded-2xl border border-black/[0.06] bg-canvas-elevated p-6 shadow-card sm:p-8">
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
            <span className="text-sm font-semibold text-ink">Example flow (illustrative)</span>
            <span className="rounded-full bg-brand-muted px-2.5 py-0.5 text-xs font-medium text-brand">
              Illustration
            </span>
          </div>
          <div className="mt-6 space-y-3 font-mono text-xs text-ink-muted">
            <div className="rounded-lg bg-canvas px-3 py-2">
              <span className="text-brand">→</span> feature/dashboard-analytics
            </div>
            <div className="rounded-lg bg-canvas px-3 py-2">
              <span className="text-brand">→</span> ci/github-actions · docker build
            </div>
            <div className="rounded-lg bg-canvas px-3 py-2">
              <span className="text-brand">→</span> deploy/staging · smoke checks
            </div>
          </div>
          <div className="mt-6 rounded-xl bg-ink p-4 text-sm text-white/90">
            <p className="font-sans text-xs font-medium uppercase tracking-wide text-white/50">
              You might ask
            </p>
            <p className="mt-2 font-sans text-[15px] leading-relaxed">
              &ldquo;Can we add SSO and a read-only analytics role next sprint?&rdquo;
            </p>
            <p className="mt-4 border-t border-white/10 pt-4 font-sans text-sm text-emerald-300/95">
              Yes—map to your IdP, extend RBAC, ship behind a feature flag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
