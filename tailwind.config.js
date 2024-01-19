// @type {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  active : 'class',
  
  theme: {
    extend: {
      colors:{
        'headings' : '#1A202C',
        'nav':'#27005D',
        'background':'#AED2FF',
        'darkBg':'#1a202c',
      },
      fontFamily:{
        'fontfam':['-apple-system','system-ui','BlinkMacSystemFont',"Segoe UI",'Roboto',"Helvetica Neue",'Arial,sans-serif' ],

      },
      boxShadow:{
        'shade':'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
      }
      
    },
  },
  plugins: [],
}

