const { Router } = require('express');

const salesController = require('../controllers/salesController');

const salesRoute = Router();

salesRoute.post('/', salesController.create);
salesRoute.get('/', salesController.findAll);
salesRoute.get('/:id', salesController.findOne);

module.exports = salesRoute;
