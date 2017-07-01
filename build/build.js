process.env.NODE_ENV = 'production'
const buildconfig = require('../config/pro.config')
const path = require('path')
const config = require('../config')
const webpack = require('webpack')
const rm = require('rimraf')
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), (err) => {
  if (err) throw err
  webpack(buildconfig, (err, stats)=> {
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')
  })
})
