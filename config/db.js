import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

//require('dotenv').config({ path: 'variables.env' });

// Pasandola al servidor

 const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});





// mode de desarrollo podemos utilizar esta antes de pasarlor al servido

/* const db = new Sequelize('agenciaviajes', 'root', '0643075105', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
}); */

export default db;