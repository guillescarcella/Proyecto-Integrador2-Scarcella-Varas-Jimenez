const data = require('../data/data')
const db = require('../database/models')
const bcrypt = require('bcryptjs');
const { usuario } = require('../data/data');
const op = db.Sequelize.Op


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
            fecha: req.body.fecha,
            dni: req.body.documento,
            foto: 'foto',
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
  register: function (req, res) {
    return res.render('register');
  },
  login: function (req, res) {
    if (req.session.usuario != undefined) {
      return res.redirect ('/')
    }
    return res.render('login');
  },

  profile: function (req, res) {
        let id = req.params.id
        db.Usuario.findByPk(
          id, {
            order: [['createdAt', 'DESC']],
            include: [{association: 'comentario'},{association: 'producto'}]}
        )
        .then(function(data){
          
          return res.render('profile', {user: data, productos: data.producto})
        })
        .catch(function(err){console.log(err);}) 
    

  },
  sesion: function(req, res){
    let errors = {}

    db.Usuario.findOne({
      where: {
        email: req.body.mail
    }})
    .then(function(usuario){
      if (usuario == null) {
        errors.message = "El mail no existe";
        res.locals.errors = errors
        return res.render('login');
      }
      if (bcrypt.compareSync (req.body.pass, usuario.contra)) {
        res.locals.usuario = usuario
        req.session.usuario = usuario

        if (req.body.recordarme == 'si'){
          res.cookie('id', usuario.id,{maxAge: 1000 * 60 * 5});
        }
        res.redirect('/')
      }
      else {
        errors.message = "La contraseña es incorrecta";
        res.locals.errors = errors
        return res.render('login');
      }
    })
  },


  profileEdit: function (req, res) { //no funciona
    if (req.session.usuario == undefined) {
      return res.redirect ('/users/login')
    } else {
      return res.render('profile-edit', { usuario: data.usuario });
       /*let editarPerfil={
        email: req.body.mail,
        usuario: req.body.user,
        contra: req.body.pass,
        fecha: req.body.fecha,
        dni: req.body.documento
       }
       console.log(editarPerfil)
       db.Usuario.update(editarPerfil, { where: { id: req.params.id } })
       .then(function () {
         return res.redirect('/user/profile/' + req.params.id)
       })*/
    }
  },

  //punto extra --> hay que hacer otra vista --> no funciona!!
  searchUsuario:function (req, res) {
    db.Usuario.findAll({
      include: [{ association: 'productos' }, { association: 'comentario' }],
      attributes: ["id", "email", "username", "contra", "foto", "fecha", "dni", "createdAt", "updatedAt", "deletedAt"],
      where: {[op.or]: [ 
        { username: { [op.like]: "%" + req.query.search + "%" } },
        { email: { [op.like]: "%" + req.query.search + "%" } }
        ]},
      order: [['createdAt', 'DESC']],
      })
      .then(user => {
          if (user) {
            res.render('search-usuario', {user,busqueda});
          }})
},

  //hay que probar que funcione
  logout: function(req, res){
    res.clearCookie('id')
    req.session.destroy()
    res.redirect('/users/login');
  },

  amigos: function(req, res){
    res.render('amigos')
  },
  friends: function(req, res){
    db.Usuario.findAll({
      where: {
        [op.or]:[
          { email: { [op.like]: "%" + req.query.search + "%" } },
          { username: { [op.like]: "%" + req.query.search + "%" } }
        ]
      },
    })
    .then(function(usuarios){
      res.render('friends',{usuarios: usuarios})
    })
  },

}
module.exports = userController