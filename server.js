const express = require("express")
const port = 3040
const app = express()
const open = require('open')
require('./config/proxy')(app)
app.use(express.static('./dist/'))
app.listen(port, function (res) {
  console.log(`Listening on port ${port}!`)
  open(`http://localhost:${port}/#/index`)
})