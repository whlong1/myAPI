const Router = require('express').Router()
const LabelController = require('../controllers/LabelController')


Router.post('/add', LabelController.AddLabel)

Router.get('/all', LabelController.FindAll)


module.exports = Router