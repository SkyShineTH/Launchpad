/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0f6b63",
          hover: "#0d5c55",
          muted: "#e8f3f2",
          foreground: "#f0faf9",
        },
        ink: {
          DEFAULT: "#0c1222",
          muted: "#5c6578",
          subtle: "#8b93a4",
        },
        canvas: {
          DEFAULT: "#f7f7f5",
          elevated: "#ffffff",
          band: "#eef4f3",
        },
      },
      fontFamily: {
        sans: [
          "DM Sans",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Outfit",
          "DM Sans",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12, 18, 34, 0.04), 0 8px 24px rgba(12, 18, 34, 0.06)",
        card: "0 1px 0 rgba(12, 18, 34, 0.06), 0 12px 40px rgba(12, 18, 34, 0.08)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
