/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
        extend: {
          fontFamily: {
            body: ['Poppins', 'sans-serif'],
            custom: ['Sofia Sans Extra Condensed', 'sans-serif'],
          },
        },
  },
  plugins: [],
};