var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const makeConnection = require("./database/connection");

var projectRouter = require("./routes/project");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

makeConnection().then(function (conn) {
    // app.use("/project", projectRouter({ connection: conn }));
    global["connection"] = conn;
    app.use("/project", projectRouter);
});

module.exports = app;
