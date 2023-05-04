const mongoose = require('mongoose')

// const url = 'mongodb://db:27017/' // Docker
const url = 'mongodb://localhost:27017/' // Local

const connectDB = () => {
  mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connection succesfully established with Mongo'))
}

module.exports = connectDB
