const express = require("express")
const router = express.Router()
const bycrypt = require('bcryptjs')
//user model
const User = require('../models/User')

//login
router.get('/login', (req, res) =>{
    res.render('login')
})

//register
router.get('/register', (req, res)=>{
    res.render('register')
})
router.post('/register', (req, res)=>{
    console.log(req.body)
    const { fname, sname, email, pass, cpass } = req.body
    let errors = []

    //check required fields
    if(!fname || !sname || !email || !pass){
        errors.push({ msg:'please fill all fields' })
    }
    //check passwords match
    if(pass !== cpass){
        errors.push({ msg:'passwords do not match' })
    }else{
        //validation pass
        User.findOne({ email:email })
        .then(user =>{
            if(user){
                //user exists
                res.render('register')
            } else{
                const newUser = new User({
                    email,
                    pass
                })
                console.log(newUser)
                res.render('login')
            }
        })
    }
})
module.exports = router