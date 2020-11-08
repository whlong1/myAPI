const express = require('express')
const AppRouter = require('./routes/AppRouter');
const db = require('./db');

const PORT = process.env.PORT || 3002
const app = express()

//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json())
//Middleware

app.use('/browse', AppRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT)

console.log(`Listening on ${PORT}`)

