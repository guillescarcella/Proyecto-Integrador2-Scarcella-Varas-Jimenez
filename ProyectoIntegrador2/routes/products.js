var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');




router.post('/product-add', productController.productAdd);
router.get('/product-add', productController.add);

router.get('/search-results',productController.searchResults);

router.get('/product/:id?', productController.product);
router.post('/product/:id?', productController.agregarComentario);
router.get('/delete/:id',productController.delete);

router.get('/product-edit/:id', productController.edit);
router.post('/update/:id', productController.update);





module.exports = router;