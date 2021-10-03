const express = require('express')

const {addBooks, deleteBook} = require('../controllers/admin/adminController')
const { requirePath } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/addBooks', addBooks)
router.delete('/deleteBook/:id', requirePath, deleteBook)

module.exports = router;