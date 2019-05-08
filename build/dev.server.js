const express = require("express")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpack = require("webpack")
let webpackConfig = require("../config/dev.config")
const path = require('path')
const chalk = require('chalk')
let config = require('../config')
const app = express()
const open = require('open')
process.env.NODE_ENV === 'mock' && require('../mock/data')(app)
// require('../config/proxy')(app)
let compiler = webpack(webpackConfig, function (err, stats) {
    process.stdout.write(stats.toString({
        colors: true,
        modules: true,
        children: false,
        chunks: true,
        chunkModules: true,
        noInfo: true
    }) + '\n\n')
    if (stats.hasErrors()) {
      console.log(chalk.red(" Build failed with errors.\n"))
      process.exit(1)
    }
    console.log(chalk.cyan(" Build complete.\n"));
})
app.use(require("webpack-hot-middleware")(compiler, {
  colors: true,
  noInfo: true
}));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.dev.assetsPublicPath
}))
app.use(path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory), express.static('./static'))
app.get('*', function (req, res) {
  console.log('path', req.path)
  if (!path.extname(req.path)) {
    res.sendFile(path.resolve(__dirname, '../dev.html'))
  } else {
    console.log('req',req.path)
  }
})
app.listen(config.dev.port, function (res) {
  console.log(`Listening on port ${config.dev.port}!`)
  // process.env.NODE_ENV !== 'mock' && open(`http://localhost:${config.dev.port}/index`)
})
