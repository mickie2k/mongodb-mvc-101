require('dotenv').config()

const express = require('express')
const router = require('./routes/index')
const connectDB = require('./config/db')

const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()

app.use('/', router)


app.listen(port, async () => {

    console.log(`Example app listening on port ${port}`)


})
      