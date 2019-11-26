const express = require('express')
const path = require('path')
const layouts = require('express-ejs-layouts')
const logger = require('morgan')
const bodyP = require('body-parser')
const app = express()

require('dotenv').config()
require('./config/db')
const routes = require('./routes')

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(layouts)
app.use(bodyP.urlencoded({extended: true}))
app.use('/', routes)

const port = process.env.PORT || 4000
app.listen(port, console.log(`Listening localhost:${port}`))
