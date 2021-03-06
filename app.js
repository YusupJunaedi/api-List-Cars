const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require("morgan");
require('dotenv/config')
const app = express()

const postRouter = require('./src/routes/car')
const motorRouter = require('./src/routes/motor')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors())

app.use('/car', postRouter)
app.use('/motor', motorRouter)


mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connect to DB!')
})

app.listen(8000)