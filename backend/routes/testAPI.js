var express = require("express");
const {MongoClient} = require("mongodb");
const {MONGO_URI} = require("../config.json");
var router = express.Router();

const client = new MongoClient(MONGO_URI);
const dbName = client.db('credTest');
const userCreds = dbName.collection('UserCreds');

router.get("/", function(req, res, next) {
    res.send("api works");
});

module.exports = router;