var express = require("express");
var router = express.Router();
const { MongoClient } = require('mongodb');
const { MONGO_URI } = require("../config.json");

const client = new MongoClient(MONGO_URI);

router.get("/", async function(req, res, next) {

    await client.connect;
    console.log("connected");
    const userID = req.query.userid;

    let userInfo = await client.db('credTest').collection('UserCreds').findOne({"userID": 'testUser'});

    console.log(userInfo);
    const aggCursor = await client.db('listingdb').collection(`testUser`).aggregate([{'$sort':{'postTime': -1}},{'$limit':1}]);
    console.log("here");
    for await (const aggGroup of aggCursor){
        aggRes = aggGroup;

    }

    let retResponse = {...userInfo, 'postInfo': { aggRes }};
    console.log(retResponse);
    res.send(retResponse);
});

module.exports = router;