import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#2f2f2f",
        background: "#f5f5f3",
        borderline: "#C5C5C5",
        textSecondary: "#5a5a5a",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        montserrat: ["var(--font-montserrat)"],
        literata: ["var(--font-literata)"],
      }
    },
  },
  plugins: [],
};

export default config;