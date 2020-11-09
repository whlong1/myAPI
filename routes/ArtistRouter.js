const Router = require('express').Router()
const ArtistController = require('../controllers/ArtistController')


Router.post('/add', ArtistController.AddArtist)
//POST->localhost:3002/browse/artists/add
Router.get('/all', ArtistController.FindAll)
//GET->localhost:3002/browse/artists/all





module.exports = Router