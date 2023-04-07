var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.product);

router.get('/product-add', productController.productAdd);

router.get('/search-results',productController.searchResults );

router.get('/home', productController.home); 


module.exports = router;