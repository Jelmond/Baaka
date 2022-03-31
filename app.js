import { sequelize } from './db/connection'

const express = require('express')
const config = require('config')


const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))



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