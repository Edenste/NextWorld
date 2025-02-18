import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neetbase: "#202225",
        neetheader: "#2f3136",
        neetbuttonhover: "#202225",
        neetsignin: "#2372b3",
        neetsigninhover: "#3488ce",
      },
    },
  },
  plugins: [],
} satisfies Config;
