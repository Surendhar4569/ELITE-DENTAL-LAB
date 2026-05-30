/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F6E8C',
        secondary: '#5AB2D1',
        accent: '#EAF8FC',
        dark: '#0a0a0a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}