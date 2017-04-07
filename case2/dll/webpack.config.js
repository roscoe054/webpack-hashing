var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    lib: [ 'knockout', 'jquery' ]
  },

  plugins: [
    new webpack.DllPlugin({
      path: 'dist/[name]-manifest.json',
      name: '[name]_lib'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: 'dist/',
    library: '[name]_lib',
  },
}