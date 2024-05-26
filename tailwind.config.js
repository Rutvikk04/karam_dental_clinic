/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
       ".my-rotate":{
        transform:"rotateY(180deg)"
       },
       ".perspective":{
        perspective: "1000px"
      },  
      ".preserve-3d":{
        transformStyle:" preserve-3d"
      },
      ".backface-hidden":{
        backfaceVisibility:"hidden"
      }
      }
      addUtilities(newUtilities)
    }),
  ],
}

