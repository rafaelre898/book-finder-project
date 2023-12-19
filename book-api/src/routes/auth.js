
const express = require('express');
const router = express.Router();
const userController = require('../controllers/auth'); // Update the import statement
const {checkTokenMiddleware} = require('../middleware/index');

router.get('/me',checkTokenMiddleware, userController.getMe);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;
