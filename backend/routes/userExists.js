var express = require("express");
var router = express.Router();
const { MongoClient } = require('mongodb');
const { MONGO_URI } = require("../config.json");
const bcrypt = require("bcrypt");

router.get("/", function(req, res, next) {
    client.connect();

});


module.exports = router;