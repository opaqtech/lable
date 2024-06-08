/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'phone': { min: '360px', max: '640px' },
        'ipad': { min: '768px', max: '1024px' },
        'pc': { min: '1280px', max: '7680px' }
      },
    },
  },
  plugins: [],
}