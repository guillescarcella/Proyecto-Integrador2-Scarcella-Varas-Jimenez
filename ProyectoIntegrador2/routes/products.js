var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/products'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                         
    }
});

let upload = multer({storage: storage});


router.get('/product/:id?', productController.product);
router.post('/product-add',upload.single('foto'), productController.productAdd);
router.get('/product-add/:id?', productController.productAdd);

router.get('/search-results',productController.searchResults);




module.exports = router;