const connect = require('../config/database');
const jsonMessagesPath = __dirname + '/../assets/jsonMessages/';
const jsonMessages = require(jsonMessagesPath + 'bd')

var exports = module.exports = {};

//-- INICIO Imagens GERAL --


exports.imagens = function (req, res) {
    const query = connect.con.query("SELECT * FROM imagem", function (error, rows, fields) {
        console.log(query.sql);
        if (error) {
            console.log(error);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            } else {
                res.send(rows);
            }
        }

    });

}


//Devolve as infos do material que se identificou através do id_material
exports.imagensID = function (req, res) {
    const query = connect.con.query("SELECT * FROM imagem WHERE id_imagem = ?", [req.params.id_imagem], function (error, rows, fields) {
        console.log(query.sql);
        if (error) {
            console.log(error);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            } else {
                res.send(rows);
            }
        }

    })

}

//Devolve as infos do material que se identificou através do id_material
exports.imagensIDsitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM imagem WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
        console.log(query.sql);
        if (error) {
            console.log(error);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            } else {
                res.send(rows);
            }
        }

    })
}


exports.imagensIDsondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM imagem WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
        console.log(query.sql);
        if (error) {
            console.log(error);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            } else {
                res.send(rows);
            }
        }

    })

}


exports.imagensIDue = function (req, res) {
    const query = connect.con.query("SELECT * FROM imagem WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
        console.log(query.sql);
        if (error) {
            console.log(error);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            } else {
                res.send(rows);
            }
        }

    })

}

exports.imagensIDmaterial = function (req, res) {
    const query = connect.con.query("SELECT * FROM imagem WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
        console.log(query.sql);
        if (error) {
            console.log(error);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            } else {
                res.send(rows);
            }
        }

    })

}