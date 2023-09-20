import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: "var(--body-font)",
      display: "var(--display-font)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#262626",
        primaryLight: "#404040",
        secondary: "#C6834C",
        darkMode: "#171717",
        lightMode: "#F1F5F9",
      },
      maxWidth: {
        "1080p": "1920px",
        "720p": "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
