const {Router} = require('express');
const bcrypt = require('bcryptjs');
const router = Router();
const config = require("config");
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
// const { user } = require('../app');
const {User} = require('../db/index')
const Sequelize = require('sequelize')

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

        const candidate = await User.findOne({Where: {Email: email}}) 
        
        if (candidate) {
            res.status(400).json({message:'The User is already exist'})
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
        res.status(500).json({message: 'Something went wrong -_-' + e.message})
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

        const user = await User.findOne({Email: email})

        if(!user) {
            return res.status(400).json({message: 'There are no such user'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({message: 'The password is not correct'})
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})
       

    } catch (e) {
        res.status(500).json({message: 'Something went wrong'})
    }
});

module.exports = router