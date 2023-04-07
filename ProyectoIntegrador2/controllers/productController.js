const data= require('../data/data')
const productController = {

  home: function (req, res) {
    for (let i = 0; 1 < data.productos.length; i++) {
      console.log(data.productos[i].foto)
    }
    },
    product: function(req, res) {
        return res.render('product', {data: data.productos});
      },
    productAdd: function(req, res) {
        return res.render('product-add', {usuario: data.usuario});
      },
    searchResults: function(req, res) {
        return res.render('search-results');
      },




}
module.exports= productController