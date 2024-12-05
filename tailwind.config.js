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
        customBlue: "rgba(0, 46, 80, 1)",
      },
      animation: {
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "fade-in-slow": "fadeInSlow 1.5s ease-out forwards",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInSlow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
