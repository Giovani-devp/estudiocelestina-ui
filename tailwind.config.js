/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        amarelo: '#FFD300',
        rosa: '#F984CD',
        laranja: '#F8460D',
        cinza: '#E6DED3',
        verde:'#A59D47',
        azulsky: '#A0DCE5',
        azul: '#0079C7'
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")]
}
