const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        creame: '#f5f6f7', //#f3f3f3
        black: "#060816",
        "gray-theme": "#181c20",
        "white-theme": "#fbfbfb",
        "gray-accent": "#dfe0e7",
        "primary": "#1CA664", //#1CA664 //blue:378afe
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
        'button': '#28e98c 1px 0px 10px 0px',
        'card': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        'card-dark': '-20px -8px 40px 8px rgb(0 0 0 / 18%)',
      },
      cursor: {
        'llama': 'url(/images/llama.png) 10 3, auto',
      },
      dropShadow: {
        "glow-moon": [
          "0 0px 30px #92a6ffb5",
          "0 0px 2px #92a6ff3b"
        ],
        "glow-sun": [
          "0 0px 30px #e58850ba",
          "0 0px 2px #e588507a"
        ]
      },
      keyframes: {
        //MENU OPEN
        openLineTop: {
          '60%': {
            top:'50%',
            transform: 'rotate(0deg)',
          },
          '100%': {
            top:'50%',
            transform: 'rotate(45deg)',
          }
        },
        openLineBottom: {
          '60%': {
            top:'50%',
            transform: 'rotate(0deg)',
          },
          '100%': {
            width: '100%',
            top:'50%',
            transform: 'rotate(135deg)',
          }
        },
        //MENU OPEN
        //MENU CLOSE
        closeLineTop: {
          '0%': {
            top:'50%',
            transform: 'rotate(45deg)',
          },
          '60%': {
            top:'50%',
            transform: 'rotate(0deg)',
          },
          '100%': {
            top:'0',
            transform: 'rotate(0deg)',
          }
        },
        closeLineBottom: {
          '0%': {
            top:'50%',
            transform: 'rotate(135deg)',
          },
          '60%': {
            top:'50%',
            transform: 'rotate(0deg)',
          },
          '100%': {
            top:'100%',
            transform: 'rotate(0deg)',
          }
        },
        //MENU CLOSE
        //MENU BACKGROUND
        appearBG: {
          'from': {
            opacity:'0'
          },
          'to': {
            opacity:'1'
          },
        },
        hideBG: {
          'from': {
            opacity:'1'
          },
          'to': {
            opacity:'0'
          },
        },
        //MENU BACKGROUND
        //BUTTON
        slideUpButton: {
          'from': {
            transform:'translateY(32px)'
          },
          'to': {
            transform:'translateY(0px)'
          },
        },
        slideDownButton: {
          'from': {
            transform:'translateY(0px)'
          },
          'to': {
            transform:'translateY(36px)'
          },
        },
        //BUTTON
      },
      animation: {
        'openLineTop': 'openLineTop .4s ease-in forwards',
        'openLineBottom': 'openLineBottom .4s ease-in forwards',
        
        'closeLineTop': 'closeLineTop .4s ease-in forwards',
        'closeLineBottom': 'closeLineBottom .4s ease-in forwards',
        
        'appearBG': 'appearBG .2s linear forwards',
        'hideBG': 'hideBG .2s .3s linear forwards',

        'slideUpButton': 'slideUpButton .2s .2s ease-out forwards',

        'slideDownButton': 'slideDownButton .2s ease-out forwards',
      }
    },
    fontFamily: {},
  },
  plugins: [],
};
