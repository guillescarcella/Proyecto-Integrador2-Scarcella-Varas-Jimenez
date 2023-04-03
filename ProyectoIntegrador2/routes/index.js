var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

router.get('/headerLogueado', indexController.headerLogueado);

module.exports = router;
