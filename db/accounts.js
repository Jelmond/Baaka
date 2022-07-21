const Sequelize = require('sequelize')

module.exports = function(sequelize) {
    return sequelize.define('accounts', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        id_Users: {                      
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        phone_number: {              
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        id_Currencies: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }, {timestamps: false});
}

