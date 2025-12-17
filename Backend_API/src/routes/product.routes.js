const express = require('express');
const router = express.Router();
const controller = require('../controller/product.controller');


router.get('/', controller.getAll);
router.post('/', controller.create);
router.put('/:id_produk', controller.update);
router.delete('/:id_produk', controller.remove);


module.exports = router;