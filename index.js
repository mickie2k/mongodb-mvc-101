require('dotenv').config()

const fs = require('fs');
const join = require('path').join;
const express = require('express')

const models = join(__dirname, '/models');

fs.readdirSync(models)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(models, file)));




const router = require('./routes/index')
const connectDB = require('./config/db')

const app = express()
const port = 3000

  connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)


app.listen(port, async () => {

    console.log(`Example app listening on port ${port}`)


})
      