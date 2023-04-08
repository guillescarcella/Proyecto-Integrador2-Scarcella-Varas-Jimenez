const data = require('../data/data')

const userController={
    register: function(req, res) {
        return res.render('register');
      },

    login: function(req, res) {
        return res.render('login');
      },

    profile: function(req, res) {
        return res.render('profile', {usuario: data.usuario, productos: data.productos});
      },

    profileEdit: function(req, res) {
        return res.render('profile-edit', {usuario: data.usuario});
      }
}
module.exports = userController