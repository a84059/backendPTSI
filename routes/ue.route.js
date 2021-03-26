
const getController = require('../controllers/ue.controller.js');

module.exports = function(app) {
    //ue Routes
    app.get('/ue', getController.ue); 
    app.get('/ue/:id_ue', getController.ueId); 
    app.get('/ue/sitio/:id_sitio', getController.ueSitioId);

    //sondagem Routes
    app.get('/sondagem', getController.sondagem);
    app.get('/sondagem/:id_sondagem', getController.sondagemId);
    app.get('/sondagem/sitio/:id_sitio', getController.sondagemSitioId);

    //sond_ue Routes
    app.get('/sond_ue', getController.sond_ue);
    app.get('/sond_ue/sitio/:id_sitio', getController.sond_ueSitioId);
    app.get('/sond_ue/sondagem/:id_sondagem', getController.sond_ueSondagemId);
    app.get('/sond_ue/ue/:id_ue', getController.sond_ueUeId);

    //ue_sed_elementos
    app.get('/ue_sed_elementos', getController.ue_sed_elementos);
    app.get('/ue_sed_elementos/:id_se', getController.seId);
    app.get('/ue_sed_elementos/sitio/:id_sitio', getController.ue_sed_elementosSitioId);

    //ue_sedimentar
    app.get('/ue_sedimentar', getController.ue_sedimentar);
    app.get('ue_sedimentar/sitio/:id_sitio', getController.ue_sedimentarSitioId);
    app.get('ue_sedimentar/ue/:id_ue', getController.ue_sedimentarUeId);

};