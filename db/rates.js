const Sequelize = require('sequelize')

module.exports = function(sequelize) {
    return sequelize.define('rates', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        id_Currencies: {                      
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        Time: {                    //Pass_hash
            type: Sequelize.DATE,
            allowNull: false,
        },
        Banks_rate: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {timestamps: false});
}


