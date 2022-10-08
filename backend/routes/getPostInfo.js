var express = require("express");
var router = express.Router();
const { MongoClient } = require('mongodb');
const { MONGO_URI } = require("../config.json");

const client = new MongoClient(MONGO_URI);

router.get("/", async function(req, res, next) {
    await client.connect;
    const userID = req.query.userid;

    let userInfo = await client.db('credTest').collection('UserCreds').findOne({"userID": userID});
    console.log(userInfo);
    const aggCursor = await client.db('listingdb').collection(`${userID}`).aggregate([{'$sort':{'postTime': -1}},{'$limit':1}]);
    for await (const aggGroup of aggCursor){
        aggRes = aggGroup;
    }

    retResponse = {...userInfo, 'postInfo': { aggRes }};

    res.send(retResponse);
});

module.exports = router;