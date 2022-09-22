const { Router } = require('express');

const salesController = require('../controllers/salesController');

const salesRoute = Router();

salesRoute.get('/', salesController.findAll);
salesRoute.get('/:id', salesController.findOne);
salesRoute.post('/', salesController.create);

module.exports = salesRoute;
