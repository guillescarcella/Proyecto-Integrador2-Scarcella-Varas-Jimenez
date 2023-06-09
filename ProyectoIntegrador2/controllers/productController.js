const data= require('../data/data')
const db = require('../database/models')
const Producto = db.Producto
const op = db.Sequelize.Op
const productController = {

    product: function(req, res) {
      db.Producto.findOne({
        include:{
          all:true,
          nested: true
        },
        where:{
          id: req.params.id
        }
      })
      .then((product) => {
        res.render ('product', {product: data.productos, comentarios: data.comentarios
          });
     
      }) },
      /*db.Producto.findByPk(id,{include: [{association: 'comentario', include: [{association:'FkUser'}]},{ association: 'FkUser'}]})
        .then(function (data) {
          if(data){
            return res.render('product', {product: data, comentarios: data.texto})
          }
          else{
            return res.render('product', {product: data, comentarios: 'No hay comentarios'})
          }    
        })
        .catch(function (err) {console.log(err);}),*/
     
    productAdd: function(req, res) {
      db.Producto.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        foto: req.file.fieldname
       
      })
      .then((productoAgregado) => res.redirect('/products/product-add/' + productoAgregado.id))
      if (req.session.usuario == undefined) {
        return res.redirect ('/users/login')
      } 
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