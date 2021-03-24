
const getController = require('../controllers/sitio.controller.js');

module.exports = function(app) {
    // Routes utilizadas para fazer os pedidos GET de tudo o que esteja relacionado com o Sitio

    //Devolve todos os sitios existentes
    app.get('/sitio', getController.sitio); 

    //Devolve um sitio consoante o seu ID
    app.get('/sitio/:id_sitio', getController.sitioId);

    //Devolve um sitiohidrografia consoante o ID do sitio  
    app.get('/sitioHidrografia/:id_sitio', getController.sitioHidrografia);

};