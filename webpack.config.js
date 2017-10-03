const path = require('path');
var webpack = require('webpack');

var config = {
	entry: path.resolve(__dirname, './main.js'),
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'index.js',
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: path.resolve(__dirname, './node_modules/babel-loader'),
				query: {
					presets: ['es2015', 'react']
				}
			}, {
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=100000"
			},
			{
				test: /\.jpg$/,
				loader: "file-loader"
			}, {
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/octet-stream'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=image/svg+xml'
			}
		]
	}
}
module.exports = config;