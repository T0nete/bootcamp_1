const User = require('../model/users')

/**
 * Get all users
 * @param {*} req
 * @param {*} res
 */
const getAllUsers = async (req, res) => {
  const data = await User.find()
  console.log(data)
  res.status(200).json(data)
}

/**
 * Get all users
 * @param {*} req
 * @param {*} res
 */
const getUsersByAge = async (req, res) => {
  const data = await User.find()
  console.log(data)
  res.status(200).json(data)
}

/**
 * Get all users
 * @param {*} req
 * @param {*} res
 */
const updateUsers = async (req, res) => {
  const data = await User.find()
  console.log(data)
  res.status(200).json(data)
}

/**
 * Get all users
 * @param {*} req
 * @param {*} res
 */
const deleteUsers = async (req, res) => {
  const data = await User.find()
  console.log(data)
  res.status(200).json(data)
}

module.exports = { getAllUsers, getUsersByAge, updateUsers, deleteUsers }
