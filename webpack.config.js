"use strict";

const ExtractText = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer-stylus");

const entry = [
  path.join(__dirname, "app/assets/js/bootstrap.js")
];

const loaders = [{
  test: /\.json$/,
  loader: "json"
}, {
  test: /\.(png|jpg|svg)$/,
  loader: "file-loader?name=img/[name].[ext]"
}, {
  test: /\.styl$/,
  exclude: /node_modules/,
  loader: ExtractText.extract("css", "css-loader?sourceMap!stylus-loader?resolve url")
}, {
  test: /\.js?$/,
  exclude: /node_modules/,
  loader: "babel",
  query: {
    "presets": ["es2015", "react"]
  }
}];

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractText("styles.css", {
    allChunks: true
  })
];

const devtool = "#inline-source-map";

const stylus = {
  use: [autoprefixer()]
};


module.exports = {
  entry,
  output: {
    path: path.join(__dirname, "public/assets"),
    filename: "main.js",
    publicPath: "/"
  },
  module: {
    loaders
  },
  stylus,
  plugins,
  devtool
};
