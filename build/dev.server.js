const express = require("express")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpack = require("webpack")
let webpackConfig = require("../config/dev.config")
const path = require('path')
let config = require('../config')
const app = express()
const open = require('open')
process.env.NODE_ENV === 'mock' && require('../mock/data')(app)
require('../config/proxy')(app)
let compiler = webpack(webpackConfig)
app.use(require("webpack-hot-middleware")(compiler));
app.use(path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory), express.static('./static'))
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.dev.assetsPublicPath
}))
app.listen(config.dev.port, function (res) {
  console.log(`Listening on port ${config.dev.port}!`)
  process.env.NODE_ENV !== 'mock' && open(`http://localhost:${config.dev.port}/#/index`)
})