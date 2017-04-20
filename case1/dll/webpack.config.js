var webpack = require('webpack');
var path = require('path');
var HashedModuleIdsPlugin = require("webpack-hashed-module-id-plugin");

module.exports = {
  entry: {
    lib: [ 'knockout', 'jquery' ]
  },

  plugins: [
    new webpack.DllPlugin({
      path: 'dist/[name]-manifest.json',
      name: '[name]_lib'
    }),
    new HashedModuleIdsPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: 'dist/',
    library: '[name]_lib',
  },
}
