import { useState } from "react";

export default function NewsletterCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="resources"
      className="border-b border-black/[0.06] bg-canvas-band px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl rounded-2xl border border-black/[0.06] bg-canvas-elevated px-6 py-12 text-center shadow-soft sm:px-10">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Stay in the loop
          </h2>
          <p className="mt-3 text-ink-muted">
            Drop your email if you want a heads-up when I publish new demos—otherwise reach out directly at{" "}
            <a
              href="mailto:fasai.utawan@gmail.com"
              className="font-semibold text-brand hover:text-brand-hover"
            >
              fasai.utawan@gmail.com
            </a>
            .
          </p>
          {submitted ? (
            <p className="mt-8 text-sm font-medium text-brand">
              Thanks—this preview doesn&apos;t send mail yet; use email above for a real conversation.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Work email"
                className="min-h-11 flex-1 rounded-full border border-black/[0.1] bg-canvas px-4 text-sm text-ink outline-none ring-brand/30 transition placeholder:text-ink-subtle focus:border-brand focus:ring-2"
              />
              <button
                type="submit"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:bg-brand-hover"
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
