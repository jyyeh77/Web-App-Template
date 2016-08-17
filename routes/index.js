var express = require("express");
var router = express.Router();
var models = require("../models");
var path = require("path");
var Promise = require('bluebird');

router.get('/', function(req, res) {
	res.render("index", {});
})

module.exports = router;