var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: './src/app'
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('../dll/dist/lib-manifest.json')
    })
  ],
  output: {
        path: path.resolve(__dirname, "./dist/"),
        publicPath: "../",
        filename: "[name].bundle.[hash].js"
    }
}