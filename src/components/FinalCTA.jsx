export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-ink px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Want to scope a web app, dashboard, or DevOps piece?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
          Send a short note with goals, timeline, and budget—I&apos;ll reply with clarifying
          questions and a sensible milestone plan.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:fasai.utawan@gmail.com?subject=Project%20inquiry"
            className="inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold text-brand-foreground transition hover:bg-brand-hover"
          >
            Email Fasai
          </a>
          <a
            href="https://skyshine.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-white/25 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Open skyshine.online
          </a>
        </div>
      </div>
    </section>
  );
}
