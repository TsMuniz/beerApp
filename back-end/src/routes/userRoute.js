const { Router } = require('express');

const userController = require('../controllers/userControler');

const userRoute = Router();

userRoute.get('/:id', userController.findOne);
userRoute.get('/', userController.findAll);

module.exports = userRoute;
