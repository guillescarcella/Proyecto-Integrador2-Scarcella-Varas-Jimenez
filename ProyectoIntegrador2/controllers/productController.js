const data= require('../data/data')
const db = require('../database/models')
const Producto = db.Producto
const productController = {

    product: function(req, res) {
      Producto.findAll().then(function (data) {
        console.log(data);
      })
        return res.render('product', {product: data.productos[0], comentarios: data.comentarios});
      },
    productAdd: function(req, res) {
        return res.render('product-add', {usuario: data.usuario});
      },
    searchResults: function(req, res) {
        return res.render('search-results', {productSearch: data.productos[0], comentarios: data.comentarios});
      },




}
module.exports= productController