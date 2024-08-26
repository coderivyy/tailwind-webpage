/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    
    extend: {
      colors: {
        'mycolor': '#a251e8',
        'primary1': '#3238f2',
        'primary2': '#7612db'
      },
      fontFamily: {
        'display': ['Poppins' ,'san-sarif'],
        'body': ['Inter' ,'San-sarif']
      }
    },
  },
  plugins: [],
}


//tailwind start:  npx tailwindcss -i ./style.css -o ./output.css --watch
