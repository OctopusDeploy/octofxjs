var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

var OctoWebpackPlugin = require('@octopusdeploy/octo-webpack-plugin');

module.exports = {
  entry: "./src/js/app/script.js",
  output: {
    filename: "./public/js/scripts.js"
  },
  plugins: [
      new OctoWebpackPlugin({
        host: "http://octopus-url",
        apiKey: "apikey"
      })
  ]
};