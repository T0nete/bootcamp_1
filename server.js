const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const { mongoose } = require('mongoose')
dotenv.config()

const app = express()
mongoose.set('strictQuery', true)

connectDB()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/users'))

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}!`)
})
