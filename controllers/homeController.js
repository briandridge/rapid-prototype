console.log("homeController.js");

var db = require('../models');

// GET ALL
function getAll(request, response) {
  db.Square.find(function(error, cards) {
    if(error) response.json({message: 'Could not find a card'});
    response.json(cards);
    console.log(cards);
    console.log("getAll in homeController.js");
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
};