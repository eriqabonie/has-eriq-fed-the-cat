const Sequelize = require('sequelize');
const CatModel = require('./cats');

const { CLEARDB_DATABASE_URL } = process.env;

const setUpDatabase = () => {

    const connection = CLEARDB_DATABASE_URL ?
    new Sequelize(CLEARDB_DATABASE_URL) :
    new Sequelize("has_eriq_fed_the_cat", "root", "password", {
        host: "localhost",
        port: 3307,
        dialect: "mysql"
    });

    const Cat = CatModel(connection, Sequelize);

    connection.sync({alter: true});

    return { Cat };

}


module.exports = setUpDatabase();