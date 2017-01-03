console.log("routes.js");

var express = require('express');
var router = express.Router();

var homeController = require('../controllers/homeController.js');

router.route('/', homeController)
	.get(homeController.getAll);

module.exports = router;