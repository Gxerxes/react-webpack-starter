const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
const outputPath = path.join(__dirname, "dist");

// require('font-awesome-webpack');
var StringReplacePlugin = require('string-replace-webpack-plugin');
const extractCSS = new ExtractTextPlugin('main.css');
const semanticCssPath = path.resolve(__dirname, 'node_modules/semantic-ui-css/semantic.min.css');

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
			// {
			// 	test: /semantic\.css$/,
			// 	loader: StringReplacePlugin.replace({
			// 	  replacements: [{
			// 		  pattern: /https\:\/\/fonts\.googleapis\.com[^\']+/ig,
			// 		  replacement: function (match, p1, offset, string) {
			// 			return 'data:text/css,*{}'
			// 		  }
			// 		}]
			// 	})
			// }
			// {
			// 	test: /\.css$/,
			// 	include: semanticCssPath,
			// 	use: extractCSS.extract(['css-loader'])
			// },
			// {
			// 	test: /\.css$/,
			// 	exclude: semanticCssPath,
			// 	use: extractCSS.extract(['css-loader?importLoader=1&modules&localIdentName=[name]---[local]---[hash:base64:5]', 'postcss-loader'])
			// },
			// {
			// 	test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			// 	loader: 'url-loader?limit=100000'
			// }
			      // the url-loader uses DataUrls. 
      // the file-loader emits files. 
			// { 
			// 	test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			// 	loader: "url-loader?limit=10000&mimetype=application/font-woff" 
			// },
			// { 
			// 	test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			// 	loader: "file-loader" 
			// }
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
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
		new StringReplacePlugin(),
	// 	new webpack.SourceMapDevToolPlugin({
	// 		filename: '[file].map'
	//    })
	],
	devtool: "source-map",
	devServer: {
		port,
		hot: true,
		historyApiFallback: true
	}
}