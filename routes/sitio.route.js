
const getController = require('../controllers/sitio.controller.js');

module.exports = function(app) {
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
    app.get('/sitioHidrografia/', getController.sitioHidrografia);

    //Devolve um sitiohidrografia consoante o ID 
    app.get('/sitioHidrografia/:id', getController.sitioHidrografiaID);

    //Devolve um sitiohidrografia consoante o ID do sitio  
    app.get('/sitioHidrografiaIDsitio/:id_sitio', getController.sitioHidrografiaIDsitio);


    /*-------------------------------Contexto-------------------------------*/

    //Devolve um o contexto de todos os sitios existentes
     app.get('/sitioContexto', getController.sitioContexto);~

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

};