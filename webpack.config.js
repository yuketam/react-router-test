const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};