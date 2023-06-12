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



router.post('/product-add',upload.single('imagen'), productController.productAdd);
router.get('/product-add', productController.add);

router.get('/search-results',productController.searchResults);

router.get('/product/:id?', productController.product);
router.get('/delete/:id',productController.delete);

router.get('/product-edit/:id', productController.edit);
router.post('/update/:id',upload.single('imagen'), productController.update);

router.post('/agregarComentario/:id', productController.agregarComentario)


module.exports = router;