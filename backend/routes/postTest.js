var express = require("express");
var router = express.Router();
const { MONGO_URI } = require("../config.json");
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');

const client = new MongoClient(MONGO_URI);
const dbName = client.db('credTest');
const userCreds = dbName.collection('UserCreds');

router.post("/", async function(req, res, next) {
    client.connect();

    postBody = req.body;

    const saltRounds = 10; //higher number of rounds, stronger the hash

    //generates salt with the cost being saltRounds, outputs to variable name salt
    await bcrypt.genSalt(saltRounds, function(saltError, salt) {
        //generates the hash from the salt generated above
        bcrypt.hash(postBody.password, salt, function(hashError, hash){
            console.log(hash);
            console.log(postBody);
            userCreds.insertOne({...postBody, hashedPass: hash}, (err, data) => {
                if(err) return console.log(err);
            })
        });
    });
});

module.exports = router;