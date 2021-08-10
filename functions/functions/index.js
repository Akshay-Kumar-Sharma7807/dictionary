const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello API");
});

app.get("/hello-cached", (req, res) => {
  res.set("Cache-Control", "public, max-age=3000, s-maxage=6000000");
  res.send("Hello API");
});

exports.app = functions.https.onRequest(app);
