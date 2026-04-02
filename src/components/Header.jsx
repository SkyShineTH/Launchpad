import { useEffect, useState } from "react";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "How I work", href: "#how" },
  { label: "Stack", href: "#stack" },
  { label: "FAQ", href: "#faq" },
  { label: "Profile", href: "https://skyshine.online/", external: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300 motion-reduce:transition-none ${
        scrolled
          ? "border-black/[0.08] bg-canvas/75 shadow-soft supports-[backdrop-filter]:bg-canvas/65"
          : "border-black/[0.06] bg-canvas/90 supports-[backdrop-filter]:bg-canvas/80"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex min-w-0 items-center gap-2 rounded-lg font-display text-lg font-semibold text-ink outline-none ring-brand/0 transition-opacity duration-200 hover:opacity-90 motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
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
              className="rounded-md text-sm font-medium text-ink-muted outline-none ring-brand/0 transition-colors duration-200 hover:text-ink focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas motion-reduce:transition-none"
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
            className="hidden rounded-md text-sm font-medium text-ink-muted outline-none ring-brand/0 transition-colors duration-200 hover:text-ink focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas motion-reduce:transition-none md:inline"
          >
            GitHub
          </a>
          <a
            href="mailto:fasai.utawan@gmail.com?subject=Project%20inquiry"
            className="rounded-full border border-black/[0.08] bg-canvas-elevated px-3 py-2 text-sm font-semibold text-ink shadow-sm outline-none ring-brand/0 transition-[border-color,background-color,box-shadow,transform] duration-200 hover:border-black/[0.12] hover:bg-canvas motion-safe:hover:-translate-y-px active:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas motion-reduce:transition-none sm:px-4"
          >
            Email
          </a>
          <a
            href="https://skyshine.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-3 py-2 text-sm font-semibold text-brand-foreground shadow-sm outline-none ring-brand/0 transition-[background-color,box-shadow,transform] duration-200 hover:bg-brand-hover hover:shadow-md motion-safe:hover:-translate-y-px active:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas motion-reduce:transition-none sm:px-4"
          >
            Portfolio
          </a>
        </div>
      </div>
    </header>
  );
}
