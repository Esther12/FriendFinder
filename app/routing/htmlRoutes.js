var path = require("path");
var express = require("express");
var app = express.Router();


    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
      app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
      
      module.exports = app;