const favouriteService = require("../service/favouriteBooks")

const getFaviourtiesById = async (req, res) => {
    const userId = req.userId 
    const favourite = await favouriteService.getFaviourtiesById(userId)
    res.json(favourite);
};

const updateFavourites = async (req, res) => {
    const id = req.params.id
    const userId = req.userId 
    const favourite = await favouriteService.updateFavourites(id, userId)
    res.json(favourite);
};

const removeFavourites = async (req, res) => {
    const id = req.params.id
    const userId = req.userId 
    const favourite = await favouriteService.removeFavourites(id, userId)
    res.json(favourite);
};

removeFavourites
module.exports = {
    getFaviourtiesById,
    updateFavourites,
    removeFavourites
  };