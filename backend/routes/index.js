var express = require('express');
var router = express.Router();
const { MONGO_URI } = require("../config.json");
const { MongoClient } = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
