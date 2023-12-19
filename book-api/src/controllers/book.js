const booksService = require("../service/books")
const getAllBooks = async (req, res) => {
    const books = await booksService.getAllBooks() //read the user data
    if (!books) {
        return res.status(400).json({ message: books });
    }
    res.json(books);
};

const getFilteredBooks = async (req, res) => {
    const searchTerm = req.query.searchTerm
    const books = await booksService.getFilteredBooks(searchTerm) //read the user data
    if (!books) {
        return res.status(400).json({ message: books });
    }
    res.json(books);
};

module.exports = {
    getAllBooks,
    getFilteredBooks
  };