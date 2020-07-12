/* eslint-disable no-undef */
const path = require('path');
module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		port: 3001,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		disableHostCheck: true,
	},
	entry: path.resolve(process.cwd(), `srcpass/index.js`),
	output: {
		path: path.resolve(process.cwd(), 'dist'),
		libraryTarget: 'system',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				parser: {
					system: false,
				},
			},
		],
	},
	externals: ['single-spa', 'react-hook-form', 'lodash', 'react', 'react-dom', /^@ecp\/.*/],
};
