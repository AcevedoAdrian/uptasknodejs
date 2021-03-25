const { Sequelize } = require('sequelize');

const db = new Sequelize('uptasknode', 'root', 'rootroot', {
    host: 'localhost',
    port:3306,
    // definimos que tipo de bd vamos a utilizar
    dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    define:{
        timestamps:false,
    }
});

module.exports = db;