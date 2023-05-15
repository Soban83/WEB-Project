const express = require('express')
const AdminController = require('../Controller/AdminController')
const Router = express.Router();


Router.get('/getAdmin',AdminController.getAdmin)
Router.post('/createAdmin',AdminController.createAdmin)
Router.delete('/delete/:id',AdminController.deleteRouteDetail)
Router.get('/findBus/:id',AdminController.findBus)
Router.put('/updateBus/:id',AdminController.updateBus)


module.exports =Router;