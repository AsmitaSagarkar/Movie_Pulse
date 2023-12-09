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
    },
  },
  plugins: [],
}

