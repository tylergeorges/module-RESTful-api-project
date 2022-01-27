const jwt = require('jsonwebtoken')


//generate access token
function generateAccessToken(username){
return jwt.sign(username, process.env.JWT_SECRET)
}

function authenticateToken(req,res,next){
const token = req.get('Authorization')
//from authorization header
//Potential extra step here


if(token === null || token === undefined){
    res.status(403).json({message: "YOU MUST BE LOGGED IN!"})
}

    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err){
            res.status(400).json({message: err.message})
        }
        if(result === false){
            res.status(403).json({message: "YOU MUST BE LOGGED IN!"})
        }
        next()
    })
}

module.exports = {generateAccessToken, authenticateToken}