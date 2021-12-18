const Sequelize = require('sequelize');

const CatModel = require('./cats');

const setUpDatabase = () => {
    const connection = new Sequelize("has_eriq_fed_the_cat", "root", "password", {
        host: "localhost",
        port: 3307,
        dialect: "mysql"
    });

    const Cat = CatModel(connection, Sequelize);

    connection.sync({alter: true});

    return { Cat };

}


module.exports = setUpDatabase();