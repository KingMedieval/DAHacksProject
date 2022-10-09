var express = require("express");
var router = express.Router();
const { MongoClient } = require('mongodb');
const { MONGO_URI } = require("../config.json");


const client = new MongoClient(MONGO_URI);

router.get("/", async function(req, res, next) {

    await client.connect;
    console.log("connected");
    const userID = req.query.userid;
    const userInputPass = req.query.userid;

    let userInfo = await client.db('credTest').collection('UserCreds').findOne({"userID": userID});
    let hash = userInfo.hashedPass;
    bcrypt.compare(userInputPass, hash, function(err, result) {
        responseResult = JSON.stringify({"result": result});
    });

    console.log(responseResult);
    res.send(responseResult);
});

module.exports = router;