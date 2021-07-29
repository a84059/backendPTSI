const connect = require('../config/database');
const jsonMessagesPath = __dirname + '/../assets/jsonMessages/';
const jsonMessages = require(jsonMessagesPath + 'bd')


var exports = module.exports = {};

//-- INICIO MATERIAIS GERAL --

//Devolve uma lista com todos os materiais que existem na bd.
exports.materiais = function (req, res) {
    const query = connect.con.query("SELECT * FROM materiais", function (error, rows, fields) {
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
exports.materiaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM materiais WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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


//Devolve todos os materiais de uma determinada sondagem por id_sondagem
exports.materiaisPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM materiais WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos os materiais de uma determinada ue por id_ue
exports.materiaisPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM materiais WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos os materiais de um determinado sítio por id_sitio
exports.materiaisPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM materiais WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

//-- FIM MATERIAIS GERAL --

//-- INICIO METAIS --

//Devolve uma lista com todos os metais que existem na bd
exports.metais = function (req, res) {
    const query = connect.con.query("SELECT * FROM metais", function (error, rows, fields) {
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

//Devolve as infos do metal que se identificou através do id_material
exports.metaisPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM metais WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

//Devolve todos os metais de uma determinada sondagem por id_sondagem
exports.metaisPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM metais WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos os metais de uma determinada ue por id_ue
exports.metaisPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM metais WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos os metais de um determinado sítio por id_sitio
exports.metaisPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM metais WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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


//-- FIM METAIS --

//-- INICIO CERAMICAS --

//Devolve uma lista com todos as ceramicas que existem na bd
exports.ceramicas = function (req, res) {
    const query = connect.con.query("SELECT * FROM ceramicas", function (error, rows, fields) {
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

//Devolve as infos da ceramicas que se identificou através do id_material
exports.ceramicasPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM ceramicas WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

//Devolve todos as ceramicas de uma determinada sondagem por id_sondagem
exports.ceramicasPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM ceramicas WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos as ceramicas de uma determinada ue por id_ue
exports.ceramicasPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM ceramicas WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos as ceramicas de um determinado sítio por id_sitio
exports.ceramicasPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM ceramicas WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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



//-- FIM CERAMICAS --

//-- INICIO MOEDAS --

//Devolve uma lista com todos as moedas que existem na bd
exports.moedas = function (req, res) {
    const query = connect.con.query("SELECT * FROM moedas", function (error, rows, fields) {
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

//Devolve as infos das moedas que se identificou através do id_material
exports.moedasPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM moedas WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

//Devolve todos as moedas de uma determinada sondagem por id_sondagem
exports.moedasPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM moedas WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos as moedas de uma determinada ue por id_ue
exports.moedasPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM moedas WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos as moedas de um determinado sítio por id_sitio
exports.moedasPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM moedas WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

//-- FIM MOEDAS --

//-- INICIO VIDROS --

//Devolve uma lista com todos os vidros que existem na bd
exports.vidros = function (req, res) {
    const query = connect.con.query("SELECT * FROM vidros", function (error, rows, fields) {
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

//Devolve as infos dos vidros que se identificou através do id_material
exports.vidrosPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM vidros WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

//Devolve todos os vidros de uma determinada sondagem por id_sondagem
exports.vidrosPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM vidros WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos os vidros de uma determinada ue por id_ue
exports.vidrosPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM vidros WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos as vidros de um determinado sítio por id_sitio
exports.vidrosPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM vidros WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

//-- FIM VIDROS --

//-- INICIO AMOSTRAS --

//Devolve uma lista com todos as amostras que existem na bd
exports.amostras = function (req, res) {
    const query = connect.con.query("SELECT * FROM amostras", function (error, rows, fields) {
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

//Devolve as infos das amostras que se identificou através do id_material
exports.amostrasPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM amostras WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

//Devolve todos as amostras de uma determinada sondagem por id_sondagem
exports.amostrasPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM amostras WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos as amostras de uma determinada ue por id_ue
exports.amostrasPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM amostras WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos as amostras de um determinado sítio por id_sitio
exports.amostrasPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM amostras WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

//-- FIM AMOSTRAS --

//-- INICIO ELEMENTO_ARQ --

//Devolve uma lista com todos as elemento_arq que existem na bd
exports.elemento_arq = function (req, res) {
    const query = connect.con.query("SELECT * FROM elemento_arq", function (error, rows, fields) {
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

//Devolve as infos das elemento_arq que se identificou através do id_material
exports.elemento_arqPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM elemento_arq WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

//Devolve todos as elemento_arq de uma determinada sondagem por id_sondagem
exports.elemento_arqPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM elemento_arq WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos as elemento_arq de uma determinada ue por id_ue
exports.elemento_arqPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM elemento_arq WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos as elemento_arq de um determinado sítio por id_sitio
exports.elemento_arqPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM elemento_arq WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

//-- FIM ELEMENTO_ARQ --

//-- INICIO OBJ_DIVERSO --

//Devolve uma lista com todos as obj_diverso que existem na bd
exports.obj_diverso = function (req, res) {
    const query = connect.con.query("SELECT * FROM obj_diverso", function (error, rows, fields) {
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

//Devolve as infos das obj_diverso que se identificou através do id_material
exports.obj_diversoPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM obj_diverso WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

//Devolve todos as obj_diverso de uma determinada sondagem por id_sondagem
exports.obj_diversoPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM obj_diverso WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos as obj_diverso de uma determinada ue por id_ue
exports.obj_diversoPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM obj_diverso WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos as obj_diverso de um determinado sítio por id_sitio
exports.obj_diversoPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM obj_diverso WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

//-- FIM OBJ_DIVERSO --

//-- INICIO OSSO --

//Devolve uma lista com todos as osso que existem na bd
exports.osso = function (req, res) {
    const query = connect.con.query("SELECT * FROM osso", function (error, rows, fields) {
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

//Devolve as infos das osso que se identificou através do id_material
exports.ossoPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM osso WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

//Devolve todos as osso de uma determinada sondagem por id_sondagem
exports.ossoPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM osso WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos as osso de uma determinada ue por id_ue
exports.ossoPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM osso WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos as osso de um determinado sítio por id_sitio
exports.ossoPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM osso WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

//-- FIM OSSO --

//-- INICIO ROCHA --

//Devolve uma lista com todos as rochas que existem na bd
exports.rocha = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha", function (error, rows, fields) {
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

//Devolve as infos das rocha que se identificou através do id_material
exports.rochaPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

//Devolve todos as rochas de uma determinada sondagem por id_sondagem
exports.rochaPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos as rochas de uma determinada ue por id_ue
exports.rochaPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos as rochas de um determinado sítio por id_sitio
exports.rochaPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

//-- FIM ROCHA --

//-- INICIO ROCHA_PAINEL --

//Devolve uma lista com todos as rochas_painel que existem na bd
exports.rocha_painel = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_painel", function (error, rows, fields) {
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

//Devolve as infos das rocha_painel que se identificou através do id_material
exports.rocha_painelPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_painel WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

//Devolve todos as rochas_painel de uma determinada sondagem por id_sondagem
exports.rocha_painelPorSondagem = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_painel WHERE id_sondagem = ?", [req.params.id_sondagem], function (error, rows, fields) {
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

//Devolve todos as rochas_painel de uma determinada ue por id_ue
exports.rocha_painelPorUe = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_painel WHERE id_ue = ?", [req.params.id_ue], function (error, rows, fields) {
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

//Devolve todos as rochas_painel de um determinado sítio por id_sitio
exports.rocha_painelPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_painel WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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

//Devolve todos as rochas_painel de um determinado sítio por id_painel
exports.rocha_painelPorRocha_PainelId = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_painel WHERE id_painel = ?", [req.params.id_sitio], function (error, rows, fields) {
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

//-- FIM ROCHA_PAINEL --

//-- INICIO ROCHA_MOTIVO --

//Devolve uma lista com todos as rochas_motivo que existem na bd
exports.rocha_motivo = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_motivo", function (error, rows, fields) {
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

//Devolve as infos das rocha_motivo que se identificou através do id_material
exports.rocha_motivoPorMateriaisId = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_motivo WHERE id_material = ?", [req.params.id_material], function (error, rows, fields) {
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

exports.rocha_motivoPorPainelId = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_motivo WHERE id_painel = ?", [req.params.id_painel], function (error, rows, fields) {
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

exports.rocha_motivoPorMotivoId = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_motivo WHERE id_motivo = ?", [req.params.id_motivo], function (error, rows, fields) {
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

exports.rocha_motivoPorSitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM rocha_motivo WHERE id_sitio = ?", [req.params.id_sitio], function (error, rows, fields) {
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
//-- FIM ROCHA_MOTIVO --