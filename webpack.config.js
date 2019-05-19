'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer-stylus');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entry = [
  path.join(__dirname, 'app/assets/js/bootstrap.js')
];

const loaders = [{
  test: /\.json$/,
  loader: 'json'
}, {
  test: /\.(png|jpg|jpeg|svg)$/,
  loader: 'file-loader?name=img/[name].[ext]'
}, {
  test: /\.styl$/,
  exclude: /node_modules/,
  loader: ExtractText.extract('css', 'css-loader?sourceMap!stylus-loader?resolve url')
}, {
  test: /\.js?$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    'presets': ['es2015', 'react']
  }
}];

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }),
  new ExtractText('styles.css', {
    allChunks: true
  }),
  new CopyWebpackPlugin([
    // {output}/file.txt
    { from: 'app/assets/img', to: 'img' }
  ])
];

const devtool = '#source-map';

const stylus = {
  use: [autoprefixer()]
};

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'main.js',
    publicPath: ''
  },
  watch: false,
  module: {
    loaders
  },
  stylus,
  plugins,
  devtool
};
