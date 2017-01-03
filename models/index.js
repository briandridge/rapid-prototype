console.log("models/index.js");

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rapidprototype");

module.exports.Square = require('./Square');