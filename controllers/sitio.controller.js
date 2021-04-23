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


/*-------------------------------Contexto_geog-------------------------------*/

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


/*-------------------------------Rela_Sitio_Percultural-------------------------------*/



//sitiopercutural
exports.sitiopercutural = function (req, res) {
    const query = connect.con.query("SELECT * FROM rela_sitio_percultural", function (error, rows, fields) {
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



//sitiopercuturalIDsitio
exports.sitiopercuturalIDsitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM rela_sitio_percultural WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

/*-------------------------------Rela_Tipo-------------------------------*/



//sitiorelatipo
exports.sitiorelatipo = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_rela_tipo", function (error, rows, fields) {
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

//sitiorelatipoID
exports.sitiorelatipoID = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_rela_tipo WHERE id = ?", [req.params.id], function (error, rows, fields) {
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

//sitiorelatipoIDsitio
exports.sitiorelatipoIDsitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_rela_tipo WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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


/*-------------------------------Contexto_Geol-------------------------------*/



//sitiocontextogeol
exports.sitiocontextogeol = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_contexto_geol", function (error, rows, fields) {
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

//sitiocontextogeolID
exports.sitiocontextogeolID = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_contexto_geol WHERE id = ?", [req.params.id], function (error, rows, fields) {
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

//sitiocontextogeolIDsitio
exports.sitiocontextogeolIDsitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_contexto_geol WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

/*-------------------------------Rela_Int-------------------------------*/

//sitiorelaint
exports.sitiorelaint = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_rela_int", function (error, rows, fields) {
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

//sitiorelaintID
exports.sitiorelaintID = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_rela_int WHERE id = ?", [req.params.id], function (error, rows, fields) {
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

//sitiorelaintIDsitio
exports.sitiorelaintIDsitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio_rela_int WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

/*-------------------------------Sondagem-------------------------------*/

//sitioSondagens
exports.sitioSondagens = function (req, res) {
    const query = connect.con.query("SELECT * FROM sondagem WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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


//sitioPorNome
exports.sitioPorNome = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio WHERE nome = ?", [req.params.nome], function (error, rows, fields) {
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

//sitioPorFreguesia
exports.sitioPorFreguesia = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio WHERE freguesia1 = ? OR freguesia2 = ?", [req.params.freguesia], function (error, rows, fields) {
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