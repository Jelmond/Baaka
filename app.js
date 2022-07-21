// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('rates', 'root', '', {
//     dialect: 'mysql',
//     host: 'localhost',
// });

// const Users = require('./users')(sequelize);
const {sequelize} = require('./db/index')
const {User} = require('./db/index')




const express = require('express')
const config = require('config')


const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api', require('./euroReader'))
app.use('/api', require('./routes/accounts.routes'))

// app.use('/api', require('./euroReader'))



const PORT = config.get('port') || 5000


async function start() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(5000, () => console.log(`App has been started on port ${PORT}`))
      } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        process.exit(1)
      }
};  




start()

// module.exports = {
//   sequelize: sequelize,
//   users: Users
// }