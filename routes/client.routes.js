const router = require('express').Router();
const clientRoute = require('../controller/clientController');

router.get('/', clientRoute.getAll);
router.get('/:id', clientRoute.getById);
router.post('/', clientRoute.create);
router.put('/:id', clientRoute.update);
router.delete('/:id', clientRoute.delete);

module.exports = router;