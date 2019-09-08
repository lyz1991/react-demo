const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname, '../src')
const LogPlugin = require('../plugin/Logplugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: projectRoot,
        exclude: [/node_modules/, /ignore_lib/, /router/],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        include: projectRoot,
        loaders: ['babel-loader'],
        exclude: [/node_modules/,/config/, /ignore_lib/]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'text-loader'
      },
        {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.xls$/,
        loader: 'text-loader',
        options: {
          limit: 10
        }
      }
    ]
  },
  resolveLoader: {
    alias: {
        'text-loader': path.resolve(__dirname, '../loaders/text-loader')
    },
  },
  resolve: {
    extensions: ['.js', '.less', '.json', '.scss'],
    alias: {
      'components': path.resolve(__dirname, '../src/components'),
      'Common': path.resolve(__dirname, '../src/components/Common'),
      'plugins': path.resolve(__dirname, '../src/plugins'),
      'actions': path.resolve(__dirname, '../src/redux/actions'),
      'reducer': path.resolve(__dirname, '../src/redux/reducer'),
      'static': path.resolve(__dirname, '../static'),
      'store': path.resolve(__dirname, '../src/store')
    }
  },
  plugins: [
    new LogPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        context: __dirname
      }
    })
  ]
}