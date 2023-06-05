var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/product/:id?', productController.product);

router.get('/product-add', productController.productAdd);

router.get('/search-results',productController.searchResults);




module.exports = router;