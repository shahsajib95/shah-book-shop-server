const express = require('express')

const {getBooks} = require('../controllers/books/booksController')

const router = express.Router()

router.get('/getBooks', getBooks)

module.exports = router;