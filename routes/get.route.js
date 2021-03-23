
const getController = require('../controllers/get.controller.js');

module.exports = function(app) {
    //Auth Routes
    app.get('/sitio', getController.sitio);    
};