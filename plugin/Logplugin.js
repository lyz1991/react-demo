let {SyncBailHook} = require('tapable')
const fs = require('fs')
class LogPlugin  {
  apply(compiler) {
    compiler.hooks.emit.tap('log', (compilation) => {
      const rules = compiler.options.module.rules
      let loaders = []
      const hasloader = context => context.indexOf('-loader') !== -1
      for (let value of compilation.entrypoints.values()) {
        console.log('enval', value.getRuntimeChunk())
      }
      rules.map(rule => {
        if (rule.loaders) {
          const loader = rule.loaders.filter(item => hasloader(item)).map(item=>{
            return item.substring(0, item.indexOf('?') === -1 ? item.length : item.indexOf('?'))
            }
          )
          loaders = loaders.concat(loader)
        }
        if (rule.use) {
          const loader = rule.use.filter(item => hasloader(item)).map(item=>{
            return item.substring(0, item.indexOf('?') === -1 ? item.length : item.indexOf('?'))
            }
          )
          loaders = loaders.concat(loader)
        }
        if (rule.loader) {
         loaders.push(rule.loader)
        }
      })
      const res = [...new Set(loaders)]
      compilation.assets['filelist.md'] = {
        source: function() {
          return res.join(' ')
        },
        size: function() {
          return res.length;
        }
      };
    })
  }
}
module.exports = LogPlugin