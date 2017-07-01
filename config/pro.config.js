const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base.config')
const config = require('../config/index')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = merge({
  entry:  ['babel-polyfill', './src/main.js'],
  output: {
    path: config.build.assetsRoot,
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: "static/js/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules', 'less-loader', 'postcss-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
      }
    }),
    new ExtractTextPlugin({
      filename: path.join(config.build.assetsSubDirectory, '/css/[name].[contenthash].css')
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    })
  ]
}, base)