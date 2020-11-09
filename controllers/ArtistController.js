const Artist = require('../models/artist')


const AddArtist = async (request, response) => {
    try {
        const artist = await new Artist(request.body)
        await artist.save()
        return response.status(201).json({
            artist,
        })
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

const FindAll = async (request, response) => {
    try{
        const artists = await Artist.find()
        return response.status(200).json({artists})
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

module.exports = {
    AddArtist,
    FindAll,
}