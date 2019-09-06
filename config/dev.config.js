const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge({
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000','@babel/polyfill','./src/main.js'],
  output: {
    path: '/',
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: ['style-loader','css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'less-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader','css-loader', 'sass-loader', 'postcss-loader']
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'dev.html',
      template: 'dev.html',
      inject: true
    })
  ],
  devtool: 'eval-source-map',
}, base)
