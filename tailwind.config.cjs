// tailwind.config.cjs
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pier Sans", ...defaultTheme.fontFamily.sans],
        serif: ["The Seasons", ...defaultTheme.fontFamily.serif],
        branding: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        aurea: {
          primary: "#1d1d1b",
          secondary: "#e7decd",
          accent: "#ac8e60",
          white: "#ffffff",
          black: "#000000",
          gray: "#808080",
        },
      },
    },
  },
  plugins: [],
};
