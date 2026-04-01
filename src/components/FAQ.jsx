import { useEffect, useState } from "react";

const items = [
  {
    id: "cookies",
    q: "Cookies & privacy",
    a: "This portfolio is a static site: there are no third-party advertising or analytics scripts. The consent bar only stores your choice in your browser (localStorage) so it does not reappear. Reject non-essential and Accept all behave the same here because we do not run optional trackers—when you add analytics later, wire this banner to your provider and update this text.",
  },
  {
    q: "What’s your availability right now?",
    a: "Internship is complete, I’m finishing my studies and actively looking for full-time roles while staying open to well-scoped freelance work. I usually reply within a day—email is best for first contact.",
  },
  {
    q: "What kinds of projects do you take on?",
    a: "DevOps-heavy delivery (pipelines, containers, cloud) plus web apps, admin dashboards, data-oriented backends, and bots when the scope fits. I’m also studying ML optimization and fine-tuning on the side; I don’t position that as a primary service until there are shipped examples. Selected builds are on this page; depth and CV live at skyshine.online.",
  },
  {
    q: "How do you usually deliver?",
    a: "Clear milestones: repository access, runnable environments, deployment notes, and a handoff walkthrough. Stack and hosting are chosen together based on your constraints.",
  },
  {
    q: "Do you handle hosting and deployment?",
    a: "Yes, when it’s in scope—Docker images, pipelines (e.g. GitHub Actions), and targets such as AWS or GCP. Requirements for compliance and cost drive the final setup.",
  },
  {
    q: "How can I reach you?",
    a: "Email fasai.utawan@gmail.com, or browse code and activity at github.com/skyshineth. Full CV and project write-ups: skyshine.online.",
  },
  {
    q: "What is this site built with?",
    a: "A static React front end (Vite + Tailwind). The project grid is data-driven so I can refresh highlights quickly; everything deploys as plain files after a production build.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window.location.hash === "#cookies") {
      const idx = items.findIndex((x) => x.id === "cookies");
      if (idx >= 0) {
        setOpen(idx);
      }
    }
  }, []);

  return (
    <section id="faq" className="border-b border-black/[0.06] bg-canvas-elevated px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          FAQ
        </h2>
        <div className="mx-auto mt-12 max-w-2xl divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} id={item.id} className={item.id ? "scroll-mt-28" : undefined}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{item.q}</span>
                  <span className="text-xl text-ink-subtle" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-ink-muted leading-relaxed">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
