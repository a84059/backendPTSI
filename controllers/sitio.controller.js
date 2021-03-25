const connect = require('../config/database');
const jsonMessagesPath = __dirname + '/../assets/jsonMessages/';
const jsonMessages = require(jsonMessagesPath + 'bd')


var exports = module.exports = {};



/*-------------------------------Sitio-------------------------------*/

//sitio
exports.sitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio", function (error, rows, fields) {
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



//sitioId
exports.sitioId = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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


//sitioId
exports.sitioCoord = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio WHERE coord_X = ? AND coord_Y = ?", [req.params.coord_X, req.params.coord_Y], function (error, rows, fields) {
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



/*-------------------------------HIDROGRAFIA-------------------------------*/

//sitioHidrografia
exports.sitioHidrografia = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_hidrografia", function (error, rows, fields) {
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

//sitioHidrografiaID
exports.sitioHidrografiaID = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_hidrografia WHERE id = ?", [req.params.id], function (error, rows, fields) {
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

//sitioHidrografiasitioID
exports.sitioHidrografiaIDsitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_hidrografia WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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


/*-------------------------------Contexto-------------------------------*/

exports.sitioContexto = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_contexto_geog", function (error, rows, fields) {
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

//sitioContextoID
exports.sitioContextoID = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_contexto_geog WHERE id = ?", [req.params.id], function (error, rows, fields) {
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

//sitioContextoIDsitio
exports.sitioContextoIDsitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_contexto_geog WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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


/*-------------------------------UnidadeEscavatória(UE)-------------------------------*/

//sitioUE
exports.sitioUE = function (req, res) {
    const query = connect.con.query("SELECT * FROM ue", function (error, rows, fields) {
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

//sitioUEID
exports.sitioUEID = function (req, res) {
    const query = connect.con.query("SELECT * FROM ue WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//sitioUEIDsitio
exports.sitioUEIDsitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM ue WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

/*-------------------------------UsoSolo-------------------------------*/



//sitioUsoSolo
exports.sitioUsoSolo = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_uso_solo", function (error, rows, fields) {
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

//sitioUsoSoloID
exports.sitioUsoSoloID = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_uso_solo WHERE id = ?", [req.params.id], function (error, rows, fields) {
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

//sitioUsoSoloIDsitio
exports.sitioUsoSoloIDsitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_uso_solo WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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