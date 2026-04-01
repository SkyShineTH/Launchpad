# Launchpad (Skyshine)

Marketing-style landing for **Fasai Utawan** — **Skyshine** ([skyshine.online](https://skyshine.online/)), GitHub [**@skyshineth**](https://github.com/skyshineth/). Web apps, dashboards, bots, and production deploys.

Stack: **React 19**, **Vite 6**, **Tailwind CSS**.

## Quick start

```bash
cd Launchpad
npm install
npm run dev
```

## Client feedback block

In **`src/siteConfig.js`**, keep `showTestimonials: false` until you have real, permitted client quotes. Then set it to `true` and edit **`src/components/Testimonials.jsx`**.

## Add portfolio pieces

Edit **`src/data/projects.js`**: each item can include `title`, `subtitle`, `description`, `tags`, `liveUrl`, `repoUrl`, optional `liveLabel` / `repoLabel`, and `order` for sorting. Leave `liveUrl` or `repoUrl` as `""` to hide that button.

## Other customization

- **Page copy:** `src/components/*.jsx`
- **Colors:** `tailwind.config.js` → `theme.extend.colors`
- **Meta / title:** `index.html`

## Deploy

`npm run build` → upload `dist/` to any static host (GitHub Pages, Cloudflare Pages, S3, etc.).

## License

See [LICENSE](./LICENSE).
