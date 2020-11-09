const Router = require('express').Router()

const AlbumRouter = require('./AlbumRouter')
const ArtistRouter = require('./ArtistRouter')
const LabelRouter = require('./LabelRouter')

Router.use('/albums', AlbumRouter)
//1. localhost:3002/browse/albums/create
//2. localhost:3002/browse/albums/all
//3. localhost:3002/browse/albums/search/1
//4. localhost:3002/browse/albums/date/1966
//5. localhost:3002/browse/albums/5fa8aa421f85db4f07bb3fb7
//6. localhost:3002/browse/albums/edit/5fa8a7856f56af4c0dd604be

Router.use('/artists', ArtistRouter)

Router.use('/labels', LabelRouter)


module.exports = Router
