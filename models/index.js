
"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const env = "MySQL";
const config = require(path.join(__dirname, '../', 'config', 'config.json')) [env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const bd = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
      const model = sequelize.import(path.join(__dirname, file));
      bd[model.name] = model;
  });
  
  
Object.keys(bd).forEach(function(modelName) {
    if ("associate" in bd[modelName]) {
        bd[modelName].associate(bd);
    }
});

bd.Sequelize = Sequelize;
bd.sequelize = sequelize;
module.exports = bd;