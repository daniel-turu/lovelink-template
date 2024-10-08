/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mistletoe: ['christmas', 'sans-serif'],
        adinekirnberg: ['AdineKirnberg'],
        arimo: ['Arimo'],
      },
    },
  },
  plugins: [],
}
