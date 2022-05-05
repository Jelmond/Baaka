const Sequelize = require('sequelize')

module.exports = function(sequelize) {
    return sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        // name: {
        //     type: Sequelize.TEXT,
        //     allowNull: false,
        // },
        // Login: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        Email: {                      
            type: Sequelize.STRING,
            allowNull: false,
        },
        Password: {                    //Pass_hash
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {timestamps: false});
}


