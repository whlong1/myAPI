const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Album = new Schema(
    {
        title: {type: String, required: true},
        artist: {type: String, required: true},
        label: {type: String, required: true},
        date: {type: String, required: true},
        rating: { type: Schema.Types.ObjectId, ref: 'ratings'}
    },
    {timestamps: true},
)




module.exports = mongoose.model('albums', Album)


