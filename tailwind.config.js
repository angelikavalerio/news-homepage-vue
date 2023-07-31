/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'max': '767px'},
      'md': {'max': '1023px'},
      'lg': {'max': '1279px'},
      'xl': {'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      animation: {
        'spin-entrance': 'spin .5s linear .5'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
