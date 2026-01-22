/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        embrapa: {
          green: '#00703c',
          light: '#e8f5e9',
          soil: '#8d6e63',
          water: '#0288d1',
          accent: '#fbc02d'
        }
      }
    },
  },
  plugins: [],
}

