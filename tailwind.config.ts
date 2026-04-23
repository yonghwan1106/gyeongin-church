import type { Config } from "tailwindcss";

// Tailwind 4 uses `@theme` in app/globals.css as the source of truth for tokens.
// This file only declares content paths; color/font palettes live in globals.css.
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
} satisfies Config;
