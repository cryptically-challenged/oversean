/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderColor: {
      black: "#000000",
    },
    extend: {
      colors: {
        overseanBlue: "#117eff",
        overseanYellow: "#f5b127",
        overseanPink: "#f64a89",
        overseanBlack: "#000000",
      },
    },
  },
  plugins: [],
};
