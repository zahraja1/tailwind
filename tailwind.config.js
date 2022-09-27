/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['tugas/index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#a855f7',
        dark: '#0f172a',
        grey: '#4b5563',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}