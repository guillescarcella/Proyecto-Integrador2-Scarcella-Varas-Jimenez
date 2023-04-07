const data= require('../data/data')
const productController = {
    product: function(req, res) {
        return res.render('product', {data: data.productos});
      },
    productAdd: function(req, res) {
        return res.render('product-add', {usuario: data.usuario});
      },
    searchResults: function(req, res) {
        return res.render('search-results');
      },
  home: function (req, res){
    res.render('data', {data: data.productos})
  },



}
module.exports= productController