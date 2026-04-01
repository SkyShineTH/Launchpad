const cols = [
  {
    title: "Services",
    links: [
      { label: "Web applications", href: "#services" },
      { label: "Dashboards", href: "#services" },
      { label: "Bots & automation", href: "#services" },
      { label: "Deploy & DevOps", href: "#how" },
    ],
  },
  {
    title: "Profile",
    links: [
      { label: "Portfolio site", href: "https://skyshine.online/", external: true },
      { label: "GitHub @skyshineth", href: "https://github.com/skyshineth", external: true },
      { label: "Email", href: "mailto:fasai.utawan@gmail.com", external: true },
    ],
  },
  {
    title: "On this page",
    links: [
      { label: "Selected work", href: "#work" },
      { label: "How I work", href: "#how" },
      { label: "Stack", href: "#stack" },
      { label: "FAQ", href: "#faq" },
      { label: "Cookies", href: "#cookies" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-4 pb-12 pt-16 text-white/80 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-brand-foreground">
                S
              </span>
              Skyshine
            </a>
            <p className="mt-2 text-sm font-medium text-white/80">Fasai Utawan</p>
            <p className="mt-4 text-sm text-white/55">
              DevOps-first delivery · full-stack when needed · studying ML optimization &amp; fine-tuning.
            </p>
            <p className="mt-6 text-sm text-white/45">English / ไทย (as needed)</p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Fasai Utawan ·{" "}
            <a
              href="https://skyshine.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/80"
            >
              skyshine.online
            </a>
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#cookies" className="hover:text-white/70">
              Cookies
            </a>
            <a
              href="https://github.com/skyshineth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70"
            >
              GitHub
            </a>
            <a
              href="https://skyshine.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70"
            >
              Portfolio
            </a>
            <a href="mailto:fasai.utawan@gmail.com" className="hover:text-white/70">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
