
const express = require('express');
const router = express.Router();
const favouritesController = require("../controllers/favouriteBooks")
const { checkTokenMiddleware } = require('../middleware/index');
console.log("hello")
router.get('/favourites', checkTokenMiddleware, favouritesController.getFaviourtiesById);
router.patch('/favourite/:id', checkTokenMiddleware, favouritesController.updateFavourites);
router.delete('/favourite/:id', checkTokenMiddleware, favouritesController.removeFavourites);



module.exports = router;
