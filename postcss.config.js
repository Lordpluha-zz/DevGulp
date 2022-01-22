module.exports = {
	parser: 'postcss-scss',
	plugins: [
		require('postcss-browser-reporter')({
			selector: 'body:before',
			styles: {
		    	color: 'red',
		    	'text-align': 'left',
		    	'font-size': '5px',
		    	'max-height': '5vh'
		    }
		})
	],
};
