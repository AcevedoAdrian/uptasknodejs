const { Sequelize } = require('sequelize');

// const db = new Sequelize('uptasknode', 'root', 'rootroot', {
//     host: '127.0.0.1',
//     port:3306,
//     // definimos que tipo de bd vamos a utilizar
//     dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//     define:{
//         timestamps:false,
//     }
// });


// ------CONEXION A LA BASE DE DATOS DE LA LEGISLATURA

const ipDB = '10.12.9.46';
const db = new Sequelize('uptasknode', 'guille', '123456', {
    host:ipDB,
    port:1433,
    // definimos que tipo de bd vamos a utilizar
    // dialect: 'mssql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    dialect: "mssql",
    dialectOptions: {
        // Aca adentro van las opciones de tedious
        options: {
            // encrypt: false,
            // enableArithAbort: true,
            useUTC: false,
            dateFirst: 1,
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;