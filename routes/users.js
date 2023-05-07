const express = require('express')
const { getAllUsers, getUsersByGender, createUser, updateUser, deleteUsers } = require('../controllers/users')

const router = express.Router()

// Get all users
router.get('/users', getAllUsers)

// Generate mock data
router.post('/generateData', createUser)

// Update users
router.put('/users', updateUser)

// Get all users from a country of a specific gender
router.get('/users/byGenderAndCountry/:gender/country/:country', getUsersByGender)

// Delete users
router.delete('/users/byGenderAndCountry/:gender/country/:country', deleteUsers)

module.exports = router
