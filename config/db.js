const mongoose = require('mongoose')

const url = 'mongodb://mongo:27017/bootcamp_mongo'

const connectDB = () => {
  mongoose.connect(url, () =>
    console.log('Connected to DB'))
}

module.exports = connectDB
