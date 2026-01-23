/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_posts/**/*.md",
    "./index.html",
    "./**/*.html",
    "./**/*.md",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#DDE6ED',
          muted: '#9DB2BF',
          accent: '#526D82',
          dark: '#27374D'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
