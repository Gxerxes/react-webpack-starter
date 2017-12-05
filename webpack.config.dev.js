const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
const outputPath = path.join(__dirname, "dist")

// require('font-awesome-webpack');
var StringReplacePlugin = require('string-replace-webpack-plugin')

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: __dirname,
		filename: 'dist/bundle.js'
	},
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader!sass-loader'
				}),
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				}),
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', "stage-0", "react"]
				}
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			// {
            //     test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
			// 	//loader: 'file'
			// 	loader: 'file-loader?publicPath=/static/res/&outputPath=font/'
			// }
			{
				test: /semantic\.css$/,
				loader: StringReplacePlugin.replace({
				  replacements: [{
					  pattern: /https\:\/\/fonts\.googleapis\.com[^\']+/ig,
					  replacement: function (match, p1, offset, string) {
						return 'data:text/css,*{}'
					  }
					}]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("bundle.css"),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(__dirname, '/index.html')
		}),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
		new StringReplacePlugin()
	],
	devtool: "source-map",
	devServer: {
		port,
		hot: true,
		historyApiFallback: true
	}
}