/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xl: { max: "1600px" },

      lg: { max: "1044px" },

      md: { max: "880px" },

      sm: { max: "740px" },
    },
    extend: {},
  },
  plugins: [],
};
