import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          purple: "#7C3AED",
          dark: "#0F172A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#1E293B",
        },
        base: {
          light: "#FFFFFF",
          dark: "#0B1120",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.12) 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(37,99,235,0.25)",
        "soft-dark": "0 10px 40px -10px rgba(0,0,0,0.5)",
      },
      animation: {
        blob: "blob 8s infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
