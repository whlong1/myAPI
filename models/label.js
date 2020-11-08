const { Schema } = require('mongoose')

const Label = new Schema (
    {
        name: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('labels', Label)