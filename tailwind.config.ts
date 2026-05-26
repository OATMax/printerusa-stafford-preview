import type { Config } from "tailwindcss";

// Dark marketing-landing palette modeled after the reference design.
// Page bg = deep navy / near-black, hero accent words = yellow + orange,
// primary CTA = red, product cards on dark surface.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // page surfaces
        ink: {
          DEFAULT: "#0a0e1a",        // page bg (almost-black navy)
          950: "#070a14",            // darker still (header / sections)
          900: "#0a0e1a",            // primary page bg
          800: "#10162a",            // raised cards on dark
          700: "#1a2240",            // card border / accent rule
          600: "#2a3656",
          500: "#3a4870",
        },
        // brand navy from the live site (for header/footer chrome)
        navy: {
          DEFAULT: "#0A3161",
          900: "#06204D",
          700: "#1248A1",
        },
        // marketing accents
        accent: {
          red: "#e21e3a",            // primary CTA
          redHover: "#c4172e",
          orange: "#ff8b21",
          yellow: "#ffd33a",         // hero accent words ("NEAR YOU")
          teal: "#108474",
        },
        // CMYK + W swatch row
        swatch: {
          w: "#f4f4f4",
          c: "#00aeef",
          m: "#ec008c",
          y: "#fff200",
          k: "#1f1f1f",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
