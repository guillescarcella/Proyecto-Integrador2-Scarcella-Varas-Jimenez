const data = require('../data/data')
const indexController = {
    index:function(req, res) {
        return res.render('index');
      }
      
}

module.exports = indexController