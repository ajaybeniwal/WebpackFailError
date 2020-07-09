/* eslint-disable no-undef */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
module.exports = {
	entry: path.resolve(process.cwd(), `src/ecp-troubleticket.js`),
	output: {
		path: path.resolve(process.cwd(), 'dist'),
		libraryTarget: 'system',
		filename: 'bundle.js',
		jsonpFunction: `webpackJsonp_troubleticket`,
	},
	module: {
		rules: [
			{
				parser: {
					system: false,
				},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
					'less-loader', // compiles Sass to CSS, using Node Sass by default
				],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								modifyVars: {
									'font-family': 'proxima_novaregular',
								},
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg|eot|ttf|woff|woff2)$/,
				use: {
					loader: 'file-loader',
				},
			},
			{
				test: /\.(mp4|webm)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
					},
				},
			},
		],
	},
	externals: ['single-spa', 'react-hook-form', 'lodash', 'react', 'react-dom', /^@ecp\/.*/],
	plugins: [new CleanWebpackPlugin()],
};
