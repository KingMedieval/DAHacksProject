const express = require("express");
const router = express.Router();
const { MongoClient } = require('mongodb');
const { MONGO_URI } = require("../config.json");

const client = new MongoClient(MONGO_URI);
const dbName = client.db('credTest');
const userCreds = dbName.collection('UserCreds');

router.get("/", async function(req, res, next) {
    await client.connect();

    userID = req.query.id;
    userEmail = req.query.email;
    let idExistance = "false";
    let emailExistance = "false";

    console.log(`userID is ${userID}`);
    idRes = await userCreds.findOne({"userID": userID});
    if(idRes != null){
        idExistance = "true";
    }
    emailRes = await userCreds.findOne({"email": userEmail});
    if(emailRes != null){
        emailExistance = "true";
    }

    res.send(JSON.stringify({
        "idExistance": idExistance,
        "emailExistance": emailExistance
    }));
});


module.exports = router;