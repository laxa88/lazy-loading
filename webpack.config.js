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
      {test : /\.(js)$/, use:'babel-loader'},
      {test : /\.css$/, use:['style-loader', 'css-loader']}
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template : 'template/index.html'
    })
  ]
};
