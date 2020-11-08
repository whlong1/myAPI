// const { Router } = require('express');
// const Router = Router();

const Router = require('express').Router()

Router.get('/', (request, response) => response.send('This is root!'))

module.exports = Router;