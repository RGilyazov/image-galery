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
    extend: {},
    fontFamily: {
      sans: ["PT Sans", "sans-serif"],
    },
  },
  plugins: [],
};
