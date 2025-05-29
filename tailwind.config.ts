import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // TokyoNight color scheme
        tokyo: {
          bg: "#1a1b26",
          bgDark: "#16161e",
          bgHighlight: "#292e42",
          terminal: "#15161e",
          fg: "#c0caf5",
          fgDark: "#a9b1d6",
          comment: "#565f89",
          cyan: "#7dcfff",
          blue: "#7aa2f7",
          purple: "#bb9af7",
          green: "#9ece6a",
          orange: "#ff9e64",
          red: "#f7768e",
          yellow: "#e0af68",
          magenta: "#bb9af7",
          pink: "#f7768e",
        },
        // Light mode colors
        light: {
          bg: "#ffffff",
          bgSecondary: "#f8fafc",
          fg: "#1e293b",
          fgSecondary: "#475569",
          border: "#e2e8f0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #7aa2f7" },
          "100%": { boxShadow: "0 0 20px #7aa2f7, 0 0 30px #7aa2f7" },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config
