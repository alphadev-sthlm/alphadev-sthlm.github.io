'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer-stylus');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackAutoInject = require('webpack-auto-inject-version');

const entry = [
  path.join(__dirname, 'app/assets/js/bootstrap.js')
];

const loaders = [{
  test: /\.json$/,
  loader: 'json'
}, {
  test: /\.(png|jpg|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]',
      }
    }
  ]
}, {
  test: /\.styl$/,
  exclude: /node_modules/,
  use: ExtractTextPlugin.extract({
    fallback: 'css-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'stylus-loader',
        options: {
          'resolve url': true,
          use: [autoprefixer()]
        },
      }
    ]
  }
  )
}, {
  test: /\.js?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      ignore: '/node_modules/',
      presets: ['es2015', 'react']
    }
  }
}];

const plugins = [
  //new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
  }),
  new CopyWebpackPlugin([
    // {output}/file.txt
    { from: 'app/assets/img', to: 'img' }
  ]),
  new WebpackAutoInject({
    components: {
      AutoIncreaseVersion: false,
      InjectAsComment: true,
      InjectByTag: true
    },
    componentsOptions: {
      AutoIncreaseVersion: {
        runInWatchMode: false // it will increase version with every single build!
      },
      InjectAsComment: {
        tag: 'Version: {version} - {date}',
        dateFormat: 'yyyyMMdd dS, hh:MM:ss TT'
      },
      InjectByTag: {
        fileRegex: /\.+/,
        dateFormat: 'yyyyMMdd dS, hh:MM:ss TT'
      }
    }
  })
];

const devtool = '#inline-source-map';

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'main.js',
    publicPath: ''
  },
  watch: true,
  module: {
    rules: loaders
  },
  plugins,
  devtool,
  devServer: {
    contentBase:path.resolve(__dirname, './'),
    publicPath: __dirname,
    compress: true,
    port: 9000
  }
};
