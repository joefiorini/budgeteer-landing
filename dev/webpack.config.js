import {resolve, join} from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

require('dotenv').config();

const {HOST = '0.0.0.0', PORT = 8000} = process.env;

module.exports = {
  context: resolve(join(__dirname, '../src')),
  entry:
  { app: ['./'],
  },
  target: 'web',
  devtool: 'source-map',
  output:
  { path: '/src/budgeteer-landing/dist',
    filename: 'bundle.js',
    hash: true,
    publicPath: `http://${HOST}:${PORT}/`
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(process.env),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    url: `http://${HOST}:${PORT}`,
    host: HOST,
    port: PORT
  }
};
