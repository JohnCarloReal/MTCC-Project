/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F0CD25',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#f4b301',
        'neutralGrey': '#717171',
        'gray-900': '#717171',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

