// userController.js
const userService = require('../service/auth');
const jwt = require('jsonwebtoken');
const middleware = require('../middleware/index');
const { readFile } = require('../utils/readFile');

const registerUser = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'please enter username and password' });
  }

  const result = await userService.registerUser(req.body.username, req.body.password);

  if (result.error) {
    return res.status(400).json({ message: result.error });
  }

  res.status(201).json(result);
};

const loginUser = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'enter the correct username and password' });
  }

  const result = await userService.loginUser(req.body.username, req.body.password);

  if (result.error) {
    return res.status(400).json({ message: result.error });
  }

  res.json(result);
};

const getMe = async(req, res) => {
  let users= await readFile("user.json");
  users = JSON.parse(users);
  const {fav} = users.find(el => el.id === req.userId)
  res.status(200).json(fav);

};

const notFound = (req, res) => {
  res.status(404).json({ message: 'page not found' });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  notFound,
};
