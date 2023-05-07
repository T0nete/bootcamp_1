const User = require('../model/users')
const fs = require('fs')
/**
 * Get all users
 * @param {*} req
 * @param {*} res
 */
const getAllUsers = async (req, res) => {
  console.log('getAllUsers')
  const users = await User.find()
  console.log(users)
  res.status(200).json(users)
}

/**
 * Get all users
 * @param {*} req
 * @param {*} res
 */
const getUsersByGender = async (req, res) => {
  console.log('getUsersByGender')
  const { gender, country } = req.params

  const data = await User.find({ gender, country })
  console.log(data)
  res.status(200).json(data)
}

/**
 * Get all users
 * @param {*} req
 * @param {*} res
 */
const deleteUsers = async (req, res) => {
  console.log('deleteUsers')
  const { gender, country } = req.params

  try {
    const result = await User.deleteMany({ gender, country })
    console.log(result)
    if (result.deletedCount === 0) {
      res.status(204).send()
    } else {
      res.status(200).send('Document(s) deleted successfully')
    }
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal Server Error')
  }
}

const createUser = async (req, res) => {
  // const { body } = req
  // const { id, firstName, lastName, email, gender, country } = body
  // console.log(body)
  try {
    // const newUser = new User({
    //   id,
    //   first_name: firstName,
    //   last_name: lastName,
    //   email,
    //   gender,
    //   country
    // })
    const data = fs.readFileSync('mock/users.json')
    const users = JSON.parse(data)
    User.insertMany(users, (err, result) => { 
      if (err) console.error(err)
    })
    res.status(201).json('Users created successfully')
  } catch (error) {
    res.status(400).json(error.message)
    console.log('Can not register the user')
  }
}

/**
 * Update user data
 * @param {*} req id
 * @param {*} res
 */
const updateUser = async (req, res) => {
  console.log('updateCountry')
  const { id, firstName, lastName, email, gender, country } = req.body
  console.log(req.body)

  const user = await User.findOne({ id })
  console.log(user)
  const code = user ? 200 : 201
  console.log(code)

  User.findOneAndUpdate(
    { id },
    {
      $set:
        { first_name: firstName, last_name: lastName, email, gender, country }
    },
    { new: true, upsert: true },
    (err, result) => {
      if (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
      } else if (result) {
        if (code === 201) {
          res.status(201).send('User created successfully')
        } else {
          res.status(200).send('User updated successfully')
        }
      } else {
        res.status(404).send('User not found')
      }
    }
  )
}

module.exports = { getAllUsers, getUsersByGender, updateUser, deleteUsers, createUser }
