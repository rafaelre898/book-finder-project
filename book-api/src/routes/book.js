
const express = require('express');
const router = express.Router();
const booksController = require("../controllers/book")
const { checkTokenMiddleware } = require('../middleware/index');
router.get('/books', checkTokenMiddleware, booksController.getAllBooks);
router.get('/searchBooks', checkTokenMiddleware, booksController.getFilteredBooks);

module.exports = router;
