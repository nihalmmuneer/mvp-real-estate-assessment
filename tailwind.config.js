/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        davidLibre: ["David Libre", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        chillax: ["Chillax", "sans-serif"],
        santoshi: ["Santoshi", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        customGrey: "rgba(203, 213, 225, 1)",
        customBlue:"rgba(0, 46, 80, 1)"
      },
    },
  },
  plugins: [flowbite.plugin()],
};
