import type { Config } from "tailwindcss";

// Brand palette reverse-engineered from dtfprinterusa.com (2026-05-26)
// Primary navy #0A3161 (Old Glory blue), accent red #B31942, promo orange #FF8B21,
// teal accent #108474, body text #232323
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A3161",
          900: "#06204D",
          800: "#0A3161",
          700: "#1248A1",
          600: "#1D4077",
          500: "#3E8CC4",
        },
        accent: {
          red: "#B31942",
          orange: "#FF8B21",
          teal: "#108474",
        },
        body: "#232323",
        surface: {
          DEFAULT: "#ffffff",
          alt: "#fafafa",
          search: "#f1f1f1",
          border: "#dadada",
          muted: "#969696",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: {
        container: "1370px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
