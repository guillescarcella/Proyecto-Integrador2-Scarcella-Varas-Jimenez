var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');


router.get('/register', userController.register);
//router.post('/register', userController.create);//

router.get('/login', userController.login );

router.post('/sesion', userController.sesion );

router.get('/profile/:id', userController.profile);

router.get('/profile-edit/:id', userController.profileEdit );

router.post('/logout', userController.logout);

module.exports = router;