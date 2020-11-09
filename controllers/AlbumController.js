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

const FindAllAlbums = async (request, response) => {
    try{
        const albums = await Album.find()
        return response.status(200).json({albums})
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const FindOneAlbum = async (request, response) => {
    try{
        const {albumName} = request.params
        const title = await Album.find({title: {$eq: albumName}})
        return response.status(200).json({title})
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const AlbumByYear = async (request, response) => {
    try{
        const {releaseYear} = request.params
        const year = await Album.find({date: {$eq: releaseYear}})
        return response.status(200).json({year})
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const DeleteAlbum = async (request, response) => {
    try{
        const {id} = request.params
        const deleted = await Album.findByIdAndDelete(id)
        if (deleted) {
            return response.status(200).send("Album Removed")
        }
        throw new Error ("Album not found")
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const UpdateAlbum = async (request, response) => {
    try{
        const {id} = request.params
        await Album.findByIdAndUpdate(id, request.body, {new: true}, (error, album) => {
            if (error) {
                response.status(500).send(error)
            }
            if (!album) {
                response.status(500).send('Album not found')
            }
            return response.status(200).json(album)
        })
    } catch (error) {
        return response.status(500).send(error.message)
    }
}











module.exports = {
    CreateAlbum,
    FindAllAlbums,
    FindOneAlbum,
    AlbumByYear,
    DeleteAlbum,
    UpdateAlbum
}