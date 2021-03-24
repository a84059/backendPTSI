const connect = require('../config/database');
const jsonMessagesPath = __dirname + '/../assets/jsonMessages/';
const jsonMessages = require(jsonMessagesPath + 'bd')


var exports = module.exports = {};




//sitio
exports.sitio = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio", function(error, rows, fields){
        console.log(query.sql);
    if (error) {
            console.log(error);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            }
            else {
                if(rows.length == 0){              
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);  
                }
                else{
                res.send(rows);
                }
            }
    })

}


//sitioId
exports.sitioId = function (req, res) {
    const query = connect.con.query("SELECT * FROM sitio WHERE id_sitio = ?",  [req.params.id_sitio], function(error, rows, fields){
         console.log(query.sql);
     if (error) {
             console.log(error);
             res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
             }
             else {
                 if(rows.length == 0){              
                 res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);  
                 }
                 else{
                 res.send(rows);
                 }
             }
     })

 }


 //sitioHidrografia
 exports.sitioHidrografia = function (req, res) {
    const query =  connect.con.query("SELECT * FROM sitio_hidrografia WHERE id_sitio = ?",  [req.params.id_sitio], function(error, rows, fields){
         console.log(query.sql);
     if (error) {
             console.log(error);
             res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
             }
             else {
                 if(rows.length == 0){              
                 res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);  
                 }
                 else{
                 res.send(rows);
                 }
             }
     })

 }