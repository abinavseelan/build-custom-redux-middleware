const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const CLIENT_PATH_PREFIX = "client";
const ENTRY_POINT_APP = "index.js";
const CLIENT_BUILD_PATH = "build";

module.exports = {
  entry: {
    app: path.resolve(__dirname, CLIENT_PATH_PREFIX, ENTRY_POINT_APP),
  },
  target: 'web',
  externals: [nodeExternals()],
  node: {
    fs: 'empty',
    net: 'empty',
  },
  output: {
    path: path.resolve(__dirname, CLIENT_PATH_PREFIX, CLIENT_BUILD_PATH),
    publicPath: "/",
    filename: "js/[name].[chunkhash:6].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: "./client/index.html"
    })
  ]
};
