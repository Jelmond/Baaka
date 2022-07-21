const {Router} = require('express');
const router = Router();
const {User, Currencies} = require('../db/index');
const {Accounts} = require('../db/index');
const Sequelize = require('sequelize');

router.post(
    "./accounts",
    async (req, res) => {
        try{
            const {Cur_name, IBAN_acc_number, } = req.body

            const Currency_id = await Currencies.findOne({where: {Currency_name: Cur_name}})

            const Users_id = await User.findOne({where: {Email: email}})

            await Accounts.create({
                id_Users: Users_id.dataValues.id,
                IBAN_accounts_number: IBAN_acc_number && null,
                id_Currencies: Currency_id.dataValues.id,
            })

            res.json({userId: Users_id.dataValues.id,})
            
        } catch(e) {
            res.status(500).json({message: 'Something went wrong -_-'})
        }
    }
)

router.post(
    "/accounts/EUR",
    async (req, res) => {
        try {
            console.log('EUR')

            res.status(201).json({message: "EUR"})


        } catch (e) {
            res.status(500).json({message: 'Something went wrong -_-'})
        }
    }
)

router.post(
    "/accounts/RUB",
    async (req, res) => {
        try {
            console.log('RUB')

            res.status(201).json({message: "RUB"})


        } catch (e) {
            res.status(500).json({message: "Something went wrong -_-"})
        }
    }
)

router.post(
    "/accounts/USD",
    async (req, res) => {
        try {
            console.log('USD')

            res.status(201).json({message: "USD"})


        } catch (e) {
            res.status(500).json({message: 'Something went wrong -_-'})
        }
    }
)


//res.status(201).json({message: "User has been created"})  -- Пример обратного сообщения

module.exports = router