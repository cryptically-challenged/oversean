/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderColor: {
      black: "#000000",
    },
    extend: {
      fontFamily:{
        'sexyfont':['Darker Grotesque', 'sans-serif']
      },
      colors: {
        blue: "#117eff",
        yellow: "#f5b127",
        pink: "#f64a89",
        black: "#000000",
        grey:"#787276",
        cream:'#efebe2',
        test:"#f3f9d2",
      },
    },
  },
  plugins: [],
};
