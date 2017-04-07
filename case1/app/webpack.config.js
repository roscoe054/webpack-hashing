var webpack = require('webpack');
var path = require('path');

/*
The fix :

var DelegatedModule = require('webpack/lib/DelegatedModule');
var Module = require('webpack/lib/Module');
DelegatedModule.prototype.updateHash = function(hash) {
	hash.update(this.identifier() + "");
	Module.prototype.updateHash.call(this, hash);
};*/

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
        filename: "[name].bundle.[chunkhash].js"
    }
}