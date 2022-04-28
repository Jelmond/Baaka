const {Router} = require('express');
const bcrypt = require('bcryptjs');
const router = Router();
const config = require("config")
const jwt = require('jsonwebtoken') 
const {check, validationResult} = require('express-validator')
// const User = require('./users'); //правильный путь


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

        const candidate = await User.findOne({login: login})
        
        if (candidate) {
            res.status(400).json({message:'The User is already exist'})
        }

        const hasedPassword = await bcrypt.hash(password, 12)

        await User.create({
            name: name,
            login: login,
            email: email,
            password_hash: hasedPassword,
        });

        res.status(201).json({message: "User has been created"})


    } catch (e) {
        res.status(500).json({message: 'Something went wrong'})
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

        const user = await User.findOne({email})

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