const express = require('express')
const userRouter = express.Router()
const User = require('../schemas/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('../middleware/jwt')

userRouter.get('/', (req,res)=>{
    res.status(200).json({message: "Login or create an account!"})
})
userRouter.get('/register', async (req,res)=>{
    res.status(200).json({message: "Register with  { username: , password: , email: , birthday: ,  age: } "})
})

userRouter.post('/register', async (req,res)=>{
    let user = req.body
    let password = req.body.password
    let salt = Number(process.env.SALT)

    let hashedPassword = await bcrypt.hash(password, salt)

    user.password = hashedPassword



    User.create(user, (error, newUser)=>{
        if(error){
            res.status(404).json({message: error.message})
        }
        
        let token = jwt.generateAccessToken(newUser.username, process.env.JWT_SECRET)
        res.setHeader('Authorization', token)
        res.status(200).json({user: newUser})
    })


})

userRouter.post('/login', (req,res)=>{
    let username = req.body.username
    let password = req.body.password
    

    if(!password || !username){
        res.status(400).json({message: "Please have a username and password"})
    }
     User.findOne({username: username}, (err, retUser)=>{
        if(err){
            res.status(404).json({message: err.message})
        }

        bcrypt.compare(password, retUser.password, (error, result)=>{
            if(error){
                res.status(400).json({message: error.message})
            }
    
            if(result === false){
                res.status(403).json({message: "Username or password is invalid."})
            }
            let token = jwt.generateAccessToken(retUser.username, process.env.JWT_SECRET)
            res.setHeader('Authorization', token)
            res.status(200).json({message: `Welcome ${retUser.username}!`})
        })
    
    })
})

module.exports = userRouter