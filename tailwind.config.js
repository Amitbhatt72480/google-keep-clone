/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "*","./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        'bai-jamjuree' : 'Bai Jamjuree',
        'mclaren' : 'McLaren',
        'Dancing' : 'Dancing Script'
      }
    },
  },
  plugins: [],
}
