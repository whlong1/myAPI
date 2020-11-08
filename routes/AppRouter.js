const Router = require('express').Router()

const AlbumRouter = require('./AlbumRouter')

Router.use('/albums', AlbumRouter)

module.exports = Router
