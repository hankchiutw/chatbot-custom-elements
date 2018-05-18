"use strict";

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
  mode: 'none',
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'src/components'),
      path.resolve(__dirname, 'src/style'),
      'node_modules'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      'src/favicon.ico',
      'src/manifest.json'
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};

module.exports = config;
