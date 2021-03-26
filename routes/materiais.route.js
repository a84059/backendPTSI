const getController = require('../controllers/materiais.controller.js');

module.exports = function (app) {
    //materiais
    app.get('/materiais', getController.materiais);
    app.get('/materiais/:id_material', getController.materiaisId);
    app.get('/materiais/sondagem/:id_sondagem', getController.materiaisPorSondagem);
    app.get('/materiais/ue/:id_ue', getController.materiaisPorUe);
    app.get('/materiais/sitio/:id_sitio', getController.materiaisPorSitio);

    //metais
    app.get('/materiais/metais', getController.metais);
    app.get('/materiais/metais/:id_material', getController.metaisPorMateriaisId);
    app.get('/materiais/metais/sondagem/:id_sondagem', getController.metaisPorSondagem);
    app.get('/materiais/metais/ue/:id_ue', getController.metaisPorUe);
    app.get('/materiais/metais/sitio/:id_sitio', getController.metaisPorSitio);

    //ceramicas
    app.get('/materiais/ceramicas', getController.ceramicas);
    app.get('/materiais/ceramicas/:id_material', getController.ceramicasPorMateriaisId);
    app.get('/materiais/ceramicas/sondagem/:id_sondagem', getController.ceramicasPorSondagem);
    app.get('/materiais/ceramicas/ue/:id_ue', getController.ceramicasPorUe);
    app.get('/materiais/ceramicas/sitio/:id_sitio', getController.ceramicasPorSitio);

    //moedas
    app.get('/materiais/moedas', getController.moedas);
    app.get('/materiais/moedas/:id_material', getController.moedasPorMateriaisId);
    app.get('/materiais/moedas/sondagem/:id_sondagem', getController.moedasPorSondagem);
    app.get('/materiais/moedas/ue/:id_ue', getController.moedasPorUe);
    app.get('/materiais/moedas/sitio/:id_sitio', getController.moedasPorSitio);

    //vidros
    app.get('/materiais/vidros', getController.vidros);
    app.get('/materiais/vidros/:id_material', getController.vidrosPorMateriaisId);
    app.get('/materiais/vidros/sondagem/:id_sondagem', getController.vidrosPorSondagem);
    app.get('/materiais/vidros/ue/:id_ue', getController.vidrosPorUe);
    app.get('/materiais/vidros/sitio/:id_sitio', getController.vidrosPorSitio);

    //amostras
    app.get('/materiais/amostras', getController.amostras);
    app.get('/materiais/amostras/:id_material', getController.amostrasPorMateriaisId);
    app.get('/materiais/amostras/sondagem/:id_sondagem', getController.amostrasPorSondagem);
    app.get('/materiais/amostras/ue/:id_ue', getController.amostrasPorUe);
    app.get('/materiais/amostras/sitio/:id_sitio', getController.amostrasPorSitio);

    //elemento_arq
    app.get('/materiais/elemento_arq', getController.elemento_arq);
    app.get('/materiais/elemento_arq/:id_material', getController.elemento_arqPorMateriaisId);
    app.get('/materiais/elemento_arq/sondagem/:id_sondagem', getController.elemento_arqPorSondagem);
    app.get('/materiais/elemento_arq/ue/:id_ue', getController.elemento_arqPorUe);
    app.get('/materiais/elemento_arq/sitio/:id_sitio', getController.elemento_arqPorSitio);

    //obj_diverso
    app.get('/materiais/obj_diverso', getController.obj_diverso);
    app.get('/materiais/obj_diverso/:id_material', getController.obj_diversoPorMateriaisId);
    app.get('/materiais/obj_diverso/sondagem/:id_sondagem', getController.obj_diversoPorSondagem);
    app.get('/materiais/obj_diverso/ue/:id_ue', getController.obj_diversoPorUe);
    app.get('/materiais/obj_diverso/sitio/:id_sitio', getController.obj_diversoPorSitio);

    //osso
    app.get('/materiais/osso', getController.osso);
    app.get('/materiais/osso/:id_material', getController.ossoPorMateriaisId);
    app.get('/materiais/osso/sondagem/:id_sondagem', getController.ossoPorSondagem);
    app.get('/materiais/osso/ue/:id_ue', getController.ossoPorUe);
    app.get('/materiais/osso/sitio/:id_sitio', getController.ossoPorSitio);

    //rocha
    app.get('/materiais/rocha', getController.rocha);
    app.get('/materiais/rocha/:id_material', getController.rochaPorMateriaisId);
    app.get('/materiais/rocha/sondagem/:id_sondagem', getController.rochaPorSondagem);
    app.get('/materiais/rocha/ue/:id_ue', getController.rochaPorUe);
    app.get('/materiais/rocha/sitio/:id_sitio', getController.rochaPorSitio);

    //rocha_motivo
    app.get('/materiais/rocha_motivo', getController.rocha_motivo);
    app.get('/materiais/rocha_motivo/:id_motivo', getController.rocha_motivoPorMotivoId);
    app.get('/materiais/rocha_motivo/:id_material', getController.rocha_motivoPorMateriaisId);
    app.get('/materiais/rocha_motivo/:id_painel', getController.rocha_motivoPorPainelId);
    app.get('/materiais/rocha_motivo/sitio/:id_sitio', getController.rocha_motivoPorSitio);

    //rocha_painel
    app.get('/materiais/rocha_painel', getController.rocha_painel);
    app.get('/materiais/rocha_painel/:id_painel', getController.rocha_painelPorRocha_PainelId);
    app.get('/materiais/rocha_painel/:id_material', getController.rochaPorMateriaisId);
    app.get('/materiais/rocha_painel/sondagem/:id_sondagem', getController.rocha_painelPorSondagem);
    app.get('/materiais/rocha_painel/ue/:id_ue', getController.rocha_painelPorUe);
    app.get('/materiais/rocha_painel/sitio/:id_sitio', getController.rocha_painelPorSitio);
};