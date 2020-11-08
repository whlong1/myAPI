const express = require('express')
const AppRouter = require('./routes/AppRouter');
const db = require('./db');

const PORT = process.env.PORT || 3002

const app = express()

app.use('/api', AppRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT)

console.log(`Listening on ${PORT}`)

