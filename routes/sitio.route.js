
const getController = require('../controllers/sitio.controller.js');

module.exports = function(app) {
    //sitio Routes
    app.get('/sitio', getController.sitio); 
    app.get('/sitio/:id_sitio', getController.sitioId);    
};