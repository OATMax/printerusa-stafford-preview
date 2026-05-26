import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f6ff",
          100: "#d9e8ff",
          200: "#b3d1ff",
          300: "#7ab2ff",
          400: "#3d8df0",
          500: "#1565d8",
          600: "#0d4ab2",
          700: "#093887",
          800: "#082a66",
          900: "#06204d",
        },
        ink: {
          900: "#0c1322",
          800: "#16213b",
          700: "#1f2d4c",
          600: "#2b3a5e",
          500: "#43547a",
          400: "#6c7e9f",
          300: "#9caaca",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
