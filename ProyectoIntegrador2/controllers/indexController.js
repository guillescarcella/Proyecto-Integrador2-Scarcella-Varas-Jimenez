const db = require('../database/models');
const Productos = db.Producto;
const indexController = {
    
  index: function (req, res) {
        Productos.findAll({
          limit: 5,
          order: [['createdAt', 'DESC']],
          include: [{association: 'comentario'},{association: 'usuario'}]
          })
          
          .then(function(data) {
              console.log(data);
              return res.render('index', {usuario: data.usuario, productos: data})
              
          })
          .catch(function (err) {
              console.log(err);
          })  
          
  }
}

module.exports = indexController