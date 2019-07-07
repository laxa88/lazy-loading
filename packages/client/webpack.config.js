const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: './src',

  devtool: 'source-map',

  output: {
    filename: '[name].output.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      { test: /\.(jsx|js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },

  // Reference: https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
  optimization: {
    splitChunks: {
      chunks: 'all',
    },

    runtimeChunk: 'single',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
    }),
  ],
};
