/* This file executes all loaders and starts the application */

const mongooseLoader = require("./mongoose-loader");

async function load() {
  mongooseLoader.connectToDatabase()
}

module.exports = { load };
