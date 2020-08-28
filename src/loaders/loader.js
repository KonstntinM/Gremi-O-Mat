/* This file executes all loaders and starts the application */

async function load() {
  mongooseLoader.connectToDatabase();
  loadNodemailer()
  startAgenda()
}

module.exports = { load };
