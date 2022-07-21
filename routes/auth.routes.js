const {Router} = require('express');
const bcrypt = require('bcryptjs');
const router = Router();
const config = require("config");
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
// const { user } = require('../app');
const {User} = require('../db/index')
const Sequelize = require('sequelize');

router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'min 6').isLength({min: 6})
    ],
     async (req, res) => {
    try{
        console.log("Body:", req.body)

        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array(),
            message: 'incorrect registration'
        })
        }
        
        const {name, login, password, email} = req.body

        console.log(User)


        const candidate = await User.findOne({where: {Email: email}}) //Херня с регистром 'w'
        console.log(candidate)
        
        if (candidate) {
            return res.status(400).json({message:'The User is already exist'})
        }

        const hasedPassword = await bcrypt.hash(password, 12)

        await User.create({
            // name: name,
            // Login: login,
            Email: email,
            Password: hasedPassword,    
        });

        res.status(201).json({message: "User has been created"})


    } catch (e) {
        res.status(500).json({message: 'Something went wrong -_-'})
    }
});



router.post(
    '/login',
    [
        check('email', 'write awailable email').normalizeEmail().isEmail(),
        check('password', 'The password is not correct').exists()
    ],
 async (req, res) => {
    try{
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array(),
            message: 'incorrect authorization'
        })
        }
        
        const {email, password} = req.body

        const user = await User.findOne({where: {Email: email}}) //Хуета с регистром бугвы w в where
        console.log(user)


        // console.log(user.dataValues.Password)
        // console.log(password)
        

        if(!user) {
            return res.status(400).json({message: 'There are no such user'})
        }

        const isMatch = await bcrypt.compare(password, user.dataValues.Password)

        // console.log(isMatch)


        if(!isMatch) {
            return res.status(400).json({message: 'The password is not correct'})
        }

        const token = jwt.sign(
            {userId: user.dataValues.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )


        res.json({token, userId: user.dataValues.id})
       

    } catch (e) {
        res.status(500).json({message: 'Something went wrong'})
    }
});



module.exports = router