const { Schema } = require('mongoose')

const Artist = new Schema (
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('artists', Artist)