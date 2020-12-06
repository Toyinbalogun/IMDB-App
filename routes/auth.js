const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')


// router.get('/', (req, res)=>{
//     res.send("hello world")
//     // res.sendFile(path.join(__dirname, "public/home-page.html"))
// })

//post request for signup route
router.post('/conUser-register', (req, res) => {
    // console.log(req.body)
    const {name, email, password} = req.body
    if(!email || !name || !password){
        res.status(422).json({error:"please add all the required fields"})
    }
    // res.json({message:"successfuly posted"})
    User.findOne({email: email})
    .then((savedUser)=>{
        if(savedUser){
            res.status(422).json({error:"user already exists with that email"})
        }
        //secure our password by hashing it
        bcrypt.hash(password, 12) 
        .then(hashedpassword =>{
            const user = new User({
                email,
                name,
                password: hashedpassword
            })
    
            user.save()
            .then(user=>{
                res.json({message: "saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

//post request for login route
router.post('/login', (req, res) => {
    const {email, password} = req.body
    if (!email || !password){
        res.status(422).json({error: "please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error: "Invalid email or password"})
        }
        //compare password from client to a saved password in the database
        bcrypt.compare(password, savedUser.password)
        .then(isMatch=>{
            if(isMatch){
                res.json({message: "successfully signe in"})
            }
            else{
                return res.status(422).json({error: "Invalid email or password"}) // client entered wrong password
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports = router