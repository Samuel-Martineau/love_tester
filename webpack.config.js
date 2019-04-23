var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
	filename : 'bundle.css',
});

module.exports = {
	entry   : './src/js/main.js',
	output  : {
		filename : 'bundle.js',
		publicPath: '/'
	},
	devtool : 'inline-source-map',
	module  : {
		rules : [
			{ test: /\.svg$/, loader: 'svg-inline-loader' },
			{
				test    : /\.js$/,
				loader  : 'babel-loader',
				options : {
					babelrc : false,
					presets : [
						'@babel/preset-env',
					],
				},
			},
			{
				test : /\.scss$/,
				use  : extractPlugin.extract({
					use : [
						'css-loader',
						'sass-loader',
					],
				}),
			},
			{
				test : /\.css$/,
				use  : extractPlugin.extract({
					use : [
						'css-loader',
					],
				}),
			},
			{
				test : /\.html$/,
				use  : [
					'html-loader',
				],
			},
			{
				test : /\.(jpg|png|svg)$/,
				use  : [
					{
						loader  : 'file-loader',
						options : {
							name       : '[name].[ext]',
							outputPath : 'img/',
							publicPath : 'img/',
						},
					},
				],
			},
		],
	},
	plugins : [
		extractPlugin,
		new HtmlWebpackPlugin({
			filename : 'index.html',
			template : 'src/html/index.html',
		}),
		new webpack.ProvidePlugin({
			$      : 'jquery',
			jQuery : 'jquery',
		}),
		new CleanWebpackPlugin(),
	],
};
