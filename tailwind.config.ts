import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf8f5",
          100: "#f5f0e6",
          200: "#e8dcc7",
          300: "#d9c4a3",
          400: "#c7a77b",
          500: "#b8905d",
          600: "#a77a4e",
          700: "#8b6341",
          800: "#72513a",
          900: "#5d4432",
        },
        warm: {
          50: "#fdfcfa",
          100: "#faf7f2",
          200: "#f5ede0",
          300: "#ede0ca",
          400: "#e0cba8",
          500: "#d4b78a",
        },
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
