import { useEffect, useState } from "react";

const STORAGE_KEY = "skyshine_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function persist(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore private mode */
    }
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
    >
      <div className="pointer-events-auto w-full max-w-4xl rounded-2xl border border-black/[0.08] bg-canvas-elevated px-5 py-5 shadow-card sm:px-8 sm:py-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="min-w-0 flex-1">
            <h2
              id="cookie-banner-title"
              className="font-display text-lg font-semibold tracking-tight text-ink"
            >
              Cookies
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              No third-party advertising or analytics on this portfolio. We only remember your
              choice in the browser (localStorage) so this bar stays dismissed—same idea as the
              cookie banners you see on European B2B sites.{" "}
              <a href="#cookies" className="font-medium text-brand underline-offset-2 hover:underline">
                Cookies &amp; privacy
              </a>
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={() => persist("essential")}
              className="order-2 rounded-full border border-black/[0.12] bg-canvas px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-black/[0.2] hover:bg-canvas-elevated sm:order-1"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => persist("all")}
              className="order-1 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/90 sm:order-2"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
