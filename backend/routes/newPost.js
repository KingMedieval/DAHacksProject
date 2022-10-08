var express = require("express");
var router = express.Router();
const { MONGO_URI } = require("../config.json");
const { MongoClient } = require('mongodb');

//initialize mongoclient
const client = new MongoClient(MONGO_URI);
const dbName = client.db('listingdb');

router.post("/", async function(req, res, next) {
    await client.connect();
    postBody = req.body;
    var date = new Date();
    date.toISOString();
    const userdb = dbName.collection(`${req.body.userID}`);
    console.log(postBody);
    userdb.insertOne({...postBody, "postTime": date});
});

module.exports = router;