/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  
  theme: {
    extend: {
      colors:{
        'headings' : '#1A202C',
        'nav':'#2C7A7B',
      },
    },
  },
  plugins: [],
}

