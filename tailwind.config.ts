import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0B3D2E",
          light: "#00FF8C",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      animation: {
        "gloss-slide": "gloss-slide 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "gloss-slide": {
          "0%": { transform: "translateX(-100%) translateY(-100%)" },
          "50%": { transform: "translateX(100%) translateY(100%)" },
          "100%": { transform: "translateX(-100%) translateY(-100%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
