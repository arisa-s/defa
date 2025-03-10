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
        DEFAULT: "var(--border-primary)",
        primary: "var(--border-primary)",
        secondary: "var(--border-secondary)",
        component: "var(--border-component)",
      },

      /* ---------------------
          FONT FAMILY
      --------------------- */
      fontFamily: {
        accent: ["var(--font-agrandir)"],
        base: ["var(--font-agrandir)"],
        alternative: ["var(--font-agrandir)"],
      },

      /* ---------------------
          FONT SIZES
      --------------------- */
      fontSize: {
        xs: "0.6rem", // 12px
        sm: "0.6rem", // 14px
        base: "0.75rem", // 16px
        lg: "1rem", // 18px
        xl: "1.1rem", // 20px
        "2xl": "1.25rem", // 24px
        "3xl": "1.5rem", // 30px
        "4xl": "1.875rem", // 36px
        "5xl": "2.25rem", // 48px
        "6xl": "3rem", // 60px
        "7xl": "3.75rem", // 72px
        "8xl": "4.5rem", // 96px
        "9xl": "6rem", // 128px
      },
    },
  },
  plugins: [],
} satisfies Config;
