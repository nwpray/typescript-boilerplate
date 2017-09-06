var path = require('path');

module.exports = {
	entry: './src/index.ts',
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve:{
		extensions:['.ts']
	},
	module:{
		rules:[
			{
				test:/.ts$/,
				use:['babel-loader', 'ts-loader']
			}
		]
	}
};