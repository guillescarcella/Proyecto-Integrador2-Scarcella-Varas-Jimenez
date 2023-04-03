var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render('register', {title:'Registrarse'});
});

router.get('/login', function(req, res, next) {
  res.render('login', {title:'Login'});
});

router.get('/profile', function(req, res, next) {
  res.render('profile', {title:'Profile'});
});

router.get('/profile-edit', function(req, res, next) {
  res.render('profile-edit', {title:'Profile-edit'});
});

module.exports = router;
