/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./App.jsx",
    "./main.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
