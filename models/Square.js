var mongoose = require('mongoose');

var SquareSchema = mongoose.Schema({
	question: String,
  	answer: String,
});

module.exports = mongoose.model('Square', SquareSchema);