var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');


router.get('/register', userController.register);
router.post('/create', userController.create);

router.get('/login', userController.login );

router.post('/sesion', userController.sesion );

router.get('/profile/:id', userController.profile);

router.get('/profile-edit/:id', userController.profileEdit );
router.post('/updateUsuario/:id', userController.updateUsuario);

router.post('/logout', userController.logout);

router.get('/search-usuario', userController.searchUsuario);

router.get('/amigos', userController.amigos);
router.get('/friends', userController.friends); 

module.exports = router;