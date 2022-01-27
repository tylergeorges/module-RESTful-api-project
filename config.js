// step one require mongood
const mongoose = require('mongoose')
//step two make function
async function main(){
    
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
    })
    //lets us know that our mongoDB is connected to the app
    //step four -> log connection sucessful
    await mongoose.connection.once('open', ()=>{
        console.log("Connected")
    })
}



//step five export connection  
module.exports = main