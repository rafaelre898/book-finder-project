// userService.js
const userModel = require('../model/user');
const jwt = require('jsonwebtoken');
const readFile = require("../utils/readFile")
const SECRET = processe.env.SECRET;

const registerUser = async (username, password) => {
  const userExisting = await userModel.findUserByCredentials(username, password);

  if (userExisting) {
    return { error: `user ${username} already exists` };
  }

  const newUser = userModel.addUser({ username, password });
  return { message: `user ${newUser.id} created`, content: newUser };
};

const loginUser = async (username, password) => {
  try {
    const user = await userModel.findUserByCredentials(username, password);

    if (!user) {
      return { error: 'wrong login or password' };
    }

    const token = jwt.sign({
      sub: user.id,
      username: user.username,
      id: user.id
    }, SECRET, { expiresIn: '3 hours' });

    return { access_token: token };
  } catch (error) {
    console.error('Error during login:', error);
    return { error: 'An error occurred during login' };
  }
};


module.exports = { registerUser, loginUser };
