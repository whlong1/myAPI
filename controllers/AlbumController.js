const Album = require('../models/album')

const CreateAlbum = async (request, response) => {
    try {
        const album = await new Album(request.body)
        await album.save()
        return response.status(201).json({
            album,
        })
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}


module.exports = {
    CreateAlbum,
}