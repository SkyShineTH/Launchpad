/**
 * Shown only when `showTestimonials` is true in `src/siteConfig.js`.
 * Do not ship fake quotes — use real names, roles, and permission.
 */
const quotes = [
  {
    text: "Short client quote with a concrete outcome reads best here—replace this when you have permission to publish.",
    name: "Name",
    role: "Role",
    org: "Organisation",
  },
  {
    text: "Second testimonial slot: mention timeline, stack, or a metric you improved.",
    name: "Name",
    role: "Role",
    org: "Organisation",
  },
  {
    text: "Optional third slot—or remove cards you don’t need in Testimonials.jsx.",
    name: "Name",
    role: "Role",
    org: "Organisation",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-black/[0.06] bg-canvas px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Client feedback
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-ink-muted">
          Replace with real quotes when you have them, or trim this section if you prefer to point people to skyshine.online only.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name + q.org}
              className="flex flex-col rounded-2xl border border-black/[0.06] bg-canvas-elevated p-8 shadow-sm"
            >
              <p className="flex-1 text-lg leading-relaxed text-ink">&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-8 border-t border-black/[0.06] pt-6">
                <cite className="not-italic">
                  <span className="font-semibold text-ink">{q.name}</span>
                  <span className="mt-1 block text-sm text-ink-muted">
                    {q.role}, {q.org}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
