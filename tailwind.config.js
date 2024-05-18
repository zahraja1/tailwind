/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#a855f7',
        secondary:'#cbd5e1',
        dark:'#5b21b6'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}