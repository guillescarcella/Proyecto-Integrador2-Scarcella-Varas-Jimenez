const indexController = {
    index:function(req, res) {
        return res.render('index');
      },
    headerLogueado: function(req, res) {
      return res.render('headerLogueado');
    }
}

module.exports = indexController