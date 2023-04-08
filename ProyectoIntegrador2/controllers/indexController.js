const data = require('../data/data');
const { home } = require('./productController');
const indexController = {
    index:function(req, res) {
        return res.render('index', {usuario: data.usuario, productos: data.productos} );
      }
}

module.exports = indexController