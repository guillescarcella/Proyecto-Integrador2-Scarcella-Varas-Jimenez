var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
var path = require ('path')
var multer = require('multer')
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/users'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});
var upload = multer({ storage: storage}); 

router.get('/register', userController.register);

router.get('/login', userController.login );

router.post('/sesion', userController.sesion );

router.get('/profile/:id?', userController.profile);

router.get('/profile-edit', userController.profileEdit );

router.post('/create',upload.single ('foto'), userController.create);

module.exports = router;