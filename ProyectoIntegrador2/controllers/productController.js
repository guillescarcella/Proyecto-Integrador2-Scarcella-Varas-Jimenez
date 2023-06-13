const data = require('../data/data')
const db = require('../database/models')
const Producto = db.Producto
const op = db.Sequelize.Op
const productController = {

  product: function (req, res) {
    let id = req.params.id
    db.Producto.findByPk(id,
      { include: [{ association: 'comentario', include: [{ association: 'FkUser' }] }, { association: 'FkUser' }] })
      .then(function (data) {
        return res.render('product', { product: data, comentarios: data.comentario })
      })
      .catch(function (err) { console.log(err); })
  },

  agregarComentario: function (req, res) {
    if (req.session.usuario == undefined) {
      return res.redirect('/users/login')
    } else {
      let coment = {
        texto: req.body.texto,
        FkUserId: req.session.usuario.id,
        FkProductId: req.params.id
      }
      console.log(coment)
      db.Comentario.create(coment)
        .then((comentarioAgregado) => { res.redirect('/products/product/' + req.params.id) })
        .catch(function (err) { console.log(err); })
    }
  },

  productAdd: function (req, res) {
    if (req.session.usuario == undefined) {
      return res.redirect('/users/login')
    } else {

      let product = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        foto: req.body.imagen,
        FkUserId: req.session.usuario.id
      }
      console.log(product)

      db.Producto.create(product)

        .then((productoAgregado) => { res.redirect('/products/product/' + productoAgregado.id) })
    }
  },

  add: function (req, res) {
    res.render("product-add")
  },

  searchResults: function (req, res) {
    Producto.findAll({
      include: [{ association: 'FkUser' }, { association: 'comentario' }],
      attributes: ["id", "nombre", "descripcion", "foto", "createdAt", "updatedAt", "deletedAt", "FKUserId"],
      where: {
        [op.or]:[
          { nombre: { [op.like]: "%" + req.query.search + "%" } },
          { descripcion: { [op.like]: "%" + req.query.search + "%" } }
        ]
      },
      order: [['createdAt', 'DESC']]

    })

      .then(function (productosNombre) {
       
       // res.send(productosNombre)//
       res.render('search-results',{productosNombre: productosNombre})
      }) 
  },


  delete: function (req, res) {
    if (req.session.usuario == undefined) {
      return res.redirect('/users/login')
    } else {
      Producto.findOne({
        where: {
          id: req.params.id,
          FkUserId: req.session.usuario.id
        }
      })
        .then(function (producto) {
          if (producto) {
            Producto.destroy({
              where: { id: req.params.id }
            })
              .then(function () {
                return res.redirect("/users/profile/" + req.session.usuario.id);
              });
          }
        });
    }
  },

  edit: function (req, res) {
    if (req.session.usuario == undefined) {
      return res.redirect('/users/login')
    } else {
      Producto.findByPk(req.params.id)
        .then(product => {
          res.render("product-edit", { editado: product })
        })
    }
  },
  update: function (req, res) {
    if (req.session.usuario == undefined) {
      return res.redirect('/users/login')
    } else {

      let editarProd = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        foto: req.body.imagen,
        FkUserId: req.session.usuario.id
      }


      db.Producto.update(editarProd, { where: { id: req.params.id } })
        .then(function () {
          return res.redirect('/products/product/' + req.params.id)
        })
    }
  },

}
module.exports = productController