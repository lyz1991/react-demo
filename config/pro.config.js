const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base.config')
const config = require('../config/index')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge({
  entry:  ['@babel/polyfill', './src/main.js'],
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks(chunk) {
        return chunk.resource && /\.js$/.test(chunk.resource) && chunk.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
      },
      minChunks: 3
    }
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'static/js/[name].js',
    chunkFilename: "static/js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          miniCssExtractPlugin.loader, 'css-loader?modules', 'less-loader', 'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
            filename: 'focus.index.[contenthash:8].css'
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
