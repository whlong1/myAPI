const Router = require('express').Router()
const AlbumController = require('../controllers/AlbumController')


Router.post('/create', AlbumController.CreateAlbum)
//POST->localhost:3002/browse/albums/create
Router.get('/all', AlbumController.FindAllAlbums)
//GET->localhost:3002/browse/albums/all

Router.get('/search/:albumName', AlbumController.FindOneAlbum)
// GET->localhost:3002/browse/albums/search/1

Router.get('/date/:releaseYear', AlbumController.AlbumByYear)
// //GET->localhost:3002/browse/albums/date/1966

Router.delete('/:id', AlbumController.DeleteAlbum)
//DELETE-> localhost:3002/browse/albums/5fa8aa421f85db4f07bb3fb7

Router.put('/edit/:id', AlbumController.UpdateAlbum)
//PUT-> localhost:3002/browse/albums/edit/5fa8a7856f56af4c0dd604be

module.exports = Router
