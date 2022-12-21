/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderColor: {
      black: "#000000",
    },
    extend: {
      colors: {
        blue: "#117eff",
        yellow: "#f5b127",
        pink: "#f64a89",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
