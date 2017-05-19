var webpack = require("webpack");
var path = require("path");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
	debug: true,
	noInfo: false,
	devTool: 'cheap-module-eval-source-map',
	entry: './src/index.js',
	target: 'web',
	output: {
		path: __dirname + "/dist/scripts",
		publicPath: "/scripts",
		filename: "bundle.js",
	},
	devServer: {
		inline: true,
		contentBase: './src',
		port: 3000
	},
	plugins: [
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.optimize\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				discardComments: {
					removeAll: true
				}
			},
			canPrint: true
		}),
		
	],
	module: {
		loaders: [{
				test: /\.js$/,
				include: path.join(__dirname, 'src'), 
				exclude: /(node_modules)/,
				loader: ["babel-loader"],
				query: {
					presets: ["latest", "stage-0", "react"]
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader',
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /bootstrap\/js\//,
				loader: 'imports?jQuery=jquery'
			},
			{
				test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}
		]
	}
}