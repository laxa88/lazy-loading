const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",

  entry: "./src",

  output: {
    filename: "[name].output.js",
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist')
  },

  module : {
    rules : [
      {test : /\.(jsx|js)$/, use:'babel-loader'},
      {test : /\.css$/, use:['style-loader', 'css-loader']}
    ]
  },

  // Reference: https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
  optimization: {
    splitChunks: {
      chunks: 'all'
    },

    runtimeChunk: 'single',

    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template : 'template/index.html'
    })
  ]
};
