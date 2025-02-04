import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ---------------------
         TEXT COLORS
         --------------------- */
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
        dimmed: "var(--text-dimmed)",
        link: "var(--text-link)",
        invert: "var(--text-invert)",
        accent: "var(--text-accent)",
      },

      /* ---------------------
         BACKGROUND COLORS
         --------------------- */
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        component: "var(--bg-component)",
        neutral: "var(--bg-neutral)",
      },

      /* ---------------------
         BORDER COLORS
         --------------------- */
      borderColor: {
        primary: "var(--border-primary)",
        secondary: "var(--border-secondary)",
        component: "var(--border-component)",
      },

      /* You can also extend ringColor, ringOffsetColor, etc. if needed */
    },
  },
  plugins: [],
} satisfies Config;
