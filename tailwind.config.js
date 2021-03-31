const colours = require('tailwindcss/colors');
module.exports = {
	purge: ['./*.html', './*.vue', './*.jsx'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				orange: colours.orange,
				teal: colours.teal,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
