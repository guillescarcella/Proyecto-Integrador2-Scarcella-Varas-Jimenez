const data= require('../data/data')
const db = require('../database/models')
const Producto = db.Producto
const op = db.Sequelize.Op
const productController = {

    product: function(req, res) {
        return res.render('product', {product: data.productos[0], comentarios: data.comentarios});
      },
    productAdd: function(req, res) {
        return res.render('product-add', {usuario: data.usuario});
      },
    searchResults: function(req, res) {
    Producto.findAll({
      attributes: ["id", "nombre", "descripcion", "foto", "createdAt", "updatedAt", "deletedAt", "FKUserId" ],
      where: [{nombre: {[op.like]: "%"+req.query.search+"%"}}],
      order: [['createdAt', 'DESC']]
     /* include: [{association: 'comentario'},{association: 'usuario'}] */
    })

    .then(function(productosNombre){ 
      Producto.findAll({
        attributes: ["id", "nombre", "descripcion", "foto", "createdAt", "updatedAt", "deletedAt", "FKUserId" ],
        where: [{descripcion: {[op.like]: "%"+req.query.search+"%"}}],
        order: [['createdAt', 'DESC']]
       /* include: [{association: 'comentario'},{association: 'usuario'}] */
      }).then (function(productosDescripcion){
        //return res.send (productosDescripcion) 
        return res.render('search-results', {productosNombre: productosNombre, productosDescripcion: productosDescripcion});
      })
      

    })



       
      },




}
module.exports= productController