/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",  // Incluye todos los archivos HTML en la carpeta 'public'
    "./src/**/*.{js}",  // Incluye todos los archivos JS/TS en la carpeta 'src'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      width: {
        '1000': '1000px',
        'no100': '0px',
      },
    },
  },
  plugins: [],
}

