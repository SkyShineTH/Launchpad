# Launchpad (Skyshine)

Marketing-style landing page for **Fasai Utawan** — brand **Skyshine**.

- **Portfolio / CV:** [skyshine.online](https://skyshine.online/)
- **GitHub:** [@skyshineth](https://github.com/skyshineth/)

Focus: DevOps and production delivery, web apps, dashboards, bots, and deploys. Static React front end you can host anywhere.

**Stack:** React 19 · Vite 6 · Tailwind CSS

---

## Quick start

```bash
cd Launchpad
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Development server       |
| `npm run build`| Production build → `dist/` |
| `npm run preview` | Preview production build |

---

## Project layout

| Path | Purpose |
|------|---------|
| `src/App.jsx` | Page composition |
| `src/siteConfig.js` | Feature toggles (e.g. testimonials) |
| `src/data/projects.js` | Selected work grid (cards + links) |
| `src/components/` | Sections (Hero, Work, FAQ, Cookie banner, …) |
| `public/favicon.svg` | Tab icon |
| `tailwind.config.js` | Brand colors (`brand`, `ink`, `canvas`) |
| `index.html` | Title, meta description, fonts |

---

## Configuration

### Portfolio cards

Edit **`src/data/projects.js`**. Each object can include:

- `title`, `subtitle`, `description`, `tags[]`
- `liveUrl`, `repoUrl` — empty string `""` hides that button
- `liveLabel`, `repoLabel` — optional button text
- `order` — lower numbers appear first

### Client testimonials

In **`src/siteConfig.js`**, set `showTestimonials` to `true` only when you have real quotes and permission to publish. Then edit **`src/components/Testimonials.jsx`**.

### Cookies banner

**`src/components/CookieBanner.jsx`** — bottom consent bar. Stores choice in `localStorage` under `skyshine_cookie_consent`. FAQ includes **Cookies & privacy** at `#cookies` (opens when visiting that hash). Footer links to `#cookies`.

### Copy & branding

- Section text: `src/components/*.jsx`
- Colors: `tailwind.config.js` → `theme.extend.colors`
- Document metadata: `index.html`

---

## Deploy

```bash
npm run build
```

Upload the **`dist/`** folder to any static host (GitHub Pages, Cloudflare Pages, Netlify, Vercel, S3, etc.).

---

## License

See [LICENSE](./LICENSE).
