const express = require("express");
const cors = require("cors");

const server = express();
server.use(express.json())
server.use(cors());
server.use(followYourHeart);

function followYourHeart(req, res, next) {
    console.log(`${req.method}`, "follow your heart")
    next();
}


module.exports = server;