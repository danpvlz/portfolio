const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // white: '#E9E6E2',
        black: "#121212",
        "gray-theme": "#181c20",
        "gray-transparent": "#2f2f2f",
        "green-theme": "#28e98c", //#1CA664 //blue:378afe
      },
      borderWidth:{
        '1': '1px',
      },
      borderRadius:{
        '4xl': '60px',
      },
      width:{
        '15': '60px',
      },
      height:{
        '15': '60px',
        '500': '500px',
        '700': '700px',
      },
      minHeight: {
        '500': '500px',
        '700': '700px',
      },
      maxHeight: {
        '500': '500px',
        '700': '700px',
      },
      boxShadow:{
        'button': '#28e98c 1px 0px 10px 0px'
      },
      cursor: {
        'llama': 'url(/images/llama.png) 10 3, auto',
      }
    },
    fontFamily: {},
  },
  plugins: [],
};
