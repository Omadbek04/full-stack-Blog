import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        bgDark: " rgb(24, 26, 42)",
        cardDark: "rgb(24, 26, 42)",
        footerBg: " rgb(246, 246, 247)",
        footerDarkBg: "rgb(20, 22, 36)",
        footerEmailDark: "rgb(36, 37, 53)",
      },
      colors: {
        linkColor: "rgb(59, 60, 74)",
      },
      borderColor: {
        darkBorder: "rgb(36, 37, 53)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
