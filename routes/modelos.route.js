const getController = require('../controllers/modelos.controller.js');

module.exports = function (app) {


    /*-------------------------------Modelos-------------------------------*/
    //Devolve todas as imagens
    app.get('/modelos', getController.modelos);

    
    app.get('/modelos/:id_modelo', getController.modelosID);

    
    app.get('/modelos/sitio/:id_sitio', getController.modelosIDsitio);


    app.get('/modelos/sondagem/:id_sondagem', getController.modelosIDsondagem);


    app.get('/modelos/ue/:id_ue', getController.modelosIDue);


    app.get('/modelos/material/:id_material', getController.modelosIDmaterial);

}