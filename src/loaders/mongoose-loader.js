const mongoose = require("mongoose");

const config = require("config-yaml")(`${__dirname}/../config/config.yaml`)

async function connectToDatabase() {

  const MongoAuthentication =
    "mongodb+srv://" +
    config.Database[3].USER[0].USERNAME +
    ":" +
    config.Database[3].USER[1].PASSWORD +
    "@" +
    config.Database[1].URL +
    /* ":" +
    config.Database[2].PORT  + */
    "/" +
    config.Database[0].NAME +
    "?retryWrites=true&w=majority";

  await mongoose.connect(MongoAuthentication, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
    .then(res => console.log("\x1b[32m" + "Connection to MongoDB database successfully opend" + "\x1b[0m"))
    .catch( err => console.log("\x1b[41m" + "Oops! There was an error while connection to the MongoDB database. " + err + "\x1b[0m"))

  mongoose.Promise = global.Promise;
}

module.exports = { connectToDatabase };
