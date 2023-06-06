const data = require('../data/data')
const db = require('../database/models')
const bcrypt = require('bcryptjs');

const userController = {
  create: function (req, res) {
    // return res.render('register');//
    let errors = {}

    db.Usuario.findOne({
      where: {
        email: req.body.mail
      }
    })
      .then(function (usuario) {
        if (req.body.pass.length<3) {
          errors.message = "La contraseña debe tener al menos 3 caracteres";
          res.locals.errors = errors
          return res.render('register');
        }
        if (req.body.documento.length!=8) {
          errors.message = "El documento debe tener 8 caracteres";
          res.locals.errors = errors
          return res.render('register');
        } 
        
        if (usuario == null) {
          db.Usuario.create({
            email: req.body.mail,
            username: req.body.user,
            contra: bcrypt.hashSync (req.body.pass, 10), 
            foto: "req.file.fieldname", //preguntar multer// 
            fecha: req.body.fecha,
            dni: req.body.documento,
          })
            .then(function () {
              res.redirect('/users/login')
            })
            .catch(function (error) {
              console.log(error)
              res.send(error.message)
            })
        }
        else{
          errors.message = "El email ya esta registrado";
          res.locals.errors = errors
          res.render('register');
        }
      })

  },

  login: function (req, res) {
    return res.render('login');
  },

  profile: function (req, res) {
    let id = req.params.id
        usuario.findByPk(id, 
            {include: [{association: 'comentario'},{association: 'producto'}]}
        )
        .then(function(data){
          console.log(data)
          console.log(data.producto)
            //return res.render('profile', {usuario: data, productos: data.producto, log: false})
            //return res.render('profile', {foto: data.foto_de_perfil, mail: data.email, perfil: data.productos, comentarios: data.comentarios, nombreUsuario: data.username})
        })
        .catch(function(err){console.log(err);}) 
    //return res.render('profile', { usuario: data.usuario, productos: data.productos });

  },

  profileEdit: function (req, res) {
    return res.render('profile-edit', { usuario: data.usuario });
  },

  register: function (req, res) {
    return res.render('register');
  },
  //hay que probar que funcione

}
module.exports = userController