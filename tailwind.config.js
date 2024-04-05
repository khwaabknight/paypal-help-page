/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'accent': {
          1: '#002f87',
          2: '#0071e0',
          3: '#e4f1fb',
          4: '#73a5ff',
          5: '#f6f7fb',
        },
        'alert': {
          'base': '#7b5504',
          'light': '#fff0a8',
          'dark': '#745a0e',
        }
      }
    },
  },
  plugins: [],
}

