const routes = require('express').Router();
const brandRoute = require('../controller/brandController');

routes.get('/', brandRoute.getAll);
routes.get('/:id', brandRoute.getById);
routes.post('/', brandRoute.create);
routes.put('/:id', brandRoute.update);
routes.delete('/:id', brandRoute.delete);

module.exports = routes;