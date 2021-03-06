const express = require("express");
var app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const config = require("config-yaml")(`${__dirname}/config/config.yaml`)

const allowCrossOrigin = require("./services/allowCrossOrigin");
const loader = require("./loaders/loader");

loader.load()

app.use(express.json())
app.use(bodyParser.raw({type: 'application/json'}));
app.use(cookieParser())

app.use(allowCrossOrigin);

app.get("/", function(req, res) {
  res.json("Hello World from Express!");
});

const port = config.Server[0].PORT || 80
app.listen(port, () => {
  console.log("\x1b[32m" + "The backend server started successfully and listens to port " + "\x1b[33m" + port + "\x1b[32m" + "." + "\x1b[0m")
});