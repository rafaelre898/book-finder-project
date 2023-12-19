const {readFile} = require("../utils/readFile")
const {writeFile} = require("../utils/updateFile")

const getFaviourtiesById = async (userId) => {
    // get all books
    // get fav 
    let books = await readFile("books.json");
    let users = await readFile("user.json");
    books = JSON.parse(books);
    users = JSON.parse(users)
    const {fav} = users.find(el => el.id === userId);
    const favBooks = fav.map((el) => books.find(book => book.id === el))

    return {favBooks}
};

const updateFavourites = async (bookId, userId) => {
    let books = await readFile("books.json");
    let users = await readFile("user.json");
    books = JSON.parse(books);
    users = JSON.parse(users);
    users = users.map(el => el.id === userId ? {...el, fav: [...el.fav, parseInt(bookId)]}: el)
    await writeFile("user.json",JSON.stringify(users))
    return {fav: users}
};

const removeFavourites = async (bookId, userId) => {
    let books = await readFile("books.json");
    let users = await readFile("user.json");
    books = JSON.parse(books);
    users = JSON.parse(users);
    users = users.map(el => el.id === userId ? {...el, fav: el.fav.filter((favBook) => favBook != bookId)}: el)
    await writeFile("user.json",JSON.stringify(users))
    return {fav: users}
};

module.exports = {
    getFaviourtiesById,
    updateFavourites,
    removeFavourites
  };