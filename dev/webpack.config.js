const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = {
  entry: './index.js',
  target: 'web',
  devtool: 'source-map',
  output: {
    path: 'dist',
    filename: 'bundle.js',
    hash: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      "PLAID_ENV",
      "PLAID_CLIENT_NAME",
      "PLAID_KEY",
      "PLAID_PRODUCT",
    ]),
    new HtmlWebpackPlugin({
      title: 'Credit Utilization Monitor',
      template: './template.html'
    })
  ]
};
