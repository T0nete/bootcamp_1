const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  gender: { type: String },
  country: { type: String }
})

module.exports = mongoose.model('User', userSchema)
