const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname, '../src')
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
        exclude: [/node_modules/, /config/, /ignore_lib/],
      },
      {
        test: /\.js$/,
        include: projectRoot,
        loaders: ['babel-loader'],
        exclude: [/node_modules/, /ignore_lib/]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }

    ]
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
  ]
}