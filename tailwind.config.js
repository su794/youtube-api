/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1240px',
        'xxl': '1560px',
      },
      fontSize: {
        'text-2xs': '10px',
      },
      colors: {
        'youtube-red': '#FF0000',
      },
    },
  },
  plugins: [],
}