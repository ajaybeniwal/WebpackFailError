/* eslint-disable no-undef */
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = merge(common, {
	mode: 'production',
	optimization: {
		runtimeChunk: false,
		splitChunks: {
			cacheGroups: {
				default: false,
			},
		},
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	plugins: [
		...(process.env.analyze
			? [
					new BundleAnalyzerPlugin({
						analyzerPort: 7785,
					}),
			  ]
			: []),
	],
});
