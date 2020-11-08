const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Album = new Schema(
    {
        title: {type: String, required: true},
        artist: {type: Schema.Types.ObjectId, ref: 'artists'},
        label: {type: Schema.Types.ObjectId, ref: 'labels'},
        date: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('albums', Album)