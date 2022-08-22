/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      keyframes: {
        blur: {
          "0%": { filter: "blur(4px)", opacity: 0 },
          "100%": { filter: "blur(0)", opacity: 0.99 },
        },
      },
      animation: {
        "image-loading": "blur 2s linear",
        "image-loaded": "blur 0.5s linear",
      },
    },
    fontFamily: {
      sans: ["PT Sans", "sans-serif"],
    },
  },
  plugins: [],
};
