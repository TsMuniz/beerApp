const salesService = require('../services/salesService');

const salesController = {
    async findAll(_req, res) {
        const sales = await salesService.findAll();
        return res.status(200).json(sales);
    },
    async create(req, res) {
        const sale = req.body;
        await salesService.validateSaleBody(sale);
        const createdSale = await salesService.create(sale);
        return res.status(201).json(createdSale);
    },
    async findOne(req, res) {
        const { id } = req.params;
        const sale = await salesService.findOne(id);
        return res.status(200).json(sale);
    },
    async update(req, res) {
        const { id } = req.params;
        const sale = req.body;
        await salesService.validateSaleBody(sale);
        const updatedSale = await salesService.update(id, sale);
        return res.status(200).json(updatedSale);
    },
    async delete(req, res) {
        const { id } = req.params;
        await salesService.delete(id);
        return res.sendStatus(204);
    },
};

module.exports = salesController;