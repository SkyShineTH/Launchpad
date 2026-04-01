const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "How I work", href: "#how" },
  { label: "Stack", href: "#stack" },
  { label: "FAQ", href: "#faq" },
  { label: "Profile", href: "https://skyshine.online/", external: true },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-0 items-center gap-2 font-display text-lg font-semibold text-ink">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand text-sm font-bold text-brand-foreground">
            S
          </span>
          <span className="truncate">
            Skyshine
            <span className="hidden font-sans text-xs font-normal text-ink-subtle sm:inline">
              {" "}
              · Fasai Utawan
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm font-medium text-ink-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/skyshineth"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-ink-muted transition hover:text-ink md:inline"
          >
            GitHub
          </a>
          <a
            href="mailto:fasai.utawan@gmail.com?subject=Project%20inquiry"
            className="rounded-full border border-black/[0.08] bg-canvas-elevated px-3 py-2 text-sm font-semibold text-ink shadow-sm transition hover:border-black/[0.12] hover:bg-canvas sm:px-4"
          >
            Email
          </a>
          <a
            href="https://skyshine.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-3 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition hover:bg-brand-hover sm:px-4"
          >
            Portfolio
          </a>
        </div>
      </div>
    </header>
  );
}
