const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const db = require('./database')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/* connect database */
db.connect()
/* router */
require('./routes')(app)

app.listen(config.port)
