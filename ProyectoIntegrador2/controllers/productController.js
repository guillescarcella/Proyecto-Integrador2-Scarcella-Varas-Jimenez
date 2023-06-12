const data= require('../data/data')
const db = require('../database/models')
const Producto = db.Producto
const op = db.Sequelize.Op
const productController = {

    product: function(req, res) { 
      let id = req.params.id   
      db.Producto.findByPk(id,
        {include: [{association: 'comentario', include: [{association:'FkUser'}]},{ association: 'FkUser'}]})
        .then(function (data) {
          return res.render('product', {product: data, comentarios: data.comentario})  
        })
        .catch(function (err) {console.log(err);})
       },
    
    agregarComentario: function(req,res){
      db.Comentario.create({
        FkProductId: req.params.id,
        FkUserId: req.session.usuario.id,
        texto:req.body.texto
      })
      .then(()=> res.redirect('/products/product/' +req.params.id))
      .catch(function (err) {console.log(err);})
      
    },
     
    productAdd: function(req, res) {
      if (req.session.usuario == undefined) {
        return res.redirect ('/users/login')
      } else { 

        let product = {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          foto: req.body.imagen,
          FkUserId: req.session.usuario.id
        } 
        console.log(product)

        db.Producto.create(product)
       
      .then((productoAgregado) => {res.redirect('/products/product/' + productoAgregado.id)})
     }
      },

      add: function(req,res){
        res.render("product-add")
      },

    searchResults: function(req, res) {
    Producto.findAll({
      include: [{association: 'FkUser'}],
      attributes: ["id", "nombre", "descripcion", "foto", "createdAt", "updatedAt", "deletedAt", "FKUserId" ],
      where: [{nombre: {[op.like]: "%"+req.query.search+"%"}}],
      order: [['createdAt', 'DESC']]
     
    })

    .then(function(productosNombre){ 
      Producto.findAll({ 
        include: [{association: 'FkUser'}],
        attributes: ["id", "nombre", "descripcion", "foto", "createdAt", "updatedAt", "deletedAt", "FKUserId" ],
        where: [{descripcion: {[op.like]: "%"+req.query.search+"%"}}],
        order: [['createdAt', 'DESC']],
       /* include: [{association: 'comentario'},{association: 'FkUser'}] */
      }).then (function(productosDescripcion){
        //return res.send (productosDescripcion) 
        return res.render('search-results', {productosNombre: productosNombre, productosDescripcion: productosDescripcion});
      })
    })
  },


  delete: function(req, res) {
    Producto.findOne({
      where: {
        id: req.params.id,
        FKUserId: req.session.usuario.id
      }
    })
    .then(function(producto) {
      if (producto) {
        Producto.destroy({
          where: { id: req.params.id }
        })
        .then(function() {
          return res.redirect("/users/profile/" + req.session.usuario.id);
        });
      }})
      },
      
      edit: function (req, res){
        Producto.findByPk(req.params.id)
        .then (product => {
          res.render ("product-edit",{editado: product})
        })
      },
      update: function (req, res){if (req.session.usuario == undefined) {
        return res.redirect ('/users/login')
      } else { 
        
        let editarProd = {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          foto: req.body.imagen,
          FkUserId: req.session.usuario.id
        } 
        

      db.Producto.update(editarProd, {where:{id:req.params.id}})
      .then(function() {
      return res.redirect ('/products/product/' + req.params.id)
    })
     }
      },

}
module.exports= productController