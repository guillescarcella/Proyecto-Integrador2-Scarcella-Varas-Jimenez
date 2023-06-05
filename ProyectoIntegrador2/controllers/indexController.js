const db = require('../database/models');
const Productos = db.Producto;
const indexController = {
    
  index: function (req, res) {
        Productos.findAll({
          limit: 5,
          order: [['createdAt', 'DESC']],
          include: [{association:'comentario'},{association: 'FkUser'}]
          })
          
          .then(function(data) {
            console.log(data[0].foto);
            return res.render('index', {productos: data})
          
              
          })
          .catch(function (err) {
              console.log(err);
          })  
          
  }

}

module.exports = indexController