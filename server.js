const express = require('express')
const AppRouter = require('./routes/AppRouter')
const db = require('./db/index')
const logger = require('morgan')
const cors = require('cors')
// const Product = require('./models/product')

const PORT = process.env.PORT || 3002
const app = express()

//Middleware
app.use(logger('dev'))
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
//Middleware


app.get('/', (request, response) => response.send({msg:'TESTING SERVER'}))

app.use('/browse', AppRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT)

console.log(`Listening on ${PORT}`)

