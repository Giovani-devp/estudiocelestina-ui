/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
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
      },
      fontFamily: {
        'ramona-light': ['Ramona-Light', 'sans-serif'],
        'ramona-bold': ['Ramona-Bold', 'sans-serif'],
        'hkgrotesk-regular': ['HKGrotesk-Regular', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: []
}
