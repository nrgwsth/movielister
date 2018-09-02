const path = require("path")

module.exports = {
	entry: "./index",
	mode: "production",
	devtool: "source-map",
	output: {
		path: __dirname,
		filename: "build.js",
		publicPath: "/"
	},
	module: {
		rules: [{
			test: /.jsx?$/,
			loader: "babel-loader",
			exclude: [
	          path.resolve(__dirname, "node_modules")
        	],
        	options: {
	          presets: ["@babel/env"]
	        }
		}, {
			test: /.css$/,
			loader: ["style-loader", "css-loader"]
		}]
	}
}

