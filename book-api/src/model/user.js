// userModel.js
const {readFile} = require("../utils/readFile")
const users = [
    { id: 1, username: 'admin', password: 'password123', fav:[] }
  ];
  
  const addUser = (newUser) => {
    const id = users[users.length - 1].id + 1;
    newUser.id = id;
    users.push(newUser);
    return newUser;
  };
  
  const findUserByCredentials = async (username, password) => {
    const usersData = await readFile("user.json") //read the user data
    return JSON.parse(usersData).find(u => u.username === username && u.password === password);
  };
  
  module.exports = { addUser, findUserByCredentials };
  