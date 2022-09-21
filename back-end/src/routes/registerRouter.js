const { Router } = require('express');

const userController = require('../controllers/userControler');

const registerRoute = Router();

registerRoute.post('/', userController.create);

module.exports = registerRoute;
