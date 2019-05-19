const path = require('path');
const autoprefixer = require('autoprefixer-stylus');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        // publicPath: '../',
        hmr: process.env.NODE_ENV === 'development',
      },
    },
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
}, {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      ignore: ['/node_modules/']
    }
  }
}];

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'styles.css',
    allChunks: true
  }),
  new CopyWebpackPlugin([
    // {output}/file.txt
    {from: 'app/assets/img', to: 'img'}
  ]),
  // new BundleAnalyzerPlugin({
  //   options: {
  //     analyzerMode: 'static',
  //     openAnalyzer: false
  //   }
  // })
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool
};
