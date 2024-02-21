/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif']
      },

      screens: {
        laptopSmall: { max: '1024px' },
        tablet: { max: '768px' },
        premobile: { max: '650px' },
        premobile1: { max: '550px' },
        mobile: { max: '425px' },
        phone: { max: '375px' },
        radio: { max: '330px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },

   
    },
  },
  
  plugins: [require("tailwindcss-animated")]
}



