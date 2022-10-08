var express = require("express");
var router = express.Router();
const { MONGO_URI } = require("../config.json");
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');

const client = new MongoClient(MONGO_URI);
const dbName = client.db('credTest');
const userCreds = dbName.collection('UserCreds');

router.post("/", function(req, res, next) {
    client.connect();
    console.log(req.body);
    userCreds.insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send('"SUCESS"');
    })
});

module.exports = router;