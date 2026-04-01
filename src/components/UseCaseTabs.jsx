import { useState } from "react";

const modes = [
  {
    id: "web",
    label: "Web app",
    headline: "Product-grade frontends",
    body: "Responsive UI, sane component structure, and API integration—so what you ship feels like software, not a theme hack.",
    snippet: "npm run dev  →  preview URL for review",
  },
  {
    id: "dash",
    label: "Dashboard",
    headline: "Operators trust what they see",
    body: "Tables, filters, exports, and role-aware views backed by real queries—not mock JSON that falls apart under load.",
    snippet: "SELECT … · cache · pagination · CSV export",
  },
  {
    id: "bot",
    label: "Bot & automation",
    headline: "Glue that survives 3 a.m.",
    body: "Webhooks, scheduled jobs, and chat bridges wired to your DB and APIs—with logging so incidents are debuggable.",
    snippet: "POST /hook  →  queue  →  notify + audit row",
  },
];

export default function UseCaseTabs() {
  const [active, setActive] = useState(modes[0].id);
  const current = modes.find((m) => m.id === active) ?? modes[0];

  return (
    <section className="border-b border-black/[0.06] bg-canvas-elevated px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Common starting points
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-ink-muted">
          Real projects often blend these—lead with what matters most (e.g. shipping to prod vs. polishing UI) and
          we&apos;ll scope from there.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {modes.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActive(m.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === m.id
                  ? "bg-ink text-white shadow-sm"
                  : "bg-canvas text-ink-muted ring-1 ring-black/[0.08] hover:text-ink"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-10 rounded-2xl border border-black/[0.06] bg-canvas p-8 shadow-sm lg:grid-cols-2 lg:p-10">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">{current.headline}</h3>
            <p className="mt-4 leading-relaxed text-ink-muted">{current.body}</p>
          </div>
          <div className="flex items-center">
            <div className="w-full rounded-xl border border-black/[0.08] bg-ink px-4 py-4 font-mono text-sm text-emerald-300/90">
              {current.snippet}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
