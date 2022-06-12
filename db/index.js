const Sequelize = require('sequelize');

const sequelize = new Sequelize('rates', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

const Users = require('./Users')(sequelize);
const Rates = require('./rates')(sequelize);
const Currencies = require('./currencies')(sequelize)

sequelize.sync().then(result=>console.log('Everything is fine'))
.catch(err=> console.log(err));


module.exports = {
    sequelize: sequelize,
    User: Users,
    Rates: Rates,
    Currencies: Currencies,

  }