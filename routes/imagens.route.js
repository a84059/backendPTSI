const getController = require('../controllers/imagens.controller.js');

module.exports = function (app) {


    /*-------------------------------Imaggem-------------------------------*/
    //Devolve todas as imagens
    app.get('/imagens', getController.imagens);

    
    app.get('/imagens/:id_imagem', getController.imagensID);

    
    app.get('/imagens/sitio/:id_sitio', getController.imagensIDsitio);


    app.get('/imagens/sondagem/:id_sondagem', getController.imagensIDsondagem);


    app.get('/imagens/ue/:id_ue', getController.imagensIDue);


    app.get('/imagens/material/:id_material', getController.imagensIDmaterial);

}