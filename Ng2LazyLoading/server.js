"use strict";
var http = require("http");
var path = require('path');
var express = require("express");
var app = express();
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/')));
var port = process.env.port || 1338;
http.createServer(app).listen(port);
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
//# sourceMappingURL=server.js.map