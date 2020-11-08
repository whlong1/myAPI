const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/myDatabase', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to MongoDB.');
      })
    .catch((event) => {
        console.error('Connection error', event.message)
    })


const db = mongoose.connection
module.exports = db