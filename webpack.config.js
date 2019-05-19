const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
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
  test: /\.jsx?$/,
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
  new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
  }),
  new CopyWebpackPlugin([
    // {output}/file.txt
    { from: 'app/assets/img', to: 'img' }
  ])
];

const devtool = '#source-map';

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'main.js',
    publicPath: ''
  },
  watch: false,
  module: {
    rules: loaders
  },
  plugins,
  devtool
};
