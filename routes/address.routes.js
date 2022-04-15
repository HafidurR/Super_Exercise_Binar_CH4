const routes = require('express').Router();
const addressRoutes = require('../controller/addressController');

routes.get('/', addressRoutes.getAll);
routes.get('/:id', addressRoutes.getById);
routes.post('/', addressRoutes.create);
routes.put('/:id', addressRoutes.update);
routes.delete('/:id', addressRoutes.delete);

module.exports = routes;