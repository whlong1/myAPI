const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rating = new Schema(
    {
        // _id: {type: String, required: true},
        tag: {type: String},
    },
    {timestamps: true},
)

module.exports = mongoose.model('ratings', Rating)
