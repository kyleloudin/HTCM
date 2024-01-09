/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#09000a",
        secondary: "#97a82a",
        thirdary: "#a0a7c2",
        tertiary: "#81821e",
        "black-100": "#420705",
        "black-200": "#97a82a",
        "white-100": "#c6d65c",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #97a82a",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

