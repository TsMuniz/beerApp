const { Router } = require('express');

const userController = require('../controllers/userControler');
const authenticate = require('../middlewares/authMiddleware');

const registerRoute = Router();

registerRoute.post('/', userController.createUserCustomer);

registerRoute.post('/admin', authenticate, userController.createUser);

module.exports = registerRoute;
