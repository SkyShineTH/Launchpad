const stats = [
  { value: "End-to-end", label: "Web app · API · database · deploy" },
  { value: "GitOps-ready", label: "CI/CD, containers & cloud patterns" },
  { value: "Clear handoff", label: "Docs, repo access, runbooks" },
];

export default function StatsStrip() {
  return (
    <section id="stack" className="border-b border-black/[0.06] bg-canvas-band px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-content gap-10 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-ink-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
