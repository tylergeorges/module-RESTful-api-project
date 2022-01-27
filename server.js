const express = require('express')
const port = 4242
const app = express()
const dotenv = require('dotenv')
const mongoConnect = require('./config')
const bodyParser = require('body-parser')
const helmet = require('helmet')

dotenv.config()
app.use(bodyParser.json())
app.use(helmet())

const userRouter = require('./routes/userRoute')
const blogRouter = require('./routes/blogsRoute')

app.use('/auth', userRouter)
app.use('/blogs', blogRouter)

app.listen(port, ()=>{
    mongoConnect()
    console.log("Listening!")
})