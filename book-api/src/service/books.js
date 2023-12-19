const {readFile}  = require("../utils/readFile");
const Fuse = require('fuse.js');

const options = {
    keys: ['title', 'author'],
    threshold: 0.6, 
};

const getAllBooks = async () => {
    const books = await readFile("books.json")
    return JSON.parse(books);
};

const getFilteredBooks = async (searchTerm) => {
    const books = await readFile("books.json")
    if (books && searchTerm) {
        const fuse = new Fuse(JSON.parse(books), options);
        let result = fuse.search(searchTerm);

        if (!!result.length) {
            result = result.map((el) => el.item)
            return result;
        }
        return []
    }
    else {
        return JSON.parse(books)
    }
};


module.exports = { getAllBooks, getFilteredBooks }