import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07070A",
        surface: "#111118",
        purple: "#7C3AED",
        blue: "#3B82F6",
        gold: "#FACC15",
      },
      borderRadius: {
        xl2: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
