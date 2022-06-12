const Sequelize = require('sequelize')

module.exports = function(sequelize) {
    return sequelize.define('currencies', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        Currency_key: {                      
            type: Sequelize.STRING,
            allowNull: false,
        },
        Currency_name: {              
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {timestamps: false});
}


