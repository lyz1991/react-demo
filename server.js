const express = require('express')
const port = 3040
const app = express()
const path = require('path')
const open = require('open')
// require('./config/proxy')(app)
app.use(express.static('./dist/'))
app.get('*', function (req, res) {
  console.log('req', path.extname(req.path))
  if (!path.extname(req.path)) {
    console.log('ee')
    res.sendFile(path.resolve(__dirname, './dist/index.html'))
  }
})
app.listen(port, function (res) {
  console.log(`Listening on port ${port}!`)
  // open(`http://localhost:${port}/index`)
})
