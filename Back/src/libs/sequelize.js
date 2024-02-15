const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../models');


const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'postgres',
        logging: false, // set to console.log to see the raw SQL queries
    }
)

setupModels(sequelize)

module.exports = sequelize
