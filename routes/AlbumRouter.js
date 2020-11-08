const Router = require('express').Router()
const AlbumController = require('../controllers/AlbumController')


Router.post('/create', AlbumController.CreateAlbum)
//POST->localhost:3002/browse/albums/create

module.exports = Router
