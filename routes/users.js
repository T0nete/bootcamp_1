const express = require('express')
const { getAllUsers, getUsersByAge, updateUsers, deleteUsers } = require('../controllers/users')

const router = express.Router()

router.get('/', getAllUsers)

router.get('/:minAge/:maxAge', getUsersByAge)

router.post('/signup', updateUsers)

router.delete('/:gender/:minAge/:maxAge', deleteUsers)

module.exports = router
