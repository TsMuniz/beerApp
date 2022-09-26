const { Router } = require('express');

const salesController = require('../controllers/salesController');

const salesRoute = Router();

salesRoute.delete('/:id', salesController.delete);
salesRoute.put('/', salesController.update);
salesRoute.post('/', salesController.create);
salesRoute.get('/', salesController.findAll);
salesRoute.get('/:id', salesController.findOne);

module.exports = salesRoute;
