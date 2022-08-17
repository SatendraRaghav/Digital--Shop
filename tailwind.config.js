/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'tomato':'#ff6347'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
