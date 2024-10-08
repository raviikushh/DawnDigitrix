/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur:{
        'none': '0',
        'sm': '4px',
        'lg': '12px',
      },
      colors:{
        primary : "#fdcd2d",
        secondary : "#f0ac0e",
      },
      fontFamily: {
        sans : ["Roboto", "sans-serif"],
      },
      container : {
        center : true,
        padding : {
          DEFAULT : "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      }
    },
    darkMode: "class",
  plugins: [nextui()]
  },
  variants: {
    backdropBlur: ['responsive'], 
  },
  plugins: [],
}
