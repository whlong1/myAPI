const Router = require('express').Router()

const AlbumRouter = require('./AlbumRouter')

Router.use('/albums', AlbumRouter)
//1. localhost:3002/browse/albums/create
//2. localhost:3002/browse/albums/all


module.exports = Router
