const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const uri = `mongodb://mongodb:27017/hotmart`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

module.exports = mongoose.connection;
