const connect = require('../config/database');
const jsonMessagesPath = __dirname + '/../assets/jsonMessages/';
const jsonMessages = require(jsonMessagesPath + 'bd')

var exports = module.exports = {};

//-- INICIO Modelos GERAL --


exports.modelos = function (req, res) {
    const query = connect.con.query("SELECT * FROM modelo3d", function (error, rows, fields) {
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
exports.modelosID = function (req, res) {
    const query = connect.con.query("SELECT * FROM modelo3d WHERE id_modelo = ?", [req.params.id_modelo], function (error, rows, fields) {
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
exports.modelosIDsitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM modelo3d WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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


exports.modelosIDsondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM modelo3d WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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


exports.modelosIDue = function (req, res) {
    const query = connect.con.query("SELECT * FROM modelo3d WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

exports.modelosIDmaterial = function (req, res) {
    const query = connect.con.query("SELECT * FROM modelo3d WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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