module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "torch-red": {
          DEFAULT: "#F91944",
          50: "#FFF9FA",
          100: "#FEE0E6",
          200: "#FDAEBD",
          300: "#FC7C95",
          400: "#FA4B6C",
          500: "#F91944",
          600: "#D9062E",
          700: "#A80424",
          800: "#760319",
          900: "#44020F",
        },
      },
      height: {
        noScr: "80vh"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
