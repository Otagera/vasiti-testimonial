const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
	  	fontFamily: {
	  		'inter': ['Inter', 'sans-serif']
	  	},
      colors: {
        'btnOrange': '#FF5C00',
        'lime': colors.lime
      }
	  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
