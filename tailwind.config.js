/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#12302D',
        'softpink': '#D09D91',
         'lightgreen':'#26665f',
         'button':'#b45c41',
      },
      screens: {
        'md-lg': {'min': '890px', 'max': '890px'},
      },
      scale: {
        'sm': '2.7', // Scale factor for small screens
        'md': '2.5', // Scale factor for medium screens
        'lg': '2.2', // Scale factor for large screens
      },
    },
  },
  plugins: [],
}

 
 