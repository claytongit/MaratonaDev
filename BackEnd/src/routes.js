const express = require('express');
const routes = express.Router();

const userController = require('./controllers/userController');

routes.get('/', userController.index);
routes.post('/', userController.store);


module.exports = routes;