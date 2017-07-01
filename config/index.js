/**
 * Created by yunzhaoliu on 17/5/16.
 */
const path = require('path')
module.exports = {
  build: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    assetsRoot: path.resolve(__dirname, '../dist')
  },
  dev : {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    port: 3030,
  }
}