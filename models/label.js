const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Label = new Schema (
    {
        name: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('labels', Label)