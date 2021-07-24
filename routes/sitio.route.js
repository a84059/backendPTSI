const getController = require('../controllers/sitio.controller.js');

module.exports = function (app) {
    // Routes utilizadas para fazer os pedidos GET de tudo o que esteja relacionado com o Sitio


    /*-------------------------------Sitio-------------------------------*/
    //Devolve todos os sitios existentes
    app.get('/sitio', getController.sitio);

    //Devolve um sitio consoante o seu ID
    app.get('/sitio/:id_sitio', getController.sitioId);

    //Devolve um sitio consoante as coordenadas X e Y
    app.get('/sitio/:coord_X/:coord_Y', getController.sitioCoord);


    /*-------------------------------Hidrografia-------------------------------*/
    //Devolve um sitiohidrografia consoante o ID do sitio  
    app.get('/sitioHidrografia', getController.sitioHidrografia);

    //Devolve um sitiohidrografia consoante o ID 
    app.get('/sitioHidrografia/:id', getController.sitioHidrografiaID);

    //Devolve um sitiohidrografia consoante o ID do sitio  
    app.get('/sitioHidrografiaIDsitio/:id_sitio', getController.sitioHidrografiaIDsitio);


    /*-------------------------------Contexto_geog-------------------------------*/

    //Devolve um o contexto de todos os sitios existentes
    app.get('/sitioContexto', getController.sitioContexto);

    //Devolve um contexto de um sitio consoante o ID de um contexto
    app.get('/sitioContexto/:id', getController.sitioContextoID);

    //Devolve um contexto consoante o ID do sitio  
    app.get('/sitioContextoIDsitio/:id_sitio', getController.sitioContextoIDsitio);


    /*-------------------------------UnidadeEscavatório(UE)-------------------------------*/

    //Devolve todas as unidades escavatórias existentes
    app.get('/sitioUE', getController.sitioUE);

    //Devolve a unidades escavatórias consoante o ID
    app.get('/sitioUE/:id_ue', getController.sitioUEID);

    //Devolve as unidades escavatórias consoante o ID do sitio  
    app.get('/sitioUEIDsitio/:id_sitio', getController.sitioUEIDsitio);


    /*-------------------------------UsoSolo-------------------------------*/

    //Devolve todos os usos do solo existentes
    app.get('/sitioUsoSolo', getController.sitioUsoSolo);

    //Devolve os usos do solo consoante o ID
    app.get('/sitioUsoSolo/:id', getController.sitioUsoSoloID);

    //Devolve os usos do solo consoante o ID do sitio  
    app.get('/sitioUsoSoloIDsitio/:id_sitio', getController.sitioUsoSoloIDsitio);

    /*-------------------------------Percultural-------------------------------*/

    //Devolve todos Percultural
    app.get('/sitiopercutural', getController.sitiopercutural);

    //Devolve os Percultural consoante o ID do sitio  
    app.get('/sitiopercuturalIDsitio/:id_sitio', getController.sitiopercuturalIDsitio);


    /*-------------------------------Rela_Tipo-------------------------------*/

    //Devolve todos os Rela_Tipo existentes
    app.get('/sitiorelatipo', getController.sitiorelatipo);

    //Devolve os Rela_Tipo consoante o ID
    app.get('/sitiorelatipo/:id', getController.sitiorelatipoID);

    //Devolve os Rela_Tipo consoante o ID do sitio  
    app.get('/sitiorelatipoIDsitio/:id_sitio', getController.sitiorelatipoIDsitio);


    /*-------------------------------Contexto_Geol-------------------------------*/

    //Devolve todos os Contexto_Geol existentes
    app.get('/sitiocontextogeol', getController.sitiocontextogeol);

    //Devolve os Contexto_Geol consoante o ID
    app.get('/sitiocontextogeol/:id', getController.sitiocontextogeolID);

    //Devolve os Contexto_Geol consoante o ID do sitio  
    app.get('/sitiocontextogeolIDsitio/:id_sitio', getController.sitiocontextogeolIDsitio);


    /*-------------------------------Rela_Int-------------------------------*/

    //Devolve todos os Rela_Int existentes
    app.get('/sitiorelaint', getController.sitiorelaint);

    //Devolve os Rela_Int consoante o ID
    app.get('/sitiorelaint/:id', getController.sitiorelaintID);

    //Devolve os Rela_Int consoante o ID do sitio  
    app.get('/sitiorelaintIDsitio/:id_sitio', getController.sitiorelaintIDsitio);


/*-------------------------------Sondagem-------------------------------*/

    app.get('/sitiosondagens/:id_sitio', getController.sitioSondagens)


    /*Pesquisa simples*/
    app.get('/sitioPorNome/:nome', getController.sitioPorNome);
    app.get('/sitioPorFreguesia/:freguesia', getController.sitioPorFreguesia);


    //Rela Bibliografia e Bibliografia
    app.get('/bibliografiaIDSitio/:id_sitio', getController.bibliografiaIDSitio);
    app.get('/bibliografia/:id_bibliografia', getController.bibliografiaID);

/*-------------------------------Sondagem-------------------------------*/
    app.get('/freguesia', getController.freguesia);
    app.get('/distrito', getController.distrito);
    app.get('/concelho', getController.concelho);

};