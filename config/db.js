const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = process.env.MONGOURI

async function connectDB(){
    try {
        await mongoose.connect(mongoURI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('Error:', error)
    }
}

module.exports = connectDB