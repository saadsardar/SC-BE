const productController = require('./product.controller')
const express = require('express');
const router = express.Router();

router.get('/search', productController.searchProductsByName)
router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProduct)

module.exports = router;
