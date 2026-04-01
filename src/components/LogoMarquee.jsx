const tags = [
  "React",
  "Next.js",
  "Go",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "AWS",
  "GCP",
];

export default function LogoMarquee() {
  return (
    <section className="border-b border-black/[0.06] bg-canvas py-14" aria-labelledby="stack-strip-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <p id="stack-strip-heading" className="text-center text-sm font-medium text-ink-subtle">
          Stacks I use in production-style projects
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {tags.map((name) => (
            <span
              key={name}
              className="rounded-full border border-black/[0.06] bg-canvas-elevated px-3 py-1.5 text-sm font-medium text-ink-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
