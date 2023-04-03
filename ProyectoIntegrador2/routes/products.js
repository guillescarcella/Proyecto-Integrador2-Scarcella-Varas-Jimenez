var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/product', function(req, res, next) {
    res.render('product', { title: 'Product' });
  });

router.get('/product-add', function(req, res, next) {
    res.render('product-add', { title: 'Product-add' });
  });


module.exports = router;