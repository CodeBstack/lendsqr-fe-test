/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1240px",
      xl: "1640px",
    },

    extend: {
      fontFamily: {
        // Mulish: ["Mulish", "sans-serif"],
        WorkSans: ['Work Sans', "sans-serif"]
      },
      overflow: {
        unset: "unset",
      },
      colors: {
        primary: "#39CDCC",
        "primary-light": "#FFE5CD",
        primary_200: '#213F7D',
        primary_300: '#545F7D',
        secondary: "#321E1F",
      },
      borderRadius: {
        10: "10px",
        16: "1rem",
        20: "20px",
        24: "24px",
        25: "25px",
        36: "36px",
        128: "128px",
      },
      boxShadow: {
        input: "0px 30px 30px rgba(131, 9, 0, 0.05)",
      },
    },
  },
  plugins: [],
};