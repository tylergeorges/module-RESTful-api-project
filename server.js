const express = require('express')
const port = process.env.PORT || 4242
const app = express()
const dotenv = require('dotenv')
const mongoConnect = require('./config')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const swagger = require('swagger-ui-express')
const swaggers = require('./docs/swagger')

dotenv.config()
app.use(bodyParser.json())
app.use(helmet())

const userRouter = require('./routes/userRoute')
const blogRouter = require('./routes/blogsRoute')

app.use('/auth', userRouter)
app.use('/blogs', blogRouter)
app.use('/swagger', swagger.serve, swagger.setup(swaggers))


app.listen(port, ()=>{
    mongoConnect()
    console.log("Listening!")
})